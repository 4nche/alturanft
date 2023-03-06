import { Action, combineReducers, configureStore, Middleware,  ThunkAction } from '@reduxjs/toolkit'
import { logger }  from "redux-logger"
import { useDispatch } from 'react-redux'
import { nftsSlice } from '~/state/nfts'


type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const useAppDispatch: () => AppDispatch = useDispatch

const rootReducer = combineReducers({
  [nftsSlice.name]: nftsSlice.reducer,
})

function isServer() {
  return ! (typeof window != 'undefined' && window.document)
}


const makeStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware: Middleware[] = [
      ...getDefaultMiddleware(),
      ...isServer() ? [] : [logger],
    ]

    return middleware
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export const store = makeStore()
