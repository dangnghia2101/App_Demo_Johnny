import { Block, Container, Text, Header } from '@components'
import React, { useEffect } from 'react'
import { useTheme, makeStyles } from '@themes'
import ContactItem from '@screens/Main/Phonebook/ContactItem'
import { SectionList, TouchableOpacity } from 'react-native'
import { routes } from '@navigation'
import { useLazyGetContactsQuery } from '@reduxs'
import { SectionListTransform, User } from '@reduxs/types'
import { navigate } from '@navigation/NavigationServices'

type PhonebookProps = {
    backgroundColor: string
}

export const Phonebook = () => {
    const { colors } = useTheme()
    const styles = useStyles({ backgroundColor: colors.background })
    const [getContacts] = useLazyGetContactsQuery()
    const [sections, setSections] = React.useState<SectionListTransform[]>([])

    const fetchData = async () => {
        const res = await getContacts()
        if (res.data) {
            setSections(res.data)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const navigateToContacInfo = (userContact: User) => {
        navigate(routes.contactInfor, { userContact })
    }

    const renderItem = ({ item }: { item: User }) => {
        return (
            <TouchableOpacity onPress={() => navigateToContacInfo(item)}>
                <ContactItem contactInfo={item}></ContactItem>
            </TouchableOpacity>
        )
    }

    return (
        <Container style={styles.root}>
            <Header
                title="Liên hệ"
                showIconBack={false}
                fontFamily="bold"
                backgroundColor={colors.background}
            />
            <Block marginHorizontal={16} flex>
                {/*Render list contact*/}
                <SectionList
                    refreshing={false}
                    onRefresh={() => fetchData()}
                    style={{ height: '100%' }}
                    sections={sections}
                    renderItem={renderItem}
                    renderSectionHeader={({ section }) => (
                        <Text
                            lineHeight={21}
                            size={14}
                            fontFamily="medium"
                            color={colors.blur}
                            marginTop={20}
                            marginBottom={10}
                            marginLeft={15}
                        >
                            {section.title}
                        </Text>
                    )}
                    keyExtractor={(item) => item._id}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderHiddenOnScroll={false}
                    stickySectionHeadersEnabled={false}
                />
            </Block>
        </Container>
    )
}

const useStyles = makeStyles<PhonebookProps>()(({}) => ({
    root: ({ backgroundColor }) => ({
        flex: 1,
        backgroundColor: backgroundColor,
    }),
}))
