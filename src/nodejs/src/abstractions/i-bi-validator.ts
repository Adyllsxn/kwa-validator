import { BiValidationResult } from '../models/bi-validation-result.js';

export interface IBiValidator {
  validate(bi: string): BiValidationResult;
}
