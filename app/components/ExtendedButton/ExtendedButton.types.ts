import { TextStyle, TouchableOpacityProps } from 'react-native';

import { SvgComponentType } from '#types/svgComponentType';

import { ExtendedButtonPresets } from './ExtendedButton.presets';

export interface IExtendedButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: SvgComponentType;
  titleStyle?: TextStyle;
  preset?: ExtendedButtonPresets;
}
