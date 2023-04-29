import { apiService } from './apiService'
import { EndPoint } from './endPoint'

import {
    GetProblemPendingSupport,
    GetProblemSupport,
    ProblemPendingSupport,
    ProblemSubmitCompletion,
    ProblemSupport,
} from '@reduxs/types/problemSupportType'
import { ProblemResponse } from '@reduxs/types'

export const problemSupportServices = apiService.injectEndpoints({
    endpoints: (builder) => ({
        // GET LIST PROBLEM SUPPORT
        getProblemSupportList: builder.query<ProblemSupport[], void>({
            query: () => EndPoint.createReport,
            transformResponse: (response: GetProblemSupport) => {
                const { data } = response
                const transform: ProblemSupport[] = []

                data.map((item: ProblemSupport) => {
                    transform.push({
                        _id: item._id,
                        date: item.date,
                        place: item.place,
                        problem: item.problem,
                        room: item.room,
                        time: item.time,
                        user: item.user,
                        images: item?.images,
                    })
                })

                return transform
            },
        }),

        // GET LIST PROBLEM PENDING
        getProblemPendingList: builder.query<ProblemPendingSupport[], void>({
            query: () => EndPoint.problemPending,
            transformResponse: (response: GetProblemPendingSupport) => {
                const { data } = response

                const transform: ProblemPendingSupport[] = []

                data.map((item: ProblemPendingSupport) => {
                    transform.push({
                        _id: item._id,
                        date: item.date,
                        place: item.place,
                        problem: item.problem,
                        room: item.room,
                        time: item.time,
                        user: item.user,
                        timeAccept: item.timeAccept,
                    })
                })

                return transform
            },
        }),

        // SUBMIT PROBLEM SUPPORT
        submitProblem: builder.mutation<any, string>({
            query(id) {
                return {
                    url: `${EndPoint.submitReport}${id}`,
                    method: 'POST',
                }
            },

            transformResponse: (response: ProblemResponse) => {
                return response
            },
        }),

        // COMPLETE PROBLEM SUPPORT
        completeProblem: builder.mutation<any, ProblemSubmitCompletion>({
            query(complete) {
                return {
                    url: EndPoint.completeReport,
                    method: 'POST',
                    body: complete,
                }
            },
            transformResponse: (response: ProblemResponse) => {
                return response
            },
        }),
    }),
})

export const {
    useLazyGetProblemSupportListQuery,
    useLazyGetProblemPendingListQuery,
    useSubmitProblemMutation,
    useCompleteProblemMutation,
} = problemSupportServices
