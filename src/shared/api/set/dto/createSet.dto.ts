import { IPickedImageDto } from '@/shared/lib'

export class CreateSetDto {
    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly image: IPickedImageDto,
    ) { }
}