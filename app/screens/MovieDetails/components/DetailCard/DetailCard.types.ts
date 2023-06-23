export enum DetailCardType {
  RunTime = 'runTime',
  Rating = 'rating',
  Country = 'country',
}

export interface IDetailCard {
  value: number | string;
  type: DetailCardType;
}
