import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = (props: SvgProps) => (
  <Svg  width={props.width || 13} height={props.height || 13} viewBox={props.viewBox ||"0 0 14 13"} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M6.10583 1.78578C6.47454 1.04941 7.52546 1.04941 7.89417 1.78578L8.92892 3.85231C9.07556 4.14516 9.35631 4.34765 9.68047 4.39436L11.9722 4.72458C12.7966 4.84336 13.123 5.85884 12.5222 6.43568L10.8838 8.00885C10.6439 8.23923 10.5342 8.57385 10.5912 8.90158L10.9802 11.1372C11.122 11.9522 10.2692 12.5771 9.5347 12.1963L7.46025 11.1209C7.17165 10.9713 6.82834 10.9713 6.53975 11.1209L4.4653 12.1963C3.73084 12.5771 2.87805 11.9522 3.01985 11.1371L3.4088 8.90158C3.46581 8.57385 3.35614 8.23923 3.11619 8.00885L1.47778 6.43568C0.877006 5.85884 1.2034 4.84336 2.02776 4.72458L4.31953 4.39436C4.64369 4.34765 4.92444 4.14516 5.07108 3.85231L6.10583 1.78578Z"
      strokeWidth={0.5}
      strokeLinejoin="round"
      stroke={props.stroke}
    />
  </Svg>
);

export const StarOutlineIconSmall = memo(SvgComponent);
