import { IGlobalState } from '@/entities'
import { CharacteristicPreviewDto, ExceptionErrorResponseDto } from '@/shared'

export interface ICharacteristicModel {
    characteristics: IGlobalState<CharacteristicPreviewDto[]>
    getMany(): Promise<CharacteristicPreviewDto[] | ExceptionErrorResponseDto>
}