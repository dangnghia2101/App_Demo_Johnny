import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { memo } from "react"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={14}
    height={10}
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.304.238a.812.812 0 0 1 0 1.149L5.72 8.97a.813.813 0 0 1-1.149 0L.238 4.637a.812.812 0 1 1 1.149-1.149l3.759 3.759L12.155.238a.813.813 0 0 1 1.149 0Z"
      fill="#000"
    />
  </Svg>
)

export const CheckBoxIcon = memo(SvgComponent)