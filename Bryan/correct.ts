interface User {
    name: string;
    id: number;
    status?: string; 
  }

  class AddUser {
    users: Map<User['id'], User>;
    constructor(users: User[]) {
        this.users = new Map();
        users.forEach((user) => this.add(user))
    }

    public add(user: User): void {
        
    }
  }

function case1() {
    throw new Error("Function not implemented.");
}


function case2() {
    const user: User = {}
    const container = new AddUser([user]);
    const expectedResult = `user${user} already exist`;
    let result = "";
    try {
        container.add(user);
    }
}

function main (): void {
    try{
        case1();
        case2();
    } catch (error) {
        console.error(error)
    }
}