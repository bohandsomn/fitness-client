export class ExercisePayloadDto {
    constructor(
        public readonly id: number,
        public readonly calories: number,
        public readonly header: string,
        public readonly demonstration: string,
    ) { }
}