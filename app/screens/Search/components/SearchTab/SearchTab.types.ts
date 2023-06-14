import { IMovie } from '#models';
import { SearchTabType } from '#screens/Search/SearchScreen.data';

export interface ISearchTabProps {
  data: IMovie[];
  type: SearchTabType;
  onEndReached: () => void;
}
