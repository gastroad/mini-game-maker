import { FC, MouseEvent } from 'react';

import './Button.scss';

export interface ButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  type: 'primary' | 'secondary' | 'tertiary';
  active?: boolean;
  name?: string;
}
const Button: FC<ButtonProps> = ({
  onClick,
  label,
  type,
  active = false,
  name = '',
}) => {
  return (
    <button
      className={`btn ${type} ${active ? 'active' : ''}`}
      onClick={onClick}
      name={name}
    >
      {label}
    </button>
  );
};
export default Button;
