import { apiUrl } from '../../config'
import { HttpBuilder, INetworkHttp } from '../../network'
import { ExceptionErrorResponseDto, ValidationErrorResponseDto } from '../dto'
import { RelativePath } from '../constants'
import { createUserContextToRegister, userTokenToUser } from './mapper'
import { IAuthApi } from './type'
import { UserPayloadDto, UserTokenDto, LogInDto, RegisterDto, CreateUserContext } from './dto'

class AuthApi implements IAuthApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }

    async register(dto: CreateUserContext): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof RegisterDto>> {
        const body = createUserContextToRegister(dto) as RegisterDto
        const response = await this.http.post<RegisterDto, UserTokenDto>({
            body,
            relativePath: 'register',
        })
        return userTokenToUser(response)
    }

    async logIn(dto: LogInDto): Promise<UserPayloadDto | ExceptionErrorResponseDto | ValidationErrorResponseDto<keyof LogInDto>> {
        const response = await this.http.post<LogInDto, UserTokenDto>({
            body: dto,
            relativePath: 'log-in',
        })
        return userTokenToUser(response)
    }

    async autoLogIn(): Promise<UserPayloadDto | ExceptionErrorResponseDto> {
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

const authWithCookies = new AuthApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.AUTH)
        .setSendCookies(true)
        .build()
)

export const authApi: IAuthApi = {
    register: authWithoutRefresh.register.bind(authWithoutRefresh),
    logIn: authWithoutRefresh.logIn.bind(authWithoutRefresh),
    autoLogIn: authWithRefresh.autoLogIn.bind(authWithRefresh),
    logOut: authWithCookies.logOut.bind(authWithCookies),
}
