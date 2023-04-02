export default function acmTeam(topic: string[]): number[] {
  const mapMaxToTeam: Record<string, number> = {};

  const getSubjectValue = (subjects1: string, subjects2: string) => {
    let value = 0;
    for (let i = 0; i < subjects1.length; i++) {
      if ([subjects1[i], subjects2[i]].includes("1")) {
        value++;
      }
    }

    return value;
  };

  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      const valueSubjects = getSubjectValue(topic[i], topic[j]);

      if (mapMaxToTeam[valueSubjects] === undefined) {
        mapMaxToTeam[valueSubjects] = 0;
      }
      mapMaxToTeam[valueSubjects]++;
    }
  }

  const maxSubject = Math.max(...Object.keys(mapMaxToTeam).map((v) => +v));

  return [maxSubject, mapMaxToTeam[maxSubject]];
}

// test
const topics = ["10101", "11110", "00010"];
console.log(acmTeam(topics));
