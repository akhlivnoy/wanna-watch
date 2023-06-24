import React, { useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { SVG } from '#assets/svg';
import { ExtendedText } from '#components';
import { generalStyles } from '#utils/styles';

import { styles } from './Episode.styles';
import { IEpisodeProps } from './Episode.types';

export const Episode: React.ComponentType<IEpisodeProps> = ({
  activeIndex,
  index,
  name,
  overview,
  runtime,
  setActiveIndex,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleItem = () => {
    if (!expanded) {
      setActiveIndex(index);
    }
    setExpanded(!expanded);
  };

  const Icon = useMemo(() => SVG[expanded ? 'UpArrow' : 'DownArrow'], [expanded]);
  const runTime = useMemo(() => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours || ''}${hours ? 'hr' : ''} ${minutes}min`;
  }, [runtime]);

  useEffect(() => {
    if (activeIndex !== index) {
      setExpanded(false);
    }
  }, [activeIndex, index]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleItem}
      >
        <Icon />
        <ExtendedText
          numberOfLines={1}
          preset="medium16"
          style={generalStyles.flex}
        >
          {index + 1}. {name}
        </ExtendedText>
      </TouchableOpacity>

      {expanded && (
        <>
          <View style={styles.separator} />
          <View style={styles.runtime}>
            <SVG.Clock
              height={16}
              width={16}
            />
            <ExtendedText preset="medium12">{runTime}</ExtendedText>
          </View>
          <ExtendedText preset="regular12">{overview}</ExtendedText>
        </>
      )}
    </View>
  );
};
