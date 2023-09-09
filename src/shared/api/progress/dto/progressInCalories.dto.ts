export class ProgressInCaloriesDTO {
    constructor(
        public readonly lostCalories: number,
        public readonly goalCalories: number,
        public readonly date: Date
    ) { }
}