import { BiValidator } from './services/bi-validator.js';
import { BiValidationResult } from './models/bi-validation-result.js';

export * from './abstractions/i-bi-validator.js';
export * from './enums/bi-validation-error.js';
export * from './models/province.js';
export * from './models/bi-validation-result.js';
export * from './services/bi-validator.js';

// Adicione esta função que o teu app.js está a tentar chamar:
export function validateBI(bi: string): BiValidationResult {
  const validator = new BiValidator();
  return validator.validate(bi);
}
