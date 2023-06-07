import { TextInputProps, TextStyle } from 'react-native';

export enum ExtendedTextInputType {
  Default = 'default',
  Numeric = 'numeric',
  Email = 'email',
  Password = 'password',
  PasswordToggle = 'password-toggle',
}

export interface IExtendedTextInputProps extends TextInputProps {
  label?: string;
  labelStyle?: TextStyle;

  type?: ExtendedTextInputType;

  error?: string;
  errorStyle?: TextStyle;
}
