import { FC, ReactElement } from 'react';

import './NavigationBar.scss';

export interface NavigationBarProps {
  children: ReactElement;
}
const NavigationBar: FC<NavigationBarProps> = ({ children }) => {
  return <nav className="navigation-bar">{children}</nav>;
};
export default NavigationBar;
