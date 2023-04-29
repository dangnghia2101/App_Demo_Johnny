export interface ContactInfor {
  //for test
  id: string;
  img: string;
  name: string;
  role: string;
}
// interface for render icon in bottom tab
export interface RenderIconProps {
  index: number;
  color: string;
}

// problem need support
export interface ProblemItemInfor {
  id: number;
  nameProblem: string;
  timeCountDown: string;
  img: string;
  nameUser: string;
  building: string; 
  room: string;
  day: string;
  timeRequest: string;
}

export interface EventInfor {
  //for test
  id: number;
  img: string;
  day: string;
  eventName: string;
  departmentName: string;
  timeStart: string;
  detailInfor: string;
  location: string;
}
