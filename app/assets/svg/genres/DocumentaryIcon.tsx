import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const DocumentaryIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      d="M22 4.199V3H2v1.199h.703v1.8H2v1.502h3.325c.428 0 .78.516.78 1.145v6.708c0 .631-.35 1.145-.78 1.145H2V18h1.11v1.801H2V21h20v-1.199h-.703v-1.8H22v-1.502h-3.325c-.428 0-.78-.516-.78-1.145V8.646c0-.631.35-1.145.78-1.145H22V6h-1.11V4.199H22zm-16.5 1.8H4.1V4.2h1.4v1.8zm.407 13.8h-1.4v-1.801h1.4v1.8zM18.5 17.998h1.4v1.8h-1.4v-1.8zm-3.205-13.8h1.4V6h-1.4V4.199zm-2.797 0h1.4V6h-1.4V4.199zm-2.803 0h1.4V6h-1.4V4.199zm-2.798 0h1.4V6h-1.4V4.199zm.396 4.448c0-.631.35-1.145.78-1.145h7.854c.428 0 .78.516.78 1.145v6.708c0 .631-.35 1.145-.78 1.145H8.073c-.428 0-.78-.516-.78-1.145V8.646zm1.412 11.153h-1.4v-1.801h1.4v1.8zm2.797 0h-1.4v-1.801h1.4v1.8zm2.803 0h-1.4v-1.801h1.4v1.8zm2.797 0h-1.4v-1.801h1.4v1.8zm2.39-13.8h-1.4V4.2h1.4v1.8z"
      fill={color}
    />
  </Svg>
);
