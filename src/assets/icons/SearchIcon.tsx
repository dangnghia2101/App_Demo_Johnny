import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect, Circle, Line } from 'react-native-svg'

export const SearchIcon: FC<SvgProps> = (props) => {
    return (
        <Svg width={18} height={17} viewBox="0 0 23 24" fill="none" {...props}>
            <Circle
                cx={9.5}
                cy={9.5}
                r={8.5}
                stroke="#737373"
                strokeWidth={2}
            />
            <Path
                stroke="#737373"
                strokeWidth={3}
                d="M14.0607 15.9393L21.0607 22.9393"
            />
        </Svg>
    )
}
