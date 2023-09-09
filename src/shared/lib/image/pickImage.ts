import { Platform } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

export interface IPickedImageDto {
    name: string
    type: string
    uri: string
}

export function pickImage(): Promise<IPickedImageDto> {
    return new Promise<IPickedImageDto>((resolve, reject) => {
        try {
            launchImageLibrary({ mediaType: 'photo' }, (response) => {
                const asset = response.assets?.at(0)
                const name = asset?.fileName
                const type = asset?.type
                const uri = asset?.uri
                if (!name || !type || !uri) {
                    return
                }
                resolve({
                    name,
                    type,
                    uri: Platform.OS === 'ios' ? uri.replace('file://', '') : uri,
                })
            })
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}