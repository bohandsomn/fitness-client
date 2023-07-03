import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { AddExerciseToSetDto, CreateSetDto, GetSetDto, RemoveExerciseFromSetDto, SetDto, SetPreviewDto, UpdateSetDto } from './dto'
import { DeleteSetDto } from './dto/deleteSet.dto'

export interface ISetApi {
    createSet(dto: CreateSetDto): Promise<SetPreviewDto | ValidationErrorResponseDto<keyof CreateSetDto> | ExceptionErrorResponseDto>
    updateSet(dto: UpdateSetDto): Promise<SetPreviewDto | ValidationErrorResponseDto<keyof UpdateSetDto> | ExceptionErrorResponseDto>
    getSet(dto: GetSetDto): Promise<SetDto | ExceptionErrorResponseDto>
    getSets(): Promise<SetPreviewDto[] | ExceptionErrorResponseDto>
    getCommonSets(): Promise<SetPreviewDto[] | ExceptionErrorResponseDto>
    deleteSet(dto: DeleteSetDto): Promise<void | ExceptionErrorResponseDto>
    addExerciseToSet(dto: AddExerciseToSetDto): Promise<void | ExceptionErrorResponseDto>
    removeExerciseFromSet(dto: RemoveExerciseFromSetDto): Promise<void | ExceptionErrorResponseDto>
}