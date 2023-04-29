import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import {
    ProblemDropDownType,
    ProblemResponse,
    ProblemType,
    RoomResponse,
    SearchType,
    SubmitProblemResponse,
} from '@reduxs/types'

export const reportService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        createReport: builder.mutation<SubmitProblemResponse, FormData>({
            query: (report) => {
                return {
                    url: EndPoint.createReport,
                    method: 'POST',
                    body: report,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                    },
                }
            },
            transformResponse: (response: SubmitProblemResponse) => response,
        }),

        //Lấy danh sách các sự cố
        getReport: builder.query<ProblemDropDownType[], String>({
            query: (problem) => {
                return {
                    url: `${EndPoint.getProblem}?type=${problem}`,
                    method: 'GET',
                }
            },
            transformResponse: (response: ProblemResponse) => {
                const data: ProblemDropDownType[] = response.data.map(
                    (item: ProblemType) => {
                        return {
                            label: item.name,
                            value: item._id,
                        }
                    },
                )
                return data
            },
        }),

        //Lấy danh sách các phòng
        getRoom: builder.query<SearchType[], string>({
            query: (value) => {
                return {
                    url: EndPoint.getRoom,
                    method: 'GET',
                    params: {
                        size: '10',
                        page: '1',
                        search: value || 'f0',
                    },
                }
            },
            transformResponse: (response: RoomResponse) => {
                const data: SearchType[] = response.data.items.map((item) => {
                    return {
                        id: item._id,
                        name: item.name,
                    }
                })
                return data
            },
        }),

        // Lấy chi tiết báo cáo sự cố
        getReportDetail: builder.query<any, object>({
            query: (id) => `${EndPoint.getReportDetail}/${id}`,
            transformResponse: (response: any) => response.data,
        }),
    }),
})

export const {
    useCreateReportMutation,
    useGetReportQuery,
    useGetRoomQuery,
    useGetReportDetailQuery,
    useLazyGetReportDetailQuery,
} = reportService
