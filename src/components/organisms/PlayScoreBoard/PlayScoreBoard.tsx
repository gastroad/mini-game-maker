'use client';
import { FC } from 'react';

import './PlayScoreBoard.scss';
import { useRecoilValue } from 'recoil';
import { scoreState } from 'src/state/game/atoms';

export interface PlayScoreBoardProps {}
const PlayScoreBoard: FC<PlayScoreBoardProps> = () => {
  const score = useRecoilValue(scoreState);
  return (
    <div className="score-board">
      <span>score: {score}</span>
    </div>
  );
};

export default PlayScoreBoard;
