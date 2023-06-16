import { IMovieDetails, ISeriesDetails } from '#models';
import { ErrorResponse } from '#types/api';

// eslint-disable-next-line restrict-imports/restrict-imports
import CONFIG from '../../config/env';
import { apiClient } from '.';
import {
  ApiGetGenresSuccessResponse,
  ApiGetMoviesSuccessResponse,
  ApiGetSeriesSuccessResponse,
  ApiGetTopRatedBody,
  ApiSearchBody,
} from './types';

const getImageUri = (imageKey: string) => CONFIG.SECURE_BASE_URL + imageKey;

const getMovieGenres = () => apiClient.get<ApiGetGenresSuccessResponse, ErrorResponse>('genre/movie/list');

const getSeriesGenres = () => apiClient.get<ApiGetGenresSuccessResponse, ErrorResponse>('genre/tv/list');

const getTopRatedMovies = (body: ApiGetTopRatedBody) =>
  apiClient.get<ApiGetMoviesSuccessResponse, ErrorResponse>('movie/top_rated', body);

const getTopRatedSeries = (body: ApiGetTopRatedBody) =>
  apiClient.get<ApiGetSeriesSuccessResponse, ErrorResponse>('tv/top_rated', body);

const searchMovie = (body: ApiSearchBody) =>
  apiClient.get<ApiGetMoviesSuccessResponse, ErrorResponse>('search/movie', body);

const searchSeries = (body: ApiSearchBody) =>
  apiClient.get<ApiGetSeriesSuccessResponse, ErrorResponse>('search/tv', body);

const getMovieDetails = (movieId: number) =>
  apiClient.get<IMovieDetails, ErrorResponse>(`movie/${movieId}`, {
    append_to_response: 'credits',
  });

const getSeriesDetails = (seriesId: number) => apiClient.get<ISeriesDetails, ErrorResponse>(`tv/${seriesId}`);

export const tmdbApi = {
  getImageUri,
  getMovieGenres,
  getSeriesGenres,
  getTopRatedMovies,
  getTopRatedSeries,
  searchMovie,
  searchSeries,
  getMovieDetails,
  getSeriesDetails,
};
