import { ErrorResponse } from '#types/api';

// eslint-disable-next-line restrict-imports/restrict-imports
import CONFIG from '../../config/env';
import { apiClient } from '.';
import {
  ApiGetGenresSuccessResponse,
  ApiGetTopRatedBody,
  ApiGetTopRatedMoviesSuccessResponse,
  ApiGetTopRatedSeriesSuccessResponse,
} from './types';

const getImageUri = (imageKey: string) => CONFIG.SECURE_BASE_URL + imageKey;

const getMovieGenres = () => apiClient.get<ApiGetGenresSuccessResponse, ErrorResponse>('genre/movie/list');

const getSeriesGenres = () => apiClient.get<ApiGetGenresSuccessResponse, ErrorResponse>('genre/tv/list');

const getTopRatedMovies = (body: ApiGetTopRatedBody) =>
  apiClient.get<ApiGetTopRatedMoviesSuccessResponse, ErrorResponse>('movie/top_rated', body);

const getTopRatedSeries = (body: ApiGetTopRatedBody) =>
  apiClient.get<ApiGetTopRatedSeriesSuccessResponse, ErrorResponse>('tv/top_rated', body);

export const tmdbApi = {
  getImageUri,
  getMovieGenres,
  getSeriesGenres,
  getTopRatedMovies,
  getTopRatedSeries,
};
