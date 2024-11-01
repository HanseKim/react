import type { FC, DetailedHTMLProps, HTMLAttributes } from 'react';
import React from 'react';

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export type ElseProps = TextProps & {
  elseName: string;
  wow: string;
  isLoggedIn: boolean;
  onLogout: () => void; // 로그아웃 함수 추가
};

const Else: FC<ElseProps> = ({
  elseName,
  wow,
  isLoggedIn,
  onLogout,
}) => {
  return (
    <div className={elseName}>
      {isLoggedIn ? (
        <button
        className={wow}
        style={{ width: '60px', height: '30px', fontSize: '13px' }}
        onClick={onLogout}
      >
        로그아웃
      </button>
      ) : (
        <div style={{ width: '60px',  fontSize: '15px' }}></div>
      )}
    </div>
  );
};

export default Else;