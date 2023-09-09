import { FC } from 'react'
import {
    CreateUserProvider,
    SelectDifficultyProvider,
    SelectGenderProvider,
    StepProvider,
} from '@/entities'
import { Container } from '@/shared'
import { ICreateUserProps } from './type'
import { useCreateUser } from './useCreateUser'
import { CreateUserSteps } from '../CreateUserSteps'
import { CreateUserPages } from '../CreateUserPages'

export const CreateUser: FC<ICreateUserProps> = () => {
    const { stepInitialData } = useCreateUser()
    return (
        <CreateUserProvider>
            <StepProvider data={stepInitialData}>
                <SelectGenderProvider>
                    <SelectDifficultyProvider>
                        <Container>
                            <CreateUserSteps>
                                <CreateUserPages />
                            </CreateUserSteps>
                        </Container>
                    </SelectDifficultyProvider>
                </SelectGenderProvider>
            </StepProvider>
        </CreateUserProvider>
    )
}
