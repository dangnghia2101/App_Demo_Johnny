export interface Problem {
  id: number;
  problemName: string;
  receiver: string;
  time: Date;
  room: string;
  phone: string;
  status: Status;
  avatar: string;
  statusDetail: any[];
}

export enum Status {
  WAIT = 1,
  ACCEPTED = 2,
  FINISHED = 3,
}

export const histories: Problem[] = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/300",
    problemName: "Sự cố về cơ sở vật chất",
    receiver: "Nguyễn Văn A",
    time: new Date(),
    room: "T1013",
    phone: "09384756543",
    status: Status.WAIT,
    statusDetail: [new Date(), new Date(), new Date()],
  },
  {
    id: 2,
    problemName: "Sự cố về thiết bị mạng",
    avatar: "https://i.pravatar.cc/300",
    receiver: "Nguyễn Văn B",
    time: new Date(),
    room: "T1013",
    phone: "09384756543",
    status: Status.FINISHED,
    statusDetail: [new Date(), new Date(), new Date()],
  },
  {
    id: 3,
    problemName: "Sự cố về vệ sinh phòng học",
    avatar: "https://i.pravatar.cc/300",
    receiver: "Nguyễn Văn C",
    time: new Date(),
    room: "T1013",
    phone: "09384756543",
    status: Status.ACCEPTED,
    statusDetail: [new Date(), new Date(), null],
  },
  {
    id: 4,
    problemName: "Sự cố về góp ý phòng học",
    avatar: "https://i.pravatar.cc/300",
    receiver: "Nguyễn Văn D",
    time: new Date(),
    room: "T1013",
    phone: "09384756543",
    status: Status.WAIT,
    statusDetail: [new Date(), null, null],
  },
  {
    id: 5,
    problemName: "Sự cố về cơ sở thiết bị",
    avatar: "https://i.pravatar.cc/300",
    receiver: "Nguyễn Văn A",
    time: new Date(),
    room: "T1013",
    phone: "09384756543",
    status: Status.WAIT,
    statusDetail: [new Date(), null, null],
  },
  {
    id: 6,
    problemName: "Sự cố về cơ sở vật chất",
    avatar: "https://i.pravatar.cc/300",
    receiver: "Nguyễn Văn A",
    time: new Date(),
    room: "T1013",
    phone: "09384756543",
    status: Status.FINISHED,
    statusDetail: [new Date(), new Date(), new Date()],
  },
];
