export class ValidationErrorResponseDto<Property extends string> {
    constructor(
        public readonly message: Partial<Record<Property, string[]>>
    ) { }

    static isValidationErrorResponse<Property extends string = string>(data: unknown | ValidationErrorResponseDto<Property>): data is ValidationErrorResponseDto<Property> {
        if (typeof data !== 'object' || data === null) {
            return false
        }
        const message: unknown = (data as any).message
        if (typeof message !== 'object' || message === null) {
            return false
        }
        const values: unknown[] = Object.values(message)
        for (const value of values) {
            if (!Array.isArray(value)) {
                return false
            }
            for (const errorMessage of value) {
                if (typeof errorMessage !== 'string') {
                    return false
                }
            }
        }
        return true
    }
}