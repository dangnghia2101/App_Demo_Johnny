import { NotificationResponseType, NotificationType } from '@reduxs/types/notificationType';
import { apiService } from './apiService';
import { EndPoint } from './endPoint';

export const notificationService = apiService.injectEndpoints({
    endpoints: (builder) => ({
        getListNotification: builder.query<NotificationType[], void>({
            query: () => {
                return {
                    url: EndPoint.getNotification,
                    method: 'GET',
                }
            },
            transformResponse: (response: NotificationResponseType) => response.data
        })
    })
})

export const { useGetListNotificationQuery } = notificationService