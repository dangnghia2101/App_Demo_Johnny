import { Block, Container, Image, Text } from '@components'
import { useAppDispatch, useAppSelector } from '@hooks'
import { changeStatusLogin, getUserInfo } from '@reduxs'
import { makeStyles, useTheme } from '@themes'
import React from 'react'
import { Pressable } from 'react-native'

export const OptScreen = () => {
    const { colors } = useTheme()
    const dispatch = useAppDispatch()
    const userInfor = useAppSelector(getUserInfo)
    const styles = useStyles()

    const reLogin = () => {
        dispatch(changeStatusLogin(true))
    }

    return (
        <Container
            statusColor={colors.background2}
            backgroundColor={colors.white}
        >
            <Block flex alignCenter justifyCenter>
                <Image
                    source={{ uri: userInfor?.avatar }}
                    height={100}
                    width={100}
                />
                <Text
                    fontFamily="bold"
                    color={colors.black}
                    size={18}
                    marginTop={10}
                    lineHeight={20}
                >
                    {userInfor?.name}
                </Text>
                <Text
                    fontFamily="bold"
                    color={colors.black}
                    size={14}
                    lineHeight={20}
                >
                    {userInfor?.email}
                </Text>
                <Text
                    fontFamily="medium"
                    color={colors.black}
                    size={14}
                    marginTop={50}
                >
                    Tài khoản chưa có quyền truy cập
                </Text>
                <Text size={12}>
                    Vui lòng liên hệ quản lý, để được cấp quyền
                </Text>
            </Block>
            <Pressable style={styles.btnSendLogin} onPress={reLogin}>
                <Block
                    alignCenter
                    backgroundColor={colors.background2}
                    width={200}
                    alignSelf="center"
                    padding={10}
                    radius={10}
                >
                    <Text color={colors.white}>Đăng nhập lại</Text>
                </Block>
            </Pressable>
        </Container>
    )
}

const useStyles = makeStyles()(({}) => ({
    btnSendLogin: {
        marginBottom: 20,
    },
}))
