import { FC } from 'react'
import {
    CreateUserQueue,
    CreateUserBirthday,
    CreateUserDifficulty,
    CreateUserGender,
    CreateUserGoalDate,
    CreateUserHeight,
    CreateUserNameAndEmail,
    CreateUserPassword,
    CreateUserWeights,
} from '@/pages'
import { ICreateUserPagesProps } from './type'
import { useCreateUserPages } from './useCreateUserPages'

export const CreateUserPages: FC<ICreateUserPagesProps> = () => {
    const { step } = useCreateUserPages()
    if (step === CreateUserQueue.SELECT_GENDER) {
        return <CreateUserGender />
    } else if (step === CreateUserQueue.ENTER_NAME_AND_EMAIL) {
        return <CreateUserNameAndEmail />
    } else if (step === CreateUserQueue.ENTER_PASSWORD) {
        return <CreateUserPassword />
    } else if (step === CreateUserQueue.SELECT_DIFFICULTY) {
        return <CreateUserDifficulty />
    } else if (step === CreateUserQueue.ENTER_WEIGHTS) {
        return <CreateUserWeights />
    } else if (step === CreateUserQueue.ENTER_HEIGHT) {
        return <CreateUserHeight />
    } else if (step === CreateUserQueue.ENTER_GOAL_DATE) {
        return <CreateUserGoalDate />
    } else {
        return <CreateUserBirthday />
    }
}
