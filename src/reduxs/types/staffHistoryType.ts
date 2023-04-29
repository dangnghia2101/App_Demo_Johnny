export interface StaffHistoryResponseType {
    statusCode: number | string
    data: StaffHistoryType[]
}

export interface StaffHistoryType {
    _id: string
    date: string
    description: string
    images: string[]
    problem: string
    time: string
    room: string
    userRequestProblem: UserStaffType
}

export interface UserStaffType {
    _id: string
    name: string
    avatar: string
    phone: string
}
