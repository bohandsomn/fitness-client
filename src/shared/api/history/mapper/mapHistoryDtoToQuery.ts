import { isoDateAdapter } from '@/shared/lib'
import { GetUserHistoryDto, GetUserHistoryQueryDto } from '../dto'

export function mapHistoryDtoToQuery(dto: GetUserHistoryDto): GetUserHistoryQueryDto {
    return {
        date: isoDateAdapter(dto.date)
    }
}