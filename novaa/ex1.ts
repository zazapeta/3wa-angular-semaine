interface User {
    name: string;
    id: number;
    status?: string; // attribut facultatif
  }

  function showStatus(user: User): string  {
    if (user.status) {
      return user.status;
    } else {
      return "Il n'y a pas de status";
    }
  }

  const user1 : User={
    name: 'euclydice',
    id:4012,
    status:'inactif'
  }

  const user2 : User={
name:'eupholia',
id:1
  }


  const resultat1 = showStatus(user1);
  const attendu1 = user1.status;
  const resultat2 = showStatus(user2);
  const attendu2 = "Il n'y a pas de status";

function case1() {
  if (resultat1 === attendu1) {
    console.log("Cas 1:Résultat attendu:", attendu1);
    console.log("Résultat obtenu:", resultat1);
    console.log("Le résultat est celui attendu.");
  } else {
    console.log("Cas 1:Résultat attendu:", attendu1);
    console.log("Résultat obtenu:", resultat1);
    console.log("Le résultat n'est pas celui attendu.");
  }
}

function case2() {
  if (resultat2 === attendu2) {
    console.log("Cas 2:Résultat attendu:", attendu2);
    console.log("Résultat obtenu:", resultat2);
    console.log("Le résultat est celui attendu.");
  } else {
    console.log("Cas 2:Résultat attendu:", attendu2);
    console.log("Résultat obtenu:", resultat2);
    console.log("Le résultat n'est pas celui attendu.");
  }
}

  case1();
  case2()