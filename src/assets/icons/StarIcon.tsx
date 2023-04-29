import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const StarIcon = (props: SvgProps) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      d="M8.612.71a1 1 0 0 1 1.776 0l2.119 4.085a1 1 0 0 0 .75.53l4.654.647a1 1 0 0 1 .542 1.724l-3.301 3.06a1 1 0 0 0-.305.91l.788 4.369a1 1 0 0 1-1.432 1.072l-4.256-2.13a1 1 0 0 0-.894 0l-4.256 2.13a1 1 0 0 1-1.432-1.072l.788-4.369a1 1 0 0 0-.305-.91L.547 7.695a1 1 0 0 1 .542-1.724l4.655-.647a1 1 0 0 0 .75-.53L8.612.71Z"
      fill="#FFE144"
    />
  </Svg>
)

export default StarIcon
