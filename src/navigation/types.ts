import { routes } from './utils'

export type TeacherParamList = {
    [routes.teacher]: undefined
    [routes.report]: undefined
    [routes.notification]: undefined
    [routes.contactInfor]: {
        userContact: {
            avatar: string
            name: string
            phone: string
            role: string
        }
    }
    [routes.searchRoomTeacher]: undefined
    [routes.settingTeacher]: undefined
    [routes.historyDetailTeacher]: {
        id: string
        disabledFeedback: boolean
    }
    [routes.editProfile]: undefined
    [routes.reportIT]: undefined
    [routes.creditCard]: undefined
}
