import { ITextAreaProps } from 'native-base'
import { IWithErrors } from '@/shared/lib'

export interface IAppTextareaProps extends Omit<ITextAreaProps, 'children'>, IWithErrors { }