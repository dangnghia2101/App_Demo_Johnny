import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const Icon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      d="M27 6a1 1 0 0 1 1 1v15H4V7a1 1 0 0 1 1-1h22ZM5 4a3 3 0 0 0-3 3v17h28V7a3 3 0 0 0-3-3H5ZM0 25h32a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3Z"
      fill="#2245AC"
    />
  </Svg>
)

export const LaptopIcon = memo(Icon)
