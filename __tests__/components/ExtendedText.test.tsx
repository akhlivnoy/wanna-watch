import 'react-native';
import React from 'react';
import testRenderer from 'react-test-renderer';

import { ExtendedText } from '../../app/components';

test('UI: ExtendedText should match snapshot', () => {
  // No preset prop
  const actualExtendedText = testRenderer
    .create(<ExtendedText>test text</ExtendedText>)
    .toJSON();
  expect(actualExtendedText).toMatchSnapshot();

  // Preset "title" prop
  const actualExtendedTitleText = testRenderer
    .create(<ExtendedText preset="title">test title text</ExtendedText>)
    .toJSON();
  expect(actualExtendedTitleText).toMatchSnapshot();

  // Preset "secondary" prop
  const actualExtendedSecondaryText = testRenderer
    .create(<ExtendedText preset="secondary">test secondary text</ExtendedText>)
    .toJSON();
  expect(actualExtendedSecondaryText).toMatchSnapshot();
});
