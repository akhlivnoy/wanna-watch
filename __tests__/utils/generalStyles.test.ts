import 'react-native';
import { generalStyles } from '../../app/utils/styles';

test('general styles should match appropriate styles', () => {
  expect(generalStyles.aiCenter).toMatchObject({ alignItems: 'center' });
  expect(Object.keys(generalStyles.aiCenter).length).toBe(1);

  expect(generalStyles.aiEnd).toMatchObject({ alignItems: 'flex-end' });
  expect(Object.keys(generalStyles.aiEnd).length).toBe(1);

  expect(generalStyles.centered).toMatchObject({
    alignItems: 'center',
    justifyContent: 'center',
  });
  expect(Object.keys(generalStyles.centered).length).toBe(2);

  expect(generalStyles.flex).toMatchObject({ flex: 1 });
  expect(Object.keys(generalStyles.flex).length).toBe(1);

  expect(generalStyles.jcCenter).toMatchObject({ justifyContent: 'center' });
  expect(Object.keys(generalStyles.jcCenter).length).toBe(1);

  expect(generalStyles.jcEnd).toMatchObject({ justifyContent: 'flex-end' });
  expect(Object.keys(generalStyles.jcEnd).length).toBe(1);

  expect(generalStyles.jcSpaceBtw).toMatchObject({
    justifyContent: 'space-between',
  });
  expect(Object.keys(generalStyles.jcSpaceBtw).length).toBe(1);
});
