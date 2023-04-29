import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { memo } from 'react'

const Icon = (props: SvgProps) => (
  <Svg
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    {...props}
  >
    <Path
      d="M12.5 15v.625a2.5 2.5 0 0 1-5 0V15m9.206-1.272c-1.003-1.228-1.712-1.853-1.712-5.238 0-3.1-1.582-4.204-2.885-4.74a.696.696 0 0 1-.389-.412c-.228-.778-.869-1.463-1.72-1.463-.852 0-1.493.686-1.72 1.464a.69.69 0 0 1-.388.411c-1.304.537-2.886 1.638-2.886 4.74-.001 3.385-.71 4.01-1.713 5.238-.415.508-.051 1.272.676 1.272h12.065c.723 0 1.085-.766.672-1.272Z"
      stroke={props.color || '#FEFEFE'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const NotificationOutlineIcon = memo(Icon)
