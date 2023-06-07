import React, { useCallback, useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { styles } from './TextInputPasswordToggle.styles';

export const TextInputPasswordToggle: React.ComponentType<TextInputProps> = ({ style: styleProp, ...props }) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onEyeIconPress = useCallback(() => {
    setIsPasswordHidden(!isPasswordHidden);
  }, [isPasswordHidden]);

  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        secureTextEntry={isPasswordHidden}
        style={[styleProp, styles.input]}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={onEyeIconPress}
      >
        {/* This should be an eye icon */}
        <View style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
