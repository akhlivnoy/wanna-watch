import { TouchableOpacityProps } from 'react-native';

import { IGenre } from '#models';

import { CardState } from './Card.data';

export interface ICardProps extends TouchableOpacityProps {
  state: CardState;
  posterUri: string;
  title: string;
  date: string;
  rating: number;
  genres?: ReadonlyArray<IGenre>;
  season?: number;
  episode?: number;
  finishedSeasons?: number;
}
