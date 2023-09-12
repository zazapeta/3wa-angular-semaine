interface User {
    name: string;
    id: number;
    status?: string; 
  }

  function showStatus (user: User): string|undefined {
    if (user.status) {
        return user.status;
    } else {
        return "undefined User status"
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
   const expectedResult = "présent";
   const result = showStatus(user1);
    if (expectedResult !== result) {
        throw new Error(`expectedRestut must be ${expectedResult} and showStatus function result ${result}`)
    } else {
        console.log("working good")
    }
  }

  function case2() {
    const expectedResult = "undefined User status";
    const result = showStatus(user2);
     if (expectedResult !== result) {
         throw new Error(`expectedRestut must be ${expectedResult} and showStatus function result ${result}`)
     }else {
        console.log("working good")
     }
   }

   function main() {
    case1();
    case2();
   }

   main();