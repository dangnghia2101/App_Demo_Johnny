export class FormatDateTime {
  static getDate = (time: Date) => {
    return time.toLocaleDateString('es-CL')
  }

  static getTime = (time: string) => {
    function z(n: number) {
      return (n < 10 ? '0' : '') + n
    }
    let h = time.split(':')[0]
    let m = time.split(':')[1]

    if (+h > 12) {
      let n = z(+h - 12)
      let a = z(+m)
      return `${n}:${a} PM`
    } else {
      let n = z(+h)
      let a = z(+m)
      return `${n}:${a} AM`
    }
  }

  static getDateOfFServices = (time: Date) => {
    let day = time.getDay() < 10 ? '0' + time.getDay() : time.getDay();
    let month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1;
    let year = time.getFullYear();

    return `${day}/${month}/${year}`;
  }
}
