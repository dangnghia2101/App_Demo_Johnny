import { HistoryReportResponseType, HistoryReportType } from '@reduxs/types/historyReportType';
import { apiService } from './apiService';
import { EndPoint } from './endPoint';

export const historyReportService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getHistoryReport: builder.query<HistoryReportType[], void>({
            query: () => {
                return {
                    url: EndPoint.getHistoryReport,
                    method: 'GET',
                }
            },
            transformResponse: (response: HistoryReportResponseType) => response.data
        })
    })
})

export const { useGetHistoryReportQuery, useLazyGetHistoryReportQuery } = historyReportService