import { ReactNode } from 'react'

export interface ICreateSetModalProps {
    setNameInput: ReactNode
    setDescriptionInput: ReactNode
    setImageButton: ReactNode
    cancel: JSX.Element
    create: JSX.Element
}