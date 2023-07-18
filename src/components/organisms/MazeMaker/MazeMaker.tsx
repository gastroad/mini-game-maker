import { FC, useEffect, useState, useRef, MouseEvent } from 'react';
import MazeBoard from '@components/molecules/MazeBoard/MazeBoard';
import MazeController from '@components/organisms/MazeController/MazeController';

import './MazeMaker.scss';
import { MazeBoardType, PointType, CellType } from '@type/maze';

export interface MazeMakerProps extends MazeBoardType {
  currentType: CellType;
  handleMazeCellClick: (col: number, row: number) => void;
  handleCurrentType: (e: MouseEvent<HTMLButtonElement>) => void;
  handleResolveButton: () => void;
}
const MazeMaker: FC<MazeMakerProps> = ({
  mazeData,
  start,
  end,
  resolvedPath,
  currentType,
  handleResolveButton,
  handleMazeCellClick,
  handleCurrentType,
}) => {
  const mazeBoardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    function updateHeight() {
      setHeight(mazeBoardRef.current!.offsetWidth);
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);
  return (
    <div className="maze-game" style={{ height: height }} ref={mazeBoardRef}>
      <MazeBoard
        mazeData={mazeData}
        start={start}
        end={end}
        height={height}
        resolvedPath={resolvedPath}
        handleMazeCellClick={handleMazeCellClick}
      />
      <MazeController
        currentType={currentType}
        handleCurrentType={handleCurrentType}
        handleResolveButton={handleResolveButton}
      />
    </div>
  );
};
export default MazeMaker;
