export interface InfoTower {
    _id: string,
    key:string,
    type: string,
    value: string,
    floor: Array<InfoOfFloor>,
    description:string,
    totalFloor : number,

  };
export interface InfoOfFloor {
  _id:string,
  key:string,
  type:string,
  value:string,
  totalRoom: number,
}

