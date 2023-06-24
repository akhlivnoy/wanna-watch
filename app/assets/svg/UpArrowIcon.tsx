import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const UpArrowIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      clipRule="evenodd"
      d="M11.293 8.293a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L12 10.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
