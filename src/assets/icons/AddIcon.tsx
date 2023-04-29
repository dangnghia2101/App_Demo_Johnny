import React, { FC } from 'react'

import Svg, { SvgProps, Path, G, Rect } from 'react-native-svg'

type AddIconProps = {
    background: string
} & SvgProps

export const AddIcon: FC<AddIconProps> = (props) => {
    const { width, height, color, background } = props
    return (
        <Svg
            width={width || 30}
            height={height || 30}
            viewBox="0 0 24 24"
            {...props}
        >
            <Rect
                width={24}
                height={24}
                fill={background || '#fff'}
                strokeWidth={0}
                rx={12}
            />
            <G
                fill="none"
                stroke={color || '#000'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                data-name="add"
            >
                <Path d="M12 19V5M5 12h14" />
            </G>
        </Svg>
    )
}
