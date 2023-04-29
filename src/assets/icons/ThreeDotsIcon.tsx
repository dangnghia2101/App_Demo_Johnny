import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const Icon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      d="M6 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      fill="#2245AC"
    />
  </Svg>
)

export const ThreeDotsIcon = memo(Icon)
