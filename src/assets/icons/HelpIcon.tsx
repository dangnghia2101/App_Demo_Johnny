import React, { FC } from "react";

import Svg, { SvgProps, Path } from "react-native-svg";

export const HelpIcon: FC<SvgProps> = (props) => {
  return (
    <Svg width={20} height={20} fill="none" {...props}>
      <Path
        d="M10 13.75C10 14.3358 10 13.6642 10 14.25M7.75 7.99999C7.75 6.75735 8.75736 5.74999 10 5.74999C11.2426 5.74999 12.25 6.75735 12.25 7.99999C12.25 9.24263 11.2426 10.25 10 10.25V11.25M18.25 9.99999C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 9.99999C1.75 5.44364 5.44365 1.74999 10 1.74999C14.5563 1.74999 18.25 5.44364 18.25 9.99999Z"
        stroke="#FFFFFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
