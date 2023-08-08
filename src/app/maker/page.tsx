'use client';
import { ChangeEvent, MouseEvent, useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import MakerTemplate from '@templates/MakerTemplate';
import { findPath } from '@utils/index';
import { CellType } from '@type/maze';
import { postMaze } from '@api/maze';
import {
  mazeState,
  mazeDataState,
  currentTypeState,
  resolvedPathState,
  startEndState,
} from 'src/state/maker/atoms';

export default function Maker() {
  const router = useRouter();
  const [maze, setMaze] = useRecoilState(mazeState);
  const [currentType, setCurrentType] = useRecoilState(currentTypeState);
  const [mazeData, setMazeData] = useRecoilState(mazeDataState);
  const [resolvedPath, setResolvedPath] = useRecoilState(resolvedPathState);
  const [startEnd, setStartEnd] = useRecoilState(startEndState);

  const resetMazeState = useResetRecoilState(mazeState)
  const resetCurrentTypeState = useResetRecoilState(currentTypeState)
  const resetMazeDataState = useResetRecoilState(mazeDataState)
  const resetResolvedPathState = useResetRecoilState(resolvedPathState)
  const resetStartEndState = useResetRecoilState(startEndState)

  const resetState = () => {
    resetMazeState()
    resetCurrentTypeState()
    resetMazeDataState()
    resetResolvedPathState()
    resetStartEndState()
  }

  useEffect(() => {
    const mazeData = new Array(maze.mazeSize.col).fill(0).map(() => {
      return new Array(maze.mazeSize.row).fill(0);
    });
    setMazeData(mazeData);
  }, [maze.mazeSize]);

  const handleMaze = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'col' || name === 'row') {
      if (Number(value) >= 0 && Number.isInteger(Number(value))) {
        setMaze({
          ...maze,
          mazeSize: { ...maze.mazeSize, [name]: Number(value) },
        });
      }
    } else {
      setMaze({ ...maze, [name]: value });
    }
  };

  const handleCurrentType = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setCurrentType(name as CellType);
  };

  const handleMazeCellClick = (col: number, row: number) => {
    let nextMazeData: number[][];

    switch (currentType) {
      case 'start':
      case 'end':
        setStartEnd({ ...startEnd, [currentType]: { x: col, y: row } });
        break;

      case 'wall':
      case 'road':
        nextMazeData = mazeData.map((cell, i) =>
          i === col
            ? cell.map((value, j) =>
              j === row ? (currentType === 'wall' ? 1 : 0) : value,
            )
            : cell,
        );
        setMazeData(nextMazeData);
        break;
    }
  };

  const handleResolveButton = async () => {
    const path = findPath(mazeData, startEnd.start, startEnd.end);
    if (!path) return alert('결과 없음');
    setResolvedPath(path);
    const body = {
      ...maze,
      mazeData: mazeData,
      ...startEnd,
      resolvedPath: path
    };
    const res = await postMaze(body)
    if (res.status === "success") {
      resetState()
      router.push("/")
    }
  };

  const handlePrevButton = () => {
    router.back();
  };

  return (
    <>
      <MakerTemplate
        maze={maze}
        mazeData={mazeData}
        resolvedPath={resolvedPath}
        startEnd={startEnd}
        currentType={currentType}
        handleMaze={handleMaze}
        handleCurrentType={handleCurrentType}
        handlePrevButton={handlePrevButton}
        handleMazeCellClick={handleMazeCellClick}
        handleResolveButton={handleResolveButton}
      />
    </>
  );
}
