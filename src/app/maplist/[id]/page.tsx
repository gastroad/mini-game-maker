'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import GameTemplate from '@templates/GameTemplate';
import { findPath } from '@utils/index';
import type { PointType } from '@type/maze';

export default async function Home() {
  const [mazeData, setMaze] = useState<number[][]>([
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  ]);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 3, y: 4 });
  const [title, setTitle] = useState('튜토리얼');
  const [score, setScore] = useState(0);
  const [resolvedPath, setResolvedPath] = useState<PointType[]>([]);
  const [player, setPlayer] = useState(start);
  const router = useRouter();

  const handlePrevButton = () => {
    router.back();
  };
  const handleResetButton = () => {
    // 이야 player 아래에 있는데 이거 리셋 어케하냐...
    // 랜더링이슈를 해결해야할거같은데 recoil?, player 와 board 자체를 memo할까..
  };

  const handlePlayer = (nextPlayer: any) => {
    if (
      nextPlayer.y < mazeData[0].length &&
      nextPlayer.x < mazeData.length &&
      nextPlayer.x >= 0 &&
      nextPlayer.y >= 0 &&
      mazeData[nextPlayer.x][nextPlayer.y] === 0
    ) {
      setPlayer(nextPlayer);
    }
  };
  const bindController = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowLeft':
        handlePlayer({ ...player, y: player.y - 1 });
        break;
      case 'ArrowRight':
        handlePlayer({ ...player, y: player.y + 1 });
        break;
      case 'ArrowUp':
        handlePlayer({ ...player, x: player.x - 1 });
        break;
      case 'ArrowDown':
        handlePlayer({ ...player, x: player.x + 1 });
        break;
    }
  };
  useEffect(() => {
    if (player.x == end.x && player.y == end.y) {
      console.log('goeal');
    }
  }, [player]);

  useEffect(() => {
    window.addEventListener('keydown', bindController);
    return () => {
      window.removeEventListener('keydown', bindController);
    };
  }, [player]);

  const handleResolveButton = () => {
    const path = findPath(mazeData, start, end);
    if (path) {
      setResolvedPath(path);
    } else {
      alert('결과 없음');
    }
  };

  return (
    <section>
      <GameTemplate
        mazeData={mazeData}
        start={start}
        end={end}
        title={title}
        score={score}
        resolvedPath={resolvedPath}
        handlePrevButton={handlePrevButton}
        handleResetButton={handleResetButton}
        handleResolveButton={handleResolveButton}
      />
    </section>
  );
}
