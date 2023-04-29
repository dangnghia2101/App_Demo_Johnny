import React, { useCallback, useMemo, useRef } from 'react'
import { Block, Container, Header, Image, Text } from '@components'
import { useTheme } from '@themes'
import { EyeOn, images, RightArrowIcon } from '@assets'
import { Cards, Features } from './components'
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { ScrollView } from 'react-native'

export const CreaditCard = () => {
    const { colors } = useTheme()

    const sheetRef = useRef<BottomSheet>(null)
    const snapPoints = useMemo(() => [200], [])

    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                disappearsOnIndex={-1}
                appearsOnIndex={0}
                {...props}
                enableTouchThrough={true}
            />
        ),
        [],
    )

    const handleSnapPress = useCallback(() => {
        sheetRef.current?.snapToIndex(0)
    }, [])

    const handleClosePress = useCallback(() => {
        sheetRef.current?.close()
    }, [])

    return (
        <Container statusColor={colors.primary} backgroundColor={colors.white}>
            <Block backgroundColor={colors.grayLight} flex>
                <Header
                    title="Creadit Cards"
                    backgroundColor={colors.primary}
                    colorIcon={colors.white}
                />
                <ScrollView>
                    <Block margin={10}>
                        <Block row space="between">
                            <Block>
                                <Text
                                    fontFamily="bold"
                                    size={18}
                                    lineHeight={18}
                                >
                                    Account/Cards
                                </Text>
                                <Text color={colors.gray} size={12}>
                                    Use payment, transfer money online
                                </Text>
                            </Block>

                            <Block alignCenter row>
                                <EyeOn color={colors.primary} />
                                <Text marginLeft={5} color={colors.primary}>
                                    Balance
                                </Text>
                            </Block>
                        </Block>

                        <Cards handleSnapPress={handleSnapPress} />
                    </Block>

                    <Text
                        marginLeft={10}
                        size={16}
                        color={colors.blackText}
                        fontFamily="bold"
                        marginVertical={10}
                    >
                        Utilities
                    </Text>
                    <Features />
                </ScrollView>
            </Block>

            {/* Bottom Sheet add creadit card */}
            <BottomSheet
                index={-1}
                ref={sheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                style={{ backgroundColor: colors.grayLight }}
            >
                <Block paddingHorizontal={10}>
                    <Text fontFamily="bold" size={16} center>
                        Add credit card
                    </Text>

                    <Block
                        row
                        backgroundColor={colors.grayLight}
                        padding={10}
                        radius={10}
                        alignCenter
                        space="between"
                        marginTop={10}
                    >
                        <Block row>
                            <Image
                                source={images.wallet}
                                width={30}
                                height={30}
                            />
                            <Block marginLeft={8}>
                                <Text fontFamily="bold">
                                    Link with existing bank
                                </Text>
                                <Text color={colors.grayText2}>
                                    Link with hundreds of different cards
                                </Text>
                            </Block>
                        </Block>
                        <RightArrowIcon color={colors.black} />
                    </Block>
                    <Block
                        row
                        backgroundColor={colors.grayLight}
                        padding={10}
                        radius={10}
                        alignCenter
                        space="between"
                        marginTop={10}
                    >
                        <Block row>
                            <Image
                                source={images.bank}
                                width={30}
                                height={30}
                            />
                            <Block marginLeft={8}>
                                <Text fontFamily="bold">
                                    Open a new bank account
                                </Text>
                                <Text color={colors.grayText2}>
                                    Fast, free, no need to go to the bank
                                </Text>
                            </Block>
                        </Block>
                        <RightArrowIcon color={colors.black} />
                    </Block>
                </Block>
            </BottomSheet>
        </Container>
    )
}
