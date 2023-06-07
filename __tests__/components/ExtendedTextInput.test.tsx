import 'react-native';
import React from 'react';
import testRenderer from 'react-test-renderer';

import { ExtendedTextInput, ExtendedTextInputType } from '../../app/components';

test('UI: ExtendedTextInput should match snapshot', () => {
  // Default ExtendedTextInput case
  const actualExtendedTextInput = testRenderer
    .create(
      <ExtendedTextInput
        label="test input"
        labelStyle={{ color: 'red', marginBottom: 10 }}
        type={ExtendedTextInputType.Default}
        value="test input"
        onChangeText={() => {}}
        error="smth broken"
        errorStyle={{ color: 'red', marginTop: 10 }}
        style={{ backgroundColor: 'yellow' }}
      />,
    )
    .toJSON();
  expect(actualExtendedTextInput).toMatchSnapshot();

  // Specific ExtendedTextInput type case
  const actualExtendedPasswordToggleTextInput = testRenderer
    .create(
      <ExtendedTextInput
        label="password toggle test input"
        labelStyle={{ color: 'red', marginBottom: 10 }}
        type={ExtendedTextInputType.PasswordToggle}
        value="test input"
        onChangeText={() => {}}
        error="smth broken"
        errorStyle={{ color: 'red', marginTop: 10 }}
        style={{ backgroundColor: 'yellow' }}
      />,
    )
    .toJSON();
  expect(actualExtendedPasswordToggleTextInput).toMatchSnapshot();
});
