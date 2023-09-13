import React, { useState } from 'react';
import { Button } from '../Button';

const heavyOperation = () => {
  const n = 20000000;
  let primes = [];

  for (let i = 2; i <= n; i++) {
    let prime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      primes.push(i);
    }
  }

  console.log('Prime calculation finished');
  return primes;
};

export const MainThread = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <div className="box"></div>
      <div className="mt-80">
        <h1 className="mb-4">Main Thread</h1>
        <Button
          text="Do Something Heavy"
          onClick={() => {
            heavyOperation();
            setState(true);
          }}
        ></Button>
        <Button
          className="mx-4"
          text="Reset"
          variant="outlined"
          onClick={() => {
            setState(false);
          }}
        ></Button>
        {state && (
          <div className="bg-green-500 text-white p-2 rounded my-4">
            Heavy Operation Complete!
          </div>
        )}
      </div>
    </>
  );
};
