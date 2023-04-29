import {
  DropDownType,
  ExtensionTimeResponse,
  ExtenstionOfTimeRequest,
  SubmitCompletePrblemResponse,
  SubmitCompletionRequest,
} from '@reduxs/types'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'

const InfastructureFailureService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getExtendedTime: builder.query<DropDownType[], string>({
      query: (id) => EndPoint.getExtensionTime + id,
      transformResponse: (response: ExtensionTimeResponse) => {
        const transformed: DropDownType[] = []
        response.data.map((item) => {
          transformed.push({ label: `${item} phút`, value: item.toString() })
        })
        return transformed
      },
    }),

    putExtendedTime: builder.mutation<any, ExtenstionOfTimeRequest>({
      query: (request) => {
        return {
          url: EndPoint.putExtensionTime + request.userIdReport,
          method: 'PUT',
          body: {
            extensionTime: request.ExtensionTime,
          },
        }
      },
      transformResponse: (response: any) => {
        return response
      },
    }),

    postSubmitCompletion: builder.mutation<
      SubmitCompletePrblemResponse,
      SubmitCompletionRequest
    >({
      query: (request) => {
        return {
          url: EndPoint.postSubmitCompetion,
          method: 'POST',
          body: request,
        }
      },
      transformResponse: (response: SubmitCompletePrblemResponse) => response,
    }),
  }),
})

export const {
  useLazyGetExtendedTimeQuery,
  usePutExtendedTimeMutation,
  usePostSubmitCompletionMutation,
} = InfastructureFailureService
