import { CommonActions, createNavigationContainerRef, StackActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export class StaticNavigator {
  static dispatch(action: CommonActions.Action) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(action);
    }
  }

  static navigateTo(routeName: string, params?: object) {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(CommonActions.navigate(routeName, params));
    }
  }

  static push(routeName: string, params?: object) {
    if (navigationRef.isReady()) {
      const pushAction = StackActions.push(routeName, params);
      navigationRef.dispatch(pushAction);
    }
  }

  static getCurrentRoute() {
    if (navigationRef.isReady()) {
      return navigationRef.getCurrentRoute();
    }

    return undefined;
  }
}
