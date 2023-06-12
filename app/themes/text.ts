import { TextStyle } from 'react-native';

import { FONTS } from '#assets';

enum Texts {
  REGULAR32 = 'REGULAR32',
  REGULAR16 = 'REGULAR16',
  REGULAR14 = 'REGULAR14',
  REGULAR12 = 'REGULAR12',
  REGULAR10 = 'REGULAR10',

  MEDIUM20 = 'MEDIUM20',
  MEDIUM16 = 'MEDIUM16',
  MEDIUM12 = 'MEDIUM12',

  SEMIBOLD32 = 'SEMIBOLD32',
  SEMIBOLD24 = 'SEMIBOLD24',
  SEMIBOLD16 = 'SEMIBOLD16',
  SEMIBOLD8 = 'SEMIBOLD8',
}

export const TEXTS: Record<Texts, TextStyle> = {
  REGULAR32: {
    fontFamily: FONTS.SOURCE_SANS3_REGULAR,
    fontSize: 32,
    lineHeight: 40,
  },
  REGULAR16: {
    fontFamily: FONTS.SOURCE_SANS3_REGULAR,
    fontSize: 16,
    lineHeight: 24,
  },
  REGULAR14: {
    fontFamily: FONTS.SOURCE_SANS3_REGULAR,
    fontSize: 14,
    lineHeight: 22,
  },
  REGULAR12: {
    fontFamily: FONTS.SOURCE_SANS3_REGULAR,
    fontSize: 12,
    lineHeight: 20,
  },
  REGULAR10: {
    fontFamily: FONTS.SOURCE_SANS3_REGULAR,
    fontSize: 10,
    lineHeight: 14,
  },

  MEDIUM20: {
    fontFamily: FONTS.SOURCE_SANS3_MEDIUM,
    fontSize: 20,
    lineHeight: 28,
  },
  MEDIUM16: {
    fontFamily: FONTS.SOURCE_SANS3_MEDIUM,
    fontSize: 16,
    lineHeight: 24,
  },
  MEDIUM12: {
    fontFamily: FONTS.SOURCE_SANS3_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
  },

  SEMIBOLD32: {
    fontFamily: FONTS.SOURCE_SANS3_SEMI_BOLD,
    fontSize: 32,
    lineHeight: 40,
  },
  SEMIBOLD24: {
    fontFamily: FONTS.SOURCE_SANS3_SEMI_BOLD,
    fontSize: 24,
    lineHeight: 32,
  },
  SEMIBOLD16: {
    fontFamily: FONTS.SOURCE_SANS3_SEMI_BOLD,
    fontSize: 16,
    lineHeight: 24,
  },
  SEMIBOLD8: {
    fontFamily: FONTS.SOURCE_SANS3_SEMI_BOLD,
    fontSize: 8,
    lineHeight: 12,
  },
};
