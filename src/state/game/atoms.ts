import { atom } from 'recoil';
import { PointType } from '@type/maze';

export const playerState = atom<PointType>({
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
