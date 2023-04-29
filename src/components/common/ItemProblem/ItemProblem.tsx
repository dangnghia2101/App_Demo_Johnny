import React from 'react'
import { Route } from 'react-native'
import { Block, Button, Text } from '@components'
import { useTheme } from '@themes'
import { navigate } from '@navigation/NavigationServices'
import { routes } from '@navigation'

export const ItemProblem = (props: Route) => {
    const { colors } = useTheme()

    if (!props?.data?.item) return

    const { _id, problem, room, userRequest, userReport } = props.data?.item
    const { onTime } = props

    const navigateToDetail = () => {
        navigate(routes.problemDetail, {
            id: _id,
            nameUserRequest: userRequest,
            room: room,
            disabledFeedback: true,
        })
    }

    return (
        <Button
            padding={16}
            marginBottom={16}
            backgroundColor={colors.grayLight}
            shadow
            onPress={navigateToDetail}
        >
            <Block row space="between" alignEnd>
                <Text fontWeight="bold" size={14} lineHeight={21}>
                    {problem}
                </Text>
                <Text fontWeight="400" size={12} lineHeight={18}>
                    Phòng: {room}
                </Text>
            </Block>
            <Text marginTop={13} fontWeight="400" size={12} lineHeight={18}>
                Người yêu cầu: {userRequest}
            </Text>
            <Block row space="between" marginTop={4} alignEnd>
                <Text fontWeight="400" size={12} lineHeight={18}>
                    Người tiếp nhận: {userReport}
                </Text>
                <Text
                    fontWeight="500"
                    size={12}
                    lineHeight={18}
                    color={onTime ? colors.greenButton : colors.redButton}
                >
                    {onTime ? 'Đúng giờ' : 'Trễ giờ'}
                </Text>
            </Block>
        </Button>
    )
}
