import { LogoutIcon } from '@assets/icons/LogoutIcon'
import { Block, Button, Container, Image, Modal, Text } from '@components'
import { useAppDispatch, useAppSelector } from '@hooks'
import { changeStatusLogin, getUserInfo, hideLoading } from '@reduxs'
import { useTheme } from '@themes'
import React from 'react'

export const Setting = () => {
    const { colors } = useTheme()
    const userInfor = useAppSelector(getUserInfo)
    const name = userInfor.name
    const phone = userInfor.phone
    const unNoti = userInfor.unNotification

    // onSubmit button
    return (
        <Container
            backgroundColor={colors.primary}
            statusColor={colors.primary}
        >
            {/* setting content */}
            <SettingContent
                unNoti={unNoti}
                phone={phone}
                name={name}
                colors={colors}
            />
        </Container>
    )
}

// setting content
const SettingContent = ({
    colors,
}: {
    colors: any
    name: string
    phone: string
    unNoti: boolean
}) => {
    const [isLogout, setIsLogout] = React.useState<boolean>(false)
    const dispatch = useAppDispatch()
    dispatch(hideLoading)

    const handleLogout = () => {
        setIsLogout(true)
    }
    // MODAL PERMISSION
    const LogoutModal = ({ isVisible }: { isVisible: boolean }) => {
        const logOut = () => {
            dispatch(changeStatusLogin(true))
        }
        const ButtonComponent = ({ accept }: { accept: boolean }) => (
            <Button onPress={accept ? logOut : () => setIsLogout(false)} flex>
                <Block
                    radius={4}
                    padding={10}
                    margin={10}
                    alignCenter
                    backgroundColor={accept ? colors.red : colors.white}
                >
                    <Text color={accept ? colors.white : colors.black}>
                        {accept ? 'Yes' : 'No'}
                    </Text>
                </Block>
            </Button>
        )

        return (
            <Modal transparent id="permission" isVisible={isVisible}>
                <Button onPress={() => setIsLogout(false)} opacity={0.99} flex>
                    <Block
                        flex
                        justifyCenter
                        backgroundColor="rgba(0, 0, 0, 0.45)"
                    >
                        <Block
                            margin={20}
                            style={{ borderRadius: 10 }}
                            backgroundColor="white"
                        >
                            <Block>
                                <Block marginTop={8} alignCenter>
                                    <Text
                                        size={18}
                                        lineHeight={20}
                                        color={colors.red}
                                        fontFamily="bold"
                                    >
                                        Logout
                                    </Text>
                                </Block>
                                <Block
                                    marginTop={12}
                                    marginBottom={12}
                                    alignCenter
                                >
                                    <Text
                                        color={colors.grayText1}
                                        fontSize={16}
                                        lineHeight={20}
                                    >
                                        Do you want to exit the app?
                                    </Text>
                                </Block>
                                <Block row>
                                    <ButtonComponent accept={true} />
                                    <ButtonComponent accept={false} />
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Button>
            </Modal>
        )
    }

    return (
        <Block
            flex
            backgroundColor={colors.white}
            borderColor={colors.statusBar}
            borderTopLeftRadius={24}
            borderTopRightRadius={24}
        >
            <LogoutModal isVisible={isLogout} />
            <Block flex padding={26}>
                {/* logout */}
                <Button onPress={handleLogout} align={'center'} row alignCenter>
                    <Block flex radius={12}>
                        <Image ImageComponent={LogoutIcon} />
                    </Block>
                    <Block style={{ flex: 4 }}>
                        <Text size={16} fontFamily="medium" lineHeight={24}>
                            Logout
                        </Text>
                    </Block>
                    <Block style={{ flex: 1 }} />
                </Button>
                <Block flex />
            </Block>
        </Block>
    )
}
