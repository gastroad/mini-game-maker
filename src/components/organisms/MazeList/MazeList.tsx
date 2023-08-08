import { FC } from 'react';

import './MazeList.scss';
import MazeListItem from '@components/molecules/MazeListItem/MazeListItem';
import { MazeType } from '@type/maze';

export interface MazeListProps {
  handlePlayButton: (id: string) => void;
  mazeList: MazeType[];
}

const MazeList: FC<MazeListProps> = ({ mazeList, handlePlayButton }) => {
  return (
    <ul className="maze-list">
      {mazeList.map((maze, index) => {
        return (
          <MazeListItem
            key={`maze-${index}`}
            maze={maze}
            handlePlayButton={handlePlayButton}
          />
        );
      })}
    </ul>
  );
};

export default MazeList;
