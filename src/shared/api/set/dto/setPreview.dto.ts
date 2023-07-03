export class SetPreviewDto {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly demonstration: string,
        public readonly calories: number
    ) { }
}