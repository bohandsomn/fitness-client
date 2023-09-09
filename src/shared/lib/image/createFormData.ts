import { IPickedImageDto } from './pickImage'

export function createFormData<Data>(image: IPickedImageDto, data: Data): FormData {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('data', data)
    return formData
}