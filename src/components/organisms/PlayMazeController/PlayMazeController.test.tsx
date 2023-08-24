import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import PlayMazeController from './PlayMazeController';

describe('PlayMazeController', () => {
  it('render PlayMazeController', () => {
    const { container, getByText } = render(
      <RecoilRoot>
        <PlayMazeController />
      </RecoilRoot>,
    );

    const playMazeControllerElement = container.querySelector(
      '.play-maze-controller',
    );
    const resetButtonElement = getByText('Reset');
    const resolveButtonElement = getByText('정답보기');

    expect(playMazeControllerElement).toBeInTheDocument();

    expect(resetButtonElement).toBeInTheDocument();
    expect(resolveButtonElement).toBeInTheDocument();
  });

  it('calls handleResolveButton', () => {
    const { getByText } = render(
      <RecoilRoot>
        <PlayMazeController />
      </RecoilRoot>,
    );

    const resolveButtonElement = getByText('정답보기');
    fireEvent.click(resolveButtonElement);
    // TODO atom 불러와서 검증로직 추가
  });

  it('calls handleResetButton', () => {
    const { getByText } = render(
      <RecoilRoot>
        <PlayMazeController />
      </RecoilRoot>,
    );

    const resetButtonElement = getByText('Reset');
    fireEvent.click(resetButtonElement);
    // TODO atom 불러와서 검증로직 추가
  });
});
