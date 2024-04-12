/**
 * Classic fibonacci sequence using good ol' interation.
 */
function fibonacci_sequence(n: number): number[] {

  let fib: number[] = [];

  if (n >= 2) {
    n -= 2;
    fib.push(0);
    fib.push(1);
  }
  else if (n == 1) return [0];
  else return [];

  let n_2 = 0;
  let n_1 = 1;
  let n_0: number;

  let i = 0;
  while (i < n) {
    n_0 = n_1 + n_2;
    fib.push(n_0);

    n_2 = n_1;
    n_1 = n_0;

    i++;
  }

  return fib;
}

/**
 * Classic fibonacci sequence using recursision.
 */
function fibonacci_sequence_rec(n: number, arr: number[]): number[] {

  if (arr.length === 0) { arr.push(0); arr.push(1); return fibonacci_sequence_rec(n -= 2, arr); }

  if (n == 0) return arr;

  const n_2 = arr[arr.length - 2];
  const n_1 = arr[arr.length - 1];

  arr.push(n_1 + n_2);

  return fibonacci_sequence_rec(n - 1, arr);
}

const fib_30 = fibonacci_sequence(30);

for (const n of fib_30) { console.log(n); }

const arr: number[] = [];

const fib_20 = fibonacci_sequence_rec(20, arr);

for (const n of fib_20) { console.log(n); }
