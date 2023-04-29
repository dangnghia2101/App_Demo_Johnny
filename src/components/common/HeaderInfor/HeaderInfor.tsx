import { Container, Block, Image, Text } from '@components'
import React, { FC } from 'react'
import { useTheme } from '@themes'
import { TouchableOpacity } from 'react-native'
import { NotificationOutlineIcon } from '@assets'
import { ViewProps } from 'react-native'
import { getUserInfo } from '@reduxs'
import { useAppSelector } from '@hooks'

type HeaderInforProps = {
    onPressNotificationIcon?: () => void
} & ViewProps

// HeaderInfor component is used to render the header of the screen
export const HeaderInfor: FC<HeaderInforProps> = (props) => {
    const userInfor = useAppSelector(getUserInfo)
    const { colors } = useTheme()
    const name = userInfor.name
    const avatar = userInfor.avatar
    const { onPressNotificationIcon, children } = props
    const Header = () => {
        return (
            <Block row alignCenter paddingHorizontal={16} marginTop={16}>
                <Block row flex alignCenter>
                    <Image
                        width={45}
                        height={45}
                        radius={99}
                        source={{ uri: avatar }}
                    />
                    <Text
                        marginLeft={18}
                        center
                        color={colors.white}
                        fontFamily="medium"
                        size={18}
                        lineHeight={26.3}
                    >
                        {name}
                    </Text>
                </Block>
                <TouchableOpacity onPress={onPressNotificationIcon}>
                    <NotificationOutlineIcon />
                </TouchableOpacity>
            </Block>
        )
    }

    return (
        <Container
            statusColor={colors.background2}
            backgroundColor={colors.background2}
        >
            {/* Header */}
            <Header />

            {/* Main Form */}
            <Block
                backgroundColor={colors.white}
                flex
                borderTopLeftRadius={24}
                borderTopRightRadius={24}
                marginTop={16}
            >
                {children}
            </Block>
        </Container>
    )
}
