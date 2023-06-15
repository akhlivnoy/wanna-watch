import { ApiResponse } from 'apisauce';

import { IGenre, IMovie, ISeries } from '#models';
import { ErrorResponse } from '#types/api';

// Get genres

export type ApiGetGenresSuccessResponse = {
  genres: IGenre[];
};

export type ApiGetGenresResponse = ApiResponse<ApiGetGenresSuccessResponse, ErrorResponse>;

// Get movies

export type ApiGetTopRatedBody = {
  page: number;
};

export type ApiGetMoviesSuccessResponse = {
  page: number;
  results: IMovie[];
  total_pages: number;
};

export type ApiGetMoviesResponse = ApiResponse<ApiGetMoviesSuccessResponse, ErrorResponse>;

// Get series

export type ApiGetSeriesSuccessResponse = {
  page: number;
  results: ISeries[];
  total_pages: number;
};

export type ApiGetSeriesResponse = ApiResponse<ApiGetSeriesSuccessResponse, ErrorResponse>;

// Search

export type ApiSearchBody = {
  query: string;
  page: number;
};
