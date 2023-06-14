import CONFIG from '../config/env';

export const TMDB_HEADERS = {
  Authorization: `Bearer ${CONFIG.API_KEY}`,
};
