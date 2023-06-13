import { IGenre } from '#models';

import { CardState } from './Card.data';

export interface ICardProps {
  onPress: () => void;
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
