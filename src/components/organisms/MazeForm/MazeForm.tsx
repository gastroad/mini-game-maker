import { FC, ChangeEvent } from 'react';
import TextInputWithLabel from '@components/molecules/TextInputWithLabel/TextInputWithLabel';
import { mazeStateType } from 'src/state/maker/atoms';

import './MazeForm.scss';

export interface MazeFormProps {
  maze: mazeStateType;
  handleMaze: (e: ChangeEvent<HTMLInputElement>) => void;
}
const MazeForm: FC<MazeFormProps> = ({ maze, handleMaze }) => {
  return (
    <div className="maze-form">
      <TextInputWithLabel
        value={maze.title}
        type="text"
        name="title"
        placeholder="맵 이름"
        onChange={handleMaze}
      />
      <TextInputWithLabel
        value={maze.name}
        type="text"
        name="name"
        placeholder="제작자 이름"
        onChange={handleMaze}
      />
      <div>
        <TextInputWithLabel
          value={maze.mazeSize.col}
          type="number"
          name="col"
          placeholder="미로 행"
          onChange={handleMaze}
        />
        <TextInputWithLabel
          value={maze.mazeSize.row}
          type="number"
          name="row"
          placeholder="미로 열"
          onChange={handleMaze}
        />
      </div>
    </div>
  );
};
export default MazeForm;
