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


  console.log(showStatus(user1))
  console.log(showStatus(user2))