import { BackIcon } from '@assets'
import { Block, Container, Text } from '@components'
import { useTheme } from '@themes'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { goBack } from '@navigation/NavigationServices'
import { useGetListNotificationQuery } from '@reduxs/api/notificationService'
import { NotificationType } from '@reduxs/types/notificationType'
import { formatDate } from '@utils/helper'

export const Notification = () => {
    const { colors } = useTheme()
    const { data: listNotification, isError: listNotificationError } =
        useGetListNotificationQuery()
    // Render Header
    const Header = () => {
        return (
            <Block marginVertical={12} justifyCenter row alignCenter>
                <TouchableOpacity
                    onPress={() => goBack()}
                    style={{ padding: 10 }}
                >
                    <BackIcon style={{ transform: [{ rotate: '0deg' }] }} />
                </TouchableOpacity>
                <Text
                    lineHeight={36}
                    fontFamily="bold"
                    size={18}
                    center
                    flex
                    marginRight={40}
                >
                    Thông báo
                </Text>
            </Block>
        )
    }

    // Render item Content
    const _renderItemContent = (item: NotificationType) => {
        return (
            <>
                <Block flex>
                    <TouchableOpacity>
                        <Block
                            backgroundColor={colors.grayLight}
                            padding={12}
                            radius={12}
                            marginVertical={8}
                        >
                            <Text
                                color={colors.black}
                                fontFamily="medium"
                                size={14}
                                lineHeight={21}
                                numberOfLines={3}
                            >
                                {item.title}
                            </Text>
                            <Text fontFamily="light" size={12} lineHeight={18}>
                                Người đăng: {item.user}
                            </Text>
                            <Text fontFamily="light" size={12} lineHeight={18}>
                                Thời gian: {formatDate(new Date(item?.date))}
                            </Text>
                        </Block>
                    </TouchableOpacity>
                </Block>
            </>
        )
    }

    return (
        <Container
            backgroundColor={colors.white}
            statusColor={colors.statusBar}
        >
            <Block marginHorizontal={16} flex>
                {/*Header*/}
                <Header />
                {/* Content */}
                <Block flex>
                    {!listNotificationError && (
                        <FlatList
                            data={listNotification}
                            renderItem={({ item }) => _renderItemContent(item)}
                            keyExtractor={(item) => item._id.toString()}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingBottom: 20,
                            }}
                        />
                    )}
                </Block>
            </Block>
        </Container>
    )
}
