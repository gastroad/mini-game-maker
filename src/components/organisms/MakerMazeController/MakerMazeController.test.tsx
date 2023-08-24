import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import MakerMazeController from './MakerMazeController';

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock('@api/maze', () => {
  const mockPostMaze = jest.fn();
  return {
    postMaze: mockPostMaze.mockResolvedValue({ status: 'success' }),
  };
});

describe('MakerMazeController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render MakerMazeController', () => {
    const { container, getAllByRole } = render(
      <RecoilRoot>
        <MakerMazeController />
      </RecoilRoot>,
    );

    const mazeControllerElement = container.querySelector(
      '.maker-maze-controller',
    );
    const buttonElements = getAllByRole('button');

    expect(mazeControllerElement).toBeInTheDocument();
    expect(buttonElements.length).toEqual(5);
  });

  it('calls handleCurrentType', () => {
    const { getByText } = render(
      <RecoilRoot>
        <MakerMazeController />
      </RecoilRoot>,
    );

    const startButtonElement = getByText('시작 지점');
    const endButtonElement = getByText('종료 지점');
    const wallButtonElement = getByText('벽(이동 불가)');
    const roadButtonElement = getByText('길(이동 가능)');

    fireEvent.click(startButtonElement);
    expect(startButtonElement).toHaveClass('active');
    expect(endButtonElement).not.toHaveClass('active');
    expect(wallButtonElement).not.toHaveClass('active');
    expect(roadButtonElement).not.toHaveClass('active');

    fireEvent.click(endButtonElement);
    expect(endButtonElement).toHaveClass('active');
    expect(startButtonElement).not.toHaveClass('active');
    expect(wallButtonElement).not.toHaveClass('active');
    expect(roadButtonElement).not.toHaveClass('active');

    fireEvent.click(wallButtonElement);
    expect(wallButtonElement).toHaveClass('active');
    expect(endButtonElement).not.toHaveClass('active');
    expect(startButtonElement).not.toHaveClass('active');
    expect(roadButtonElement).not.toHaveClass('active');

    fireEvent.click(roadButtonElement);
    expect(roadButtonElement).toHaveClass('active');
    expect(endButtonElement).not.toHaveClass('active');
    expect(wallButtonElement).not.toHaveClass('active');
    expect(startButtonElement).not.toHaveClass('active');
  });

  it('calls handleResolveButton', async () => {
    const { getByText } = render(
      <RecoilRoot>
        <MakerMazeController />
      </RecoilRoot>,
    );
    const findAndSubmitButtonElement = getByText('find & submit');

    fireEvent.click(findAndSubmitButtonElement);
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/');
    });
  });
});
