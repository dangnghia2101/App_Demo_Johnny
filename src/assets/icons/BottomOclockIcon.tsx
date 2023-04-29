import React, { FC } from "react";

import Svg, { SvgProps, Path } from "react-native-svg";

export const BottomOclockIcon: FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 6.5V12.5L16 14.5"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
