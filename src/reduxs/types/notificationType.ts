export interface NotificationType {
    _id: string,
    title: string,
    message: string,
    time: string,
    date: string,
    user: string,
}

export interface NotificationResponseType {
    statusCode: string,
    data: NotificationType[]
}