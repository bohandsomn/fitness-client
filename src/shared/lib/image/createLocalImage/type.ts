import { IImageProps } from 'native-base'

export interface ICreateLocalImageDto extends
    Omit<IImageProps, 'source' | 'alt'>,
    Pick<Required<IImageProps>, 'source' | 'alt'> { }

export interface ILocalImageProps extends Omit<IImageProps, 'source' | 'src'> { }