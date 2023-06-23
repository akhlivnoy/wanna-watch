import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import { FONTS } from '#assets';
import { SVG } from '#assets/svg';
import { COLORS } from '#themes/colors';
import { hexTransparency } from '#utils/hexTransparency';

import { styles } from './SelectSeason.styles';
import { IDropDownItem, ISelectSeasonProps } from './SelectSeason.types';

export const SelectSeason: React.ComponentType<ISelectSeasonProps> = ({ data }) => {
  const [item, setItem] = useState<IDropDownItem>(data[0]);
  const [isFocus, setIsFocus] = useState(false);

  const renderLeftIcon = useCallback(
    () => (isFocus ? <SVG.UpArrow color={COLORS.ACCENT[500]} /> : <SVG.DownArrow color={COLORS.ACCENT[500]} />),
    [isFocus],
  );
  const renderRightIcon = useCallback(() => null, []);
  const onBlur = useCallback(() => setIsFocus(false), []);
  const onFocus = useCallback(() => setIsFocus(true), []);
  const onChange = useCallback((selectedItem: IDropDownItem) => {
    setItem(selectedItem);
    setIsFocus(false);
  }, []);

  return (
    <View style={styles.container}>
      <Dropdown
        activeColor={COLORS.ACCENT[400]}
        backgroundColor={hexTransparency(COLORS.PRIMARY[600], 70)}
        containerStyle={styles.dropdownContainer}
        data={data}
        fontFamily={FONTS.SOURCE_SANS3_REGULAR}
        itemTextStyle={styles.itemTextStyle}
        labelField="label"
        maxHeight={200}
        mode="modal"
        renderLeftIcon={renderLeftIcon}
        renderRightIcon={renderRightIcon}
        selectedTextStyle={styles.selectedTextStyle}
        style={styles.dropdown}
        value={item}
        valueField="value"
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
    </View>
  );
};
