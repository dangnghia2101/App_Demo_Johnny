import React, { FC } from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'

type UnHeartIcon = {
    background?: string
} & SvgProps

export const UnHeartIcon: FC<UnHeartIcon> = (props) => {
    const { width, height, color, background } = props
    return (
        <Svg
            fill="none"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            {...props}
        >
            <Path
                stroke={color || '#323232'}
                strokeLinejoin="round"
                strokeWidth={2}
                d="m4.882 12.956 5.62 6.351a2 2 0 0 0 2.996 0l5.62-6.351c1.673-1.891 2.542-4.269 1.285-6.536-1.452-2.62-4.113-3.156-6.426-1.396a13.084 13.084 0 0 0-1.766 1.654.284.284 0 0 1-.422 0 13.084 13.084 0 0 0-1.766-1.654C7.71 3.264 5.049 3.8 3.597 6.42c-1.257 2.267-.388 4.645 1.285 6.536Z"
            />
        </Svg>
    )
}
