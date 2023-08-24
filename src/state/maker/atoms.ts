import { atom } from 'recoil';
import { CellType } from '@type/maze';
import { MazeSizeType, MazeDataType, PointType } from '@type/maze';

export interface mazeStateType {
  title: string;
  name: string;
  mazeSize: MazeSizeType;
}
export const mazeState = atom<mazeStateType>({
  key: 'mazeState',
  default: {
    title: '',
    name: '',
    mazeSize: { row: 10, col: 10 },
  },
});

export const currentTypeState = atom<CellType>({
  key: 'currentTypeState',
  default: 'start',
});

export const mazeDataState = atom<MazeDataType>({
  key: 'mazeDataState',
  default: [[]],
});
export interface StartEndStateType {
  start: PointType;
  end: PointType;
}

export const startEndState = atom<StartEndStateType>({
  key: 'startEndState',
  default: {
    start: { x: 0, y: 0 },
    end: { x: 3, y: 4 },
  },
});
export const resolvedPathState = atom<PointType[]>({
  key: 'resolvedPathState',
  default: [],
});
