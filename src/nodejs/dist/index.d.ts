import { BiValidationResult } from './models/bi-validation-result.js';
export * from './abstractions/i-bi-validator.js';
export * from './enums/bi-validation-error.js';
export * from './models/province.js';
export * from './models/bi-validation-result.js';
export * from './services/bi-validator.js';
export declare function validateBI(bi: string): BiValidationResult;
