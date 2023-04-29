import { Button } from '@components'
import React, { FC } from 'react'
import { useTheme } from '@themes'

type MenuItemProps = {
  title: string
  icon: React.ReactNode
  onPress?: () => void
}

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { colors } = useTheme()
  const { title, icon, onPress } = props
  return (
    <Button
      titleProps={{
        color: colors.black,
        fontFamily: 'medium',
        fontWeight: '500',
        size: 16,
        lineHeight: 24,
        flex: 1,
        numberOfLines: 1,
        marginTop: 3,
        marginLeft: 10,
      }}
      pressedBackground={colors.grayLight}
      justifyCenter
      shadow
      accessibilityElementsHidden
      title={title}
      leftIcon={icon}
      backgroundColor={colors.grayLight}
      leftIconContainerStyle={{ justifyContent: 'center' }}
      marginBottom={15}
      marginHorizontal={16}
      radius={12}
      onPress={onPress}
    ></Button>
  )
}
