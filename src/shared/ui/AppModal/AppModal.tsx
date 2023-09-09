import { FC } from 'react'
import { Button, Center, Modal, Text } from 'native-base'
import { IAppModalProps } from './type'
import { useAppModal } from './useAppModal'
import { AppBlur, BlurType } from '../AppBlur'

export const AppModal: FC<IAppModalProps> = ({
    children,
    header,
    send,
    cancel,
    isBlur,
    isLight,
    width = '90%',
    height,
    open,
    close,
}) => {
    const { backgroundColor } = useAppModal()
    return (
        <Center>
            <Modal isOpen={open} onClose={close}>
                {isBlur && (
                    <AppBlur type={isLight ? BlurType.LIGHT : BlurType.DARK} />
                )}
                <Modal.Content height={height} width={width}>
                    <Modal.Header bgColor={backgroundColor}>
                        <Text fontSize="24px">{header}</Text>
                        <Modal.CloseButton />
                    </Modal.Header>
                    <Modal.Body bgColor={backgroundColor}>
                        {children}
                    </Modal.Body>
                    <Modal.Footer bgColor={backgroundColor}>
                        <Button.Group space="2">
                            {cancel}
                            {send}
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    )
}
