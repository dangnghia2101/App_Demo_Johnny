export enum EndPoint {
    // login
    login = '/auth/google/id-token/',
    getUserInfor = '/api/app/user',
    //Report
    createReport = '/api/app/report',
    getProblem = '/api/app/problem',
    getRoom = '/api/app/room',
    getNotification = 'api/app/notification',
    getHistoryReport = 'api/app/report/reports-history',

    detailRoom = '/api/app/room/',
    roomPlaceFloor = '/api/app/room/place-floor',
    floorRoomId = '/api/app/room/floor-room/',
    updateDetailRoom = '/api/app/room/update-many-room-detail',
    // GET ALL USER
    getALlUser = 'api/app/user/admin-staff',
    // GET ALL FEEDBACK
    getAllFeedBack = '/api/app/feedback?mix=true',
    getAchievements = '/api/app/user/achievements',
    getContactList = '/api/app/user/admin-staff',
    getDepartmentDetail = '/api/app/feedback?departmentDetail=',
    feedback = '/api/app/feedback',
    // problem report
    submitReport = '/api/app/report/submit-report/',
    completeReport = '/api/app/report/submit-completion',
    problemPending = '/api/app/report/pending',
    // GET REPORTS
    getReportDetail = '/api/app/report/history',
    // GET REPORTS PROBLEM IN DAY
    getReportsProblemInDay = '/api/app/report/reports-problem-in-day',

    getHistoryStaff = '/api/app/report/user-report-history',

    getReportHistoryStaff = '/api/app/report/reports-history',

    //GET EXTENDED TIME
    getExtensionTime = '/api/app/problem/extension-time/',

    //PUT EXTENTION TIME FOR PROBLEM
    putExtensionTime = '/api/app/report/extension-time-user-report/',

    //POST SUBMIT COMPLETION
    postSubmitCompetion = '/api/app/report/submit-completion',

    // GET TYPES PROBLEM
    getTypesProblem = '/api/app/problem',
}
