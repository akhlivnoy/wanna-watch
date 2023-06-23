export const hexTransparency = (color: string, transparency: number) => {
  const percent = Math.max(0, Math.min(100, transparency));
  const intValue = Math.round((percent / 100) * 255);
  const hexValue = intValue.toString(16);
  return `${color}${hexValue.padStart(2, '0').toUpperCase()}`;
};
