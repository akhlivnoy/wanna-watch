import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const TvMovieIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      clipRule="evenodd"
      d="M3.667 5.478h16.666c.92 0 1.667.779 1.667 1.74V20.26c0 .96-.746 1.739-1.667 1.739H3.667C2.747 22 2 21.221 2 20.26V7.218c0-.96.746-1.739 1.667-1.739zm1.666 2.609c-.46 0-.833.39-.833.87v9.565c0 .48.373.87.833.87h13.334c.46 0 .833-.39.833-.87V8.956c0-.48-.373-.87-.833-.87H5.333z"
      fill={color}
      fillRule="evenodd"
    />
    <Path
      clipRule="evenodd"
      d="M14.5 12.435v2.608h-5v-2.608h5zm.833 0V9.826h.834v7.826h-.834v-5.217zm-.833-.87h-5V9.826h5v1.74zm0 6.087h-5v-1.739h5v1.74zM8.667 9.826v7.826h-.834V9.826h.834z"
      fill={color}
      fillRule="evenodd"
    />
    <Path
      d="M12.26 6.687l4.167-3.478a.448.448 0 00.065-.611.405.405 0 00-.586-.068L11.74 6.008a.448.448 0 00-.065.611.405.405 0 00.585.068zM7.833 3.74c.46 0 .834-.39.834-.87S8.294 2 7.833 2C7.373 2 7 2.39 7 2.87s.373.87.833.87z"
      fill={color}
    />
    <Path
      d="M16.167 3.74c.46 0 .833-.39.833-.87S16.627 2 16.167 2c-.46 0-.834.39-.834.87s.373.87.834.87zM12.26 6.008L8.094 2.53a.405.405 0 00-.586.068.448.448 0 00.065.611l4.167 3.478c.18.15.442.12.585-.068a.448.448 0 00-.065-.61z"
      fill={color}
    />
  </Svg>
);
