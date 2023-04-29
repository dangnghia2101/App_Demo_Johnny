import React, { FC } from "react";

import Svg, { SvgProps, Path } from "react-native-svg";



export const BackIcon: FC<SvgProps> = (props) => {
  return (
    <Svg
      width={25}
      height={25}
      stroke={ props.stroke ||"#000"}
      fill="none"
      strokeWidth={1.5}
      viewBox="0 0 20 20"
      strokeLinejoin={"round"}
      strokeLinecap={"round"} 
      {...props}
    >
      <Path d="M12.25 4.75L6.75 10L12.25 15.25" fill="none" />
    </Svg>
  );
};
