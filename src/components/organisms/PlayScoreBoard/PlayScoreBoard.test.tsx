import React from 'react';
import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import PlayScoreBoard from './PlayScoreBoard';

describe('PlayScoreBoard', () => {
  it('render PlayScoreBoard', () => {
    const { container } = render(
      <RecoilRoot>
        <PlayScoreBoard />
      </RecoilRoot>,
    );

    const scoreBoardElement = container.querySelector('.score-board');
    expect(scoreBoardElement).toBeInTheDocument();
  });

  it('should display the correct score', () => {
    const { getByText } = render(
      <RecoilRoot>
        <PlayScoreBoard />
      </RecoilRoot>,
    );

    const scoreTextElement = getByText(`score: ${0}`);
    expect(scoreTextElement).toBeInTheDocument();
  });
});
