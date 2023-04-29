import { apiService } from './apiService';
import { EndPoint } from './endPoint';
import { departmentDetail, itemsFeedback } from '@reduxs/types/feedbackType';

export const feedbackService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        //  [GET] FEEDBACK LIST
        getFeedBackList: builder.query<itemsFeedback, void>({
            query: () => EndPoint.getAllFeedBack,
            transformResponse: (response: any) => response.data,
        }),
        // [GET] DEPARTMENT DETAIL
        getDepartmentDetail: builder.query<departmentDetail, string>({
            query: (id) => EndPoint.getDepartmentDetail + id + '&mix=false',
            transformResponse: (response: any) => response.data,
        }),
        feedback: builder.mutation<any, any>({
            query: (feedback) => {
                return {
                    url: EndPoint.feedback,
                    method: 'POST',
                    body: feedback,
                }
            },
        }),
    }),
});

export const {
    useGetFeedBackListQuery,
    useGetDepartmentDetailQuery,
    useFeedbackMutation
} = feedbackService;
