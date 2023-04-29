export interface UserResolveProblemType {
    _id: string,
    name: string,
    phone: string,
    avatar: string
}

export interface HistoryReportType {
    _id: string,
    problem: string,
    description: string,
    time: string,
    date: string,
    room: string,
    userResolveProblem: UserResolveProblemType,
}

export interface HistoryReportResponseType {
    statusCode: string,
    data: HistoryReportType[]
}