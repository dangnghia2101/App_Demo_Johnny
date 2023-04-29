import React, { FC } from 'react'
import Svg, { SvgProps, Path, Rect } from 'react-native-svg'

export const PhoneIcon: FC<SvgProps> = (props) => (
  <Svg width="47" height="48" viewBox="0 0 47 48" fill="none" {...props}>
    <Rect y="0.5" width="47" height="47" rx="23.5" fill="#E9ECEF" />
    <Path
      d="M31.4694 28.8211C30.8204 28.1672 29.2487 27.2131 28.4861 26.8286C27.4931 26.3284 27.4114 26.2875 26.6308 26.8674C26.1102 27.2544 25.764 27.6001 25.1547 27.4701C24.5454 27.3402 23.2213 26.6075 22.0619 25.4519C20.9026 24.2962 20.1273 22.9338 19.997 22.3266C19.8666 21.7194 20.2181 21.3773 20.6014 20.8555C21.1416 20.12 21.1008 19.9974 20.639 19.0044C20.2789 18.2321 19.2969 16.6752 18.6406 16.0295C17.9385 15.3361 17.9385 15.4587 17.4861 15.6466C17.1178 15.8016 16.7645 15.9899 16.4306 16.2093C15.7767 16.6437 15.4138 17.0045 15.16 17.5468C14.9062 18.0891 14.7922 19.3603 16.1028 21.741C17.4134 24.1217 18.3329 25.3391 20.236 27.2368C22.1392 29.1345 23.6026 30.1549 25.742 31.3546C28.3885 32.8367 29.4036 32.5478 29.9475 32.2945C30.4915 32.0411 30.8539 31.6815 31.2892 31.0277C31.5091 30.6943 31.6979 30.3414 31.8531 29.9734C32.0415 29.5227 32.1641 29.5227 31.4694 28.8211Z"
      fill="#2245AC"
      stroke="#2245AC"
      stroke-width="1.50676"
      stroke-miterlimit="10"
    />
  </Svg>
)