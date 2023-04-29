export interface ExtenstionOfTimeRequest {
  userIdReport: string
  ExtensionTime: number
}

export type DropDownType = {
  label: string
  value: string
}

export enum ProblemBy {
  TEACHER = 'TEACHER',
  ADMINISTRATIVE_STAFF = 'ADMINISTRATIVE_STAFF',
  OTHER = 'OTHER',
}

export enum Status {
  COMPLETED = 'COMPLETED',
  UNCOMPLETED = 'UNCOMPLETED',
}

export type SubmitCompletionRequest = {
  description: string
  type: Status.COMPLETED | Status.UNCOMPLETED
  userReportId: string
  problemBy:
    | ProblemBy.TEACHER
    | ProblemBy.ADMINISTRATIVE_STAFF
    | ProblemBy.OTHER
}

export interface SubmitCompletePrblemResponse {
  statusCode: number
  data: []
}

export interface ExtensionTimeResponse{
  statusCode: number
  data: number[]
}
