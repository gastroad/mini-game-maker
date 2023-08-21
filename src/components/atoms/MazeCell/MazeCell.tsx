import { FC } from 'react';

import { CellType } from '@type/maze';

import './MazeCell.scss';

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
