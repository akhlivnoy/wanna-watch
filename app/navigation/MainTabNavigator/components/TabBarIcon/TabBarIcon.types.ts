import { SvgKeys } from '#types/svgKeys';

export interface ITabBarIconProps {
  focused: boolean;
  title: string;
  icon: SvgKeys;
  activeColor: string;
  inactiveColor: string;
}
