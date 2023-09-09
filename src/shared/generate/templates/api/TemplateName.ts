import { ITemplateNameApi } from './type'
import { apiUrl } from '../../config'
import { HttpBuilder, INetworkHttp } from '../../network'
import { RelativePath } from '../constants'

class TemplateNameApi implements ITemplateNameApi {
    constructor(
        private readonly http: INetworkHttp
    ) { }
}

export const templateNameApi = new TemplateNameApi(
    new HttpBuilder()
        .setBaseURL(apiUrl)
        .setRelativePath(RelativePath.TEMPLATE_NAME)
        .setSendAuthToken(true)
        .build()
)