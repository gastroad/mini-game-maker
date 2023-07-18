import { FC, ChangeEvent, MouseEvent } from 'react';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';
import MapTitle from '@components/atoms/MapTitle/MapTitle';
import Image from 'next/image';
import arrowURL from '../../assets/img/arrow.png';
import MazeMaker from '@components/organisms/MazeMaker';
import MazeForm from '@components/organisms/MazeForm/MazeForm';

import './MakerTemplate.scss';
import { CellType, MazeBoardType } from '@type/maze';

export interface MakerTemplateProps extends MazeBoardType {
  currentType: CellType;
  mazeSize: { row: number; col: number };
  handleMazeSize: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCurrentType: (e: MouseEvent<HTMLButtonElement>) => void;
  handlePrevButton: () => void;
  handleMazeCellClick: (col: number, row: number) => void;
  handleResolveButton: () => void;
}
const MakerTemplate: FC<MakerTemplateProps> = ({
  mazeData,
  start,
  end,
  resolvedPath,
  currentType,
  mazeSize,
  handlePrevButton,
  handleMazeCellClick,
  handleCurrentType,
  handleResolveButton,
  handleMazeSize,
}) => {
  return (
    <>
      <div className="maker-template">
        <NavigationBar>
          <Image src={arrowURL} alt="뒤로가기" onClick={handlePrevButton} />
        </NavigationBar>
        <MapTitle title={'Maker'} />
        <MazeForm handleMazeSize={handleMazeSize} mazeSize={mazeSize} />
        <MazeMaker
          mazeData={mazeData}
          start={start}
          end={end}
          resolvedPath={resolvedPath}
          handleMazeCellClick={handleMazeCellClick}
          currentType={currentType}
          handleCurrentType={handleCurrentType}
          handleResolveButton={handleResolveButton}
        />
      </div>
    </>
  );
};

export default MakerTemplate;
