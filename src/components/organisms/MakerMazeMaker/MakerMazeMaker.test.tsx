import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import MakerMazeMaker from './MakerMazeMaker';

describe('MakerMazeMaker', () => {
  it('render MakerMazeMaker', () => {
    // TODO maze-cell select 해서 handlecellclick 추가하기
    const { container } = render(
      <RecoilRoot>
        <MakerMazeMaker />
      </RecoilRoot>,
    );

    const mazeMakerElement = container.querySelector('.maze-maker');
    expect(mazeMakerElement).toBeInTheDocument();
  });
});
