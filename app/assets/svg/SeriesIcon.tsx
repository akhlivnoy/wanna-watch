import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const SeriesIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      clipRule="evenodd"
      d="M5.2 19.917H16c.318 0 .623-.132.848-.367.225-.234.352-.552.352-.883V9.502c0-.332-.127-.65-.352-.884A1.177 1.177 0 0016 8.252H5.2c-.318 0-.623.132-.848.366A1.278 1.278 0 004 9.502v9.165c0 .331.127.65.352.883.225.235.53.367.848.367zM4.8 9.502c0-.23.18-.417.4-.417H16c.22 0 .4.187.4.417v9.165c0 .23-.18.417-.4.417H5.2c-.22 0-.4-.187-.4-.417V9.502zM19.2 15.334c-.318 0-.623-.131-.849-.366a1.277 1.277 0 01-.351-.883c0-.332.126-.65.351-.884.226-.235.53-.366.849-.366.318 0 .623.131.849.366.224.234.35.552.35.883 0 .332-.126.65-.35.884-.226.234-.531.366-.85.366zm0-1.666a.4.4 0 00-.37.257.43.43 0 00.087.454c.114.12.286.155.436.09a.417.417 0 00.247-.384c0-.23-.18-.417-.4-.417zM18.351 11.636c.226.234.53.366.849.366.318 0 .623-.133.848-.367.225-.234.352-.552.352-.883 0-.332-.127-.65-.351-.884a1.177 1.177 0 00-.85-.366c-.317 0-.623.131-.848.366a1.277 1.277 0 00-.351.884c0 .331.126.649.351.883zm.48-1.044a.4.4 0 01.369-.257c.22 0 .4.187.4.417 0 .168-.098.32-.247.384a.389.389 0 01-.436-.09.43.43 0 01-.087-.454z"
      fill={color}
      fillRule="evenodd"
    />
    <Path
      d="M20 17h-1.6c-.221 0-.4-.186-.4-.416 0-.23.179-.416.4-.416H20c.22 0 .4.186.4.416 0 .23-.18.417-.4.417zM18.4 18.667H20c.22 0 .4-.186.4-.417a.408.408 0 00-.4-.416h-1.6c-.221 0-.4.186-.4.416 0 .23.179.417.4.417z"
      fill={color}
    />
    <Path
      clipRule="evenodd"
      d="M12.968 6.169H20c.53 0 1.039.22 1.414.61.375.391.586.92.586 1.473v11.665c0 .552-.21 1.082-.586 1.473-.375.39-.884.61-1.414.61H4c-.53 0-1.039-.22-1.414-.61A2.13 2.13 0 012 19.917V8.252c0-.552.21-1.082.586-1.473.375-.39.884-.61 1.414-.61h7.032L7.716 2.715a.427.427 0 01-.001-.592A.394.394 0 018 2c.106 0 .209.045.284.124L12 5.994l2.916-3.037a.394.394 0 01.284-.124c.107 0 .21.044.285.123a.428.428 0 01-.001.593l-2.516 2.62zm7.88 14.63a1.28 1.28 0 00.352-.882V8.252a1.28 1.28 0 00-.353-.883A1.18 1.18 0 0020 7.002H4a1.18 1.18 0 00-.848.367 1.28 1.28 0 00-.352.883v11.665c0 .331.128.648.352.883.225.234.53.366.848.367h16a1.18 1.18 0 00.847-.367z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
