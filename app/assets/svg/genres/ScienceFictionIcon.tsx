import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const ScienceFictionIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      d="M10.145 2.074c-2.526.392-5.256 1.635-6.235 2.834-.864 1.046-1.16 3.793-.682 6.017.318 1.46.842 2.442 2.525 4.753.751 1.024 1.844 2.638 2.412 3.597C9.508 21.455 10.282 22 12.102 22c1.229 0 1.433-.065 2.275-.807.5-.436 1.343-1.526 1.843-2.42.5-.872 1.48-2.354 2.162-3.248.682-.916 1.479-2.115 1.775-2.682 1.07-2.027 1.137-6.257.113-7.696-.75-1.046-1.98-1.809-3.959-2.441-1.752-.567-4.642-.85-6.166-.632zM8.347 9.769c1.093.48 2.594 2.072 2.594 2.77 0 .61-.41.762-2.503.893-2.093.11-3.026-.305-3.39-1.57-.569-2.027 1.047-3.074 3.3-2.093zm10.194.044c.432.327.592.654.592 1.177 0 1.875-1.183 2.638-3.732 2.442-1.957-.153-2.412-.305-2.412-.807 0-.654 1.41-2.223 2.48-2.768 1.252-.633 2.276-.633 3.072-.044zm-5.939 5.821c.433.458.91 1.591.729 1.766-.069.065-.342 0-.57-.153-.568-.327-1.205-.327-1.547 0-.386.37-.591.066-.41-.588.16-.567.888-1.417 1.23-1.417.113 0 .364.174.568.392z"
      fill={color}
    />
  </Svg>
);