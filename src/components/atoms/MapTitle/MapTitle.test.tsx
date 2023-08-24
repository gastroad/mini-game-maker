import { render, fireEvent } from '@testing-library/react';
import MapTitle, { MapTitleProps } from './MapTitle';

describe('MapTitle', () => {
  const title = 'test';
  const defaultProps: MapTitleProps = {
    title,
  };

  it('render MapTitle', () => {
    const { getByText } = render(<MapTitle {...defaultProps} />);

    const mapTitle = getByText(title);
    expect(mapTitle).toBeInTheDocument();
    expect(mapTitle).toHaveClass('map-title');
  });
});
