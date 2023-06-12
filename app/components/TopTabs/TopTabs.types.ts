import React from 'react';
import { Route, SceneRendererProps } from 'react-native-tab-view';

export interface ITopTabsProps {
  routes: Route[];
  renderScene: (
    props: SceneRendererProps & {
      route: Route;
    },
  ) => React.ReactNode;
}
