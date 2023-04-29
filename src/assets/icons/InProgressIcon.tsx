import React, { FC } from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const InProgressIcon: FC<SvgProps> = (props) => (
  <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...props}>
    <Path
      d="M13.6 0.666748C13.4667 0.666748 13.4667 0.666748 13.3334 0.666748C13.3334 0.666748 13.3334 0.666748 13.2 0.666748C12.9334 0.666748 12.8 0.666748 12.5334 0.666748L12.8 3.33341C13.3334 3.33341 14 3.33341 14.5334 3.33341C19.8667 3.73341 24.2667 8.00008 24.5334 13.4667C24.8 19.3334 20.2667 24.4001 14.4001 24.6667C14.4001 24.6667 14.2667 24.6667 14.1334 24.6667C13.7334 24.6667 13.2 24.6667 12.8 24.6667L12.6667 27.3334C13.2 27.3334 13.7334 27.3334 14.4001 27.3334C14.5334 27.3334 14.8 27.3334 14.9334 27.3334C22.1334 26.8001 27.6 20.6667 27.3334 13.4667C27.0667 6.66675 21.6 1.33341 14.9334 0.800081C14.6667 0.800081 14.5334 0.800081 14.2667 0.800081C14 0.666748 13.8667 0.666748 13.6 0.666748ZM8.93338 1.60008C8.26672 2.00008 7.60005 2.26675 6.93338 2.66675L8.40005 4.93341C8.80005 4.66675 9.33338 4.40008 9.86672 4.13341L8.93338 1.60008ZM4.00005 5.20008C3.46672 5.73341 3.06672 6.40008 2.66672 6.93341L4.93338 8.26675C5.20005 7.86675 5.60005 7.46675 6.00005 6.93341L4.00005 5.20008ZM18.5334 9.20008L12.4001 16.1334L8.80005 13.3334L7.33338 15.6001L12.9334 19.8667L20.6667 11.0667L18.5334 9.20008ZM1.20005 10.0001C0.933382 10.6667 0.800049 11.4667 0.800049 12.1334L3.46672 12.5334C3.60005 12.0001 3.60005 11.3334 3.86672 10.8001L1.20005 10.0001ZM3.46672 15.3334L0.800049 15.6001C0.800049 15.7334 0.800049 15.8667 0.800049 16.0001C0.933382 16.5334 1.06672 17.2001 1.20005 17.7334L3.73338 16.9334C3.60005 16.5334 3.46672 16.0001 3.46672 15.4667V15.3334ZM4.93338 19.6001L2.66672 21.0667C3.06672 21.7334 3.46672 22.2667 4.00005 22.8001L6.00005 21.0667C5.60005 20.5334 5.20005 20.1334 4.93338 19.6001ZM8.40005 23.0667L6.93338 25.3334C7.60005 25.7334 8.26672 26.0001 8.93338 26.4001L10 24.0001C9.33338 23.6001 8.80005 23.3334 8.40005 23.0667Z"
      fill="#2245AC"
    />
  </Svg>
);
