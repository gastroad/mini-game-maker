export async function getMazeList() {
    const res = await fetch(`http://localhost:3000/api/mazelist`)
    return res.json()
}
