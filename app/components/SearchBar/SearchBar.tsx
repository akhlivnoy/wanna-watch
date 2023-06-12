import React, { useMemo, useState } from 'react';
import { TextInput, TextInputProps, View, ViewStyle } from 'react-native';

import { SVG } from '#assets/svg';
import { COLORS } from '#themes/colors';

import { styles } from './SearchBar.styles';

const SearchIcon = SVG.Search;

export const SearchBar: React.ComponentType<TextInputProps> = ({ style, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [currentColor, setCurrentColor] = useState(COLORS.PRIMARY[300]);

  const borderStyle: ViewStyle = useMemo(
    () => ({
      borderColor: currentColor,
      borderWidth: isFocused ? 4 : 3,
    }),
    [currentColor, isFocused],
  );

  const onFocus = () => {
    setIsFocused(true);
    setCurrentColor(COLORS.ACCENT[300]);
  };

  const onBlur = () => {
    setIsFocused(false);
    setCurrentColor(inputValue === '' ? COLORS.PRIMARY[300] : COLORS.ACCENT[400]);
  };

  const onChangeInputText = (text: string) => {
    if (onChangeText) {
      onChangeText(text);
    }
    setInputValue(text);
  };

  return (
    <View style={[styles.container, borderStyle]}>
      <TextInput
        placeholderTextColor={COLORS.PRIMARY[300]}
        style={[styles.input, style]}
        onBlur={onBlur}
        onChangeText={onChangeInputText}
        onFocus={onFocus}
        {...props}
      />
      <SearchIcon color={currentColor} />
    </View>
  );
};
