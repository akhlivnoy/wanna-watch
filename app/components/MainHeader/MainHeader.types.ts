import { SvgComponentType } from '#types/svgComponentType';

export interface IMainHeaderProps {
  title?: string;
  isLogo?: boolean;
  LeftSvgIcon?: SvgComponentType;
  RightSvgIcon?: SvgComponentType;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}
