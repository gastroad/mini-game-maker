export type CellType = 'start' | 'end' | 'wall' | 'road' | 'resolve';

export interface PointType {
  x: number;
  y: number;
}

export interface MazeBoardType {
  start: PointType;
  end: PointType;
  mazeData: number[][];
  resolvedPath?: PointType[]
}
export interface MazeSizeType {
  col: number,
  row: number
}

export interface MazeType extends MazeBoardType {
  id: string
  title: string
  name: string
  mazeSize: MazeSizeType
}
