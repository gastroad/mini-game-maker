'use client';

import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { findPath } from '@utils/index';
import MakerTemplate from '@templates/MakerTemplate/MakerTemplate';
import { useRouter } from 'next/navigation';
import { CellType, PointType } from '@type/maze';

export default function Maker() {
  const router = useRouter();
  const [currentType, setCurrentType] = useState<CellType>('start');
  const [title, setTtile] = useState('');
  const [name, setName] = useState('');
  const [mazeSize, setMazeSize] = useState({ row: 10, col: 10 });
  const [mazeData, setMazeData] = useState<number[][]>([[]]);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 3, y: 4 });
  const [resolvedPath, setResolvedPath] = useState<PointType[]>([]);


  useEffect(() => {
    const mazeData = new Array(mazeSize.col).fill(0).map(() => {
      return new Array(mazeSize.row).fill(0);
    });
    setMazeData(mazeData);
  }, [mazeSize]);

  const handleMazeSize = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (Number(value) >= 0 && Number.isInteger(Number(value))) {
      setMazeSize({ ...mazeSize, [name]: Number(value) });
    }
  };
  const handleCurrentType = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    setCurrentType(name as CellType);
  };

  const handleMazeCellClick = (col: number, row: number) => {
    let nextMazeData = { ...mazeData };
    switch (currentType) {
      case 'start':
        setStart({ x: col, y: row });
        nextMazeData = mazeData.map((cell, i) => {
          if (i === col) return cell.map((value, j) => (j === row ? 0 : value));
          return cell;
        });
        break;
      case 'end':
        setEnd({ x: col, y: row });
        nextMazeData = mazeData.map((cell, i) => {
          if (i === col) return cell.map((value, j) => (j === row ? 0 : value));
          return cell;
        });
        break;
      case 'wall':
        nextMazeData = mazeData.map((cell, i) => {
          if (i === col) return cell.map((value, j) => (j === row ? 1 : value));
          return cell;
        });
        break;
      case 'road':
        nextMazeData = mazeData.map((cell, i) => {
          if (i === col) return cell.map((value, j) => (j === row ? 0 : value));
          return cell;
        });
        break;
    }
    setMazeData(nextMazeData);
  };

  const handleResolveButton = () => {
    const path = findPath(mazeData, start, end);
    if (path) {
      setResolvedPath(path);
    } else {
      alert('결과 없음');
    }
  };
  const handlePrevButton = () => {
    router.back();
  };

  const temp = async () => {
    const body = {
      title: title,
      name: name,
      mazeSize: mazeSize,
      mazeData: mazeData,
      start: start,
      end: end,
      resolvedPath: resolvedPath,
    }
    await fetch("http://localhost:3000/api/mazelist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  return (
    <>
      <MakerTemplate
        mazeData={mazeData}
        start={start}
        end={end}
        resolvedPath={resolvedPath}
        mazeSize={mazeSize}
        currentType={currentType}
        handleMazeSize={handleMazeSize}
        handleCurrentType={handleCurrentType}
        handlePrevButton={handlePrevButton}
        handleMazeCellClick={handleMazeCellClick}
        handleResolveButton={handleResolveButton}
      />
      <button style={{ color: "white" }} onClick={() => { temp() }}>qweqweqwe</button>
    </>
  );
}
