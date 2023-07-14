import React from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: Props) {
  return (
    <button style={{ backgroundColor: 'yellow' }} {...props}>
      {children}
    </button>
  );
}
