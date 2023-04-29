import { apiService } from './apiService'
import { EndPoint } from './endPoint'
import { ReportProblemType, Problem } from '@reduxs/types/problemType'

export const problemService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getTypesProblem: builder.query<Problem[], String>({
            query: (problem) => {
                return {
                    url: `${EndPoint.getProblem}?type=${problem}`,
                    method: 'GET',
                }
            },
            transformResponse: (response: any) => response.data,
        }),
        getReportsProblemInDay: builder.query<ReportProblemType[], object>({
            query: ({ type, id }: { type: string; id: string }) => {
                return {
                    url: `${EndPoint.getReportsProblemInDay}/${type}/${id}`,
                    method: 'GET',
                }
            },
            transformResponse: (response: any) => response.data,
        }),
    }),
})

export const {
    useGetReportsProblemInDayQuery,
    useLazyGetReportsProblemInDayQuery,
    useGetTypesProblemQuery,
} = problemService
