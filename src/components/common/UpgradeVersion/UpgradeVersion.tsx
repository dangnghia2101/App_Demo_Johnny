import { Block, Text } from '@components/base'
import useCodePush from '@hooks/useCodePush'
import { useTheme } from '@themes'
import { isNaN } from 'lodash'
import React from 'react'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import { Circle, Svg, Text as SvgText } from 'react-native-svg'

export const UpgradeVersion = () => {
  const { colors } = useTheme()
  const { percentUpdated, showUpgradeScreen } = useCodePush()

  const { size, strokeWidth } = {
    size: 100,
    strokeWidth: 10,
  }

  const radius = (size - strokeWidth) / 2
  const circum = radius * 2 * Math.PI

  if (!showUpgradeScreen) {
    return <Block />
  }

  return (
    <Animated.View
      key={'uniqueKey'}
      entering={FadeIn.duration(400)}
      exiting={FadeOut.duration(400)}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={'#f2f2f2'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{ strokeWidth }}
        />

        {/* Progress Circle */}
        <Circle
          stroke={colors.oceanBlue}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={
            radius *
            Math.PI *
            2 *
            ((!isNaN(percentUpdated) ? 100 - percentUpdated : 100) / 100)
          }
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{ strokeWidth }}
        />

        {/* Text */}
        <SvgText
          fontSize={'17'}
          x={size / 2 + 2}
          y={size / 2 + 7}
          textAnchor="middle"
          fill={colors.oceanBlue}
          fontFamily="Inter-Bold"
          fontWeight="bold"
        >
          {percentUpdated ? percentUpdated + '%' : '0%'}
        </SvgText>
      </Svg>
      <Text size={12} marginTop={5}>
        Đang cập nhật...
      </Text>
    </Animated.View>
  )
}
