import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

export const EditIcon: FC<SvgProps> = (props) => (
<Svg
    width={47}
    height={47}
    fill="none"
    {...props}
  >
    <Rect width={47} height={47} rx={23.5} fill="#E9ECEF" />
    <Path
      opacity={0.15}
      d="M17.667 28.833H23l8-8-5.333-5.333-8 8v5.333Z"
      fill="#2245AC"
    />
    <Path
      d="m25.667 15.5-8 8v5.333H23l8-8M25.667 15.5l4-4L35 16.833l-4 4M25.667 15.5 31 20.833m-10.667-8h-8v21.334h21.334v-8"
      stroke="#2245AC"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
    
)
