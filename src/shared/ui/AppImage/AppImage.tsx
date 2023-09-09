import { FC } from 'react'
import { Image } from 'native-base'
import { IAppImageProps } from './type'
import { useAppImage } from './useAppImage'

export const AppImage: FC<IAppImageProps> = ({
    src,
    alt,
    width,
    height,
    quality = 0.7,
    ...props
}) => {
    const {} = useAppImage()
    return (
        <Image
            src={`${src}?w=${width}&h=${height}&q=${quality}`}
            alt={alt}
            width={width + 'px'}
            height={height + 'px'}
            {...props}
        />
    )
}
