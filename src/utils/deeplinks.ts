import { routes } from '@navigation'

export const linking = {
    prefixes: ['officemanager://', 'https://www.bookworlddashboard.shop'],
    config: {
        screens: {
            // Screen 'Yêu cầu hỗ trợ sự cố'
            [routes.historyDetailTeacher]: {
                path: 'detailReport/:id/:disabledFeedback',
                parse: {
                    id: (id: string) => id,
                    disabledFeedback: (disabled: boolean) => disabled,
                },
            },
            [routes.problemRequestSupport]: {
                path: 'problemRequestSupport',
            },
        },
    },
}
