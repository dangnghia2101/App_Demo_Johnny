import React, { FC } from 'react'

import { Block, Text, Button } from '@components'
import { useTheme } from '@themes'
import { BackIcon, NotificationOutlineIcon } from '@assets'
import { navigate, goBack } from '@navigation/NavigationServices'
import { routes } from '@navigation'

type HeaderProps = {
    title: string
    color?: string
    onPressBackIcon?: () => void
}

export const HeaderWithNotify: FC<HeaderProps> = ({
    title,
    color,
    onPressBackIcon = goBack,
}) => {
    const { colors } = useTheme()

    return (
        <Block row width="100%" alignCenter space="between" paddingTop={15}>
            <Button onPress={onPressBackIcon} paddingHorizontal={20}>
                <BackIcon stroke={color || colors.black} />
            </Button>
            <Text
                flex
                size={16}
                lineHeight={24}
                fontWeight="700"
                center
                color={color || colors.black}
            >
                {title}
            </Text>
            <Button
                onPress={() => navigate(routes.notification)}
                paddingHorizontal={20}
            >
                <NotificationOutlineIcon color={color || colors.black} />
            </Button>
        </Block>
    )
}
