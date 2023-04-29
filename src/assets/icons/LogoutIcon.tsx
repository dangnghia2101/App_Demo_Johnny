import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

export const LogoutIcon: FC<SvgProps> = (props) => {
    return (
        <Svg
            width={35}
            height={35}
            stroke={'#000'}
            viewBox="0 0 48 48"
            {...props}
        >
            <Rect width={48} height={48} rx={12} fill="#EDF0F0" stroke={''} />
            <Path
                fill="#EDF0F0"
                strokeLinejoin={'round'}
                strokeWidth={1.5}
                d="M35.5996 23.9999L21.9996 24M35.5996 23.9999L30.7996 18.7999M35.5996 23.9999L30.7996 29.2M22.7996 10.7999L15.5996 10.7999C13.8323 10.7999 12.3996 12.2326 12.3996 13.9999L12.3996 34C12.3996 35.7673 13.8323 37.2 15.5996 37.2L22.7996 37.2"
            />
        </Svg>
    )
}
