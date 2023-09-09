import { UserGender } from '@/shared'
import { createSelectProvider } from '../../../management/lib/select/createSelectProvider'
import { userGenderOptions } from '../../const'

export const {
    SelectProvider: SelectGenderProvider,
    useSelectStateSelector: useSelectGenderStateSelector,
    useSelectStateUpdate: useSelectGenderStateUpdate,
} = createSelectProvider<UserGender>({
    name: 'SelectGender',
    initialState: {
        options: userGenderOptions,
        value: UserGender.MALE
    }
})