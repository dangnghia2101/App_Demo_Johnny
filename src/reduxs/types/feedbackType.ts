export interface Feedback {
    _id: string,
    completion: string,
    start: number,
    date: string,
    time: string,
    evaluate: string,
    user: StaffFeedback,
    room: string | null,
    problem: ProblemFeedback
    userFeedback: {
        _id: string,
        name: string,
        avatar: string,
    }
}
interface ProblemFeedback {
    _id: string | null,
    name: string | null,
    description: string | null
}

interface StaffFeedback {
    _id: string,
    name: string,
    avatar: string | null,
    phone: string
}
export interface itemsFeedback {
    items: FeedbackList[]
}
export interface departmentDetail {
    items: Feedback[]
}
export interface FeedbackList {
    _id: string,
    title: string,
    feedbacks: Array<Feedback>
}
