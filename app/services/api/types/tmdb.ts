import { ApiResponse } from 'apisauce';

import { IGenre, IMovie } from '#models';
import { ErrorResponse } from '#types/api';

// Get genres

export type ApiGetGenresSuccessResponse = {
  genres: IGenre[];
};

export type ApiGetGenresResponse = ApiResponse<ApiGetGenresSuccessResponse, ErrorResponse>;

// Get top rated movies

export type ApiGetTopRatedMoviesBody = {
  page: number;
};

export type ApiGetTopRatedMoviesSuccessResponse = {
  results: IMovie[];
};

export type ApiGetTopRatedMoviesResponse = ApiResponse<ApiGetTopRatedMoviesSuccessResponse, ErrorResponse>;
