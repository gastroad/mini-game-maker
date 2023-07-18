import { FC } from 'react';
import Image from 'next/image';
import MazeGame from '@components/organisms/MazeGame/MazeGame';
import { MazeBoardType, PointType } from '@type/maze';
import arrowURL from '../../assets/img/arrow.png';
import Button from '@components/atoms/Button';
import ScoreBoard from '@components/molecules/ScoreBoard';
import MapTitle from '@components/atoms/MapTitle';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';

import './GameTemplate.scss';

export interface GameTemplateProps extends MazeBoardType {
  score: number;
  title: string;
  handlePrevButton: () => void;
  handleResetButton: () => void;
  handleResolveButton: () => void;
}
const GameTemplate: FC<GameTemplateProps> = ({
  mazeData,
  start,
  end,
  score,
  title,
  resolvedPath,
  handlePrevButton,
  handleResetButton,
  handleResolveButton,
}) => {
  return (
    <>
      <div className="game-template">
        <NavigationBar>
          <Image src={arrowURL} alt="뒤로가기" onClick={handlePrevButton} />
        </NavigationBar>
        <MapTitle title={title} />
        <ScoreBoard score={score} />
        <MazeGame
          mazeData={mazeData}
          start={start}
          end={end}
          resolvedPath={resolvedPath}
        />
        <div className="button-wrapper">
          <Button onClick={handleResetButton} label="Reset" type="primary" />
          <Button
            onClick={handleResolveButton}
            label="정답보기"
            type="primary"
          />
        </div>
      </div>
    </>
  );
};

export default GameTemplate;
