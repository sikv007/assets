import React from 'react';

export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: IButton) {
  return (
    <button style={{ backgroundColor: 'yellow', fontSize: "25px" }} {...props}>
      {children}
    </button>
  );
}
