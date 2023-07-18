import { FC } from 'react';

import './MazeCell.scss';
import { CellType } from '@type/maze';

export interface MazeCellProps {
  type: CellType;
  handleMazeCellClick?: (col: number, row: number) => void;
  col: number;
  row: number;
}
const MazeCell: FC<MazeCellProps> = ({
  type,
  handleMazeCellClick = () => {},
  col,
  row,
}) => {
  return (
    <div
      className={`maze-cell ${type}`}
      onClick={() => {
        handleMazeCellClick(col, row);
      }}
    ></div>
  );
};
export default MazeCell;
