import { Block, Container, Header, Text, TextInput } from '@components'
import { useTheme } from '@themes'
import React, { useState } from 'react'
import useDebounce from '@hooks/useDebounce'
import { SearchType } from '@reduxs/types'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { useGetRoomQuery } from '@reduxs'
import { goBack } from '@navigation/NavigationServices'
import { useRoute } from '@react-navigation/native'
import { LogBox } from 'react-native'

export const SearchRoom = () => {
    //--->>
    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
    ])
    //--->>
    const { colors } = useTheme()
    const route = useRoute()
    const { setValueRoom } = route?.params as {
        setValueRoom(name: string, id: string): void
    }

    //Room nhập hiện tại
    const [room, setRoom] = useState('')

    //debouncedValue: nhập
    const debouncedValue = useDebounce<string>(room, 300)
    const { data: RoomList } = useGetRoomQuery(debouncedValue) as {
        data: SearchType[]
    }

    //render Item Search Room
    const _renderRoom = (item: SearchType) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setValueRoom(item.name, item.id)
                    goBack()
                }}
            >
                {/* backgroundColor={colors.lightBlue}  */}
                <Block
                    row
                    flex
                    paddingVertical={10}
                    space="between"
                    radius={8}
                    marginVertical={4}
                    alignCenter
                >
                    <Text fontFamily="medium">Phòng: {item.name}</Text>
                    {/* <Text>Trạng thái: uncheck</Text> */}
                </Block>
            </TouchableOpacity>
        )
    }

    //render List Empty
    const _renderEmpty = () => {
        return (
            <Block>
                <Text color={colors.red}>Không tìm thấy phòng</Text>
            </Block>
        )
    }

    //render Search Room
    const CompleteSearch = () => {
        return (
            <Block paddingHorizontal={18}>
                {RoomList && (
                    <FlatList
                        data={RoomList}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => _renderRoom(item)}
                        //  ItemSeparatorComponent={() => <Block backgroundColor={colors.placeholder} height={1} />}
                        ListEmptyComponent={_renderEmpty}
                    />
                )}
            </Block>
        )
    }

    return (
        <Container
            backgroundColor={colors.white}
            statusColor={colors.statusBar}
        >
            {/* Header */}
            <Header
                showIconBack
                title="Tìm kiếm phòng"
                size={16}
                paddingHorizontal={15}
                onGoBack={() => goBack()}
            />

            {/* SearchBar */}
            <Block paddingHorizontal={15} paddingVertical={5}>
                <TextInput
                    value={room}
                    onChangeText={(text) => {
                        setRoom(text)
                    }}
                    placeholder="Nhập tên phòng tìm kiếm"
                    autoFocus={true}
                    focusable={true}
                />
            </Block>

            {/* List Item */}
            <Block flex>
                <CompleteSearch />
            </Block>
        </Container>
    )
}
