export interface user {
    _id: string
    name: string
    avatar: string
    phone: string
}

export interface problem {
    _id: string
    name: string
    description: string
}

export interface ProblemSupport {
    _id: string
    room: string
    place: string
    problem: problem
    time: string
    date: string
    user: user
    images?: string[]
}

export interface GetProblemSupport {
    statusCode: number
    data: ProblemSupport[]
}

export interface ProblemPendingSupport {
    _id: string
    room: string
    place: string
    problem: problem
    time: string
    date: string
    timeAccept: string
    user: user
}

export interface GetProblemPendingSupport {
    statusCode: number
    data: ProblemPendingSupport[]
}

export interface ProblemResponseType {
    data: {
        statusCode: number
        data: string
    }
}

export interface ProblemResponse {
    statusCode: number
    data: string
}

export enum problemStatus {
    COMPLETED = 'COMPLETED',
    UNCOMPLETED = 'UNCOMPLETED',
}

export interface ProblemSubmitCompletion {
    description: string
    type: string
    userReportId: string
}
