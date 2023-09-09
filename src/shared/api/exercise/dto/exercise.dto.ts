export class ExerciseDto {
    constructor(
        public readonly id: number,
        public readonly calories: number,
        public readonly header: string,
        public readonly description: string,
        public readonly demonstration: string,
    ) { }
}