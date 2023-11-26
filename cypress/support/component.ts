import './commands'
import { mount } from 'cypress/react18'
import '../../src/assets/style/reset.scss';

declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount
        }
    }
}

Cypress.Commands.add('mount', mount)