export class ExceptionErrorResponseDto {
    constructor(
        public readonly message: string
    ) { }

    static isExceptionErrorResponse(data: unknown): data is ExceptionErrorResponseDto {
        if (typeof data !== 'object' || data === null) {
            return false
        }
        const message: unknown = (data as any).message
        if (typeof message !== 'string') {
            return false
        }
        return true
    }
}