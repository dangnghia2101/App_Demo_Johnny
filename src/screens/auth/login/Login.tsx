import GoogleIcon from '@assets/icons/GoogleIcon'
import { Block, Container, Text } from '@components'
import { useAppDispatch } from '@hooks'
import useFCM from '@hooks/useFCM'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { fakeLogin, useLazyLoginGoogleQuery, changeStatusLogin } from '@reduxs'
import { makeStyles, useTheme } from '@themes'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import Config from 'react-native-config'

export const Login = () => {
    const { colors } = useTheme()
    const [loginGoogle] = useLazyLoginGoogleQuery()
    const { getDeviceToken } = useFCM()
    const dispatch = useAppDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState('')

    const styles = useStyles()

    GoogleSignin.configure({
        webClientId: Config.WEB_CLIENT_ID_AUTH_GOOGLE,
    })

    const signInGoogle = async () => {
        try {
            await GoogleSignin.signOut()
            await GoogleSignin.hasPlayServices({
                showPlayServicesUpdateDialog: true,
            })
            const userInfo = await GoogleSignin.signIn()
            const fcmToken = await getDeviceToken()

            console.log('==. FC ', fcmToken)

            if (userInfo?.idToken && fcmToken) {
                await loginGoogle({
                    access_token: userInfo.idToken,
                    fcm_token: fcmToken,
                })
            }
        } catch (error) {
            console.log('[Error] GOOGLE ', error)
        }
    }

    const signInAccountUser = async () => {
        try {
            const body = {
                enableLogin: false,
                refreshToken:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDExMmM4MmVjYmYyMmYyNDA3NDFhYWUiLCJpYXQiOjE2ODExNDA2ODIsImV4cCI6MTY4MTE0NzY4MiwiaXNzIjoiZnBvbHkifQ.bASacWRMSdtoMc2xWzShKKK9XB8KKf61YoBTYuTbwYQ',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDExMmM4MmVjYmYyMmYyNDA3NDFhYWUiLCJ1c2VybmFtZSI6IjEwNjI3MjUxNTU1MTcwNjIwODE3NSIsInJvbGUiOiJURUFDSEVSIiwiZGVwYXJ0bWVudCI6IjY0MDk4ZmFiNmQ1NmVmNGQ2YjdiY2E3YSIsInN0YXR1cyI6IkFDVElWRSIsImlhdCI6MTY4MTE0MDY4MiwiZXhwIjoxNjgyMDA0NjgyLCJpc3MiOiJmcG9seSJ9.Ozmb4oGK5902pWv2rFZfSVT_ZgARu1mz0n1db7iPHpY',
                user: {
                    avatar: 'https://lh3.googleusercontent.com/a/AGNmyxZFfT1N29EqLWobbyJ29nGP5IRRZUqzNIwkRrNa=s96-c',
                    email: 'officemanagertest2@gmail.com',
                    name: 'Tài khoản khách',
                    phone: '0282133232',
                    role: {
                        _id: '64041f9bfc13ae5dd300006f',
                        name: 'TEACHER',
                    },
                    unNotification: false,
                },
            }

            dispatch(fakeLogin(body))
        } catch (error) {
            console.log('[Error] ', error)
        }
    }

    const signInUsername = () => {
        if (username.trim() === 'A@gmail.com' && password.trim() === '123456') {
            dispatch(changeStatusLogin(false))
        } else {
            setErrorLogin('Username or password incorect')

            setTimeout(() => {
                setErrorLogin('')
            }, 2000)
        }
    }

    return (
        <Container statusColor={colors.primary} backgroundColor={colors.white}>
            <Block
                flex={1}
                backgroundColor={colors.primary}
                alignCenter
                paddingHorizontal={30}
                paddingTop={30}
            >
                <Text
                    fontFamily="bold"
                    lineHeight={25}
                    size={25}
                    color={colors.white}
                >
                    MOMO
                </Text>
                <Text color={colors.white} center marginBottom={20}>
                    Do not share your account information, password with anyone
                </Text>

                <TextInput
                    style={styles.tip}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
                    placeholderTextColor={colors.gray}
                />

                <TextInput
                    style={styles.tip}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor={colors.gray}
                    secureTextEntry={true}
                />

                {errorLogin && (
                    <Text marginVertical={10} color={colors.yellow}>
                        {errorLogin}
                    </Text>
                )}

                <TouchableOpacity style={styles.btn} onPress={signInUsername}>
                    <Block flex alignCenter justifyCenter>
                        <Text size={20} lineHeight={20} color={colors.white}>
                            LOGIN
                        </Text>
                    </Block>
                </TouchableOpacity>

                <TouchableOpacity onPress={signInGoogle}>
                    <Block row alignCenter marginTop={10}>
                        <GoogleIcon />
                        <Text color={colors.white}> Login by Google </Text>
                    </Block>
                </TouchableOpacity>
            </Block>
        </Container>
    )
}

const useStyles = makeStyles()(({ colors }) => ({
    tip: {
        backgroundColor: colors.white,
        borderRadius: 25,
        height: 50,
        width: '100%',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
    },
    btn: {
        backgroundColor: colors.primary2,
        borderRadius: 25,
        height: 50,
        width: '100%',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
    },
}))
