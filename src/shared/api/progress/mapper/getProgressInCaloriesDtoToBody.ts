import { isoDateAdapter } from '@/shared/lib'
import { GetProgressInCaloriesBodyDTO, GetProgressInCaloriesDTO } from '../dto'

export function getProgressInCaloriesDtoToBody(dto: Partial<GetProgressInCaloriesDTO>): Partial<GetProgressInCaloriesBodyDTO> {
    return {
        startDate: dto.startDate ? isoDateAdapter(dto.startDate) : undefined,
        endDate: dto.endDate ? isoDateAdapter(dto.endDate) : undefined,
    }
}