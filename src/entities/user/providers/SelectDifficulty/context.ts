import { UserDifficulty } from '@/shared'
import { createSelectProvider } from '../../../management/lib/select/createSelectProvider'
import { userDifficultyOptions } from '../../const'

export const {
    SelectProvider: SelectDifficultyProvider,
    useSelectStateSelector: useSelectDifficultyStateSelector,
    useSelectStateUpdate: useSelectDifficultyStateUpdate,
} = createSelectProvider<UserDifficulty>({
    name: 'SelectDifficulty',
    initialState: {
        options: userDifficultyOptions,
        value: UserDifficulty.BEGINNER
    }
})