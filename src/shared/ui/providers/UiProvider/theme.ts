import { Theme, extendTheme } from 'native-base'

export const theme = extendTheme({
    dark: false,
    colors: {
        primary: '#151044',
        secondary: '#CDD6FF',
        tertiary: '#DDDFE5',
        accent: '#DFF892',
        bgWhite: '#EBEBEB',
        white: '#FFFFFF',
        disable: '#A19FB7',
        black: '#202020',
    },
    fontConfig: {
        Roboto: {
            400: {
                normal: "Roboto-Regular",
            },
            500: {
                normal: "Roboto-Medium",
                italic: "Roboto-MediumItalic",
            },
        }
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: '500',
                borderRadius: '100px',
            }
        },
        Text: {
            baseStyle: {
                fontFamily: 'Roboto',
                color: 'primary',
            }
        }
    }
}) satisfies Theme