import { UpdateUserDto } from './dto'
import { IUserApi } from './type'
import { HttpBuilder, INetworkHttp } from '../../network'
import { UserPayloadDto, UserTokenDto, userTokenToUser } from '../auth'
import { RelativePath } from '../constants'
import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { apiUrl } from '../../config'

class UserApi implements IUserApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }

    async updateUser(dto: UpdateUserDto): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof UpdateUserDto>> {
        const response = await this.http.put<UpdateUserDto, UserTokenDto>({
            body: dto,
            relativePath: ''
        })
        return userTokenToUser(response)
    }
}

export const userApi = new UserApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.USER)
        .setSendAuthToken(true)
        .build()
)
