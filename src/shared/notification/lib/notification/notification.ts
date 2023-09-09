import { useToast } from 'native-base'
import {
    IBroadcastNotificationOptions,
    IGetColorsDto,
    IGetColorsResultDto,
    INotification,
    INotificationId,
    INotificationOptions,
    INotificationOptionsWithoutMessage,
    NotificationType,
    Placement,
} from './type'

export class Notification implements INotification {
    constructor(
        private readonly toastService: ReturnType<typeof useToast>,
        private readonly options?: Partial<
            Pick<INotificationOptions, 'duration'>
        >,
    ) { }

    info(message: string): INotificationId
    info(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    info(options: Partial<INotificationOptions>): INotificationId
    info(message: unknown, options?: unknown): INotificationId {
        const adaptedOptions = (this.adaptOptions as any)(message, options)
        return this.notify(adaptedOptions, NotificationType.INFO)
    }

    success(message: string): INotificationId
    success(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    success(options: Partial<INotificationOptions>): INotificationId
    success(message: unknown, options?: unknown): INotificationId {
        const adaptedOptions = (this.adaptOptions as any)(message, options)
        return this.notify(adaptedOptions, NotificationType.SUCCESS)
    }

    pending(message: string): INotificationId
    pending(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    pending(options: Partial<INotificationOptions>): INotificationId
    pending(message: unknown, options?: unknown): INotificationId {
        const adaptedOptions = (this.adaptOptions as any)(message, options)
        return this.notify(adaptedOptions, NotificationType.PENDING)
    }

    fail(message: string): INotificationId
    fail(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationId
    fail(options: Partial<INotificationOptions>): INotificationId
    fail(message: unknown, options?: unknown): INotificationId {
        const adaptedOptions = (this.adaptOptions as any)(message, options)
        return this.notify(adaptedOptions, NotificationType.FAIL)
    }

    broadcast(
        messages: string[],
        options?: Partial<IBroadcastNotificationOptions>,
    ): void {
        const defaultOptions: IBroadcastNotificationOptions = {
            duration: 2000,
            placement: Placement.TOP,
            type: NotificationType.INFO,
            ...options,
        }
        const { textColor, bgColor } = this.getColors({
            type: defaultOptions.type,
        })
        messages.map((message, index) => {
            setTimeout(
                () =>
                    this.toastService.show({
                        description: message,
                        duration: defaultOptions.duration,
                        placement: defaultOptions.placement,
                        color: textColor,
                        backgroundColor: bgColor,
                    }),
                defaultOptions.duration * index,
            )
        })
    }

    close(id: INotificationId) {
        this.toastService.close(id)
    }

    private adaptOptions(message: string): INotificationOptions
    private adaptOptions(
        message: string,
        options: Partial<INotificationOptionsWithoutMessage>,
    ): INotificationOptions
    private adaptOptions(
        options: Partial<INotificationOptions>,
    ): INotificationOptions
    private adaptOptions(
        message: unknown,
        options?: unknown,
    ): INotificationOptions {
        const defaultOptions: INotificationOptions = {
            duration: this.options?.duration || 3000,
            message: '',
            placement: Placement.TOP,
        }
        if (typeof message === 'string') {
            defaultOptions.message = message
            if (typeof options === 'object' && options !== null) {
                const typedOptions: Partial<INotificationOptionsWithoutMessage> =
                    options
                defaultOptions.duration =
                    typedOptions.duration || defaultOptions.duration
                defaultOptions.placement =
                    typedOptions.placement || defaultOptions.placement
            }
        } else if (typeof message === 'object' && message !== null) {
            const typedOptions: Partial<INotificationOptions> = message
            defaultOptions.duration =
                typedOptions.duration || defaultOptions.duration
            defaultOptions.message =
                typedOptions.message || defaultOptions.message
            defaultOptions.placement =
                typedOptions.placement || defaultOptions.placement
        }
        return defaultOptions
    }

    private notify(
        options: INotificationOptions,
        type: NotificationType,
    ): INotificationId {
        const { textColor, bgColor } = this.getColors({
            type,
        })
        return this.toastService.show({
            description: options.message,
            duration: options.duration,
            placement: options.placement,
            color: textColor,
            backgroundColor: bgColor,
        })
    }

    private getColors(dto: IGetColorsDto): IGetColorsResultDto {
        const textColor =
            dto.type === NotificationType.INFO
                ? 'info.400'
                : dto.type === NotificationType.FAIL
                    ? 'error.400'
                    : dto.type === NotificationType.PENDING
                        ? 'gray.400'
                        : dto.type === NotificationType.SUCCESS
                            ? 'success.400'
                            : ''
        const bgColor =
            dto.type === NotificationType.INFO
                ? 'info.900'
                : dto.type === NotificationType.FAIL
                    ? 'error.900'
                    : dto.type === NotificationType.PENDING
                        ? 'gray.900'
                        : dto.type === NotificationType.SUCCESS
                            ? 'success.900'
                            : ''
        return {
            textColor,
            bgColor,
        }
    }
}
