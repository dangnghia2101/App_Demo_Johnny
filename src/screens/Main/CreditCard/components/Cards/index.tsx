import { AddIcon, HeartIcon, images, UnHeartIcon } from '@assets'
import { Block, Image, Text } from '@components'
import { colors } from '@themes'
import React, { FC, useState } from 'react'
import { TouchableOpacity } from 'react-native'

const dataCards: CardType[] = [
    {
        id: '1adf',
        name: 'Momo Wallet',
        ballance: '19.000.000đ',
        logo: images.momo,
        number: undefined,
        color: colors.light.primary,
        active: true,
    },
    {
        id: '2adfa',
        name: 'Visa',
        ballance: undefined,
        logo: images.visa,
        number: '**032',
        color: colors.light.blueText,
        active: false,
    },
    {
        id: '3adf',
        name: 'MasterCard',
        ballance: undefined,
        logo: images.master_card,
        number: '**121',
        color: colors.light.red,
        active: false,
    },
    {
        id: '4adfa',
        name: 'MasterCard',
        ballance: undefined,
        logo: images.master_card,
        number: '**898',
        color: colors.light.red,
        active: false,
    },
]

type CardType = {
    id: string
    name: string
    ballance: string | undefined
    logo: any
    number: string | undefined
    color: string
    active: boolean
}

type CardsProps = {
    handleSnapPress: () => void
}

const Card = ({
    data,
    index,
    setListCard,
    listCard,
    flag,
    setFlag,
}: {
    data: CardType
    index: number
    setListCard: any
    listCard: CardType[]
    flag: boolean
    setFlag: any
}) => {
    const handleTymCard = () => {
        let _dataCards = listCard
        _dataCards[index].active = !_dataCards[index].active

        _dataCards = _dataCards.sort((a, b) => {
            if (a.active === b.active) {
                return 0
            } else if (a.active) {
                return -1
            } else {
                return 1
            }
        })

        setListCard(_dataCards)
        setFlag(!flag)
    }

    return (
        <Block
            backgroundColor={colors.light.grayLight}
            radius={10}
            paddingTop={6}
            marginTop={-25}
        >
            <Block
                backgroundColor={data.color}
                radius={15}
                padding={10}
                row
                space="between"
                paddingBottom={30}
            >
                <Block row>
                    <Block
                        backgroundColor={colors.light.white}
                        radius={100}
                        padding={2}
                    >
                        <Image
                            source={data.logo}
                            width={30}
                            height={30}
                            radius={100}
                        />
                    </Block>
                    <Block marginLeft={10}>
                        <Text
                            fontFamily="bold"
                            size={16}
                            color={colors.light.white}
                        >
                            {data.name}
                        </Text>
                        {data.ballance ? (
                            <Text size={12} color={colors.light.white}>
                                Balance: {data.ballance}
                            </Text>
                        ) : (
                            <Text size={12} color={colors.light.white}>
                                Direct Payment
                            </Text>
                        )}
                    </Block>
                </Block>

                <TouchableOpacity onPress={handleTymCard}>
                    <Block
                        backgroundColor={colors.light.white}
                        height={30}
                        width={30}
                        radius={150}
                        alignCenter
                        justifyCenter
                    >
                        {data.active ? (
                            <HeartIcon width={20} height={20} />
                        ) : (
                            <UnHeartIcon width={20} height={20} />
                        )}
                    </Block>
                </TouchableOpacity>
            </Block>
        </Block>
    )
}

export const Cards: FC<CardsProps> = (props) => {
    const { handleSnapPress } = props
    const [listCard, setListCard] = useState<CardType[]>(dataCards)
    const [flag, setFlag] = useState(false)
    return (
        <Block marginTop={25}>
            {listCard.map((card, index) => (
                <Card
                    key={card.id}
                    data={card}
                    index={index}
                    setListCard={setListCard}
                    listCard={listCard}
                    setFlag={setFlag}
                    flag={flag}
                />
            ))}

            {/* Add Credit card */}
            <Block
                backgroundColor={colors.light.primary2}
                height={120}
                marginTop={-25}
                alignCenter
                paddingVertical={10}
                paddingHorizontal={50}
                borderBottomLeftRadius={15}
                borderBottomRightRadius={15}
                borderTopWidth={4}
                borderColor={colors.light.primary}
            >
                <TouchableOpacity onPress={handleSnapPress}>
                    <Block
                        backgroundColor={colors.light.primary}
                        radius={10}
                        padding={10}
                        row
                        alignCenter
                        justifyCenter
                        width={180}
                    >
                        <AddIcon
                            width={20}
                            height={20}
                            background={colors.light.primary}
                            color={colors.light.white}
                        />
                        <Text color={colors.light.white}>Add credit card</Text>
                    </Block>
                </TouchableOpacity>

                <Text
                    marginTop={10}
                    size={12}
                    color={colors.light.grayLight}
                    center
                >
                    Link with your bank bank or create new bank account
                </Text>
            </Block>

            <Block row alignCenter marginTop={20}>
                <UnHeartIcon
                    color={colors.light.primary}
                    width={30}
                    height={30}
                />
                <Text marginLeft={5} size={12} color={colors.light.grayText1}>
                    Drop a tym to set the account/card as payment priority.
                    {'             '}
                    <Text size={12} color={colors.light.oceanBlue}>
                        Learn more
                    </Text>
                </Text>
            </Block>
        </Block>
    )
}
