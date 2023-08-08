export async function getMazeList() {
  const res = await fetch(`http://localhost:3000/api/mazelist`);
  return res.json();
}
export async function postMaze(body: any) {
  const res = await fetch('http://localhost:3000/api/mazelist', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return res.json()
}


