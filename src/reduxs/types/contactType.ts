// export interface GetContactServiceResponse {
//   statusCode: number
//   data: Data[]
// }

//transformed data to SectionList type
export interface SectionListTransform {
  title: string
  data: User[]
}

//mapping with response from server
export interface GetContactRespon {
  statusCode: number
  data: DataRespon[]
}

export interface DataRespon {
  title: string
  _id: string
  user: User[]
}

export interface User {
  unNotification: boolean
  _id: string
  email: string
  name?: string
  department?: null
  role: string
  username: string
  phone: string
  status: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
  __v: number
  departmentDetail: DepartmentDetail
}

export interface DepartmentDetail {
  _id: string
  department: string
  section: string
}
