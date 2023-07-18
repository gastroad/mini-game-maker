import { FC } from 'react';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';
import MapTitle from '@components/atoms/MapTitle/MapTitle';
import Button from '@components/atoms/Button/Button';

import './HomeTemplate.scss';

export interface HomeTemplateProps {
  handlePlayButton: () => void;
  handleMakeButton: () => void;
}
const HomeTemplate: FC<HomeTemplateProps> = ({
  handlePlayButton,
  handleMakeButton,
}) => {
  return (
    <>
      <div className="home-template">
        <MapTitle title="mazemaker" />
        <Button onClick={handlePlayButton} label="Play" type="primary" />
        <Button onClick={handleMakeButton} label="Make" type="primary" />
      </div>
    </>
  );
};

export default HomeTemplate;
