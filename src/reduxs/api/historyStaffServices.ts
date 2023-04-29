import {
    StaffHistoryResponseType,
    StaffHistoryType,
} from '@reduxs/types/staffHistoryType'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'

const historyStaff = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getHistoryStaff: builder.query<StaffHistoryType[], void>({
            query: () => {
                return {
                    url: EndPoint.getReportHistoryStaff,
                    method: 'GET',
                }
            },
            transformResponse: (response: StaffHistoryResponseType) => {
                const data: StaffHistoryType[] = response.data
                return data
            },
        }),
    }),
})

export const { useLazyGetHistoryStaffQuery } = historyStaff
