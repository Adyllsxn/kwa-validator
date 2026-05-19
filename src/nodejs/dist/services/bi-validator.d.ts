import { IBiValidator } from '../abstractions/i-bi-validator.js';
import { BiValidationResult } from '../models/bi-validation-result.js';
export declare class BiValidator implements IBiValidator {
    private static readonly BiRegex;
    private static readonly Provinces;
    validate(bi: string): BiValidationResult;
}
