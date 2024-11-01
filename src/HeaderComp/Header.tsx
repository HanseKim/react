import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';
import { Mode } from './Mode';
import Else from './Else';

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type HeaderProps = TextProps & {
  modeName: string;
  elseName: string;
  mdColor: string;
  wow: string;
  Click : () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  mode: boolean;
};

const Header: FC<HeaderProps> = ({
  className: _className,
  modeName,
  elseName,
  wow,
  Click,
  mdColor,
  isLoggedIn,
  onLogout,
  mode,
}) => {
  return (
    <div
      className={`flex justify-between items-center ${_className}`} // flexbox로 정렬
      style={{
        height: '50px',
        border: '2px solid black',
        backgroundColor: mode ? 'lightgray' : '#f1f1f1',
      }}
    >
      <Mode
        className={modeName}
        Click={Click}
        mdColor={mdColor}
        style="width: '50px'"
      />
      <p className="font-bold text-3xl text-center p-1" style={{ width: '390px' }}>
        To Do List
      </p>
      <Else
        style={{ width: '60px' }}
        elseName={elseName}
        wow={wow}
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
      />
    </div>
  );
};

export default Header;