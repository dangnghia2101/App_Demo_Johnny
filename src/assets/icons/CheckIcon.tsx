import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgComponent = (props: SvgProps) => (
  <Svg width={20} height={14} fill="none" stroke="#fff" {...props}>
    <Path
      d="M1.6 7.4 6.8 13 18.4 1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const CheckIcon = memo(SvgComponent)
