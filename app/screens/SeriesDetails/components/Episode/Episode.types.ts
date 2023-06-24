export interface IEpisodeProps {
  name: string;
  runtime: number;
  overview: string;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}
