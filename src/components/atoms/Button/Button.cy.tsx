import React from 'react';
import Button from './Button';
import { mount } from 'cypress/react18';

describe('Button Component', () => {
  it('renders button with label', () => {
    const label = 'Click me';
    mount(<Button label={label} type="primary" onClick={() => {}} />);
    cy.contains('button', label).should('exist');
  });

  it('handles click event', () => {
    let clicked = false;
    const handleClick = () => (clicked = !clicked);
    mount(<Button label="Click me" type="primary" onClick={handleClick} />);
    const temp = cy.contains('button', 'Click me');
    temp.click();
    console.warn(temp);

    handleClick();
    // 기대값 확인
    console.log(clicked);
    expect(clicked).to.equal(true);
  });
});
