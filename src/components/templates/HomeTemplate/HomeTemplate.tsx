import { FC, ReactNode } from 'react';

import './HomeTemplate.scss';

export interface HomeTemplateProps {
  children: ReactNode
}
const HomeTemplate: FC<HomeTemplateProps> = ({ children }) => {
  return (
    <div className="home-template">
      {children}
    </div>
  );
};

export default HomeTemplate;
