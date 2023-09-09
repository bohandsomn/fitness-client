import { QueryDto } from '../../../network'

export class GetExercisesDto implements QueryDto {
    constructor(
        public readonly setId?: number,
        public readonly header?: string,
        public readonly caloriesFrom?: number,
        public readonly caloriesTo?: number,
        public readonly type?: string,
        public readonly bodyPart?: string,
    ) { }
    [x: string]: string | number | null | undefined;
}