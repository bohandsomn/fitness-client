import { IAppInputProps } from './type'

export const useAppInput = ({
    rules,
}: Pick<IAppInputProps, 'rules'>) => {
    const errors = rules
        ?.map((rule) => rule())
        .filter((error): error is string => error !== null)
    return {
        errors,
    }
}