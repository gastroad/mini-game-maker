'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';
import MapTitle from '@components/atoms/MapTitle/MapTitle';
import Image from 'next/image';
import arrowURL from '../../assets/img/arrow.png';
import MazeList from '@components/organisms/MazeList/MazeList';

import './MapListTemplate.scss';
import { MazeType } from '@type/maze';

export interface MapListTemplateProps {
  mazeList: MazeType[]
}
const MapListTemplate: FC<MapListTemplateProps> = ({ mazeList }) => {
  const router = useRouter();

  const handlePrevButton = () => {
    router.back();
  }
  const handlePlayButton = (id: string) => {
    router.push(`/maplist/${id}`)
  }
  return (
    <>
      <div className="maker-template">
        <NavigationBar>
          <Image src={arrowURL} alt="뒤로가기" onClick={handlePrevButton} />
        </NavigationBar>
        <MapTitle title={'Maze List'} />
        <MazeList mazeList={mazeList} handlePlayButton={handlePlayButton} />
      </div>
    </>
  );
};

export default MapListTemplate;
