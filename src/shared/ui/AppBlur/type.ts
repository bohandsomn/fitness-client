export interface IAppBlurProps {
    /**
     * By default - dark
     */
    type?: BlurType
    /**
     * By default - 1
     * From 0 to 100
     */
    amount?: number
}

export enum BlurType {
    LIGHT = 'light',
    DARK = 'dark',
}
