import { TextStyle, TouchableOpacityProps } from 'react-native';

import { ExtendedButtonPresets } from './ExtendedButton.presets';

export interface IExtendedButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
  preset?: ExtendedButtonPresets;
}
