export class LogInDto {
    constructor(
        public readonly email: string,
        public readonly password: string,
    ) { }
}