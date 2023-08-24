import { render, fireEvent } from '@testing-library/react';
import MazePlayer, { MazePlayerProps } from './MazePlayer';

describe('MazePlayer', () => {
  const playerSize = { width: 100, height: 100 };
  const player = { x: 0, y: 0 };
  const defaultProps: MazePlayerProps = {
    player,
    playerSize,
  };

  it('render MazePlayer', () => {
    const { container } = render(<MazePlayer {...defaultProps} />);
    const PlayerElement = container.querySelector('.maze-player');
    const ImgElement = container.querySelector('img');
    expect(PlayerElement).toBeInTheDocument();
    expect(ImgElement).toBeInTheDocument();
  });

  it('check MazePlayer size', () => {
    const { container } = render(<MazePlayer {...defaultProps} />);
    const PlayerElement = container.querySelector('.maze-player');
    const ImgElement = container.querySelector('img');

    expect(PlayerElement).toBeInTheDocument();
    expect(ImgElement).toBeInTheDocument();

    const playerElementStyle = getComputedStyle(PlayerElement!);
    expect(playerElementStyle.width).toEqual(`${playerSize.width}px`);
    expect(playerElementStyle.height).toEqual(`${playerSize.height}px`);

    const ImgElementStyle = getComputedStyle(ImgElement!);
    expect(ImgElementStyle.width).toEqual(`${playerSize.width * 0.8}px`);
    expect(ImgElementStyle.height).toEqual(`${playerSize.height * 0.8}px`);
  });

  it('check MazePlayer place', () => {
    const player = { x: 1, y: 2 };
    const props: MazePlayerProps = { ...defaultProps, player };
    const { container } = render(<MazePlayer {...props} />);

    const PlayerElement = container.querySelector('.maze-player');
    expect(PlayerElement).toBeInTheDocument();

    const playerElementStyle = getComputedStyle(PlayerElement!);
    expect(playerElementStyle.left).toEqual(`${playerSize.width * player.y}px`);
    expect(playerElementStyle.top).toEqual(`${playerSize.height * player.x}px`);
  });
});
