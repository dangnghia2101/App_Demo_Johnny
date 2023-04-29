import {
    BaseResponse,
    ListBaseResponse,
    ResponseAchievement,
    ResponseLogin,
    UserInfo,
    EditProfileInTerface,
    ParamsLoginType,
} from '@reduxs/types'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import {
    authInfo,
    authToken,
    hideLoading,
    initialUser,
    showLoading,
} from '@reduxs/reducers'

export const authService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        loginGoogle: builder.query<ResponseLogin, ParamsLoginType>({
            query: ({ access_token, fcm_token }) =>
                `${EndPoint.login}${fcm_token}?access_token=${access_token}`,

            transformResponse: (response: { data: ResponseLogin }) =>
                response.data,
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    console.log('LOGIN NE')
                    const { data } = await queryFulfilled

                    dispatch(authToken(data))
                } catch (error) {
                    console.log('[Error] ', error)
                }
            },
        }),
        // [GET] USER BY ID
        getUserInfoByID: builder.query<UserInfo, string>({
            query: (idUser) => EndPoint.getALlUser + '/' + idUser,
            transformResponse: (response: any) => response.data,
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                } catch (error) {}
            },
        }),
        getUserInfo: builder.query<UserInfo, void>({
            query: () => EndPoint.getUserInfor,
            transformResponse: (response: any) => response.data,
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    dispatch(showLoading())
                    const { data } = await queryFulfilled
                    dispatch(authInfo(data))
                    dispatch(hideLoading())
                } catch (error) {
                    console.log('[Error]: getUserInfo ', error)
                    dispatch(authInfo({ ...initialUser, email: undefined }))
                }
            },
            providesTags: ['USER'],
        }),
        // EDIT PROFILE
        putEditProfile: builder.mutation<UserInfo, EditProfileInTerface>({
            query: (edit) => {
                return {
                    url: EndPoint.getUserInfor,
                    method: 'PUT',
                    body: edit,
                }
            },
            invalidatesTags: ['USER'],
        }),
        //  [GET] STAFF LIST
        getStaffList: builder.query<Array<any>, void>({
            query: () => EndPoint.getALlUser,
            transformResponse: (response: any) => response.data,
        }),
        getAchievement: builder.query<
            ListBaseResponse<ResponseAchievement>,
            string
        >({
            query: (type) => `${EndPoint.getAchievements}/${type}`,
            transformResponse: (response: any) => response.data,
            async onQueryStarted(
                _,
                { dispatch, queryFulfilled },
            ): Promise<any> {
                try {
                    const { data } = await queryFulfilled
                    return data.data
                } catch (error) {
                    console.log('[Error] ', error)
                    return error
                } finally {
                    dispatch(hideLoading())
                }
            },
        }),
    }),
})

/* 
* In RTK we have 2 way export function
* Option 1: useLazy${ Name your service function}Query. 
- This way better, because you can call your func in service anytime you want

* Option 2: use${ Name your service function}Query. 
- When you call this func service, it only run first time, component start.
*/

export const {
    useLazyLoginGoogleQuery,
    useLoginGoogleQuery,
    useLazyGetUserInfoQuery,
    useGetStaffListQuery,
    useGetUserInfoQuery,
    usePutEditProfileMutation,
    useGetUserInfoByIDQuery,
    useLazyGetAchievementQuery,
} = authService
