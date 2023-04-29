export interface Room {
    _id: string,
    place:string,
    floor: string,
    name : string,
    index : number | null,
    status : string,
    color : string,
}
export interface Rooms {
    image : string,
    result : Array<Room>
}
export interface Infrastructure {
    _id: string,
    name: string,
    description: string,
    createdAt: string,
    updatedAt: string,
}


export interface DetailRoom {
    _id: string,
    infrastructure: Infrastructure,
    room : Room,
    quantity : number,
    status : string,
    note: string,
}
export interface ListDetailUpdate {
    roomDetailId: string,
    status : string,
    note: string,
}
export interface UpdateDeltailRoom {
    roomDetails : Array<ListDetailUpdate>
}