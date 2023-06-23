export interface IMovieGenre {
  id: number;
  name: MovieGenreType;
}

export interface ISeriesGenre {
  id: number;
  name: SeriesGenreType;
}

export enum MovieGenreType {
  Action = 'Action',
  Adventure = 'Adventure',
  Animation = 'Animation',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Family = 'Family',
  Fantasy = 'Fantasy',
  History = 'History',
  Horror = 'Horror',
  Music = 'Music',
  Mystery = 'Mystery',
  Romance = 'Romance',
  ScienceFiction = 'Science Fiction',
  Thriller = 'Thriller',
  TvMovie = 'TV Movie',
  War = 'War',
  Western = 'Western',
}

export enum SeriesGenreType {
  ActionAdventure = 'Action & Adventure',
  Animation = 'Animation',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Family = 'Family',
  Kids = 'Kids',
  Mystery = 'Mystery',
  News = 'News',
  Reality = 'Reality',
  SciFiFantasy = 'Sci-Fi & Fantasy',
  Soap = 'Soap',
  Talk = 'Talk',
  WarPolitics = 'War & Politics',
  Western = 'Western',
}
