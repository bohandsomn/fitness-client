import { FC } from 'react'
import { View } from 'native-base'
import { WithNavigationBar } from '@/pages/footer'
import { ProgressExercisesSection, TotalProgress } from '@/widgets'
import {
    HistoryProvider,
    LostCaloriesProvider,
    ProgressCalendar,
} from '@/entities'
import { Container } from '@/shared'
import { IProgressProps } from './type'
import { useProgress } from './useProgress'

export const Progress: FC<IProgressProps> = () => {
    const {} = useProgress()
    return (
        <WithNavigationBar>
            <Container>
                <LostCaloriesProvider>
                    <TotalProgress />
                </LostCaloriesProvider>
                <View marginTop="8px">
                    <HistoryProvider>
                        <ProgressCalendar />
                        <View marginTop="25px">
                            <ProgressExercisesSection />
                        </View>
                    </HistoryProvider>
                </View>
            </Container>
        </WithNavigationBar>
    )
}
