export type TypeOfModalPendingType = {
  type: NameModalPendingType.UPDATE_USER_INFOR
}

export type ModalPendingListType = {
  modalsPending: { [key: string]: boolean }
}

export type ModalPendingFormatArrayListType = {
  name: string,
  enalble: boolean
}

export enum NameModalPendingType {
  UPDATE_USER_INFOR = 'UPDATE_USER_INFOR'
}