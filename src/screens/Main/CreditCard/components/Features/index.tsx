import { images } from '@assets'
import { Block, Image, Text } from '@components'
import { colors } from '@themes'
import React from 'react'
import { FlatList } from 'react-native'

const dataCards: CardType[] = [
    {
        id: '1adf',
        name: 'Recharge',
        logo: images.master_card,
    },
    {
        id: '1adf',
        name: 'Withdraw money to the bank',
        logo: images.withdraw,
    },
    {
        id: '1adadf',
        name: 'Payment order',
        logo: images.figma,
    },
    {
        id: '1adcaf',
        name: 'Automatic recharge management',
        logo: images.photoshop,
    },
    {
        id: '1agadf',
        name: 'Open a bank account',
        logo: images.bank,
    },
    {
        id: '1acsdf',
        name: 'Expense management',
        logo: images.momo,
    },
    {
        id: 'adfasd',
        name: 'Service payment',
        logo: images.slack,
    },
]

type CardType = {
    id: string
    name: string
    logo: any
}

const renderItem = ({ item }: { item: CardType }) => {
    return (
        <Block radius={10} width="33%" alignCenter justifyCenter marginTop={20}>
            <Image
                source={item.logo}
                width={40}
                height={40}
                resizeMode="contain"
            />
            <Text
                size={12}
                color={colors.light.blackText}
                fontFamily="bold"
                center
            >
                {item.name}
            </Text>
        </Block>
    )
}

export const Features = () => {
    const renderKeyExtractor = (obj: any) => obj.id

    return (
        <Block
            backgroundColor={colors.light.white}
            radius={10}
            flex
            marginHorizontal={10}
            paddingHorizontal={5}
            paddingBottom={10}
        >
            <FlatList
                data={dataCards}
                renderItem={renderItem}
                keyExtractor={renderKeyExtractor}
                numColumns={3}
                scrollEnabled={false}
            />
        </Block>
    )
}
