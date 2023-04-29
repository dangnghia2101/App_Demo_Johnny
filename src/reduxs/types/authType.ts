import { Feedback } from './feedbackType'

export interface ResponseLogin {
    accessToken: string
    refreshToken: string
}

export enum Roles {
    OPERATOR = 'OPERATOR',
    TEACHER = 'TEACHER',
    ADMINISTRATIVE_STAFF = 'ADMINISTRATIVE_STAFF',
    AMIN = 'AMIN',
    MANAGER = 'MANAGER',
}
export interface UserInfo {
    name: string
    email: string | undefined
    phone: string
    avatar: string
    unNotification: boolean
    department: string
    fcm_tokens: string
    section: string
    feedback: Array<Feedback>
    role: {
        name:
            | Roles.OPERATOR
            | Roles.TEACHER
            | Roles.ADMINISTRATIVE_STAFF
            | Roles.AMIN
            | Roles.MANAGER
            | ''
    }
}
export interface ListStaff {
    id: string
    title: string
    user: Array<UserInfo>
}
export interface ResultAPIAuth {
    data: {
        data: any
        statusCode: number
    }
}
export interface EditProfileInTerface {
    name: string
    phone: string
    unNotification: boolean
}
export interface AuthState {
    token: string
    refreshToken: string
    user: UserInfo
    enableLogin: boolean
}

export interface ResponseFeedback {
    _id: string
    room: string
    start: number
    evaluate: string
    user: {
        _id: string
        name: string
        avatar: string
    }
    userFeedback: {
        _id: string
        name: string
        avatar: string
    }
    problem: {
        _id: string
        name: string
        description: string
    }
}

export interface ResponseAchievement {
    _id: string
    email: string
    name: string
    unNotification: boolean
    section: string
    avatar: string
    username: string
    totalStart: number
    totalFeedback: number
    feedbacks: ResponseFeedback[]
}

export interface ParamsLoginType {
    fcm_token: string
    access_token: string
}
