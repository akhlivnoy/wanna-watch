import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const RealityIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      d="M19.75 5.729H4.25C3.007 5.729 2 6.708 2 7.913v9.417c0 1.206 1.007 2.184 2.25 2.184h15.5c1.243 0 2.25-.979 2.25-2.184V7.913c0-1.205-1.007-2.184-2.25-2.184zM4.25 7.085h15.5c.468 0 .85.37.85.828v9.417a.84.84 0 01-.85.828H4.25a.84.84 0 01-.85-.828V7.913a.84.84 0 01.85-.828z"
      fill={color}
    />
    <Path
      d="M15.487 8.215H5.257a.69.69 0 00-.7.678v7.457a.69.69 0 00.7.678h10.23a.69.69 0 00.7-.678V8.893a.69.69 0 00-.7-.678zm-.7 1.355v6.102h-8.83V9.57h8.83z"
      fill={color}
    />
    <Path
      clipRule="evenodd"
      d="M18.045 10.757a.655.655 0 01-.452-.182.612.612 0 01-.188-.44.58.58 0 01.052-.24.513.513 0 01.136-.199c.06-.058.128-.099.205-.132a.64.64 0 01.494 0 .664.664 0 01.205.132.639.639 0 01.187.44.612.612 0 01-.392.571.627.627 0 01-.247.05zM18.045 13.243a.655.655 0 01-.452-.182.612.612 0 01-.188-.44.58.58 0 01.052-.24.513.513 0 01.136-.199c.06-.058.128-.1.205-.132a.64.64 0 01.494 0 .665.665 0 01.205.132.639.639 0 01.187.44.612.612 0 01-.392.571.627.627 0 01-.247.05z"
      fill={color}
      fillRule="evenodd"
    />
    <Path
      d="M7.188 18.534a.711.711 0 01.94-.305.67.67 0 01.35.824l-.036.085-1.279 2.486a.711.711 0 01-.939.305.67.67 0 01-.351-.824l.037-.085 1.278-2.486zM15.175 18.23a.714.714 0 01.891.224l.048.08 1.28 2.486a.668.668 0 01-.316.909.714.714 0 01-.89-.225l-.049-.08-1.278-2.486a.668.668 0 01.314-.909zM8.873 2.035a.71.71 0 01.85.344l.036.086 1.278 3.728a.673.673 0 01-.444.857.71.71 0 01-.849-.344l-.036-.085L8.43 2.89a.673.673 0 01.444-.856zM13.544 2.465a.706.706 0 01.885-.43c.337.108.532.44.468.768l-.024.089-1.278 3.729a.706.706 0 01-.886.43.676.676 0 01-.467-.768l.023-.09 1.28-3.728z"
      fill={color}
    />
  </Svg>
);
