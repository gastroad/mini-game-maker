import type { FC, KeyboardEvent, ChangeEvent } from 'react';

import './TextInput.scss';

export interface TextInputProps {
  value: string | number;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
}
const TextInput: FC<TextInputProps> = (props) => {
  return <input className="input-txt" {...props} />;
};

export default TextInput;
