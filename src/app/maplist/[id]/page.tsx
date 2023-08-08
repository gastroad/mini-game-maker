import { headers } from 'next/headers';

import GameTemplate from '@templates/GameTemplate';

async function getData({ id }: { id: string }) {
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
    <section>
      <GameTemplate maze={maze} />
    </section>
  );
}
