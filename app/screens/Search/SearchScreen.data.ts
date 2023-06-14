import { Route } from 'react-native-tab-view';

export enum SearchTabType {
  Movies = 'Movies',
  Series = 'Series',
}

export const ROUTES: Route[] = [
  {
    key: SearchTabType.Movies,
    title: SearchTabType.Movies,
  },
  {
    key: SearchTabType.Series,
    title: SearchTabType.Series,
  },
];
