import React from 'react';
import Button from './Button';
import { mount } from 'cypress/react18';

describe('Button Component', () => {
  it('renders button with label', () => {
    const label = 'Click me';
    mount(<Button label={label} type="primary" onClick={() => {}} />);
    cy.contains('button', label).should('exist');
  });

  it('handles click event', async () => {
    let clicked = false;
    function mockClick() {
      clicked = !clicked;
    }
    mount(<Button label="Click me" type="primary" onClick={mockClick} />);
    cy.get('button')
      .click()
      .then(() => {
        expect(clicked).to.equal(true);
      });
  });
});
