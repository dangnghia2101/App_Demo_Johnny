
import {  InfoTower } from '@reduxs/types'; 
import { apiService } from './apiService';
import { EndPoint } from './endPoint';



export const room = apiService.injectEndpoints({
    endpoints: (builder) => ({
        //Api get danh sách các tòa nhà 
        getPlaceFloor : builder.query<Array<InfoTower>,void>({
            query : () => EndPoint.roomPlaceFloor,
            transformResponse: (response: any) => response.data
        }),
    })
})
export const {useGetPlaceFloorQuery} = room