import { ExercisePayloadDto } from '../../exercise'

export class HistoryDto {
    constructor(
        public readonly exercises: ExercisePayloadDto[],
        public readonly calories: number,
        public readonly date: Date,
    ) { }
}