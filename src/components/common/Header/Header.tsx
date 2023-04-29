import { BackArrowIcon, NotifiIcon } from '@assets'
import { Block, Text } from '@components'
import { CommonTextProps } from '@components/base/Text/type'
import { routes } from '@navigation'
import { goBack, navigate } from '@navigation/NavigationServices'
import { useTheme } from '@themes'
import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'

interface HeaderComponent extends CommonTextProps {
    //Title của header
    title?: string
    //Show icon back
    showIconBack?: boolean
    //Arrow icon item go back
    onGoBack?: () => void
    //Notification icon navigate
    onNotification?: () => void
    //padding Top Bottom
    paddingVertical?: number
    //padding Left Right
    paddingHorizontal?: number
    //Show Icon Right
    showRightIcon?: boolean
    //Background Header
    backgroundColor?: string
    //Color cho các icon mặc định, gồm icon back, và icon notifi (nếu ko custom iconRight)
    colorIcon?: string
    //Custom Right Icon
    customRightIcon?: () => ReactElement
}
export const Header: React.FC<HeaderComponent> = (props) => {
    const { colors } = useTheme()
    //Hàm onGoback mặc định trở về screen trước đó
    const navigateGoBack = () => {
        goBack()
    }
    //Hàm khi icon onNotification sẽ gọi và chuyển quan trang Notification
    const navigateNotification = () => {
        navigate(routes.notification)
    }
    const {
        title,
        showIconBack = true,
        onGoBack = navigateGoBack,
        paddingVertical = 10,
        paddingHorizontal = 0,
        onNotification = navigateNotification,
        customRightIcon,
        showRightIcon = false,
        backgroundColor = colors.white,
        colorIcon = colors.black,
        //Nhưng props trong rest thuộc về text của title
        ...rest
    } = props

    return (
        <Block
            backgroundColor={backgroundColor}
            row
            space="between"
            height={60}
            alignCenter
        >
            {/* Title header */}

            {/* BackIcon */}
            {showIconBack ? (
                <TouchableOpacity activeOpacity={0.7} onPress={onGoBack}>
                    <Block
                        height={40}
                        width={40}
                        marginLeft={paddingHorizontal}
                        alignCenter
                        justifyCenter
                    >
                        <BackArrowIcon stroke={colorIcon} />
                    </Block>
                </TouchableOpacity>
            ) : (
                <Block marginLeft={paddingHorizontal} height={30} width={34} />
            )}
            <Block height={40} justifyCenter>
                <Text
                    {...rest}
                    size={16}
                    center
                    color="white"
                    fontFamily="bold"
                >
                    {title}
                </Text>
            </Block>
            {/* Right Icon, Mặc định ko custom sẽ là notifiicon*/}
            {showRightIcon ? (
                <Block
                    padding={10}
                    marginRight={paddingHorizontal}
                    height={40}
                    width={40}
                >
                    {/* Nếu không custom Right Icon vậy khi show sẽ mặc định là notifi icon*/}
                    {customRightIcon ? (
                        customRightIcon()
                    ) : (
                        <TouchableOpacity onPress={onNotification}>
                            <NotifiIcon stroke={colorIcon} />
                        </TouchableOpacity>
                    )}
                </Block>
            ) : (
                <Block
                    padding={10}
                    marginRight={paddingHorizontal}
                    height={40}
                    width={40}
                />
            )}
        </Block>
    )
}
