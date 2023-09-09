export class RemoveExerciseFromSetDto {
    constructor(
        public readonly exerciseId: number,
        public readonly setId: number,
    ) { }
}