import { GetExercisesDto } from './dto/GetExercises.dto'
import { ExerciseDto } from './dto/exercise.dto'
import { ExercisePayloadDto } from './dto/exercisePayload.dto'
import { GetExerciseDto } from './dto/getExercise.dto'

export interface IExerciseApi {
    getExercise(dto: GetExerciseDto): Promise<ExerciseDto>
    getExercises(dto: GetExercisesDto): Promise<ExercisePayloadDto[]>
}