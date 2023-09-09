import { FC } from 'react'
import { FlatList } from 'native-base'
import { ErrorBoundary } from '@/widgets/error'
import { ExercisePayloadProgress, ExercisePayloadProvider } from '@/entities'
import { EmptyList, Loading } from '@/shared'
import { IProgressExercisesProps } from './type'
import { useProgressExercises } from './useProgressExercises'

export const ProgressExercises: FC<IProgressExercisesProps> = () => {
    const { state, reload, close, header } = useProgressExercises()
    if (state.isLoading) {
        return <Loading />
    }
    if (state.error) {
        return <ErrorBoundary header={header} reload={reload} close={close} />
    }
    if (!state.data || !state.data.exercises.length) {
        return <EmptyList />
    }
    return (
        <FlatList
            data={state.data.exercises}
            renderItem={({ item }) => (
                <ExercisePayloadProvider data={item}>
                    <ExercisePayloadProgress />
                </ExercisePayloadProvider>
            )}
        />
    )
}
