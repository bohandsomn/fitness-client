import { FC } from 'react'
import { FlatList } from 'native-base'
import { ISetsTrainingProps } from './type'
import { useSetsTraining } from './useSetsTraining'
import { EmptyList, Loading, errorAdapter } from '@/shared'
import { ErrorBoundary, SetPreviewTraining } from '@/widgets'
import { SetPreviewProvider } from '@/entities'

export const SetsTraining: FC<ISetsTrainingProps> = () => {
    const { state, reload, close } = useSetsTraining()
    if (state.isLoading) {
        return <Loading />
    }
    if (state.error || !state.data) {
        const messages = errorAdapter({ message: state.error || '' } as any)
        const header = messages.join('\n')
        return <ErrorBoundary reload={reload} close={close} header={header} />
    }
    if (!state.data.length) {
        return <EmptyList />
    }
    return (
        <FlatList
            data={state.data}
            renderItem={({ item }) => (
                <SetPreviewProvider data={item}>
                    <SetPreviewTraining />
                </SetPreviewProvider>
            )}
        />
    )
}
