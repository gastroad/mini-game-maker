import { FC, useRef, useState, useEffect, useMemo } from 'react';
import MazeBoard from '@components/molecules/MazeBoard';
import MazePlayer from '@components/molecules/MazePlayer';
import { MazeBoardType, PointType } from '@type/maze';

import './MazeGame.scss';

export interface MazeGameProps extends MazeBoardType {}
const MazeGame: FC<MazeGameProps> = ({
  mazeData,
  start,
  end,
  resolvedPath,
}) => {
  const mazeBoardRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [playerSize, setPlayerSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function updateHeight() {
      const width = mazeBoardRef.current!.offsetWidth;
      const calculatedHeight = width;
      const calculatedPlayerSize = {
        width: width / mazeData[0].length,
        height: width / mazeData.length,
      };
      setHeight(calculatedHeight);
      setPlayerSize(calculatedPlayerSize);
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
      />
      <MazePlayer
        mazeData={mazeData}
        start={start}
        end={end}
        playerSize={playerSize}
      />
    </div>
  );
};
export default MazeGame;
