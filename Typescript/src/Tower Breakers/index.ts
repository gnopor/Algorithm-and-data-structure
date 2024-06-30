/*
Help from [hafsanajeeb1122](https://www.hackerrank.com/hafsanajeeb1122)
* - Whenever the height (m) is 1, Player 2 will win because Player 1 can't remove any pieces.
* - Similarly, when the number of towers (n) is even, Player 2 will win because he can remove as many pieces as Player 1. Consequently, Player 1 will be left with no choice in the end.
* - So,code in JavaScript will be like :
*/

export default function towerBreakers(n: number, m: number): number {
  const player1 = 1;
  const player2 = 2;

  if (m == 1) return player2;
  if (n == 1) return player1;

  return n % 2 == 0 ? player2 : player1;
}

// test
const n = 1;
const m = 2;
console.log(towerBreakers(n, m));
