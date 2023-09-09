import { useCallback, useEffect } from 'react'
import { AuthConst, AuthException, NotificationType, PageNames, StepConst, UserPayloadDto, errorAdapter, useAppNavigation, useNotification } from '@/shared'
import { useCreateUserStateSelector, useUserModel } from '@/entities'

export const useCreateUserSteps = () => {
    const notification = useNotification()
    const createUserContext = useCreateUserStateSelector((state) => state)
    const { user, registerUser } = useUserModel()
    const navigation = useAppNavigation()
    const handleRegisterUser = useCallback(async () => {
        const {
            name,
            email,
            difficulty,
            height,
            weight,
            goalWeight,
            goalDate,
            gender,
            birthday,
            password,
            confirmPassword,
        } = createUserContext
        if (!name) {
            return notification.fail(AuthException.IS_EMPTY_NAME)
        }
        if (!email) {
            return notification.fail(AuthException.IS_NOT_EMAIL)
        }
        if (!difficulty) {
            return notification.fail(AuthException.IS_DIFFICULTY)
        }
        if (!height) {
            return notification.fail(AuthException.IS_HEIGHT)
        }
        if (!weight) {
            return notification.fail(AuthException.IS_NOT_POSITIVE_WEIGHT)
        }
        if (!goalWeight) {
            return notification.fail(AuthException.IS_NOT_POSITIVE_WEIGHT)
        }
        if (!goalDate) {
            return notification.fail(AuthException.IS_GOAL_DATE)
        }
        if (!gender) {
            return notification.fail(AuthException.IS_GENDER)
        }
        if (!birthday) {
            return notification.fail(AuthException.IS_BIRTH_DATE)
        }
        if (!password) {
            return notification.fail(AuthException.IS_NOT_PASSWORD)
        }
        if (!confirmPassword) {
            return notification.fail(AuthException.IS_NOT_PASSWORD)
        }
        const response = await registerUser({
            name,
            email,
            difficulty,
            height,
            weight,
            goalWeight,
            goalDate,
            gender,
            birthday,
            password,
            confirmPassword,
        })
        if (UserPayloadDto.isUserPayload(response)) {
            return
        }
        const errors = errorAdapter({
            message: response as any
        })
        notification.broadcast(errors, { type: NotificationType.FAIL })
    }, [createUserContext, registerUser, notification])

    useEffect(() => {
        if (!user.data || user.isLoading) {
            return
        }
        navigation.goTo(PageNames.TRAININGS)
    }, [user])
    const label = AuthConst.CONFIRM
    const metric = StepConst.STEPS
    return {
        handleRegisterUser,
        label,
        metric,
    }
}