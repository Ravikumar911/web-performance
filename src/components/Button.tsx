import React from 'react';

interface BtnProps {
  text: string;
  variant?: 'outlined';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
export const Button: React.FC<BtnProps> = ({
  text,
  onClick,
  variant,
  className,
}) => {
  if (variant === 'outlined')
    return (
      <button
        className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
