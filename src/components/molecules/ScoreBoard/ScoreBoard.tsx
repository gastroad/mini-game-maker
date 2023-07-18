import { FC } from 'react';

import './ScoreBoard.scss';

export interface ScoreBoardProps {
  score: number;
}
const ScoreBoard: FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className="score-board">
      <span>score: {score}</span>
    </div>
  );
};

export default ScoreBoard;
