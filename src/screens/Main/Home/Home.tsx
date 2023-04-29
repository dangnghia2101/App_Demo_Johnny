import { EyeOn, images, RightArrowIcon } from '@assets'
import { Block, Container, Image, Text } from '@components'
import { routes } from '@navigation'
import { useNavigation } from '@react-navigation/native'
import { colors, makeStyles, useTheme } from '@themes'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Header } from './components'
type HomeProps = {
    backgroundColor: string
}

export const Home = () => {
    const { colors } = useTheme()
    const navigation = useNavigation()

    const navigateCreditCard = () => {
        navigation.navigate(routes.creditCard, {})
    }

    return (
        <Container
            statusColor={colors.primary}
            backgroundColor={colors.primary}
        >
            <Header>
                <Block>
                    {/* Box money and card */}
                    <Block
                        height={45}
                        backgroundColor={colors.primary}
                        borderTopWidth={1}
                        borderColor={colors.primary2}
                        paddingHorizontal={15}
                        row
                    >
                        {/* Money */}
                        <Block row alignCenter flex>
                            <EyeOn />
                            <Text
                                marginLeft={10}
                                fontFamily="bold"
                                color={colors.white}
                                size={16}
                                lineHeight={20}
                            >
                                100.000.000đ
                            </Text>
                        </Block>

                        {/* Cards */}

                        <TouchableOpacity onPress={navigateCreditCard}>
                            <Block row alignCenter flex justifyEnd>
                                <Block
                                    backgroundColor={colors.white}
                                    radius={100}
                                    height={25}
                                    width={25}
                                    marginRight={-7}
                                    borderColor={colors.grayLight}
                                    borderWidth={2}
                                    justifyCenter
                                >
                                    <Image
                                        source={images.momo}
                                        width={22}
                                        height={22}
                                        radius={100}
                                    />
                                </Block>
                                <Block
                                    backgroundColor={colors.white}
                                    radius={100}
                                    height={25}
                                    width={25}
                                    marginRight={-7}
                                    borderColor={colors.grayLight}
                                    borderWidth={2}
                                >
                                    <Image
                                        source={images.visa}
                                        width={26}
                                        height={26}
                                    />
                                </Block>
                                <Block
                                    backgroundColor={colors.white}
                                    radius={100}
                                    height={25}
                                    width={25}
                                    borderColor={colors.grayLight}
                                    borderWidth={2}
                                    alignCenter
                                    justifyCenter
                                >
                                    <Text color={colors.gray}>3</Text>
                                </Block>

                                <Text
                                    fontFamily="bold"
                                    size={12}
                                    color={colors.white}
                                    marginHorizontal={10}
                                >
                                    MANAGE
                                </Text>
                                <RightArrowIcon />
                            </Block>
                        </TouchableOpacity>
                    </Block>
                </Block>
            </Header>
        </Container>
    )
}

const useStyles = makeStyles<HomeProps>()(({}) => ({
    root: ({ backgroundColor }) => ({
        flex: 1,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignContent: 'center',
    }),
    buttonTitle: {
        color: colors.light.black,
        fontFamily: 'bold',
        size: 16,
        lineHeight: 24,
        flex: 1,
        numberOfLines: 1,
        paddingVertical: 10,
    },
    buttonLeftIcon: {
        justifyContent: 'center',
        paddingEnd: 40,
        paddingVertical: 10,
    },
}))
