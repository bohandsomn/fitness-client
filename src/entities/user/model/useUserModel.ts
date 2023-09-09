import { useCallback } from 'react'
import { IErrorMessage, useAppDispatch, useAppSelector } from '@/entities'
import { CreateUserContext, LogInDto, UpdateUserDto, UserPayloadDto } from '@/shared'
import { autoLogInUserAction, logInUserAction, logOutUserAction, registerUserAction, updateUserAction } from './asyncThunk'
import { IUserModel } from './type'

export const useUserModel = (): IUserModel => {
    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    const registerUser = useCallback(async (context: CreateUserContext): Promise<UserPayloadDto | IErrorMessage> => {
        const { payload } = await dispatch(registerUserAction(context))
        return payload as any
    }, [dispatch])
    const logInUser = useCallback(async (dto: LogInDto): Promise<UserPayloadDto | IErrorMessage> => {
        const { payload } = await dispatch(logInUserAction(dto))
        return payload as any
    }, [dispatch])
    const autoLogInUser = useCallback(async (): Promise<UserPayloadDto | IErrorMessage> => {
        const { payload } = await dispatch(autoLogInUserAction())
        return payload as any
    }, [dispatch])
    const logOutUser = useCallback(async (): Promise<void | IErrorMessage> => {
        const { payload } = await dispatch(logOutUserAction())
        return payload as any
    }, [dispatch])
    const updateUser = useCallback(async (dto: UpdateUserDto): Promise<UserPayloadDto | IErrorMessage> => {
        const { payload } = await dispatch(updateUserAction(dto))
        return payload as any
    }, [dispatch])
    return {
        user,
        registerUser,
        logInUser,
        autoLogInUser,
        logOutUser,
        updateUser,
    }
}