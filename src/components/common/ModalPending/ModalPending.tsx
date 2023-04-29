import { useAppDispatch, useAppSelector } from '@hooks'
import {
  ModalPendingFormatArrayListType,
  NameModalPendingType,
  addModalPending,
  getUserInfo,
  modalPendingSelector,
} from '@reduxs'

import React, { useEffect, useState } from 'react'
import { ModalUpdateInfoUser } from './components/ModalUpdateInfoUser'
import { isEmpty } from 'lodash'

type ModalPendingProps = {}

export const ModalPending: React.FC<ModalPendingProps> = () => {
  const modalsPending = useAppSelector(modalPendingSelector)
  const userInfor = useAppSelector(getUserInfo)
  const dispatch = useAppDispatch()
  const [modalsShow, setModalShow] =
    useState<ModalPendingFormatArrayListType[]>()

  //Check information to show modal
  useEffect(() => {
    if (
      isEmpty(userInfor?.phone) &&
      !isEmpty(userInfor?.email) && //If don't get infor user, don't show modal
      userInfor?.role?.name !== 'OPERATOR'
    ) {
      dispatch(
        addModalPending({ type: NameModalPendingType.UPDATE_USER_INFOR }),
      )
    }
  }, [userInfor])

  // Format data in Reducer to Show Modal
  useEffect(() => {
    let formatDataModals: ModalPendingFormatArrayListType[] = []
    Object.keys(modalsPending).map((key) => {
      formatDataModals.push({ enalble: modalsPending[key], name: key })
    })

    // @ts-ignore
    formatDataModals && setModalShow(formatDataModals)
  }, [modalsPending])

  const handleRenderModal = () => {
    switch (modalsShow?.[0]?.name) {
      case NameModalPendingType.UPDATE_USER_INFOR:
        return <ModalUpdateInfoUser />
      default:
        return <></>
    }
  }

  return handleRenderModal()
}
