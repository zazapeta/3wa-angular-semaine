function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function groupStudents(students: number[]): Set<number>[] {
  const groups = [
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
  ];
  students.forEach((student) => {
    const freeGroups = groups.filter((group) => group.size < 2);
    if (freeGroups.length > 0) {
      const randomIndex = getRandomInt(0, freeGroups.length - 1);
      freeGroups[randomIndex].add(student);
    }
  });
  return groups;
}

function case1() {
  const students: number[] = [
    12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112,
  ];
  const groups: Set<number>[] = groupStudents(students);
  // verifier que chaque eleève est dans un group de deux
  let isEachStudentsIsEffectivelyInASetOfTwo = true;

  students.forEach((student) => {
    isEachStudentsIsEffectivelyInASetOfTwo =
      isEachStudentsIsEffectivelyInASetOfTwo &&
      groups.some((group) => group.has(student));
  });

  if (isEachStudentsIsEffectivelyInASetOfTwo) {
    console.log('case1: OK');
  } else {
    console.error('case1: KO');
    throw new Error('Something get wrong');
  }
}

function case2() {
  const students: number[] = [
    12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112, 55, 78,
    45,
  ];
  const groups: Set<number>[] = groupStudents(students);
  // verifier que chaque eleève est dans un group de deux
  let isEachStudentsIsEffectivelyInASetOfTwo = true;

  students.forEach((student) => {
    isEachStudentsIsEffectivelyInASetOfTwo =
      isEachStudentsIsEffectivelyInASetOfTwo &&
      groups.some((group) => group.has(student));
  });

  if (!isEachStudentsIsEffectivelyInASetOfTwo) {
    console.log('case2: OK');
  } else {
    console.error('case2: KO');
    throw new Error('Something get wrong');
  }
}

function main() {
  try {
    case1();
    case2();
  } catch (error) {
    console.error(error);
  }
}

main();
