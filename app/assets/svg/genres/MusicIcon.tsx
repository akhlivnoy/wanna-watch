import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const MusicIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      d="M11.244 2.227c-1.675.24-3.483.96-3.791 1.504-.132.24-.198 2.966-.198 6.782l.022 6.388-.728.131c-2.49.415-3.879 2.639-2.512 4.012 1.036 1.025 3.658 1.243 4.937.415.286-.175.705-.742.947-1.243.375-.829.419-1.483.419-6.542V8.071h7.052v8.94h-.484c-.75.021-2.182.74-2.8 1.395-1.983 2.115 1.5 4.557 4.54 3.205 1.72-.785 1.72-.763 1.786-9.965l.066-8.11-.507-.568c-.286-.327-.903-.676-1.388-.785-1.102-.261-5.466-.24-7.361.044z"
      fill={color}
    />
  </Svg>
);
