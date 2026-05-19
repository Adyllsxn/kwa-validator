export class BiValidationResult {
    isValid;
    errorMessage;
    errorCode;
    province;
    constructor(init) {
        this.isValid = init.isValid ?? false;
        this.errorMessage = init.errorMessage;
        this.errorCode = init.errorCode;
        this.province = init.province;
    }
    static success(province) {
        return new BiValidationResult({ isValid: true, province });
    }
    static failure(error, message) {
        return new BiValidationResult({ isValid: false, errorCode: error, errorMessage: message });
    }
}
