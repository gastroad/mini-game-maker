import { FC, ChangeEvent } from 'react';
import TextInputWithLabel from '@components/molecules/TextInputWithLabel/TextInputWithLabel';

import './MazeForm.scss';

export interface MazeFormProps {
  mazeSize: { row: number; col: number };
  handleMazeSize: (e: ChangeEvent<HTMLInputElement>) => void;
}
const MazeForm: FC<MazeFormProps> = ({ mazeSize, handleMazeSize }) => {
  return (
    <div className="maze-form">
      <TextInputWithLabel
        value={''}
        type="number"
        name="title"
        placeholder="맵 이름"
        onChange={handleMazeSize}
      />
      <TextInputWithLabel
        value={'asdasasds'}
        type="number"
        name="title"
        placeholder="제작자 이름"
        onChange={handleMazeSize}
      />
      <div>
        <TextInputWithLabel
          value={mazeSize.col}
          type="number"
          name="col"
          placeholder="미로 행"
          onChange={handleMazeSize}
        />
        <TextInputWithLabel
          value={mazeSize.row}
          type="number"
          name="row"
          placeholder="미로 열"
          onChange={handleMazeSize}
        />
      </div>
    </div>
  );
};
export default MazeForm;
