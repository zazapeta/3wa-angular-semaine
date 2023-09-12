const students: number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112];

function dispatch(students: number[]): number[][] {
 
  const randomeleves = randoms(students)
  const groups: number[][] = [];
  for (let i = 0; i < randomeleves.length; i += 2) {
    const group = [randomeleves[i], randomeleves[i + 1]];
    groups.push(group);
  }

  return groups;
}

function randoms(array: number[]): number[] {
  const randoms = [...array];
  for (let i = randoms.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randoms[i], randoms[j]] = [randoms[j], randoms[i]];
  }
  return randoms;
}

function case1(groups: number[][]) {
  console.log("Vérification des groupes :");
  groups.forEach((group, index) => {
    console.log(`Groupe ${index + 1}: ${group.join(", ")}`);
  });
}

const randomGroups = dispatch(students);
console.log("Groupes au hasard :");
case1(randomGroups);
