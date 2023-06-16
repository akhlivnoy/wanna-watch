import React, { memo, useMemo, useState } from 'react';
import { NativeSyntheticEvent, Pressable, TextInput, TextInputFocusEventData, View, ViewStyle } from 'react-native';

import { SVG } from '#assets/svg';
import { COLORS } from '#themes/colors';

import { styles } from './SearchBar.styles';
import { ISearchBarProps } from './SearchBar.types';

const SearchIcon = SVG.Search;

const SearchBarComponent: React.ComponentType<ISearchBarProps> = ({
  style,
  containerStyle,
  onChangeText,
  onBlur,
  onIconPress,
  ...props
}) => {
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

  const onInputBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (onBlur) {
      onBlur(e);
    }
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
    <View style={[styles.container, borderStyle, containerStyle]}>
      <TextInput
        placeholder="Search..."
        placeholderTextColor={COLORS.PRIMARY[300]}
        style={[styles.input, style]}
        onBlur={onInputBlur}
        onChangeText={onChangeInputText}
        onFocus={onFocus}
        {...props}
      />
      <Pressable onPress={onIconPress}>
        <SearchIcon color={currentColor} />
      </Pressable>
    </View>
  );
};

export const SearchBar = memo(SearchBarComponent);
