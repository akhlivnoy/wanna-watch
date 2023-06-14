import { IMovie } from '#models';

export interface ISearchMoviesTabProps {
  data: IMovie[];
  onEndReached?: () => void;
}
