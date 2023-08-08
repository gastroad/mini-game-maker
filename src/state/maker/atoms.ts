import { atom } from 'recoil';
import { CellType } from '@type/maze';
import { MazeSizeType } from '@type/maze';

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

export type mazeDataStateType = number[][];
export const mazeDataState = atom<mazeDataStateType>({
  key: 'mazeDataState',
  default: [[]],
});
export interface startEndStateType {
  start: Position;
  end: Position;
}

export const startEndState = atom<startEndStateType>({
  key: 'startEndState',
  default: {
    start: { x: 0, y: 0 },
    end: { x: 3, y: 4 },
  },
});
export type Position = {
  x: number;
  y: number;
};
export const resolvedPathState = atom<Position[]>({
  key: 'resolvedPathState',
  default: [],
});
