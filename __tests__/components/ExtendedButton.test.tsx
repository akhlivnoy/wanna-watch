import 'react-native';
import React from 'react';
import testRenderer from 'react-test-renderer';

import { ExtendedButton } from '../../app/components';

test('UI: ExtendedButton should match snapshot', () => {
  const actualExtendedButton = testRenderer
    .create(<ExtendedButton title="hello, test" />)
    .toJSON();
  expect(actualExtendedButton).toMatchSnapshot();
});
