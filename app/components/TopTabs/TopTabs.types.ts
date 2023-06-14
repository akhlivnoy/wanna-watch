import React from 'react';
import { ViewStyle } from 'react-native';
import { Route, SceneRendererProps } from 'react-native-tab-view';

export interface ITopTabsProps {
  routes: Route[];
  renderScene: (
    props: SceneRendererProps & {
      route: Route;
    },
  ) => React.ReactNode;
  style?: ViewStyle;
  tabBarStyle?: ViewStyle;
}
