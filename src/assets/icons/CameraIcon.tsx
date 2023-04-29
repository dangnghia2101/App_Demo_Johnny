import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const CameraIcon: React.FC<SvgProps> = (props) => (
    <Svg
        width={18}
        height={17}
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M.75 6.771c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874c.428-.218.988-.218 2.108-.218h1.8l.558-1.115c.16-.321.24-.482.36-.599a1 1 0 01.374-.23c.158-.056.338-.056.697-.056h2.522c.36 0 .539 0 .697.055a1 1 0 01.374.231c.12.117.2.278.36.599l.558 1.115h1.8c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874c.218.428.218.988.218 2.108v6.1c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874c-.428.218-.988.218-2.108.218H3.95c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C.75 14.552.75 13.992.75 12.871v-6.1z"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
        <Path
            d="M12.25 9.821a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
            stroke="#000"
            strokeWidth={1.5}
            strokeLinejoin="round"
        />
    </Svg>
)
