interface User {
  name: string;
  id: number;
  status?: string;
}

/**
 * prends en paramètre un objet de type User 
 * et retourne si il existe le statut de cet objet. Sinon undefined
 * @param {User} user the given user
 * @returns the given user's status if exist. Undefined if not.
 */
function showStatus (user: User): User["status"] {
  return user.status ? user.status : undefined;
}

function case1_userWithoutStatus() {
  const user: User = {
    name: "yoshi",
    id: 0
  }; 
  const expectedResult = undefined;
  const result = showStatus(user);
  if (expectedResult === result){
    console.log('case1 (user without status): OK');
  } else {
    console.error(`Expected result should be ${expectedResult}. We got ${result}`);
    throw new Error("case1 (user without status): KO");
  }
}


function case2_userWithStatus() {
  const user: User = {
    name: "yoshi",
    id: 0,
    status: 'admin'
  }; 
  const expectedResult = 'admin';
  const result = showStatus(user);
  if (expectedResult === result){
    console.log('case2 (user with status): OK');
  } else {
    console.error(`Expected result should be ${expectedResult}. We got ${result}`);
    throw new Error("case2 (user with status): KO");
  }
}

function main(){
  try {
    case1_userWithoutStatus();
    case2_userWithStatus();
  } catch (e){
    console.error(e);
  }
}

main();

