interface User {
  name: string;
  id: number;
  status?: string; 
}

class AddUser {

    users: User[] = []

    userExist(user: User): User|undefined{
        return this.users.find((user) => user.id === user.id);
    }

    add(user: User): void {
        if(this.userExist(user)) {
            throw new Error("User already exist");
        } else {
            this.users.push(user);
        }
    }
}

const user1: User = {
    name: "Bryan",
    id : 1,
    status: "présent"
    }

const user2: User = {
    name: "Victor",
    id : 2,
    status: ""
    }

function case1() {
    const newUsr = new AddUser();
    const expectedResult: User[] = [user1];
    const result = newUsr.add(user1);

    if(expectedResult !== result) {
        
    }
}

function main() {
    try {
        case1();
        case2();
    }catch (e) {
        console.error("test failed")
        console.error(e)
    }
}

main();