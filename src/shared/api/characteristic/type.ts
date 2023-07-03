import { CharacteristicPreviewDto, GetCharacteristicDTO, GetCharacteristicsByExerciseDTO } from './dto'

export interface ICharacteristicApi {
    getCharacteristic(dto: GetCharacteristicDTO): Promise<CharacteristicPreviewDto>
    getCharacteristics(): Promise<CharacteristicPreviewDto[]>
    getCharacteristicsByExercise(dto: GetCharacteristicsByExerciseDTO): Promise<CharacteristicPreviewDto>
}