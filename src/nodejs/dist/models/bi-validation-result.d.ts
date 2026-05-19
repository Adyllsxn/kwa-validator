import { BiValidationError } from '../enums/bi-validation-error.js';
import { Province } from './province.js';
export declare class BiValidationResult {
    readonly isValid: boolean;
    readonly errorMessage?: string;
    readonly errorCode?: BiValidationError;
    readonly province?: Province;
    private constructor();
    static success(province: Province): BiValidationResult;
    static failure(error: BiValidationError, message: string): BiValidationResult;
}
