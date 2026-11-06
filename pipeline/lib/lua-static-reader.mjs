const KEYWORDS = new Set([
  'and', 'break', 'do', 'else', 'elseif', 'end', 'false', 'for', 'function',
  'if', 'in', 'local', 'nil', 'not', 'or', 'repeat', 'return', 'then',
  'true', 'until', 'while'
]);

export class LuaStaticError extends Error {
  constructor(code, message, token, filename = '<lua>') {
    super(`${filename}:${token?.line ?? 1}:${token?.column ?? 1}: ${code}: ${message}`);
    this.name = 'LuaStaticError';
    this.code = code;
    this.filename = filename;
    this.line = token?.line ?? 1;
    this.column = token?.column ?? 1;
    this.offset = token?.start ?? 0;
  }
}

function positionAt(source, offset) {
  let line = 1;
  let lineStart = 0;
  for (let index = 0; index < offset; index += 1) {
    if (source[index] === '\n') {
      line += 1;
      lineStart = index + 1;
    }
  }
  return { line, column: offset - lineStart + 1 };
}

function longBracketAt(source, offset) {
  if (source[offset] !== '[') return null;
  const match = /^\[(=*)\[/u.exec(source.slice(offset));
  if (!match) return null;
  const close = `]${match[1]}]`;
  const bodyStart = offset + match[0].length;
  const closeAt = source.indexOf(close, bodyStart);
  return {
    bodyStart,
    end: closeAt < 0 ? -1 : closeAt + close.length,
    value: closeAt < 0 ? null : source.slice(bodyStart, closeAt)
  };
}

function decodeQuotedString(raw) {
  const body = raw.slice(1, -1);
  let value = '';
  for (let index = 0; index < body.length; index += 1) {
    const character = body[index];
    if (character !== '\\') {
      value += character;
      continue;
    }
    const escaped = body[index + 1];
    index += 1;
    const simple = {
      a: '\x07', b: '\b', f: '\f', n: '\n', r: '\r', t: '\t',
      v: '\v', '\\': '\\', '"': '"', "'": "'"
    };
    if (Object.hasOwn(simple, escaped)) {
      value += simple[escaped];
    } else if (escaped === 'x') {
      const hex = body.slice(index + 1, index + 3);
      if (!/^[0-9a-f]{2}$/iu.test(hex)) throw new Error(`Invalid Lua hex escape: ${raw}`);
      value += String.fromCodePoint(Number.parseInt(hex, 16));
      index += 2;
    } else if (/\d/u.test(escaped ?? '')) {
      const decimal = `${escaped}${body.slice(index + 1).match(/^\d{0,2}/u)?.[0] ?? ''}`;
      value += String.fromCodePoint(Number.parseInt(decimal, 10));
      index += decimal.length - 1;
    } else if (escaped === '\n') {
      value += '\n';
    } else {
      value += escaped ?? '';
    }
  }
  return value;
}

export function tokenizeLua(source, { filename = '<lua>' } = {}) {
  const tokens = [];
  let offset = 0;
  let line = 1;
  let column = 1;

  const advance = (end) => {
    const raw = source.slice(offset, end);
    const lines = raw.split('\n');
    if (lines.length > 1) {
      line += lines.length - 1;
      column = lines.at(-1).length + 1;
    } else {
      column += raw.length;
    }
    offset = end;
  };
  const push = (type, value, end) => {
    const start = offset;
    const startLine = line;
    const startColumn = column;
    advance(end);
    tokens.push({
      type, value, raw: source.slice(start, end), start, end,
      line: startLine, column: startColumn, endLine: line
    });
  };

  while (offset < source.length) {
    if (/\s/u.test(source[offset])) {
      advance(offset + 1);
      continue;
    }
    if (source.startsWith('--', offset)) {
      const long = longBracketAt(source, offset + 2);
      if (long) {
        if (long.end < 0) {
          const token = { start: offset, line, column };
          throw new LuaStaticError('UNTERMINATED_LONG_COMMENT', 'Long comment has no closing delimiter', token, filename);
        }
        advance(long.end);
      } else {
        const newline = source.indexOf('\n', offset + 2);
        advance(newline < 0 ? source.length : newline);
      }
      continue;
    }
    const long = longBracketAt(source, offset);
    if (long) {
      if (long.end < 0) {
        const token = { start: offset, line, column };
        throw new LuaStaticError('UNTERMINATED_LONG_STRING', 'Long string has no closing delimiter', token, filename);
      }
      push('string', long.value, long.end);
      continue;
    }
    if (source[offset] === '"' || source[offset] === "'") {
      const quote = source[offset];
      let end = offset + 1;
      let escaped = false;
      for (; end < source.length; end += 1) {
        const character = source[end];
        if (escaped) escaped = false;
        else if (character === '\\') escaped = true;
        else if (character === quote) {
          end += 1;
          break;
        }
      }
      if (source[end - 1] !== quote) {
        const token = { start: offset, line, column };
        throw new LuaStaticError('UNTERMINATED_STRING', 'Quoted string has no closing quote', token, filename);
      }
      const raw = source.slice(offset, end);
      push('string', decodeQuotedString(raw), end);
      continue;
    }
    const number = /^(?:0[xX][0-9a-fA-F]+|(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?)/u.exec(source.slice(offset));
    if (number) {
      push('number', Number(number[0]), offset + number[0].length);
      continue;
    }
    const identifier = /^[A-Za-z_][A-Za-z0-9_]*/u.exec(source.slice(offset));
    if (identifier) {
      push(KEYWORDS.has(identifier[0]) ? 'keyword' : 'identifier', identifier[0], offset + identifier[0].length);
      continue;
    }
    const operator = ['...', '..', '==', '~=', '<=', '>='].find((candidate) => source.startsWith(candidate, offset));
    if (operator) {
      push('symbol', operator, offset + operator.length);
      continue;
    }
    if ('{}[](),;.=:+-*/%^#<>'.includes(source[offset])) {
      push('symbol', source[offset], offset + 1);
      continue;
    }
    const token = { start: offset, line, column };
    throw new LuaStaticError('UNSUPPORTED_CONSTRUCT', `Unexpected character ${JSON.stringify(source[offset])}`, token, filename);
  }
  tokens.push({ type: 'eof', value: '<eof>', raw: '', start: source.length, end: source.length, line, column, endLine: line });
  return tokens;
}

function cloneNode(node) {
  return node == null ? node : structuredClone(node);
}

function tableEntry(node, key) {
  if (node?.type !== 'table') return null;
  return node.entries.find((entry) => entry.key?.type === 'string' && entry.key.value === key) ?? null;
}

function tableKeyIdentity(key, implicitIndex) {
  if (key == null) return `number:${implicitIndex}`;
  if (['string', 'number', 'boolean'].includes(key.type)) return `${key.type}:${JSON.stringify(key.value)}`;
  if (key.type === 'reference') return `reference:${key.ref}`;
  return `${key.type}:${JSON.stringify(toPlainValue(key))}`;
}

function tableKeyIdentities(table) {
  let implicitIndex = 0;
  return table.entries.map((entry) => {
    if (entry.key == null) implicitIndex += 1;
    return tableKeyIdentity(entry.key, implicitIndex);
  });
}

export function getTableField(node, key) {
  return tableEntry(node, key)?.value ?? null;
}

export function getTableArray(node) {
  if (node?.type !== 'table') return [];
  return node.entries.filter((entry) => entry.key == null).map((entry) => entry.value);
}

export function getTableEntries(node) {
  return node?.type === 'table' ? node.entries : [];
}

class Parser {
  constructor(source, options) {
    this.source = source;
    this.filename = options.filename ?? '<lua>';
    this.allowUnsupported = options.allowUnsupported ?? false;
    this.tokens = tokenizeLua(source, options);
    this.index = 0;
    this.environment = new Map();
    this.requires = {};
    this.assignments = [];
    this.calls = [];
    this.unsupported = [];
    this.returned = null;
  }

  peek(delta = 0) { return this.tokens[this.index + delta] ?? this.tokens.at(-1); }
  take() { const token = this.peek(); this.index += 1; return token; }
  match(value) { if (this.peek().value !== value) return null; return this.take(); }
  expect(value) {
    const token = this.peek();
    if (token.value !== value) this.fail(`Expected ${JSON.stringify(value)}, found ${JSON.stringify(token.value)}`, token);
    return this.take();
  }
  fail(message, token = this.peek()) {
    throw new LuaStaticError('UNSUPPORTED_CONSTRUCT', message, token, this.filename);
  }

  parse() {
    while (this.peek().type !== 'eof') {
      if (this.match(';')) continue;
      if (this.peek().value === 'local') this.parseLocal();
      else if (this.peek().value === 'return') this.parseReturn();
      else if (this.peek().value === 'function') this.skipBlockStatement('function declaration');
      else if (['if', 'for', 'while', 'repeat', 'do'].includes(this.peek().value)) this.skipBlockStatement(`${this.peek().value} statement`);
      else this.parseAssignmentOrCall();
    }
    return {
      type: 'chunk', filename: this.filename,
      assignments: this.assignments,
      calls: this.calls,
      locals: Object.fromEntries(this.environment),
      requires: this.requires,
      returned: this.resolveReference(this.returned),
      unsupported: this.unsupported
    };
  }

  skipBlockStatement(description) {
    const start = this.peek();
    const first = this.take();
    const stack = [first.value === 'repeat' ? 'repeat' : 'end'];
    while (stack.length && this.peek().type !== 'eof') {
      const token = this.take();
      if (['function', 'if', 'for', 'while'].includes(token.value)) stack.push('end');
      else if (token.value === 'repeat') stack.push('repeat');
      else if (token.value === 'until' && stack.at(-1) === 'repeat') stack.pop();
      else if (token.value === 'end' && stack.at(-1) === 'end') stack.pop();
    }
    if (stack.length) this.fail(`Unclosed ${description}`, start);
    this.unsupported.push({ code: 'UNSUPPORTED_CONSTRUCT', description, line: start.line, start: start.start });
  }

  parseLocal() {
    this.expect('local');
    if (this.peek().value === 'function') {
      this.skipBlockStatement('local function declaration');
      return;
    }
    const names = [this.expectIdentifier().value];
    while (this.match(',')) names.push(this.expectIdentifier().value);
    const values = [];
    if (this.match('=')) {
      values.push(this.parseExpression());
      while (this.match(',')) values.push(this.parseExpression());
    }
    names.forEach((name, index) => {
      const value = values[index] ?? this.literalNode('nil', null, this.peek());
      const requirePath = value.type === 'call' && value.ref === 'require' && value.args[0]?.type === 'string'
        ? value.args[0].value : null;
      if (requirePath) {
        this.requires[name] = requirePath;
        this.environment.set(name, { ...value, type: 'require', alias: name, path: requirePath });
      } else {
        this.environment.set(name, this.evaluateCall(value));
      }
    });
  }

  parseReturn() {
    this.expect('return');
    this.returned = this.parseExpression();
    while (this.match(',')) this.parseExpression();
  }

  parseAssignmentOrCall() {
    const expression = this.parseExpression();
    if (this.match('=')) {
      if (expression.type !== 'reference') this.fail('Assignment target must be a symbolic reference');
      const value = this.evaluateCall(this.parseExpression());
      this.assignReference(expression.ref, value);
      this.assignments.push({ path: expression.ref, value, line: expression.startLine, start: expression.start });
      return;
    }
    if (expression.type !== 'call') this.fail('Only assignments and calls are supported as statements');
    const evaluated = this.evaluateCall(expression, { statement: true });
    this.calls.push({ ...expression, evaluated });
  }

  expectIdentifier() {
    const token = this.peek();
    if (token.type !== 'identifier') this.fail(`Expected identifier, found ${JSON.stringify(token.value)}`, token);
    return this.take();
  }

  parseExpression() {
    const start = this.peek();
    let node;
    if (start.type === 'symbol' && this.match('-')) {
      const value = this.parseExpression();
      if (value.type !== 'number') this.fail('Unary minus is supported only for numeric literals', start);
      node = { ...value, value: -value.value, raw: this.source.slice(start.start, value.end), start: start.start, startLine: start.line };
    } else if (start.value === '{') node = this.parseTable();
    else if (start.value === 'function') node = this.parseFunction();
    else if (start.type === 'string') node = this.literalNode('string', this.take().value, start);
    else if (start.type === 'number') node = this.literalNode('number', this.take().value, start);
    else if (['true', 'false', 'nil'].includes(start.value)) {
      this.take();
      node = this.literalNode(start.value === 'nil' ? 'nil' : 'boolean', start.value === 'true' ? true : start.value === 'false' ? false : null, start);
    } else if (start.type === 'identifier') node = this.parseReferenceOrCall();
    else this.fail(`Unsupported expression beginning with ${JSON.stringify(start.value)}`, start);

    if (['+', '-', '*', '/', '%', '^', '..', 'and', 'or', '==', '~=', '<', '>', '<=', '>='].includes(this.peek().value)) {
      if (!this.allowUnsupported) this.fail(`Operator ${JSON.stringify(this.peek().value)} is not evaluated`, this.peek());
      const operator = this.peek();
      while (!['<eof>', ',', ';', '}', ']', ')'].includes(this.peek().value)) this.take();
      node = {
        type: 'unsupported', code: 'UNSUPPORTED_CONSTRUCT',
        start: start.start, end: this.peek().start,
        startLine: start.line, endLine: this.peek().line,
        raw: this.source.slice(start.start, this.peek().start),
        message: `Operator ${operator.value} is not evaluated`
      };
      this.unsupported.push(node);
    }
    return node;
  }

  literalNode(type, value, token) {
    return {
      type, value, raw: token.raw,
      start: token.start, end: token.end,
      startLine: token.line, endLine: token.endLine
    };
  }

  parseReferenceOrCall() {
    const first = this.expectIdentifier();
    let ref = first.value;
    while (this.match('.')) ref += `.${this.expectIdentifier().value}`;
    let node = {
      type: 'reference', ref, raw: this.source.slice(first.start, this.peek(-1)?.end ?? first.end),
      start: first.start, end: this.peek(-1)?.end ?? first.end,
      startLine: first.line, endLine: this.peek(-1)?.endLine ?? first.endLine
    };
    while (this.peek().value === '(' || this.peek().value === '{' || this.peek().type === 'string') {
      const args = [];
      let endToken;
      if (this.match('(')) {
        if (this.peek().value !== ')') {
          args.push(this.parseExpression());
          while (this.match(',')) args.push(this.parseExpression());
        }
        endToken = this.expect(')');
      } else {
        args.push(this.parseExpression());
        endToken = this.peek(-1);
      }
      node = {
        type: 'call', ref: node.ref, args,
        start: node.start, end: endToken.end,
        startLine: node.startLine, endLine: endToken.endLine,
        raw: this.source.slice(node.start, endToken.end)
      };
    }
    return node;
  }

  parseTable() {
    const open = this.expect('{');
    const entries = [];
    while (this.peek().value !== '}') {
      if (this.peek().type === 'eof') this.fail('Unclosed table constructor', open);
      let key = null;
      let value;
      const entryStart = this.peek();
      if (this.match('[')) {
        key = this.parseExpression();
        this.expect(']');
        this.expect('=');
        value = this.parseExpression();
      } else if (this.peek().type === 'identifier' && this.peek(1).value === '=') {
        const keyToken = this.take();
        this.expect('=');
        key = this.literalNode('string', keyToken.value, keyToken);
        value = this.parseExpression();
      } else {
        value = this.parseExpression();
      }
      entries.push({ key, value, start: entryStart.start, end: value.end, startLine: entryStart.line, endLine: value.endLine });
      if (!this.match(',') && !this.match(';') && this.peek().value !== '}') {
        this.fail(`Expected table separator, found ${JSON.stringify(this.peek().value)}`);
      }
    }
    const close = this.expect('}');
    return {
      type: 'table', entries,
      start: open.start, end: close.end,
      startLine: open.line, endLine: close.endLine,
      raw: this.source.slice(open.start, close.end)
    };
  }

  parseFunction() {
    const start = this.expect('function');
    const stack = ['end'];
    while (stack.length && this.peek().type !== 'eof') {
      const token = this.take();
      if (['function', 'if', 'for', 'while'].includes(token.value)) stack.push('end');
      else if (token.value === 'repeat') stack.push('repeat');
      else if (token.value === 'until' && stack.at(-1) === 'repeat') stack.pop();
      else if (token.value === 'end' && stack.at(-1) === 'end') stack.pop();
    }
    if (stack.length) this.fail('Unclosed function expression', start);
    const end = this.peek(-1);
    return {
      type: 'function', function: true,
      start: start.start, end: end.end,
      startLine: start.line, endLine: end.endLine,
      raw: this.source.slice(start.start, end.end)
    };
  }

  resolveExact(node) {
    if (node?.type !== 'reference' || node.ref.includes('.')) return node;
    return this.environment.has(node.ref) ? this.environment.get(node.ref) : node;
  }

  resolveReference(node) {
    if (node?.type !== 'reference') return node;
    return node.ref.includes('.') ? this.resolvePath(node.ref) ?? node : this.resolveExact(node);
  }

  resolvePath(ref) {
    const [root, ...parts] = ref.split('.');
    let node = this.environment.get(root);
    if (!node) return null;
    for (const part of parts) {
      node = getTableField(node, part);
      if (!node) return null;
    }
    return node;
  }

  assignReference(ref, value) {
    const [root, ...parts] = ref.split('.');
    if (parts.length === 0) {
      this.environment.set(root, value);
      return;
    }
    let table = this.environment.get(root);
    if (table?.type !== 'table') this.fail(`Cannot assign through non-table ${root}`);
    for (const part of parts.slice(0, -1)) {
      const entry = tableEntry(table, part);
      if (!entry?.value || entry.value.type !== 'table') this.fail(`Cannot assign through missing table ${ref}`);
      table = entry.value;
    }
    const key = parts.at(-1);
    const existing = tableEntry(table, key);
    if (existing) existing.value = value;
    else table.entries.push({ key: { type: 'string', value: key }, value, start: value.start, end: value.end, startLine: value.startLine, endLine: value.endLine });
  }

  evaluateCall(node, { statement = false } = {}) {
    if (node?.type !== 'call') return node;
    if (node.ref === 'table.clone') {
      const source = this.resolveReference(node.args[0]);
      if (source?.type !== 'table') this.fail('table.clone requires a statically known table', node);
      return cloneNode(source);
    }
    if (node.ref === 'table.add_missing' || node.ref === 'table.append' || node.ref === 'table.merge') {
      const targetRef = node.args[0]?.ref;
      const target = targetRef ? this.resolvePath(targetRef) : null;
      const source = this.resolveReference(node.args[1]);
      if (target?.type !== 'table' || source?.type !== 'table') this.fail(`${node.ref} requires statically known tables`, node);
      if (node.ref === 'table.add_missing') {
        const existing = new Set(tableKeyIdentities(target));
        let implicitIndex = 0;
        for (const entry of source.entries) {
          if (entry.key == null) implicitIndex += 1;
          const identity = tableKeyIdentity(entry.key, implicitIndex);
          if (!existing.has(identity)) {
            target.entries.push(cloneNode(entry));
            existing.add(identity);
          }
        }
      } else if (node.ref === 'table.append') {
        for (const entry of source.entries.filter((item) => item.key == null)) target.entries.push(cloneNode(entry));
      } else {
        const identities = tableKeyIdentities(target);
        let implicitIndex = 0;
        for (const entry of source.entries) {
          if (entry.key == null) implicitIndex += 1;
          const identity = tableKeyIdentity(entry.key, implicitIndex);
          const index = identities.indexOf(identity);
          if (index >= 0) target.entries[index] = cloneNode(entry);
          else {
            target.entries.push(cloneNode(entry));
            identities.push(identity);
          }
        }
      }
      return target;
    }
    if (statement) return node;
    return node;
  }
}

export function parseLuaStatic(source, options = {}) {
  return new Parser(source, options).parse();
}

export function toPlainValue(node) {
  if (node == null) return null;
  if (node.type === 'string' || node.type === 'number' || node.type === 'boolean' || node.type === 'nil') return node.value;
  if (node.type === 'reference') return { ref: node.ref };
  if (node.type === 'require') return { ref: node.alias };
  if (node.type === 'function') {
    return { function: true, startLine: node.startLine, endLine: node.endLine, raw: node.raw };
  }
  if (node.type === 'unsupported') {
    return { code: node.code, startLine: node.startLine, endLine: node.endLine, raw: node.raw };
  }
  if (node.type === 'call') return { ref: node.ref, args: node.args.map(toPlainValue) };
  if (node.type !== 'table') return node;

  const arrayEntries = node.entries.filter((entry) => entry.key == null);
  const namedEntries = node.entries.filter((entry) => entry.key?.type === 'string');
  const computedEntries = node.entries.filter((entry) => entry.key != null && entry.key.type !== 'string');
  if (arrayEntries.length === node.entries.length) return arrayEntries.map((entry) => toPlainValue(entry.value));
  const result = Object.fromEntries(namedEntries.map((entry) => [entry.key.value, toPlainValue(entry.value)]));
  if (arrayEntries.length) result.$array = arrayEntries.map((entry) => toPlainValue(entry.value));
  if (computedEntries.length) {
    result.$computed = computedEntries.map((entry) => ({ key: toPlainValue(entry.key), value: toPlainValue(entry.value) }));
  }
  return result;
}

export function sourceLocation(node) {
  return node == null ? null : {
    start: node.start,
    end: node.end,
    startLine: node.startLine,
    endLine: node.endLine
  };
}

export function lineAt(source, offset) {
  return positionAt(source, offset).line;
}

function tableTokenRange(source, tokens, openIndex, filename) {
  let depth = 0;
  for (let index = openIndex; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token.value === '{') depth += 1;
    else if (token.value === '}') {
      depth -= 1;
      if (depth === 0) {
        const open = tokens[openIndex];
        return {
          type: 'static-table-source',
          raw: source.slice(open.start, token.end),
          start: open.start,
          end: token.end,
          startLine: open.line,
          endLine: token.endLine,
          filename
        };
      }
    }
  }
  throw new LuaStaticError('UNSUPPORTED_CONSTRUCT', 'Unclosed assigned table', tokens[openIndex], filename);
}

/**
 * Locates a literal table on the right-hand side of a named assignment without
 * parsing or evaluating the surrounding Lua chunk.
 */
export function findLuaTableAssignment(source, reference, { filename = '<lua>', occurrence = 1 } = {}) {
  const parts = reference.split('.');
  const tokens = tokenizeLua(source, { filename });
  let found = 0;
  for (let index = 0; index < tokens.length; index += 1) {
    let cursor = index;
    let matches = tokens[cursor]?.type === 'identifier' && tokens[cursor].value === parts[0];
    for (let partIndex = 1; matches && partIndex < parts.length; partIndex += 1) {
      matches = tokens[cursor + 1]?.value === '.'
        && tokens[cursor + 2]?.type === 'identifier'
        && tokens[cursor + 2].value === parts[partIndex];
      cursor += 2;
    }
    if (!matches || tokens[cursor + 1]?.value !== '=' || tokens[cursor + 2]?.value !== '{') continue;
    found += 1;
    if (found === occurrence) return tableTokenRange(source, tokens, cursor + 2, filename);
  }
  throw new LuaStaticError(
    'UNSUPPORTED_CONSTRUCT',
    `Static table assignment ${reference} occurrence ${occurrence} was not found`,
    tokens[0],
    filename
  );
}

function trimTokenRange(source, tokens, startIndex, endIndex) {
  let first = startIndex;
  let last = endIndex;
  while (first <= last && [',', ';'].includes(tokens[first]?.value)) first += 1;
  while (last >= first && [',', ';'].includes(tokens[last]?.value)) last -= 1;
  if (first > last) return null;
  const start = tokens[first].start;
  const end = tokens[last].end;
  return {
    rawValue: source.slice(start, end).trim(),
    start,
    end,
    startLine: tokens[first].line,
    endLine: tokens[last].endLine,
    firstTokenIndex: first,
    lastTokenIndex: last
  };
}

function splitLuaTableEntries(table) {
  const source = table.raw;
  const tokens = tokenizeLua(source, { filename: table.filename ?? '<lua>' });
  const rows = [];
  let entryStart = 1;
  let braces = 1;
  let parentheses = 0;
  let brackets = 0;
  const blocks = [];
  const opensBlock = (value) => ['function', 'if', 'for', 'while'].includes(value);
  for (let index = 1; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token.value === '{') braces += 1;
    else if (token.value === '}') {
      if (braces === 1 && parentheses === 0 && brackets === 0 && blocks.length === 0) {
        const range = trimTokenRange(source, tokens, entryStart, index - 1);
        if (range) rows.push(range);
        break;
      }
      braces -= 1;
    } else if (token.value === '(') parentheses += 1;
    else if (token.value === ')') parentheses -= 1;
    else if (token.value === '[') brackets += 1;
    else if (token.value === ']') brackets -= 1;
    else if (opensBlock(token.value)) blocks.push('end');
    else if (token.value === 'repeat') blocks.push('until');
    else if (token.value === blocks.at(-1)) blocks.pop();

    if (braces === 1 && parentheses === 0 && brackets === 0 && blocks.length === 0
      && [',', ';'].includes(token.value)) {
      const range = trimTokenRange(source, tokens, entryStart, index - 1);
      if (range) rows.push(range);
      entryStart = index + 1;
    }
  }
  return { source, tokens, rows };
}

function absoluteTableRow(table, row) {
  return {
    ...row,
    start: table.start + row.start,
    end: table.start + row.end,
    startLine: table.startLine + row.startLine - 1,
    endLine: table.startLine + row.endLine - 1
  };
}

/** Returns identifier-keyed fields from a scanned table in source order. */
export function getLuaTableFields(table) {
  const { tokens, rows } = splitLuaTableEntries(table);
  const fields = [];
  for (const row of rows) {
    const first = tokens[row.firstTokenIndex];
    const equals = tokens[row.firstTokenIndex + 1];
    if (first?.type !== 'identifier' || equals?.value !== '=') continue;
    const valueStart = tokens[row.firstTokenIndex + 2];
    const valueEnd = tokens[row.lastTokenIndex];
    if (!valueStart || !valueEnd) continue;
    fields.push(absoluteTableRow(table, {
      key: first.value,
      rawValue: table.raw.slice(valueStart.start, valueEnd.end).trim(),
      start: first.start,
      end: valueEnd.end,
      startLine: first.line,
      endLine: valueEnd.endLine
    }));
  }
  return fields;
}

/** Returns non-keyed list entries from a scanned table in source order. */
export function getLuaListItems(table) {
  const { tokens, rows } = splitLuaTableEntries(table);
  const items = [];
  for (const row of rows) {
    if (tokens[row.firstTokenIndex]?.type === 'identifier'
      && tokens[row.firstTokenIndex + 1]?.value === '=') continue;
    items.push({ ...absoluteTableRow(table, row), index: items.length + 1 });
  }
  return items;
}
