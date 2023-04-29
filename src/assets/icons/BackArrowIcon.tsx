import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

export const BackArrowIcon: FC<SvgProps> = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      d="M14.7002 18.3L8.1002 12L14.7002 5.70005"
      stroke={props.stroke || '#FEFEFE'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
)
