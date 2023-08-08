import { FC, ChangeEvent, MouseEvent } from 'react';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';
import MapTitle from '@components/atoms/MapTitle/MapTitle';
import Image from 'next/image';
import arrowURL from '../../assets/img/arrow.png';
import MazeMaker from '@components/organisms/MazeMaker';
import MazeForm from '@components/organisms/MazeForm/MazeForm';

import type { CellType, PointType } from '@type/maze';
import type {
  mazeStateType,
  startEndStateType,
  mazeDataStateType,
} from 'src/state/maker/atoms';
import './MakerTemplate.scss';

export interface MakerTemplateProps {
  maze: mazeStateType;
  currentType: CellType;
  startEnd: startEndStateType;
  mazeData: mazeDataStateType;
  resolvedPath: PointType[];
  handleMaze: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMazeCellClick: (col: number, row: number) => void;
  handleCurrentType: (e: MouseEvent<HTMLButtonElement>) => void;
  handlePrevButton: () => void;
  handleResolveButton: () => void;
}
const MakerTemplate: FC<MakerTemplateProps> = ({
  maze,
  mazeData,
  startEnd,
  resolvedPath,
  currentType,
  handleMaze,
  handlePrevButton,
  handleMazeCellClick,
  handleCurrentType,
  handleResolveButton,
}) => {
  return (
    <>
      <div className="maker-template">
        <NavigationBar>
          <Image src={arrowURL} alt="뒤로가기" onClick={handlePrevButton} />
        </NavigationBar>
        <MapTitle title={'Maker'} />
        <MazeForm maze={maze} handleMaze={handleMaze} />
        <MazeMaker
          mazeData={mazeData}
          startEnd={startEnd}
          resolvedPath={resolvedPath}
          currentType={currentType}
          handleMazeCellClick={handleMazeCellClick}
          handleCurrentType={handleCurrentType}
          handleResolveButton={handleResolveButton}
        />
      </div>
    </>
  );
};

export default MakerTemplate;
