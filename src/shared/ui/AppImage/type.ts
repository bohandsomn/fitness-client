import { IImageProps } from 'native-base'

export interface IAppImageProps extends IImageProps {
    src: string
    alt: string
    width: number | `${number}`
    height: number | `${number}`
    quality?: number | `${number}`
}