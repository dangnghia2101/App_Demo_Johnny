import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="m11.517 19.404-4.262 2.354c-.576.318-1.288.085-1.59-.52a1.292 1.292 0 0 1-.119-.785l.814-4.986a1.277 1.277 0 0 0-.339-1.095l-3.448-3.531a1.282 1.282 0 0 1-.02-1.75c.18-.194.417-.321.673-.36l4.765-.728c.383-.058.715-.311.887-.677l2.13-4.536c.288-.613.994-.864 1.578-.562.232.12.42.318.534.562l2.131 4.536c.172.366.504.619.887.677l4.765.728c.644.098 1.09.726.996 1.402a1.26 1.26 0 0 1-.344.708l-3.447 3.531a1.276 1.276 0 0 0-.339 1.095l.86 4.986a1.265 1.265 0 0 1-1.008 1.429 1.128 1.128 0 0 1-.747-.124l-4.261-2.354a1.128 1.128 0 0 0-1.096 0Z"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </Svg>
);

export const StarOutlineIcon = memo(SvgComponent);
