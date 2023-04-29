import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgComponent = (props: SvgProps) => {
    const { color } = props
    return (
        <Svg width={9} height={15} fill="none" {...props}>
            <Path
                d="m1.375 13.75 6.25-6.25-6.25-6.25"
                stroke={color || '#fff'}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export const RightArrowIcon = memo(SvgComponent)
