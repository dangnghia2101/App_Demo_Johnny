import React, { FC } from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';

export const UserIcon: FC<SvgProps> = (props) => {
    return (
        <Svg width={48} height={48} stroke={'#000'}
         viewBox='0 0 48 48'
         {...props}>
            <Rect width={48} height={48} rx={12} fill="#EDF0F0" stroke={''}/>
            <Path
                d="M29.2 16C29.2 18.8719 26.8719 21.2 24 21.2C21.1281 21.2 18.8 18.8719 18.8 16C18.8 13.1282 21.1281 10.8 24 10.8C26.8719 10.8 29.2 13.1282 29.2 16Z"
                fill="#EDF0F0"
                strokeWidth={1.5}
                strokeLinejoin={'round'}
            />
            <Path
            fill="#EDF0F0"
            strokeLinejoin={'round'}
            strokeWidth={1.5}
            d='M14 34.6001C14 30.2922 17.4922 26.8001 21.8 26.8001H26.2C30.5078 26.8001 34 30.2922 34 34.6001C34 36.036 32.8359 37.2001 31.4 37.2001H16.6C15.1641 37.2001 14 36.036 14 34.6001Z' />
        </Svg>
    );
};