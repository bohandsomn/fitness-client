import { createFormData, nullableEmptyString } from '@/shared/lib'
import { UpdateSetDto } from '../dto'

export function mapUpdateSet(dto: UpdateSetDto): FormData {
    const { image, name, description } = dto
    const formData = createFormData(image, {
        id: dto.id,
        name: nullableEmptyString(name),
        description: nullableEmptyString(description),
    })
    return formData
}