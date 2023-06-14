import { ErrorResponse } from '#types/api';

// eslint-disable-next-line restrict-imports/restrict-imports
import CONFIG from '../../config/env';
import { apiClient } from '.';
import { ApiGetGenresSuccessResponse, ApiGetTopRatedMoviesBody, ApiGetTopRatedMoviesSuccessResponse } from './types';

const getMovieGenres = () => apiClient.get<ApiGetGenresSuccessResponse, ErrorResponse>('genre/movie/list');

const getSeriesGenres = () => apiClient.get<ApiGetGenresSuccessResponse, ErrorResponse>('genre/tv/list');

const getTopRatedMovies = (body: ApiGetTopRatedMoviesBody) =>
  apiClient.get<ApiGetTopRatedMoviesSuccessResponse, ErrorResponse>('movie/top_rated', body);

const getImageUri = (imageKey: string) => CONFIG.SECURE_BASE_URL + imageKey;

export const tmdbApi = {
  getMovieGenres,
  getSeriesGenres,
  getTopRatedMovies,
  getImageUri,
};
