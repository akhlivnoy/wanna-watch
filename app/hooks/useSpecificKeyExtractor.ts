import { useCallback } from 'react';

export const useSpecificKeyExtractor = <TItem>(prefix: string, field: keyof TItem) =>
  useCallback((item: TItem, index: number) => `${prefix}-${item[field]}-${index}`, [prefix, field]);
