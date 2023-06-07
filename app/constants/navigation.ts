import { StackNavigationOptions } from '@react-navigation/stack';

export const DEFAULT_STACK_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

export const GLOBAL_NAVIGATION_STACK_OPTIONS: StackNavigationOptions = {
  ...DEFAULT_STACK_OPTIONS,
  gestureEnabled: false,
};
