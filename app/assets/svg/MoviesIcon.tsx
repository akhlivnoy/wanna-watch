import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const MoviesIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      d="M2 5v14h20V5H2zm3.474 13.163H2.8V16.4h2.674v1.764zm0-2.646H2.8v-1.764h2.674v1.764zm0-2.624H2.8V11.13h2.674v1.764zm0-2.623H2.8V8.506h2.674v1.764zm0-2.624H2.8V5.882h2.674v1.764zm9.305 4.885l-4.147 2.782c-.38.25-.864-.045-.864-.52V9.23c0-.475.484-.768.864-.52l4.147 2.782a.662.662 0 010 1.04zm6.42 5.632h-2.673V16.4H21.2v1.764zm0-2.646h-2.673v-1.764H21.2v1.764zm0-2.624h-2.673V11.13H21.2v1.764zm0-2.623h-2.673V8.506H21.2v1.764zm0-2.624h-2.673V5.882H21.2v1.764z"
      fill={color}
    />
  </Svg>
);
