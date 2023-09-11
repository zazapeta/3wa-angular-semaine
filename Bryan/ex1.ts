interface User {
    name: string;
    id: number;
    status?: string; 
  }

  function showStatus (user: User): string|undefined {
    if (user.status === "true") {
        return user.status;
    } else {
        return "undefined status"
    }
  }

  function case1() {
    const user1: User = {
        name: "Bryan",
        id : 1,
        status
    }
  }