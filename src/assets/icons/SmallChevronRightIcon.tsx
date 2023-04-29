import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

export const SmallChevronRightIcon: FC<SvgProps> = (props) => (
    <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      d="m8.75 6.75 3.5 3.25-3.5 3.25"
      stroke="gray"
      strokeOpacity={0.6}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
