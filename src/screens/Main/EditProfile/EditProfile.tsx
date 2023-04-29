import { Block, Button, Container, Header, Text, TextInput } from '@components'
import { useAppDispatch, useAppSelector } from '@hooks'
import { goBack } from '@navigation/NavigationServices'
import {
    getUserInfo,
    showAlert,
    showLoading,
    usePutEditProfileMutation,
} from '@reduxs'
import { EditProfileInTerface } from '@reduxs/types'
import { useTheme } from '@themes'
import { regexPhoneNumber } from '@utils/helper'
import React from 'react'
import { ScrollView } from 'react-native'
// EditProfile screen
export const EditProfile = () => {
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
        <Container statusColor={colors.statusBar}>
            <Block flex>
                <Button
                    onPress={() =>
                        inputRef.current.blur() & inputRef1.current.blur()
                    }
                    opacity={1}
                    flex
                >
                    {/* header bar*/}
                    <Header title="Chỉnh sửa tài khoản" fontFamily="bold" />
                    <Block
                        paddingHorizontal={16}
                        paddingTop={20}
                        flex
                        backgroundColor={colors.white}
                    >
                        {/*Content field*/}
                        <ContentField
                            phoneDefault={phone}
                            usernameDefault={name}
                            inputRef={inputRef}
                            inputRef1={inputRef1}
                            colors={colors}
                            role={roleUser}
                            unNoti={unNotifi}
                        />
                    </Block>
                </Button>
            </Block>
        </Container>
    )
}
// Input and Button field
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
    const [isName, setIsName] = React.useState<boolean>(false)
    const [nameErroHandle, setNameErroHandle] = React.useState<string>('')
    const [editProfile, { data }] = usePutEditProfileMutation()
    // EDITTING FUNCTION
    const onEdit = async (userName: string, Phone: string) => {
        const editForm: EditProfileInTerface = {
            name: userName,
            phone: Phone,
            unNotification: unNoti,
        }
        dispatch(showLoading)
        const result = await editProfile(editForm)
        if (result.data.statusCode == 200) {
            inputRef.current.blur()
            inputRef1.current.blur()
            goBack()
            dispatch(showAlert({ id: '1', message: 'Cập nhật thành công !' }))
        } else {
            dispatch(showAlert({ id: '2', message: 'Cập nhật thất bại !' }))
        }
    }
    // onSubmit button
    const onSubmit: () => void = async () => {
        // CASE NOT EDITTING SET VALUES DEFAULT
        if (phoneNumber.length == 0 && name.length == 0) {
            onEdit(usernameDefault, phoneDefault)
        } else {
            // USERNAME CHANGE SET PHONE BY DEFAULT
            if (phoneNumber.length == 0) {
                onEdit(name, phoneDefault)
                // PHONE CHANGE SET NAME BY DEFAULT
            } else if (name.length == 0) {
                if (validatePhoneNumber()) {
                    onEdit(usernameDefault, phoneNumber)
                }
            } else {
                if (validatePhoneNumber()) {
                    onEdit(name, phoneNumber)
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
        <Block flex>
            {/* input field */}
            <Block flex>
                <Block>
                    <ScrollView>
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
                            error={nameErroHandle}
                            showError={isName}
                            value={name}
                            fontFamily="medium"
                            cursorColor={colors.primary}
                            placeholder={usernameDefault}
                            onChangeText={(text: string) => setName(text)}
                        />
                    </ScrollView>
                    <ScrollView>
                        <Text
                            marginTop={10}
                            color={themeColors.gray}
                            marginLeft={5}
                        >
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
                            onChangeText={(text: string) =>
                                setPhoneNumber(text)
                            }
                        />
                    </ScrollView>

                    {/* button field */}
                    <Block
                        marginTop={20}
                        backgroundColor={colors.white}
                        padding={2}
                    >
                        <Button
                            backgroundColor={colors.statusBar}
                            title="Xác nhận"
                            onPress={onSubmit}
                        />
                    </Block>
                </Block>
            </Block>
        </Block>
    )
}
