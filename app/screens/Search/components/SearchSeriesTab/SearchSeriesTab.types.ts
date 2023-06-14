import { ISeries } from '#models';

export interface ISearchSeriesTabProps {
  data: ISeries[];
  onEndReached?: () => void;
}
