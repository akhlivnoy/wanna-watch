import { TouchableOpacityProps } from 'react-native';

import { IMovieGenre, ISeriesGenre } from '#models';
import { Nullable } from '#types/nullable';

import { CardState } from './Card.data';

export interface ICardProps extends TouchableOpacityProps {
  state: CardState;
  posterUri: Nullable<string>;
  title: string;
  date: string;
  rating: number;
  genres?: ReadonlyArray<IMovieGenre | ISeriesGenre>;
  season?: number;
  episode?: number;
  finishedSeasons?: number;
}
