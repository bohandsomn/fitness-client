import { PropsWithChildren } from 'react'

export interface INextStepProps extends PropsWithChildren {
    handleConfirm?: () => void
}