import { FC } from 'react'
import { Radio, Text } from 'native-base'
import { IAppRadioProps } from './type'
import { useAppRadio } from './useAppRadio'

export const AppRadio: FC<IAppRadioProps> = ({
    Parent,
    value,
    options,
    handleChange,
    ...props
}) => {
    const {} = useAppRadio()
    return (
        <Radio.Group
            value={value || ''}
            onChange={handleChange as any}
            {...props}
        >
            {options.map(({ publicValue, privateValue }) =>
                Parent ? (
                    <Parent key={privateValue} value={privateValue}>
                        <Radio value={privateValue} colorScheme="black">
                            <Text marginLeft="12px" fontSize="14px" bold>
                                {publicValue}
                            </Text>
                        </Radio>
                    </Parent>
                ) : (
                    <Radio key={privateValue} value={privateValue}>
                        <Text marginLeft="12px" fontSize="14px" bold>
                            {publicValue}
                        </Text>
                    </Radio>
                ),
            )}
        </Radio.Group>
    )
}
