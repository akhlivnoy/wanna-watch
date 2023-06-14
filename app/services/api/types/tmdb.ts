import { ApiResponse } from 'apisauce';

import { IGenre, IMovie, ISeries } from '#models';
import { ErrorResponse } from '#types/api';

// Get genres

export type ApiGetGenresSuccessResponse = {
  genres: IGenre[];
};

export type ApiGetGenresResponse = ApiResponse<ApiGetGenresSuccessResponse, ErrorResponse>;

// Get top rated movies

export type ApiGetTopRatedBody = {
  page: number;
};

export type ApiGetTopRatedMoviesSuccessResponse = {
  results: IMovie[];
};

export type ApiGetTopRatedMoviesResponse = ApiResponse<ApiGetTopRatedMoviesSuccessResponse, ErrorResponse>;

// Get top rated series

export type ApiGetTopRatedSeriesSuccessResponse = {
  results: ISeries[];
};

export type ApiGetTopRatedSeriesResponse = ApiResponse<ApiGetTopRatedSeriesSuccessResponse, ErrorResponse>;
