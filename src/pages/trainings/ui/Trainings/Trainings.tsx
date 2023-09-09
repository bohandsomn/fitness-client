import { FC } from 'react'
import { View } from 'native-base'
import { WithNavigationBar } from '@/pages/footer'
import { WithCreateSetModal } from '@/pages/set'
import { ProgressAgenda, SetsTrainingSection } from '@/widgets'
import { LostCaloriesProvider } from '@/entities'
import { Container } from '@/shared'
import { ITrainingsProps } from './type'
import { useTrainings } from './useTrainings'

export const Trainings: FC<ITrainingsProps> = () => {
    const {} = useTrainings()
    return (
        <WithNavigationBar>
            <Container>
                <WithCreateSetModal>
                    <LostCaloriesProvider>
                        <ProgressAgenda />
                    </LostCaloriesProvider>
                    <View marginTop="22px">
                        <SetsTrainingSection />
                    </View>
                </WithCreateSetModal>
            </Container>
        </WithNavigationBar>
    )
}
