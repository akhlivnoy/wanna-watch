import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { COLORS } from '#themes/colors';
import { ISvgProps } from '#types/svgProps';

export const CrimeIcon = ({ height = 24, width = 24, color = COLORS.PRIMARY[100] }: ISvgProps) => (
  <Svg
    height={height}
    viewBox="0 0 24 24"
    width={width}
  >
    <Path
      clipRule="evenodd"
      d="M8.92 2.91C5.93 4.29 4.893 10 6.891 14.088c.581 1.19.656 1.493.452 1.825-.255.414-1.479 1.017-2.977 1.466-.475.143-1.202.542-1.616.888L2 18.895l1.033.605c1.356.795 4.28 1.532 7.353 1.855 2.409.253 9.716.156 11.102-.147.525-.115.574-.195.463-.757-.313-1.592-1.247-2.35-4.409-3.582l-1.297-.505-1.177.593c-1.305.659-2.727 1.063-2.026.576 2.93-2.03 3.964-3.71 4.353-7.07.36-3.1-1.077-6.634-3.068-7.552-1.188-.548-4.22-.548-5.408 0zm1.618 5.703c.803.42.619 1.882-.273 2.17-1.194.384-2.832-.65-2.589-1.635.068-.275.335-.603.592-.73.483-.235 1.639-.136 2.27.195zm4.38-.207c.807.374.913 1.183.232 1.777-1.04.908-2.257.833-2.878-.177-.32-.518.213-1.393.986-1.62.883-.26 1.056-.259 1.66.02zm-2.508 5.018c.847.453.939.833.347 1.434-.667.676-2.246.485-2.546-.308-.371-.981 1.08-1.724 2.199-1.126z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
