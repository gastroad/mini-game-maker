import { headers } from 'next/headers';

import GameTemplate from '@components/templates/GameTemplate/GameTemplate';
import PlayMazeGame from '@components/organisms/PlayMazeGame/PlayMazeGame';
import PlayScoreBoard from '@components/organisms/PlayScoreBoard/PlayScoreBoard';
import PlayMazeController from '@components/organisms/PlayMazeController/PlayMazeController';
import { MazeType } from '@type/maze';

async function getData({ id }: { id: MazeType['id'] }) {
  const res = await fetch(`http://localhost:3000/api/mazelist/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Home() {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';
  const { results: maze } = await getData({ id: pathname.split('/')[2] });

  return (
    <GameTemplate title={maze.title} href="/maplist">
      <PlayScoreBoard />
      <PlayMazeGame maze={maze} />
      <PlayMazeController />
    </GameTemplate>
  );
}

PlayScoreBoard;
