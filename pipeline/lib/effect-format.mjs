/** Capture formatting rules for extract work files only. Values are already manipulated. */
export function captureEffectFormat(read, token) {
  const out={type:'default',numDecimals:null,prefix:'',suffix:'',valueSpace:'display',manipulation:null,token};
  for(const [key,target] of [['format_type','type'],['num_decimals','numDecimals'],['prefix','prefix'],['suffix','suffix']]) {
    const field=read(key);
    if(!field.present || field.value===null || field.value===false)continue;
    if(field.value===undefined)out.issue=`unresolved-${key}`;
    else out[target]=field.value;
  }
  const manipulation=read('value_manipulation');
  if(manipulation.present && manipulation.value!==null && manipulation.value!==false) {
    out.manipulation=manipulation.raw ?? null;
    if(!out.manipulation)out.issue='unresolved-value_manipulation';
  }
  return out;
}

// The game's _num_decimals uses > 1 (not >= 1); preserve that rule exactly.
export function gameDecimals(value) {
  const tenth=(value-Math.floor(value))*10;
  return (tenth-Math.floor(tenth))*10>1?2:tenth>1?1:0;
}

/** C printf's fixed decimal rounding, including exact halfway ties to even. */
export function fixedDisplay(value, decimals) {
  if(decimals===0)return String(Math.trunc(value)); // UI uses %d, not %.0f.
  const view=new DataView(new ArrayBuffer(8));view.setFloat64(0,Math.abs(value));
  const bits=view.getBigUint64(0),exponent=Number((bits>>52n)&2047n),fraction=bits&((1n<<52n)-1n);
  let numerator=(exponent?fraction+(1n<<52n):fraction)*10n**BigInt(decimals),denominator=1n;
  const power=(exponent?exponent-1023:1-1023)-52;
  if(power>=0)numerator<<=BigInt(power);else denominator<<=BigInt(-power);
  let rounded=numerator/denominator;const remainder=numerator%denominator;
  if(remainder*2n>denominator || (remainder*2n===denominator && rounded%2n))rounded++;
  const digits=String(rounded).padStart(decimals+1,'0');
  return `${value<0?'-':''}${digits.slice(0,-decimals)}.${digits.slice(-decimals)}`;
}
