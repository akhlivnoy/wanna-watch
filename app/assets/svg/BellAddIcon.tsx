import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const BellAddIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <G
      clipRule="evenodd"
      fill={color}
      fillRule="evenodd"
    >
      <Path d="M5.507 16h12.986a2.774 2.774 0 01-.618-1.746V10c0-3.343-2.66-6-5.875-6s-5.875 2.657-5.875 6v4.254c0 .636-.218 1.253-.618 1.746zm-2.041-.76l.438-.444a.772.772 0 00.221-.542V10c0-4.418 3.526-8 7.875-8 4.35 0 7.875 3.582 7.875 8v4.254c0 .203.08.398.221.542l.438.445c.134.136.202.205.255.28.101.143.168.308.196.482.015.092.015.188.015.38 0 .442 0 .662-.059.84a1.133 1.133 0 01-.706.717c-.174.06-.39.06-.82.06H4.585c-.43 0-.645 0-.82-.06a1.135 1.135 0 01-.706-.717C3 17.045 3 16.825 3 16.384c0-.193 0-.29.015-.381.028-.174.095-.339.196-.482.053-.075.12-.144.255-.28z" />
      <Path d="M12 6a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2V7a1 1 0 011-1zM8 17a1 1 0 011-1h6a1 1 0 011 1v1a4 4 0 01-8 0v-1zm2 1a2 2 0 104 0h-4z" />
    </G>
  </Svg>
);
