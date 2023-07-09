import { FC } from 'react'
import { CreateUserProvider, StepProvider } from '@/entities'
import { ICreateUserProps } from './type'
import { useCreateUser } from './useCreateUser'
import { CreateUserSteps } from '../CreateUserSteps'
import { CreateUserPages } from '../CreateUserPages'

export const CreateUser: FC<ICreateUserProps> = () => {
    const { stepInitialData } = useCreateUser()
    return (
        <CreateUserProvider>
            <StepProvider data={stepInitialData}>
                <CreateUserSteps>
                    <CreateUserPages />
                </CreateUserSteps>
            </StepProvider>
        </CreateUserProvider>
    )
}
