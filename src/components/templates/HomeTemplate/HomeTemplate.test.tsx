import { render } from '@testing-library/react';
import HomeTemplate, { HomeTemplateProps } from './HomeTemplate';

describe('HomeTemplate', () => {
  it('render HomeTemplate', () => {
    const { container, getByText, getByRole } = render(
      <HomeTemplate>HomeTemplate</HomeTemplate>,
    );
    const homeTemplateElement = container.querySelector('.home-template');
    const childrenElement = getByText('HomeTemplate');

    expect(homeTemplateElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });
});
