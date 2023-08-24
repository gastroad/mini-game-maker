export type CellType = 'start' | 'end' | 'wall' | 'road' | 'resolve';
export type MazeDataValueType = 0 | 1;
export type MazeDataType = MazeDataValueType[][];

export interface MazeSizeType {
  col: number;
  row: number;
}
export interface PointType {
  x: number;
  y: number;
}
export interface MazeBoardType {
  start: PointType;
  end: PointType;
  mazeData: MazeDataType;
  resolvedPath?: PointType[];
}
export interface MazeInfoType {
  id?: string;
  title: string;
  name: string;
  mazeSize: MazeSizeType;
}

export type MazeType = MazeBoardType & MazeInfoType;

