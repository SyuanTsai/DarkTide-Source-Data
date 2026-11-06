/** An expected mismatch between the source layout and an extractor's assumptions. */
export class StructureError extends Error {
  constructor(category, code, detail) {
    super(detail);
    this.name = 'StructureError';
    this.category = category;
    this.code = code;
    this.detail = detail;
  }
}
