export class AddExerciseToSetDto {
    constructor(
        public readonly exerciseId: number,
        public readonly setId: number,
    ) { }
}