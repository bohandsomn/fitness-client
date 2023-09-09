import { FC } from 'react'
import { Text, View } from 'native-base'
import { WithStepController } from '@/widgets'
import { ICreateUserStepsProps } from './type'
import { useCreateUserSteps } from './useCreateUserSteps'

export const CreateUserSteps: FC<ICreateUserStepsProps> = ({ children }) => {
    const { handleRegisterUser, label, metric } = useCreateUserSteps()
    return (
        <WithStepController
            height="full"
            nextStepLabel={
                <View>
                    <Text color="white">{label}</Text>
                </View>
            }
            rightStepProgressElement={
                <View>
                    <Text fontSize="12px">{metric}</Text>
                </View>
            }
            handleConfirm={handleRegisterUser}
        >
            {children}
        </WithStepController>
    )
}
