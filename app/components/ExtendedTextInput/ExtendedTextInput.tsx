import React, { useMemo } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

import { ExtendedText } from '../ExtendedText';
import { ExtendedTextInputPresetParams } from './ExtendedTextInput.data';
import { styles } from './ExtendedTextInput.styles';
import { ExtendedTextInputType, IExtendedTextInputProps } from './ExtendedTextInput.types';
import { TextInputPasswordToggle } from './inputs';

export const ExtendedTextInput: React.ComponentType<IExtendedTextInputProps> = ({
  label,
  labelStyle,
  type = ExtendedTextInputType.Default,
  error,
  errorStyle,
  style,
  ...rest
}) => {
  const initialInputProps = useMemo(() => ExtendedTextInputPresetParams[type], [type]);

  const InputComponent: React.ComponentType<TextInputProps> = useMemo(() => {
    switch (type) {
      case ExtendedTextInputType.PasswordToggle:
        return TextInputPasswordToggle;
      case ExtendedTextInputType.Default:
      case ExtendedTextInputType.Email:
      case ExtendedTextInputType.Numeric:
      case ExtendedTextInputType.Password:
      default:
        return TextInput;
    }
  }, [type]);

  return (
    <View>
      {label && <ExtendedText style={[styles.label, labelStyle]}>{label}</ExtendedText>}
      <InputComponent
        {...initialInputProps}
        {...rest}
        style={[styles.input, style]}
      />
      {error && <ExtendedText style={[styles.error, errorStyle]}>{error}</ExtendedText>}
    </View>
  );
};
