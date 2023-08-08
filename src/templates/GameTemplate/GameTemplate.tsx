'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import MazeGame from '@components/organisms/MazeGame/MazeGame';
import arrowURL from '../../assets/img/arrow.png';
import Button from '@components/atoms/Button';
import ScoreBoard from '@components/molecules/ScoreBoard';
import MapTitle from '@components/atoms/MapTitle';
import NavigationBar from '@components/molecules/NavigationBar/NavigationBar';

import { usePlayerController } from 'src/hooks/usePlayerController';

import './GameTemplate.scss';

export interface GameTemplateProps {
  maze: any;
}
const GameTemplate: FC<GameTemplateProps> = ({ maze }) => {
  const router = useRouter();
  const { player, score, answer, resetPlayerAndScore, toggleAnswer } =
    usePlayerController(maze.mazeData, maze.end);

  const handlePrevButton = () => {
    router.back();
  };
  const handleResetButton = () => {
    resetPlayerAndScore();
  };
  const handleResolveButton = () => {
    toggleAnswer();
  };
  return (
    <>
      <div className="game-template">
        <NavigationBar>
          <Image src={arrowURL} alt="뒤로가기" onClick={handlePrevButton} />
        </NavigationBar>
        <MapTitle title={maze.title} />
        <ScoreBoard score={score} />
        <MazeGame
          mazeData={maze.mazeData}
          start={maze.start}
          end={maze.end}
          resolvedPath={answer ? maze.resolvedPath : []}
          player={player}
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
