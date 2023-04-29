import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const GalleryIcon: React.FC<SvgProps> = (props) => (
    <Svg
        width={19}
        height={19}
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1.25 12.405L6.5 8.07l6.25 6.5m-2.5-3l3.75-2.5 3.75 3.5m-14.5 5.5h12.5a2 2 0 002-2v-12.5a2 2 0 00-2-2H3.25a2 2 0 00-2 2v12.5a2 2 0 002 2z"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
