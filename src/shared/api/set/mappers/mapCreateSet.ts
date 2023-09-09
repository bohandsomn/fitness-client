import { createFormData, nullableEmptyString } from '@/shared/lib'
import { CreateSetDto } from '../dto'

export function mapCreateSet(dto: CreateSetDto): FormData {
    const { image, name, description } = dto
    const formData = createFormData(image, {
        name: nullableEmptyString(name),
        description: nullableEmptyString(description),
    })
    return formData
}