import { FC } from 'react'
import { IWithErrors } from './type'
import { List, View, Text } from 'native-base'

export function withErrors<Props extends IWithErrors>(
    Component: FC<Props>,
): FC<Props> {
    const useComponentWithErrors = ({ rules }: IWithErrors) => {
        const errors = rules
            ?.map((rule) => rule())
            .filter((error): error is string => error !== null)
        return {
            errors,
        }
    }
    const ComponentWithErrors: FC<Props> = (props) => {
        const { errors } = useComponentWithErrors(props)
        return (
            <View>
                <Component {...props} />
                {errors?.length ? (
                    <List>
                        {errors.map((error) => (
                            <Text color="red.400" key={error}>
                                {error}
                            </Text>
                        )) || <></>}
                    </List>
                ) : undefined}
            </View>
        )
    }
    return ComponentWithErrors
}
