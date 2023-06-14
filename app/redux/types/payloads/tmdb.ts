import { PayloadAction } from '@reduxjs/toolkit';

import { ApiGetGenresSuccessResponse } from '#services/api/types';

export type GetGenresSuccessAction = PayloadAction<{
  movie: ApiGetGenresSuccessResponse;
  series: ApiGetGenresSuccessResponse;
}>;
