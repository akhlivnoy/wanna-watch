import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';

import { styles } from './TabBar.styles';

export const TabBar: React.ComponentType<BottomTabBarProps> = props => (
  <View style={styles.container}>
    <BottomTabBar {...props} />
  </View>
);
