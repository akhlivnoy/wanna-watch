import { PayloadAction } from '@reduxjs/toolkit';

import { ApiGetMovieGenresSuccessResponse, ApiGetSeriesGenresSuccessResponse } from '#services/api/types';

export type GetGenresSuccessAction = PayloadAction<{
  movie: ApiGetMovieGenresSuccessResponse;
  series: ApiGetSeriesGenresSuccessResponse;
}>;
