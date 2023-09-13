import React from 'react';

/**
 * https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction
 */

import './hello.scss';

export const Tailwind = () => {
  return (
    <>
      <div className="px-4 mt-4 bg-purple-200 text-purple-700 h-48 text-center flex items-center justify-center font-semibold">
        Hello from tailwind!
      </div>
      <div className="tailwind-container">Hello from tailwind!</div>
    </>
  );
};
