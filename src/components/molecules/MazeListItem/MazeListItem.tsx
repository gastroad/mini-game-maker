import { FC } from 'react';

import './MazeListItem.scss';
import Button from '@components/atoms/Button/Button';

export interface MazeListItemProps {
  maze: any;
  handlePlayButton: (id: string) => void
}
const MazeListItem: FC<MazeListItemProps> = ({ maze, handlePlayButton }) => {
  return (
    <li className="maze-list-item">
      <p className="maze-list-item-title">{maze.title ? maze.title : "제목 없음"}</p>
      <div className={`maze-list-item-info ${true}`}>
        <span>{maze.name ? maze.name : "unknown"}</span>
        <span>
          {maze.mazeData[0].length} * {maze.mazeData.length}
        </span>
        <Button type="primary" onClick={() => { handlePlayButton(maze.id) }} label="Play" />
      </div>
    </li>
  );
};
export default MazeListItem;
