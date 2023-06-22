import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const ActionIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      d="M17.448 3.133c-1.722.848-2.172 1.175-2.07 1.436.39 1.044.369 1.088-1.168 1.871-1.537.784-1.865.762-2.13-.13-.144-.479-.083-.5-5.574 2.307-3.77 1.915-3.71 1.85-2.767 3.7.492.957.636 1.087 1.21 1.087 1.126 0 1.25.327 1.618 4.244C6.936 21.39 7.12 22 7.96 22c.328 0 2.808-.718 4.18-1.197.185-.087.144-.283-.184-.762-.39-.544-.43-.718-.225-1.196.205-.457.184-.653-.082-1.11-.287-.436-.307-.631-.103-1.11.205-.479.185-.631-.184-1.045-.225-.26-.41-.674-.41-.935 0-.566.86-1.22 1.393-1.045.513.174 3.402-1.24 3.812-1.871.41-.61.41-1.284.04-2.242l-.307-.74 2.541-1.306c2.685-1.37 3.012-1.719 2.644-2.894-.082-.283-.144-.63-.123-.761.102-.523-.779-1.828-1.189-1.785-.061 0-1.106.522-2.315 1.132zm-2.152 6.615c.472.457.472 1.415.02 1.828-.204.174-.84.544-1.413.827-1.148.544-1.7.435-2.152-.435-.368-.74.103-1.045.697-.457.266.261.656.479.86.479.349 0 .349-.044-.06-.5-.616-.697-.575-1.372.122-1.764.738-.435 1.455-.435 1.926.022z"
      fill={color}
    />
  </Svg>
);
