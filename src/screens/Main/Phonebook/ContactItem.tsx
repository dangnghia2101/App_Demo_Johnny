import React from 'react'
import { Block, Image, Text } from '@components'
import { useTheme } from '@themes'
import { ChevronRightIcon } from '@assets/icons'
import { User } from '@reduxs/types'

interface ContactItemProps {
    contactInfo: User
}

// contact item inside phonebook
const ContactItem: React.FC<ContactItemProps> = ({ contactInfo }) => {
    const { name, role, avatar } = contactInfo
    const { colors } = useTheme()

    return (
        <Block
            row
            radius={12}
            flex
            backgroundColor={colors.contactIemBackground}
            marginBottom={8}
            space="between"
            alignCenter
            height={80}
            paddingHorizontal={10}
        >
            <Block flex row alignCenter>
                <Image
                    width={64}
                    height={64}
                    radius={32}
                    source={{ uri: avatar }}
                ></Image>
                <Block column marginLeft={23}>
                    <Text
                        size={14}
                        lineHeight={21}
                        color={colors.black}
                        fontFamily="medium"
                    >
                        {name}
                    </Text>
                    <Text
                        size={12}
                        lineHeight={18}
                        color={colors.blur}
                        fontFamily="medium"
                    >
                        {role}
                    </Text>
                </Block>
            </Block>

            <Block>
                <ChevronRightIcon></ChevronRightIcon>
            </Block>
        </Block>
    )
}

export default ContactItem
