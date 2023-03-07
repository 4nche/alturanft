import { Action, combineReducers, configureStore, Middleware,  ThunkAction } from '@reduxjs/toolkit'
import { logger }  from "redux-logger"
import { useDispatch } from 'react-redux'
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import { Store } from 'redux'
import { nftsApi } from '~/client/services/nfts';

type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const useAppDispatch: () => AppDispatch = useDispatch

const rootReducer = combineReducers({
  [nftsApi.reducerPath]: nftsApi.reducer,
})

function isServer() {
  return ! (typeof window != 'undefined' && window.document)
}

const apiMiddleware = [
  nftsApi.middleware,
]


const makeStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware: Middleware[] = [
      ...getDefaultMiddleware(),
      ...isServer() ? [] : [logger],
      // RTK middleware
      ...apiMiddleware,
    ]

    return middleware
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export const wrapper = createWrapper<Store<AppState>>(makeStore, {debug: true});

