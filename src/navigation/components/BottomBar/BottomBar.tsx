import { Block, Text } from '@components'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useTheme } from '@themes'
import React, { FC } from 'react'
import { Dimensions, TouchableHighlight } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RenderIconTeacherRole } from './RenderIconTeacherRole'
interface IBottomBarProps extends BottomTabBarProps {
    type: number //type of bottom bar (0: teacher, 1: admin, 2: manager)
}

export const BottomBar: FC<IBottomBarProps> = (props) => {
    const { colors } = useTheme()
    const { bottom } = useSafeAreaInsets()
    return (
        <>
            <Block
                // shadow
                shadowColor={colors.black}
                elevation={20}
                height={55}
                width={'100%'}
                row
                backgroundColor={colors.bottomMenu}
                bottom={0}
                space={'evenly'}
                zIndex={10000}
            >
                {props.state.routes.map((item, index) => {
                    const isFocused = props.state.index === index

                    const widthItemBottomMenu =
                        (Dimensions.get('window').width - 96) / 4 // chiều rộng mỗi block trong bottom menu

                    let icon = (
                        <RenderIconTeacherRole
                            index={index}
                            color={isFocused ? colors.primary : colors.gray}
                        />
                    )

                    return (
                        <TouchableHighlight
                            underlayColor={colors.bottomMenu}
                            key={index}
                            onPress={() => {
                                props.navigation.navigate(item.name)
                            }}
                        >
                            <Block
                                alignCenter
                                justifyCenter
                                width={widthItemBottomMenu}
                                flex
                            >
                                {icon}
                                <Text
                                    size={10}
                                    marginTop={3}
                                    color={
                                        isFocused ? colors.primary : colors.gray
                                    }
                                >
                                    {item.name}
                                </Text>
                            </Block>
                        </TouchableHighlight>
                    )
                })}
            </Block>
            <Block
                backgroundColor={colors.bottomMenu}
                height={bottom / 3}
                zIndex={9999}
            />
        </>
    )
}
