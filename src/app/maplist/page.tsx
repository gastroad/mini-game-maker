import { Metadata } from 'next';
import GameTemplate from '@components/templates/GameTemplate';
import MazeList from '@components/organisms/MazeList';

async function getData() {
  const res = await fetch('http://localhost:3000/api/mazelist', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const { results: mazeList } = await getData();
  return {
    title: 'maze-maker-maplist',
    description: `${mazeList.length}개의 미로를 만나보실수 있습니다.`,
  };
}

export default async function Page() {
  const { results: mazeList } = await getData();
  return (
    <GameTemplate title="Maze List" href="/">
      <MazeList mazeList={mazeList} />
    </GameTemplate>
  );
}
