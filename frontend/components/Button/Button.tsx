import React, { MouseEventHandler } from 'react'

type ButtonProps = {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};