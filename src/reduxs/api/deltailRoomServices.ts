
import { DetailRoom, Rooms, UpdateDeltailRoom } from '@reduxs/types'; 
import { apiService } from './apiService';
import { EndPoint } from './endPoint';



export const deltailRoom = apiService.injectEndpoints({
    endpoints: (builder) => ({
        //API Get Các phòng học trong 1 lầu
        getFloorRoomId : builder.query<Rooms,string>({
            query : (id) => `${EndPoint.floorRoomId}${id}`,
            transformResponse: (response: any) => response.data
        }),
        //Get Detail Room
        getDetailRoom : builder.query<Array<DetailRoom>, string>({
            query : (id) =>`${EndPoint.detailRoom}${id}`,
            transformResponse: (response: any) => response.data 
        }),
        //API Lấy Deltail Room
        updateDetailRoom : builder.mutation<any, UpdateDeltailRoom>({
            query : (data) =>{
                return {
                    url : EndPoint.updateDetailRoom,
                    method : 'PUT',
                    body : data,
                }
            },
            transformResponse: (response: any) => response.statusCode,
        }),
    })
})
export const {useGetFloorRoomIdQuery,useLazyGetDetailRoomQuery, useUpdateDetailRoomMutation} = deltailRoom