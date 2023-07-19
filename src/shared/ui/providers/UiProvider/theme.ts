import { extendTheme } from 'native-base'

export const theme = extendTheme({
    colors: {
        main: '#202020',
        secondary: '#C2C7CC',
        mainBackgroundColor: '#FFFFFF',
        secondaryBackgroundColor: '#202020',
        modal: '#D9D9D9',
        list: '#EBEBEB',
        tab: '#BDBDBD',
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
            baseStyle: ({ colorMode }: any) => {
                return {
                    color: colorMode === 'light'
                        ? 'main'
                        : 'secondary',
                    backgroundColor: colorMode === 'light'
                        ? 'mainBackgroundColor'
                        : 'secondaryBackgroundColor',
                    fontWeight: '500',
                    padding: '10px 24px',
                    borderRadius: '100px',
                }
            },
        },
        Text: {
            baseStyle: {
                fontFamily: 'Roboto',
            }
        }
    }
})