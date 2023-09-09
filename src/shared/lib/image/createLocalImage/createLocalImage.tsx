import { FC } from 'react'
import { ICreateLocalImageDto, ILocalImageProps } from './type'
import { Image } from 'native-base'

export function createLocalImage(
    dto: ICreateLocalImageDto,
): FC<ILocalImageProps> {
    const LocalImage: FC<ILocalImageProps> = (props) => {
        return <Image {...dto} {...props} />
    }
    return LocalImage
}
