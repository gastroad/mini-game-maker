import { FC, MouseEvent } from 'react';
import Button from '@components/atoms/Button/Button';
import { CellType } from '@type/maze';

import './MazeController.scss';

export interface MazeControllerProps {
  currentType: CellType;
  handleCurrentType: (e: MouseEvent<HTMLButtonElement>) => void;
  handleResolveButton: () => void;
}
const MazeController: FC<MazeControllerProps> = ({
  currentType,
  handleCurrentType,
  handleResolveButton,
}) => {
  return (
    <div className="maze-controller">
      <div>
        <Button
          onClick={handleCurrentType}
          label="시작 지점"
          type="primary"
          name="start"
          active={currentType === 'start'}
        />
        <Button
          onClick={handleCurrentType}
          label="종료 지점"
          type="primary"
          name="end"
          active={currentType === 'end'}
        />
      </div>
      <div>
        <Button
          onClick={handleCurrentType}
          label="벽(이동 불가)"
          type="primary"
          name="wall"
          active={currentType === 'wall'}
        />
        <Button
          onClick={handleCurrentType}
          label="길(이동 가능)"
          type="primary"
          name="road"
          active={currentType === 'road'}
        />
      </div>
      <Button
        onClick={handleResolveButton}
        label="find"
        type="primary"
        name="road"
      />
    </div>
  );
};
export default MazeController;
