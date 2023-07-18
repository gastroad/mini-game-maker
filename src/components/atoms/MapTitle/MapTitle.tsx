import { FC } from 'react';

import './MapTitle.scss';

export interface MapTitleProps {
  title: string;
}
const MapTitle: FC<MapTitleProps> = ({ title }) => {
  return <h3 className="map-title">{title}</h3>;
};
export default MapTitle;
