import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const Icon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      d="M2 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Zm13 1a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5Zm3-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-6ZM2 21a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6Zm3-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H5Zm13 1a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-6Zm3-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6Z"
      fill="#2245AC"
    />
  </Svg>
)

export const MenuIcon = memo(Icon)
