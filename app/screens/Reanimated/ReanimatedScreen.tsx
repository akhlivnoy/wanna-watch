import { map, random } from 'lodash';
import React, { useCallback, useState } from 'react';
import Animated, { Easing, FadeIn, FadeOutRight, Layout } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ExtendedButton, ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './ReanimatedScreen.styles';
import { ReanimatedScreenProps } from './ReanimatedScreen.types';

export const ReanimatedScreen: React.ComponentType<ReanimatedScreenProps> = () => {
  const [points, setPoints] = useState(['point 0', 'point 1', 'point 2']);

  const onNewRandomPoint = useCallback(() => {
    const newPoints = points.slice();
    newPoints.unshift(`point ${random(true)}`);
    setPoints(newPoints);
  }, [points]);

  const onRemoveRandomPoint = useCallback(() => {
    const randomIndex = random(0, points.length - 1);
    points.splice(randomIndex, 1);
    setPoints(points.slice());
  }, [points]);

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={generalStyles.whFlex}
    >
      <ExtendedText
        preset="title"
        style={styles.title}
      >
        Reanimated Demonstration
      </ExtendedText>

      <Animated.ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}
      >
        {map(points, item => (
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOutRight.duration(200)}
            key={item}
            layout={Layout.springify().duration(2500).easing(Easing.exp)}
            style={styles.pointContainer}
          >
            <ExtendedText style={styles.pointText}>{item}</ExtendedText>
          </Animated.View>
        ))}
      </Animated.ScrollView>

      <ExtendedButton
        title="Add new point"
        onPress={onNewRandomPoint}
      />
      <ExtendedButton
        title="Remove random point"
        onPress={onRemoveRandomPoint}
      />
    </SafeAreaView>
  );
};
