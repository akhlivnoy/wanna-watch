import apisauce, { ApisauceInstance } from 'apisauce';

import { TMDB_HEADERS } from '#constants/tmdb';

// eslint-disable-next-line restrict-imports/restrict-imports
import CONFIG from '../../config/env';
import { tmdbApi } from './tmdb';

export const apiClient: ApisauceInstance = apisauce.create({
  baseURL: CONFIG.API_URL,
  timeout: CONFIG.API_TIMEOUT,
  headers: TMDB_HEADERS,
});

export const apiInstance = {
  tmdb: tmdbApi,
};
