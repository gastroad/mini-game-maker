import { atom } from 'recoil';
import { Position } from '../maker/atoms';

export const playerState = atom<Position>({
  key: 'playerState',
  default: { x: 0, y: 0 },
});
export const scoreState = atom<number>({
  key: 'scoreState',
  default: 0,
});
export const answerState = atom<boolean>({
  key: 'answerState',
  default: false,
});
