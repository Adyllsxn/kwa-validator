import { BiValidationError } from '../enums/bi-validation-error.js';
import { Province } from './province.js';

export class BiValidationResult {
  public readonly isValid: boolean;
  public readonly errorMessage?: string;
  public readonly errorCode?: BiValidationError;
  public readonly province?: Province;

  private constructor(init: Partial<BiValidationResult>) {
    this.isValid = init.isValid ?? false;
    this.errorMessage = init.errorMessage;
    this.errorCode = init.errorCode;
    this.province = init.province;
  }

  public static success(province: Province): BiValidationResult {
    return new BiValidationResult({ isValid: true, province });
  }

  public static failure(error: BiValidationError, message: string): BiValidationResult {
    return new BiValidationResult({ isValid: false, errorCode: error, errorMessage: message });
  }
}
