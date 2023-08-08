import MapListTemplate from '@templates/MapListTemplate/MapListTemplate';

async function getData() {
  const res = await fetch('http://localhost:3000/api/mazelist');

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}

export default async function Page() {
  const { results: mazeList } = await getData();

  return (
    <section>
      <MapListTemplate mazeList={mazeList} />
    </section>
  );
}
