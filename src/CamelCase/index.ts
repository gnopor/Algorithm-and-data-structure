export default function camelcase(s: string): number {
  const result = s.match(/[A-Z]/g);

  return (result?.length || 0) + 1;
}

// Test
const s = "saveChangesInTheEditor";

console.log(camelcase(s));
