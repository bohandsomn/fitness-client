import { apiUrl } from '../../config'
import { HttpBuilder, INetworkHttp } from '../../network'
import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { RelativePath } from '../constants'
import { userTokenToUser } from './mapper'
import { IAuthApi, ILogInDto, IRegisterDto } from './type'
import { IUserPayloadDto } from './type/userPayload.dto'
import { UserTokenDto } from './dto/userToken.dto'

class AuthApi implements IAuthApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }

    async register(dto: IRegisterDto): Promise<IUserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof IRegisterDto>> {
        const response = await this.http.post<IRegisterDto, UserTokenDto>({
            body: dto,
            relativePath: 'register',
        })
        return userTokenToUser(response)
    }

    async logIn(dto: ILogInDto): Promise<IUserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof ILogInDto>> {
        const response = await this.http.post<ILogInDto, UserTokenDto>({
            body: dto,
            relativePath: 'log-in',
        })
        return userTokenToUser(response)
    }

    async autoLogIn(): Promise<IUserPayloadDto | ExceptionErrorResponseDto> {
        const response = await this.http.get<null, UserTokenDto>({
            body: null,
            relativePath: 'auto-log-in',
        })
        return userTokenToUser(response) as any
    }

    async logOut(): Promise<void | ExceptionErrorResponseDto> {
        return this.http.get({
            body: null,
            relativePath: 'log-out',
        })
    }
}

const authWithoutRefresh = new AuthApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.AUTH)
        .build()
)

const authWithRefresh = new AuthApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.AUTH)
        .setSendAuthToken(true)
        .build()
)

export const authApi: IAuthApi = {
    register: authWithoutRefresh.register.bind(authWithoutRefresh),
    logIn: authWithoutRefresh.logIn.bind(authWithoutRefresh),
    autoLogIn: authWithRefresh.autoLogIn.bind(authWithRefresh),
    logOut: authWithoutRefresh.logOut.bind(authWithoutRefresh),
}
