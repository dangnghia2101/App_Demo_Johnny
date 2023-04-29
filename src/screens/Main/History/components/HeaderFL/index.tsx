import { EyeOff, images, SearchIcon } from '@assets'
import { Block, Image, Text, TextInput } from '@components'
import { useTheme } from '@themes'
import React from 'react'
import { FlatList } from 'react-native'

export const HeaderFL = () => {
    const { colors } = useTheme()

    const renderKeyExtractor = (obj: any) => obj.id

    return (
        <Block paddingHorizontal={10}>
            <Block row marginTop={10}>
                <Block width="70%">
                    <TextInput
                        leftIcon={SearchIcon}
                        placeholder="Search transaction"
                    />
                </Block>
                <Block row alignCenter space="between" flex>
                    <Block alignCenter justifyCenter marginLeft={10}>
                        <Image source={images.filter} width={18} height={18} />
                        <Text size={12}>Filter</Text>
                    </Block>
                    <Block alignCenter justifyCenter>
                        <Image source={images.hide} width={18} height={18} />
                        <Text size={12}>Balance</Text>
                    </Block>
                </Block>
            </Block>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Block
                        paddingHorizontal={5}
                        paddingVertical={8}
                        borderColor={colors.grayBackground}
                        radius={7}
                        borderWidth={1}
                        marginRight={5}
                        marginVertical={7}
                    >
                        <Text color={colors.blackText} size={15}>
                            {item?.type}
                        </Text>
                    </Block>
                )}
                horizontal
                keyExtractor={renderKeyExtractor}
                showsHorizontalScrollIndicator={false}
            />
        </Block>
    )
}

const data = [
    {
        id: 1,
        type: 'All',
    },
    {
        id: 2,
        type: 'Send',
    },
    {
        id: 3,
        type: 'Received',
    },
    {
        id: 4,
        type: 'Recharge',
    },
    {
        id: 5,
        type: 'Received',
    },
    {
        id: 6,
        type: 'Bill',
    },
    {
        id: 7,
        type: 'Withdraw',
    },
]
