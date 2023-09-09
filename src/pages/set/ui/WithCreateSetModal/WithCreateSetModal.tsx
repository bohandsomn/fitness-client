import { FC } from 'react'
import { CreateSetModal } from '@/widgets'
import { OpenCreateSetModal } from '@/features'
import { CreateSetModalProvider, CreateSetProvider } from '@/entities'
import { IWithCreateSetModalProps } from './type'
import { useWithCreateSetModal } from './useWithCreateSetModal'
import { ScrollView } from 'native-base'

export const WithCreateSetModal: FC<IWithCreateSetModalProps> = ({
    children,
}) => {
    const {} = useWithCreateSetModal()
    return (
        <CreateSetModalProvider>
            <CreateSetProvider>
                <CreateSetModal />
                <OpenCreateSetModal />
                {children}
            </CreateSetProvider>
        </CreateSetModalProvider>
    )
}
