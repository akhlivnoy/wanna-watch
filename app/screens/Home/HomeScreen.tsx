import React, { useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IMAGES } from '#assets';
import { ExtendedButton, ExtendedText, ExtendedTextInput, ExtendedTextInputType } from '#components';
import { useAppDispatch, useAppSelector, useDebouncedValue } from '#hooks';
import { HomeStackRouteNames } from '#navigation/HomeStackNavigator';
import { userSlice } from '#redux/slices';
import { generalStyles } from '#utils/styles';

import { TEST_PASSWORD, TEST_USERNAME } from './HomeScreen.dummy';
import { styles } from './HomeScreen.styles';
import { HomeScreenProps } from './HomeScreen.types';

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useDebouncedValue hook is used to prevent unnecessary async calls
  const debouncedEmail = useDebouncedValue(email, 500);

  useEffect(() => {
    if (debouncedEmail) {
      // eslint-disable-next-line no-console
      console.log('debouncedEmail', debouncedEmail);
    }
  }, [debouncedEmail, dispatch]);

  const onTestDispatchAction = useCallback(() => {
    dispatch(
      userSlice.actions.loginUser({
        email: TEST_USERNAME,
        password: TEST_PASSWORD,
      }),
    );
  }, [dispatch]);

  const goToReanimatedPage = useCallback(() => {
    navigation.navigate(HomeStackRouteNames.Reanimated);
  }, [navigation]);

  return (
    <SafeAreaView style={generalStyles.whFlex}>
      <View style={styles.body}>
        <View style={styles.titleContainer}>
          <Image
            source={IMAGES.LOGO}
            style={styles.logo}
          />
          <ExtendedText preset="title">Beyond Codeline</ExtendedText>
        </View>
        <ExtendedText
          preset="default"
          style={styles.description}
        >
          The Best React Native Boilerplate
        </ExtendedText>

        <View style={styles.formContainer}>
          <ExtendedTextInput
            label="Email"
            type={ExtendedTextInputType.Email}
            value={email}
            onChangeText={setEmail}
          />
          <ExtendedTextInput
            label="Password"
            type={ExtendedTextInputType.PasswordToggle}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <ExtendedButton
          title="Dispatch action!"
          titleStyle={styles.dispatchTestButtonText}
          onPress={onTestDispatchAction}
        />
        <ExtendedButton
          title="Go to Reanimated"
          titleStyle={styles.dispatchTestButtonText}
          onPress={goToReanimatedPage}
        />
      </View>
    </SafeAreaView>
  );
};
