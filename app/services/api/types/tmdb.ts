import { ApiResponse } from 'apisauce';

import { IMovie, IMovieDetails, IMovieGenre, ISeries, ISeriesDetails, ISeriesGenre } from '#models';
import { ErrorResponse } from '#types/api';

// Get genres

export type ApiGetMovieGenresSuccessResponse = {
  genres: IMovieGenre[];
};
export type ApiGetSeriesGenresSuccessResponse = {
  genres: ISeriesGenre[];
};

export type ApiGetMovieGenresResponse = ApiResponse<ApiGetMovieGenresSuccessResponse, ErrorResponse>;
export type ApiGetSeriesGenresResponse = ApiResponse<ApiGetSeriesGenresSuccessResponse, ErrorResponse>;

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

export type ApiGetMovieDetailsResponse = ApiResponse<IMovieDetails, ErrorResponse>;

// Get series

export type ApiGetSeriesSuccessResponse = {
  page: number;
  results: ISeries[];
  total_pages: number;
};

export type ApiGetSeriesResponse = ApiResponse<ApiGetSeriesSuccessResponse, ErrorResponse>;

export type ApiGetSeriesDetailsResponse = ApiResponse<ISeriesDetails, ErrorResponse>;

// Search

export type ApiSearchBody = {
  query: string;
  page?: number;
};
