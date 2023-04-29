import { images } from '@assets'
import { Block, Image, Text } from '@components'
import { useTheme } from '@themes'
import React, { FC } from 'react'
import { DetailHistoryType, HistoryType } from '../../History'

export const ItemHistory = ({
    item,
    index,
}: {
    item: DetailHistoryType
    index: number
}) => {
    const { colors } = useTheme()

    console.log('==> inndex ', index)

    return (
        <Block
            row
            padding={10}
            space="between"
            backgroundColor={index % 2 !== 0 ? colors.grayLight : colors.white}
        >
            <Block row>
                <Block
                    backgroundColor={colors.white}
                    borderColor={colors.grayLight}
                    borderWidth={1}
                    radius={100}
                    alignCenter
                    justifyCenter
                    width={45}
                    height={45}
                >
                    <Image source={item.icon} width={30} height={30} />
                </Block>
                <Block marginLeft={8}>
                    <Text fontFamily="medium">{item.name}</Text>
                    <Text size={12} color={colors.grayBackground}>
                        {item.time}
                    </Text>
                    <Text size={12} color={colors.gray}>
                        Balance {item.balance}
                    </Text>
                </Block>
            </Block>
            <Block justifyEnd>
                <Text fontFamily="bold">{item.money}</Text>
            </Block>
        </Block>
    )
}
