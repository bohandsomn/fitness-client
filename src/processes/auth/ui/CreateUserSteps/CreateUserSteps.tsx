import { FC } from 'react'
import { Text, View } from 'native-base'
import { WithStepController } from '@/widgets'
import { AuthConst, StepConst } from '@/shared'
import { ICreateUserStepsProps } from './type'
import { useCreateUserSteps } from './useCreateUserSteps'

export const CreateUserSteps: FC<ICreateUserStepsProps> = ({ children }) => {
    const { handleRegisterUser } = useCreateUserSteps()
    return (
        <WithStepController
            height="full"
            nextStepLabel={
                <View>
                    <Text color="white">{AuthConst.CONFIRM}</Text>
                </View>
            }
            rightStepProgressElement={
                <View>
                    <Text>{StepConst.STEPS}</Text>
                </View>
            }
            handleConfirm={handleRegisterUser}
        >
            {children}
        </WithStepController>
    )
}
