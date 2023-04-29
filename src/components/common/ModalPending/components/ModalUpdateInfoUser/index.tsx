import { Block, Button, Modal, Text, TextInput } from '@components'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    EditProfileInTerface,
    NameModalPendingType,
    getUserInfo,
    removeModalPending,
    showAlert,
    usePutEditProfileMutation,
} from '@reduxs'
import { useTheme } from '@themes'
import { regexPhoneNumber, widthWindow } from '@utils/helper'
import React from 'react'
import { ScrollView } from 'react-native'

export const ModalUpdateInfoUser = () => {
    const { colors } = useTheme()
    const userInfor = useAppSelector(getUserInfo)
    const name = userInfor.name
    const phone = userInfor.phone
    const unNotifi = userInfor.unNotification
    const roleUser = userInfor.role
    // input ref
    const inputRef = React.useRef<any>(null)
    const inputRef1 = React.useRef<any>(null)

    return (
        <Modal id="ModalUpdateInfoUser" isVisible={true} transparent={true}>
            <Block flex backgroundColor="rgba(0, 0, 0, 0.45)">
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                    }}
                >
                    <ContentField
                        phoneDefault={phone}
                        usernameDefault={name}
                        inputRef={inputRef}
                        inputRef1={inputRef1}
                        colors={colors}
                        role={roleUser}
                        unNoti={unNotifi}
                    />
                </ScrollView>
            </Block>
        </Modal>
    )
}

const ContentField = ({
    colors,
    inputRef,
    inputRef1,
    usernameDefault,
    phoneDefault,
    unNoti,
}: {
    colors: any
    inputRef: any
    inputRef1: any
    usernameDefault: string
    phoneDefault: string
    role: any
    unNoti: boolean
}) => {
    // useState
    const { colors: themeColors } = useTheme()
    const [phoneNumber, setPhoneNumber] = React.useState<string>('')
    const dispatch = useAppDispatch()
    const [name, setName] = React.useState<string>('')
    const [isPhoneNumber, setIsPhoneNumber] = React.useState<boolean>(false)
    const [phoneErroHandle, setPhoneErroHandle] = React.useState<string>('')
    const [editProfile] = usePutEditProfileMutation()

    // EDITTING FUNCTION
    const sendDataAPI = async (userName: string, Phone: string) => {
        const editForm: EditProfileInTerface = {
            name: userName,
            phone: Phone,
            unNotification: unNoti,
        }
        const responseEditProfile = await editProfile(editForm)

        if (responseEditProfile?.data?.statusCode) {
            console.log(' responseEditProfile SUCCESS ', responseEditProfile)
            dispatch(
                removeModalPending({
                    type: NameModalPendingType.UPDATE_USER_INFOR,
                }),
            )
            dispatch(showAlert({ id: '1', message: 'Cập nhật thành công !' }))
        }
    }
    // onSubmit button
    const onSubmit: () => void = async () => {
        // CASE NOT EDITTING SET VALUES DEFAULT
        if (phoneNumber.length == 0 && name.length == 0) {
            sendDataAPI(usernameDefault, phoneDefault)
        } else {
            // USERNAME CHANGE SET PHONE BY DEFAULT
            if (phoneNumber.length == 0) {
                sendDataAPI(name, phoneDefault)
                // PHONE CHANGE SET NAME BY DEFAULT
            } else if (name.length == 0) {
                if (validatePhoneNumber()) {
                    sendDataAPI(usernameDefault, phoneNumber)
                }
            } else {
                if (validatePhoneNumber()) {
                    sendDataAPI(name, phoneNumber)
                } else {
                    return
                }
            }
        }
    }
    // validate phone number
    const validatePhoneNumber: () => boolean = () => {
        if (phoneNumber.match(regexPhoneNumber)) {
            setIsPhoneNumber(false)
            setPhoneErroHandle('')
            return true
        } else {
            setIsPhoneNumber(true)
            setPhoneErroHandle('Không đúng định dạng')
            return false
        }
    }
    return (
        <Block
            backgroundColor={themeColors.white}
            radius={10}
            padding={10}
            height={300}
            width={widthWindow * 0.9}
        >
            <Text size={16} fontFamily="bold" center paddingVertical={10}>
                Cập nhật thông tin
            </Text>
            {/* input field */}
            <Text color={themeColors.gray} marginLeft={5}>
                Họ và tên
            </Text>
            <TextInput
                errorStyle={{
                    color: colors.error,
                    fontSize: 12,
                    fontWeight: '400',
                }}
                ref={inputRef1}
                // error={nameErroHandle}
                // showError={isName}
                value={name}
                fontFamily="medium"
                cursorColor={colors.primary}
                placeholder={usernameDefault}
                onChangeText={(text: string) => setName(text)}
            />
            <Text marginTop={10} color={themeColors.gray} marginLeft={5}>
                Số điện thoại
            </Text>
            <TextInput
                errorStyle={{
                    color: colors.error,
                    fontSize: 12,
                    fontWeight: '400',
                }}
                ref={inputRef}
                error={phoneErroHandle}
                showError={isPhoneNumber}
                value={phoneNumber}
                fontFamily="medium"
                cursorColor={colors.primary}
                placeholder={phoneDefault}
                onChangeText={(text: string) => setPhoneNumber(text)}
            />

            {/* button field */}
            <Block marginTop={20} backgroundColor={colors.white} padding={2}>
                <Button
                    backgroundColor={colors.statusBar}
                    title="Gửi yêu cầu"
                    onPress={onSubmit}
                />
            </Block>
        </Block>
    )
}
