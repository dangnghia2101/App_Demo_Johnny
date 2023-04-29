import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const WhiteSearchIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      d="m13.5 13.5 4.75 4.75m-3-9.75a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
