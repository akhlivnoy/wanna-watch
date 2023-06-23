export enum DetailCardType {
  Seasons = 'seasons',
  Rating = 'rating',
  Country = 'country',
}

export interface IDetailCard {
  value: number | string;
  type: DetailCardType;
}
