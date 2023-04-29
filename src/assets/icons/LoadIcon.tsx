import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = (props: SvgProps) => (
  <Svg width={17} height={20} fill="none" {...props}>
    <Path
      d="M1.21 10A7.425 7.425 0 1 0 8.45 4.225H3.224m0 0 3.85-3.3m-3.85 3.3 3.85 3.3"
      stroke="#2D5381"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const LoadIcon = memo(SvgComponent);
