export default function jumpingOnClouds(c: number[], k: number): number {
  const energy = 100;
  let jumpEnergy = 0;
  let clouds = c;

  while (clouds.length % k !== 0) {
    clouds = clouds.concat(c);
  }

  for (let i = 0; i < clouds.length; i += k) {
    jumpEnergy += 1;

    const nextValue = clouds[i + k];
    if (!nextValue || nextValue === 0) continue;

    jumpEnergy += 2;
  }

  jumpEnergy = clouds[0] === 1 ? (jumpEnergy += 2) : jumpEnergy;

  return energy - jumpEnergy;
}

// Test
const c = [0, 0, 1, 0, 0, 1, 1, 0];
const k = 2;
console.log(jumpingOnClouds(c, k));
