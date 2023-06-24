import { Nullable } from '#types/nullable';

import { ICredits } from './credits';
import { ISeriesGenre } from './genre';

export interface ISeries {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: Nullable<string>;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface ISeriesDetails {
  adult: boolean;
  backdrop_path: string;
  created_by: ICreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: ISeriesGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: IEpisode;
  name: string;
  next_episode_to_air: IEpisode;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: INetwork[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ISeriesSeasonDetails {
  _id: string;
  air_date: string;
  episodes: IEpisode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  credits: ICredits;
}

interface ICreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

interface INetwork {
  id: number;
  logo_path: Nullable<string>;
  name: string;
  origin_country: string;
}

export interface IEpisode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}
