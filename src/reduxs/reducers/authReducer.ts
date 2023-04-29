import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, ResponseLogin, Roles, UserInfo } from '@reduxs/types'
import { RootReducerName } from './type'

export const initialUser: UserInfo = {
    avatar: '',
    email: '',
    name: '',
    phone: '',
    department: '',
    fcm_tokens: '',
    unNotification: false,
    role: '',
}

const defaultAuthState: AuthState = {
    enableLogin: true,
    token: '',
    refreshToken: '',
    user: initialUser,
}

const authSlice = createSlice({
    name: RootReducerName.auth,
    initialState: defaultAuthState,
    reducers: {
        authToken(state: AuthState, action: PayloadAction<ResponseLogin>) {
            state.token = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.enableLogin = false
        },
        authInfo(state: AuthState, action: PayloadAction<UserInfo>) {
            state.user = action.payload
        },
        authLogout(state: AuthState, action: PayloadAction<ResponseLogin>) {
            ;(state.token = action.payload.accessToken),
                (state.refreshToken = action.payload.refreshToken),
                (state.enableLogin = true),
                (state.user = initialUser)
        },
        changeStatusLogin: (
            state: AuthState,
            action: PayloadAction<boolean>,
        ) => {
            state.enableLogin = action.payload
        },
        fakeLogin(state: AuthState, action: PayloadAction<AuthState>) {
            return (state = action.payload)
        },
    },
})

export const { authToken, authInfo, changeStatusLogin, authLogout, fakeLogin } =
    authSlice.actions
export const AuthReducer = authSlice.reducer
