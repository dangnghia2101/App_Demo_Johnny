import React, { FC } from 'react';

import Svg, { SvgProps, Path } from 'react-native-svg';

export const BottomPhonebookIcon: FC<SvgProps> = (props) => {
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
            <Path
                d="M7.7181 2.41847C7.51417 2.21454 7.23759 2.09998 6.94919 2.09998C4.54699 2.09998 2.59961 4.04735 2.59961 6.44956V8.50127C2.59961 9.81441 2.9159 11.1082 3.52172 12.2733C5.45981 16.0004 8.49923 19.0398 12.2263 20.9779C13.3914 21.5837 14.6852 21.9 15.9983 21.9H18.9744C20.8661 21.9 22.3996 20.3665 22.3996 18.4748C22.3996 17.6159 21.9703 16.8138 21.2557 16.3374C20.8793 16.0864 19.2913 15.0277 19.0883 14.9774C18.8987 14.9304 18.7005 14.9304 18.5109 14.9774C18.308 15.0277 16.5762 16.2616 16.0328 16.503C15.4893 16.7444 14.8755 16.7755 14.3105 16.5901C14.1162 16.5264 12.9485 15.9934 12.1608 15.4676C10.7236 14.5082 9.97741 13.7852 9.03198 12.3387C8.60188 11.6807 8.14994 10.7173 8.09259 10.5584C7.85843 9.90955 7.94538 8.94806 8.43202 8.30103C8.91867 7.654 10.3548 6.34479 10.4438 6.0708C10.5221 5.82978 10.5221 5.57017 10.4438 5.32916C10.381 5.1359 7.7181 2.41847 7.7181 2.41847Z" stroke={props.color} stroke-width="1.5" stroke-miterlimit="1.41421" stroke-linejoin="round"
                />
        </Svg>
    );
};