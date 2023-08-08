import { useState, useEffect } from 'react';

type Position = {
  x: number;
  y: number;
};

type MazeNode = {
  position: Position;
  parent: MazeNode | null;
  cost: number;
  heuristic: number;
};

export function usePathfinding(
  maze: number[][],
  start: Position,
  end: Position,
): Position[] | null {
  const [path, setPath] = useState<Position[] | null>(null);

  useEffect(() => {
    const isValidPosition = (x: number, y: number): boolean => {
      return (
        x >= 0 &&
        x < maze.length &&
        y >= 0 &&
        y < maze[0].length &&
        maze[x][y] === 0
      );
    };

    const calculateHeuristic = (x: number, y: number): number => {
      return Math.abs(x - end.x) + Math.abs(y - end.y);
    };

    const exploreNeighbours = (
      currentNode: MazeNode,
      queue: MazeNode[],
      visited: Set<string>,
    ): void => {
      const { x, y } = currentNode.position;
      const neighbours = [
        { x: x - 1, y },
        { x: x + 1, y },
        { x, y: y - 1 },
        { x, y: y + 1 },
      ];

      for (const neighbour of neighbours) {
        const { x, y } = neighbour;

        if (isValidPosition(x, y) && !visited.has(`${x},${y}`)) {
          const newNode: MazeNode = {
            position: neighbour,
            parent: currentNode,
            cost: currentNode.cost + 1,
            heuristic: calculateHeuristic(x, y),
          };
          queue.push(newNode);
          visited.add(`${x},${y}`);
        }
      }
    };

    const reconstructPath = (node: MazeNode): Position[] => {
      const path: Position[] = [];

      while (node.parent !== null) {
        path.unshift(node.position);
        node = node.parent;
      }

      return path;
    };

    const startNode: MazeNode = {
      position: start,
      parent: null,
      cost: 0,
      heuristic: calculateHeuristic(start.x, start.y),
    };

    const queue: MazeNode[] = [startNode];
    const visited: Set<string> = new Set();
    visited.add(`${start.x},${start.y}`);

    while (queue.length > 0) {
      queue.sort((a, b) => a.cost + a.heuristic - b.cost - b.heuristic);

      const currentNode = queue.shift()!;
      const { x, y } = currentNode.position;

      if (x === end.x && y === end.y) {
        setPath(reconstructPath(currentNode));
        break;
      }

      exploreNeighbours(currentNode, queue, visited);
    }
  }, [maze, start, end]);

  return path;
}
