import React, { FC } from 'react'
import { AppModal } from './AppModal'
import { AppButton } from '../AppButton'
import { Text, View } from 'native-base'
import { IAppModalProps } from './type'

const AppModalMeta = {
    title: 'Shared/AppModal',
    component: AppModal,
    decorators: [
        (Story: FC) => (
            <View>
                <Text>
                    Dolor amet sunt sunt excepteur veniam eu ea. Do amet
                    consequat sit do aute qui ut aute eu dolor. Dolor sit est
                    cupidatat voluptate ut Lorem. Sit minim velit id enim sunt
                    proident laboris ex. Ex adipisicing Lorem officia laboris in
                    ut. Qui dolor dolore do exercitation aute laborum est
                    cupidatat. Cillum laboris tempor veniam laboris pariatur
                    voluptate reprehenderit irure. Irure consequat cillum
                    occaecat sunt aliquip duis sit commodo officia sint non
                    fugiat ut. Nulla consectetur adipisicing magna mollit
                    laborum sit deserunt voluptate eiusmod duis ipsum velit. Sit
                    laborum minim deserunt elit laborum id exercitation qui
                    elit. In officia cupidatat irure enim est pariatur Lorem
                    anim fugiat tempor. Est consequat sint sint aliqua dolore
                    fugiat exercitation laboris reprehenderit deserunt est. Aute
                    do nisi cillum occaecat enim minim incididunt veniam
                    excepteur deserunt nisi enim. Veniam qui proident Lorem ex
                    occaecat laboris consectetur eiusmod. Enim Lorem id nisi
                    fugiat nulla anim proident ullamco. Consectetur
                    reprehenderit cupidatat anim ea. Ad dolore laboris sunt anim
                    nisi exercitation deserunt consequat nostrud qui minim. Sit
                    cillum sint anim voluptate nulla. Pariatur magna fugiat duis
                    voluptate exercitation dolore. Amet velit anim commodo culpa
                    commodo enim mollit. Nisi incididunt velit officia commodo
                    labore. Ipsum ut amet laboris consectetur aliqua aliqua
                    fugiat. Sit elit dolor esse commodo irure nulla anim
                    eiusmod. Velit ex qui do id pariatur. Irure adipisicing
                    aliqua excepteur magna pariatur. Ut sunt eu culpa laboris
                    deserunt do amet esse est ad fugiat.
                </Text>
                <Story />
            </View>
        ),
    ],
}

export default AppModalMeta

const args: IAppModalProps = {
    header: 'HEADER',
    send: <AppButton isDark>SEND</AppButton>,
    cancel: <AppButton>CLOSE</AppButton>,
    // DEBUG:
    // open: true,
    open: false,
    close() {},
    children: 'CHILDREN',
}

export const Basic = {
    args,
}

export const Blur = {
    args: {
        ...args,
        isBlur: true,
    },
}

export const BlurDark = {
    args: {
        ...args,
        isBlur: true,
        isLight: false,
    },
}

export const BlurLight = {
    args: {
        ...args,
        isBlur: true,
        isLight: true,
    },
}
