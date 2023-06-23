import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const FantasyIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      d="M2 4.67c0 .932.062 2.212.124 2.82.123 1.083.165 1.149.721 1.149h.598v1.8c0 .997.062 3.296.145 5.096l.123 3.296h-.495c-.453 0-.494.087-.515 1.085L2.681 21h18.7v-1.084c0-1.02-.02-1.085-.556-1.085h-.536l.123-2.776c.083-1.518.145-3.795.145-5.096v-2.32h.598c.536 0 .598-.066.721-.998.062-.564.124-1.822.124-2.82V3h-1.856v1.518c0 1.475-.02 1.518-.515 1.518s-.516-.043-.516-1.518V3h-1.855v1.518c0 1.475-.02 1.518-.516 1.518-.495 0-.515-.043-.515-1.518V3H14.37v2.472c0 1.367.062 2.624.124 2.82.082.216.371.347.722.347h.597v4.706c0 2.58-.04 4.64-.082 4.597-.062-.065-.247-1.366-.433-2.906-.186-1.561-.371-3.036-.433-3.318-.082-.455-.144-.477-2.866-.477-3.237 0-2.825-.477-3.278 3.752-.165 1.54-.35 2.84-.413 2.928-.082.064-.103-1.974-.082-4.533l.062-4.641.68-.065.66-.065V3H7.773v1.518c0 1.475-.02 1.518-.515 1.518s-.516-.043-.516-1.518V3H4.887v1.518c0 1.475-.021 1.518-.516 1.518s-.515-.043-.515-1.518V3H2v1.67zm10.907 9.932c.784.412.846.651.846 3.167v2.147h-3.506v-2.234c0-2.299.104-2.69.928-3.145.557-.325 1.052-.325 1.732.065z"
      fill={color}
    />
  </Svg>
);
