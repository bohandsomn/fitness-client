export class GetProgressInCaloriesDTO {
    constructor(
        public readonly startDate: Date,
        public readonly endDate: Date,
    ) { }
}