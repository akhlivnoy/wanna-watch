import React, { useCallback, useState } from 'react';
import { Route, TabBar, TabBarProps, TabView } from 'react-native-tab-view';

import { COLORS } from '#themes/colors';

import { styles } from './TopTabs.styles';
import { ITopTabsProps } from './TopTabs.types';

export const TopTabs: React.ComponentType<ITopTabsProps> = ({ routes, renderScene }) => {
  const [index, setIndex] = useState(0);

  const renderTabBar = useCallback(
    (props: TabBarProps<Route>) => (
      <TabBar
        activeColor={COLORS.ACCENT[300]}
        contentContainerStyle={styles.contentContainerStyle}
        gap={2}
        inactiveColor={COLORS.PRIMARY[200]}
        indicatorContainerStyle={styles.indicatorContainerStyle}
        indicatorStyle={styles.indicatorStyle}
        labelStyle={styles.labelStyle}
        tabStyle={styles.tabStyle}
        {...props}
      />
    ),
    [],
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
    />
  );
};