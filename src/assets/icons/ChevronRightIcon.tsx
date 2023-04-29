import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

export const ChevronRightIcon: FC<SvgProps> = (props) => (
    <Svg
        width="8"
        height="15"
        viewBox="0 0 11 20"
        fill="none"
        fillRule="evenodd"
        {...props}
    >
        <Path
            d="M1.3999 1.6001L10.1999 10.0001L1.3999 18.4001"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </Svg>
)
