import { Asset } from 'react-native-image-picker/lib/typescript/types'

export interface ProblemType {
    _id: string
    name: string
    description: string
}

export interface RoomType {
    _id: string
    place: string
    floor: string
    name: string
    index: string
    status: string
}

export interface RoomResponse {
    statusCode: number
    data: {
        items: RoomType[]
    }
}

export interface ProblemResponse {
    statusCode: number
    data: []
}

export interface SubmitProblemResponse {
    statusCode: number
    data: string
}

export interface ReportType {
    room: string
    problem: string | undefined
    description: string
    files?: Asset[]
}

export interface SearchType {
    id: string
    name: string
}

export interface ReportRoomType {
    id: string
    name: string
}

export interface ProblemDropDownType {
    label: string
    value: string
}
export enum ProblemQueryType {
    NORMAL = 'NORMAL',
    IT_SUPPORT = 'IT_SUPPORT',
}

export interface DropType {
    label: string
    value: string
}
