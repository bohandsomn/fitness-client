export class SetDto {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly description: string,
        public readonly demonstration: string,
        public readonly calories: number
    ) { }
}