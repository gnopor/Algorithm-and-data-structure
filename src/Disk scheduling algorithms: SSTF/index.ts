export function sstf(
  requestQueue: Array<number>,
  initialHeadPosition: number,
): number {
  if (requestQueue.length == 0) return 0;
  const countSort: Record<string, number> = requestQueue.reduce(
    (prev: Record<string, number>, current, index) => {
      prev[current] = index;
      return prev;
    },
    {},
  );
  let queue = [initialHeadPosition, ...requestQueue].sort((a, b) => a - b);
  let currentHead = initialHeadPosition;
  let result = 0;

  const getNextIndex = (currentIndex: number, queue: number[]) => {
    if (currentIndex == 0) return currentIndex + 1;
    if (currentIndex == queue.length - 1) return currentIndex - 1;
    let head = queue[currentIndex];
    let left = queue[currentIndex - 1];
    let right = queue[currentIndex + 1];
    let leftDiff = head - queue[currentIndex - 1];
    let rightDiff = queue[currentIndex + 1] - head;

    if (leftDiff < rightDiff) return currentIndex - 1;
    if (rightDiff < leftDiff) return currentIndex + 1;

    return countSort[left] < countSort[right]
      ? currentIndex - 1
      : currentIndex + 1;
  };

  while (queue.length > 1) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] != currentHead) {
        continue;
      }
      const nextIndex = getNextIndex(i, queue);
      result += Math.abs(currentHead - queue[nextIndex]);

      currentHead = queue[nextIndex];
      queue.splice(i, 1);
      break;
    }
  }

  return result;
}

const params = [
  { queue: [98, 183, 37, 122, 14, 124, 65, 67], head: 53 },
  { queue: [40, 60, 70], head: 50 },
  { queue: [10, 2, 15], head: 16 },
];

for (let p of params) {
  console.log(
    `- input: ${JSON.stringify(p)} \n- output: ${sstf(p.queue, p.head)}\n`,
  );
}
