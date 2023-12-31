import { IPickedImageDto } from '@/shared/lib'

export class UpdateSetDto {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly description: string,
        public readonly image: IPickedImageDto,
    ) { }
}