import type { FC} from 'react';
import React from 'react';

export type ModeProps = { 
  className : string ;
  Click : ()=>void;
  mdColor : string ;
  style:string;
};

export const Mode: FC<ModeProps> = ({
  className: _className,
  Click,
  mdColor,
}) => {
  return (
    <button
      className={_className}
      style={{ width: '50px',height: '30px', backgroundColor: `${mdColor}` }}
      onClick={Click}
    >
      Mode
    </button>
  );
};
