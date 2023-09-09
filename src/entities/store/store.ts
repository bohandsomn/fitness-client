import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../user'
import { bodyPartReducer, typeReducer } from '../characteristic'

const store = configureStore({
    reducer: {
        user: userReducer,
        bodyPart: bodyPartReducer,
        type: typeReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
