import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

export const StarRateIcon: FC<SvgProps> = (props) => (
  <Svg
    width={ props.width || 14}
    height={props.height ||14}
    fill="none"
    viewBox={props.viewBox ||"0 0 14 14"}
    {...props}
  >
         <Rect width={props.width ||14} height={props.height ||14} fill="none" stroke={''}/>
    <Path
      d="M6.106.786a1 1 0 0 1 1.788 0l1.344 2.683a1 1 0 0 0 .751.542l2.983.43a1 1 0 0 1 .55 1.711l-2.138 2.054a1 1 0 0 0-.293.892l.507 2.914a1 1 0 0 1-1.445 1.06L7.46 11.675a1 1 0 0 0-.92 0L3.847 13.07a1 1 0 0 1-1.445-1.059l.507-2.914a1 1 0 0 0-.293-.892L.478 6.152a1 1 0 0 1 .55-1.71l2.983-.43a1 1 0 0 0 .751-.543L6.106.786Z"
      fill="#FFE144"
    />

  </Svg>
)
