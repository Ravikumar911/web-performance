importScripts('https://unpkg.com/comlink/dist/umd/comlink.js');

const heavyOperation = () => {
  const n = 10000000;
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

Comlink.expose({ heavyOperation });
