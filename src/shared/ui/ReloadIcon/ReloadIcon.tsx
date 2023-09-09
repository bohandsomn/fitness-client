import { FC } from 'react'
import { Path, Svg } from 'react-native-svg'
import { IReloadIconProps } from './type'

export const ReloadIcon: FC<IReloadIconProps> = ({
    colorScheme = 'black',
    ...props
}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <Path
                d="M1 4V10H7"
                stroke={colorScheme}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M23 20V14H17"
                stroke={colorScheme}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M20.49 9.00154C19.9828 7.56833 19.1209 6.28694 17.9845 5.27696C16.8482 4.26697 15.4745 3.56131 13.9917 3.2258C12.5089 2.89029 10.9652 2.93588 9.50481 3.35831C8.04437 3.78075 6.71475 4.56625 5.64 5.64154L1 10.0015"
                stroke={colorScheme}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M23 14L18.36 18.36C17.2853 19.4353 15.9556 20.2208 14.4952 20.6432C13.0348 21.0657 11.4911 21.1112 10.0083 20.7757C8.52548 20.4402 7.15181 19.7346 6.01548 18.7246C4.87914 17.7146 4.01718 16.4332 3.51001 15"
                stroke={colorScheme}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    )
}
