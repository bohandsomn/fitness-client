import { GetProgressInCaloriesDTO, ProgressInCaloriesDTO } from './dto'

export interface IProgressApi {
    getProgressInCalories(dto: GetProgressInCaloriesDTO): Promise<ProgressInCaloriesDTO[]>
}