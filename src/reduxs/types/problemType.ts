export class ProblemType {
    static readonly COMPUTER = new ProblemType(
        '64059a63fc13ae72650002c1',
        'Cơ sở vật chất',
    )
    static readonly NETWORK = new ProblemType(
        '64059a63fc13ae72650002c2',
        'Thiết bị mạng',
    )
    static readonly ROOM = new ProblemType(
        '64059a63fc13ae72650002c3',
        'Vệ sinh phòng học',
    )
    static readonly SERVICE = new ProblemType(
        '64059a63fc13ae72650002c4',
        'Góp ý phòng học',
    )
    static readonly OTHER = new ProblemType(
        '64059a63fc13ae72650002c5',
        'Sự cố khác',
    )

    private constructor(
        public readonly key: string,
        public readonly value: string,
    ) {}
}

export enum ProblemEnumType {
    NORMAL = 'NORMAL',
    IT_SUPPORT = 'IT_SUPPORT',
}

export enum ProblemStatusType {
    COMPLETED = 'COMPLETED',
    UNCOMPLETED = 'UNCOMPLETED',
    LATE = 'LATE',
}

export interface ProblemItemType {
    _id: string
    problem: string
    description: string
    room: string
    userRequest: string
    userReport: string
}

export interface ReportProblemType {
    _id: string
    problem: string
    room: string
    description: string
    userRequest: string
    userReport: string
}

export interface ProblemDetailType {
    completion: {
        _id: string
        description: string
        time: Date
        type: 'COMPLETED' | 'UNCOMPLETED' | string
    }
    feedback: {
        _id: string
        evaluate: string
    }
    report: {
        _id: string
        description: string
        problem: string
        room: string
        time: Date
        user: string
    }
    user: {
        _id: string
        avatar: string
        date: Date
        name: string
        phone: string
        time: Date
    }
    userReport: {
        _id: string
        time: Date
    }
}
export interface Problem {
    _id: string
    name: string
    image: string
    type: string
    description: string
}
