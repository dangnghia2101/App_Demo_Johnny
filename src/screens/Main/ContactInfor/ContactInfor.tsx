import { Block, Container, Image, Text } from '@components'
import React, { FC } from 'react'
import { useTheme, makeStyles } from '@themes'
import { BackArrowIcon, PhoneIcon } from '@assets'
import { Linking, Pressable, Route } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { routes } from '@navigation'
import { TeacherParamList } from '@navigation/types'

type ContactInforProps = {
    backgroundColor: string
}

type Props = NativeStackScreenProps<TeacherParamList, routes.contactInfor>

export const ContactInfor: FC<Props> = (props) => {
    const { userContact } = props.route.params
    const { avatar, name, phone, role } = userContact
    const { colors } = useTheme()
    const styles = useStyles({ backgroundColor: colors.background2 })
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    const handleOpenCall = () => {
        if (phone) {
            Linking.openURL(`tel:${phone}`)
        }
    }

    return (
        <Container style={styles.root} statusColor={colors.background2}>
            <Block>
                {/* header tools*/}
                <Pressable onPress={handleGoBack}>
                    <Block row marginTop={10} marginLeft={15}>
                        <BackArrowIcon />
                        <Text
                            size={14}
                            lineHeight={20}
                            color={colors.white}
                            marginLeft={10}
                        >
                            Trở về
                        </Text>
                    </Block>
                </Pressable>

                <Block marginTop={37} justifyCenter alignCenter>
                    {/* header information */}
                    <Image
                        source={{ uri: avatar }}
                        width={80}
                        height={80}
                        radius={40}
                    ></Image>
                    <Text
                        marginTop={7}
                        size={24}
                        lineHeight={36}
                        color={colors.white}
                        fontFamily="bold"
                    >
                        {name}
                    </Text>
                    <Text
                        size={18}
                        lineHeight={27}
                        color={colors.white}
                        fontFamily="medium"
                    >
                        {role}
                    </Text>
                </Block>
            </Block>

            <Block
                flex={1}
                marginTop={24}
                borderTopLeftRadius={24}
                borderTopRightRadius={24}
                backgroundColor={colors.background}
                paddingHorizontal={20}
            >
                {/* contact Information */}
                <Block row space="between" marginTop={20} alignCenter>
                    <Block>
                        <Text
                            size={14}
                            lineHeight={27}
                            color={colors.blur}
                            fontFamily="medium"
                        >
                            Số điện thoại
                        </Text>
                        <Text
                            size={16}
                            lineHeight={27}
                            marginTop={6}
                            color={colors.black}
                            fontFamily="medium"
                        >
                            {phone || 'Chưa có số điện thoại'}
                        </Text>
                    </Block>
                    <PhoneIcon onPress={handleOpenCall}></PhoneIcon>
                </Block>
            </Block>
        </Container>
    )
}

const useStyles = makeStyles<ContactInforProps>()(({}) => ({
    root: ({ backgroundColor }) => ({
        flex: 1,
        backgroundColor: backgroundColor,
    }),
}))
