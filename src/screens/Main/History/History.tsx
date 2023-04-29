import { images, RightArrowIcon } from '@assets'
import { Block, Container, Header, Text } from '@components'
import { useTheme } from '@themes'
import React, { useState } from 'react'
import { SectionList } from 'react-native'
import { HeaderFL, ItemHistory } from './components'

export type HistoryType = {
    title: string
    data: DetailHistoryType[]
}

export type DetailHistoryType = {
    id: string
    name: string
    time: string
    balance: string
    icon: any
    money: string
}

export const History = () => {
    const { colors } = useTheme()
    const [histories, setHistories] = useState<HistoryType[]>(DATA)

    const renderKeyExtractor = (obj: any) => obj.id

    const sectionHeader = (header: any) => {
        return (
            <Block
                height={45}
                backgroundColor={colors.grayLight}
                alignCenter
                paddingHorizontal={10}
                row
                space="between"
            >
                <Text size={20} fontFamily="bold" lineHeight={25}>
                    {header?.section?.title}
                </Text>

                <Block row alignCenter>
                    <Text
                        size={14}
                        fontFamily="bold"
                        color={colors.primary2}
                        lineHeight={25}
                        marginRight={10}
                    >
                        Chart
                    </Text>

                    <RightArrowIcon color={colors.primary2} />
                </Block>
            </Block>
        )
    }

    return (
        <Container backgroundColor={colors.white} statusColor={colors.primary}>
            <Block flex>
                <Header
                    title="Transaction history"
                    backgroundColor={colors.primary}
                    showIconBack={false}
                />

                <SectionList
                    sections={histories}
                    keyExtractor={renderKeyExtractor}
                    renderItem={ItemHistory}
                    renderSectionHeader={sectionHeader}
                    ListHeaderComponent={HeaderFL}
                    stickyHeaderIndices={[0]}
                />
            </Block>
        </Container>
    )
}

const DATA: HistoryType[] = [
    {
        title: 'April 2023',
        data: [
            {
                id: 'qeadsf',
                name: 'Payment of electricity',
                time: '08:28 - 27/04/2023',
                balance: '212.000đ',
                icon: images.idea,
                money: '-400.000đ',
            },
            {
                id: 'qeadfadsf',
                name: 'Deposit money into your wallet',
                time: '08:28 - 27/04/2023',
                balance: '1.300.000đ',
                icon: images.photoshop,
                money: '+300.000đ',
            },
            {
                id: 'aaddf',
                name: 'Transfer money to Johnny Dang',
                time: '08:28 - 27/04/2023',
                balance: '1.000.000đ',
                icon: images.figma,
                money: '-400.000đ',
            },
            {
                id: 'qeadadfsf',
                name: 'Payment of electricity',
                time: '08:28 - 27/04/2023',
                balance: '212.000đ',
                icon: images.idea,
                money: '-400.000đ',
            },
            {
                id: 'qeadfadfadsf',
                name: 'Deposit money into your wallet',
                time: '08:28 - 27/04/2023',
                balance: '1.300.000đ',
                icon: images.photoshop,
                money: '+300.000đ',
            },
            {
                id: 'aadadfdf',
                name: 'Transfer money to Johnny Dang',
                time: '08:28 - 27/04/2023',
                balance: '1.000.000đ',
                icon: images.figma,
                money: '-400.000đ',
            },
            {
                id: 'qeaadcacxdsf',
                name: 'Payment of electricity',
                time: '08:28 - 27/04/2023',
                balance: '212.000đ',
                icon: images.idea,
                money: '-400.000đ',
            },
            {
                id: 'qeagsfgdfadsf',
                name: 'Deposit money into your wallet',
                time: '08:28 - 27/04/2023',
                balance: '1.300.000đ',
                icon: images.photoshop,
                money: '+300.000đ',
            },
            {
                id: 'aasfggddf',
                name: 'Transfer money to Johnny Dang',
                time: '08:28 - 27/04/2023',
                balance: '1.000.000đ',
                icon: images.figma,
                money: '-400.000đ',
            },
            {
                id: 'qeaadcacacxdsf',
                name: 'Payment of electricity',
                time: '08:28 - 27/04/2023',
                balance: '212.000đ',
                icon: images.idea,
                money: '-400.000đ',
            },
            {
                id: 'qeagscfgdfadsf',
                name: 'Deposit money into your wallet',
                time: '08:28 - 27/04/2023',
                balance: '1.300.000đ',
                icon: images.photoshop,
                money: '+300.000đ',
            },
            {
                id: 'aasfggdaddf',
                name: 'Transfer money to Johnny Dang',
                time: '08:28 - 27/04/2023',
                balance: '1.000.000đ',
                icon: images.figma,
                money: '-400.000đ',
            },
        ],
    },
]
