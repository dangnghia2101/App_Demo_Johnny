import {
  DataRespon,
  GetContactRespon,
  SectionListTransform,
} from '@reduxs/types'
import { apiService } from './apiService'
import { EndPoint } from './endPoint'

export const getContactsService = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getContacts: builder.query<SectionListTransform[], void>({
      query: () => EndPoint.getContactList,
      transformResponse: (response: GetContactRespon) => {
        const { data } = response
        //transform to SectionListTransform for the section list
        const transformed: SectionListTransform[] = []

        data.map((item: DataRespon) => {
          transformed.push({
            title: item.title,
            data: item.user,
          })
        })

        return transformed
      },
    }),
  }),
})

export const { useLazyGetContactsQuery } = getContactsService
