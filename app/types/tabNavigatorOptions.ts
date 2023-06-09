import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { MainTabParams } from '#navigation';

export type TabNavigatorOptions = {
  [key in keyof MainTabParams]?: BottomTabNavigationOptions;
};
