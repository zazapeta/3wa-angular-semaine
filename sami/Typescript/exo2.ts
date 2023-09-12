interface User {
  id: number;
}


class AddUser {
  private _users: Map<User['id'], User>;

  constructor(users: User[]){
    this._users = new Map();
    users.forEach((user) => this.add(user));
  }

  public add(user: User): void {
    if (this._users.has(user.id)){
      throw new Error(`user ${user.id} already exist.`);
    } else {
      this._users.set(user.id, user);
    }
  }

  public getUsers(){
    return Array.from(this._users.values());
  }
}

function case1_addTwoUsersInTheContainer() {
  const users: User[] = [{id: 0}, {id: 1}];
  const container = new AddUser([]);
  users.forEach((user) => container.add(user));
  const expectedResult = users;
  const result = container.getUsers();
  if (expectedResult[0] === result[0] && expectedResult[1] === result[1]){
    console.log('case1 (addTwoUsersInTheContainer) : OK')
 } else {
    console.error(`expected result was ${expectedResult} but we got ${result}`);
    throw new Error(`case1 (addTwoUsersInTheContainer): KO`);
 }
}


function case2_throwAnExceptionIfTheUserAlreadyExist() {
  const user: User = {
    id: 0
  };
  const container = new AddUser([user]);
  const expectedResult = `user ${user.id} already exist.`;
  let result = "";
  try {
    container.add(user);
  } catch (error) {
    result = error.message;
  }

  if (result === expectedResult){
    console.log('case2 (throwAnExceptionIfTheUserAlreadyExist): OK');
  } else {
    console.error(`expected result was ${expectedResult} but we got ${result}`);
    throw new Error(`case2 (throwAnExceptionIfTheUserAlreadyExist): KO`);
  }
}

function main():void {
  try {
    case1_addTwoUsersInTheContainer();
    case2_throwAnExceptionIfTheUserAlreadyExist();
  } catch (error) {
    console.error(error);
  }
}

main();
