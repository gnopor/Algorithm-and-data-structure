export default function appendAndDelete(
  s: string,
  t: string,
  k: number
): string {
  let index = -1;
  let countDelete = 0;
  let countAppend = 0;
  let countActions = 0;

  const result = {
    no: "No",
    yes: "Yes",
  };
  if (s === t) {
    countDelete = s.length;
    countAppend = t.length;
    countActions = countDelete + countAppend + 1;

    if (k % 2 !== 0) return k === countActions ? result.yes : result.no;
    return k < countActions ? result.yes : result.no;
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[i]) break;
    index = index + 1;
  }

  countDelete = s.length - (index + 1);
  countAppend = t.length - (index + 1);
  countActions = countDelete + countAppend;

  if (k < countActions) {
    return result.no;
  }
  if (k === countActions) {
    return result.yes;
  }

  if (
    index + 1 === t.length &&
    s.slice(0, index + 1) === t.slice(0, index + 1)
  ) {
    return appendAndDelete(t, t, k - countDelete);
  }

  if (index === -1 && [countActions, countActions + 1]) return result.yes;

  return appendAndDelete(t, t, k - countActions);
}

// Test
const s =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const t =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const k = 20;
console.log(appendAndDelete(s, t, k));
