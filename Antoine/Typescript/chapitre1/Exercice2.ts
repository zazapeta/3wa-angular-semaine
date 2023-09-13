interface User {
    name: string;
    id: number;
    status?: string; // attribut facultatif
}

class AddUser {
    add(tab, user: User) {
        let resultat = false;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i].id == user.id) {
                resultat = true;
            }
        }
        if (resultat) {
            throw new Error(`L'user avec l'id ${user.id} est déjà dans mon tableau`);
        } else {
            tab.push(user);
            console.log(`L'user id ${user.id} avec le prénom ${user.name} est ajouté au tableau`)
        }
    }
}

function case1() {
    const resultatAttendu = [
        {
            name: "Antoine",
            id: 1
        },
        {
            name: "Sarah",
            id: 2,
            status: "Marche"
        }
    ];


    const u1: User = {
        name: "Antoine",
        id: 1
    }
    const u2: User = {
        name: "Sarah",
        id: 2,
        status: "Marche"
    }

    const addUser = new AddUser();
    let allUser = [];
    try {
        addUser.add(allUser, u1)
        addUser.add(allUser, u2)
    } catch (e) {
        console.error(e);
    }

    if (allUser[0] != resultatAttendu[0] || allUser[1] != resultatAttendu[1]) {
        throw new Error(`Le tableau contenant les 2 users attendu n'est le bon`);
    } else {
        console.log(`Le tableau attendu est le bon, les 2 users ont bien été ajouter ! `)
    }
}

function case2() {
    const resultatAttendu = [
        {
            name: "Antoine",
            id: 1
        },
        {
            name: "Sarah",
            id: 2,
            status: "Marche"
        }
    ];

    const u1: User = {
        name: "Antoine",
        id: 1
    }
    const u2: User = {
        name: "Sarah",
        id: 2,
        status: "Marche"
    }

    const u3: User = {
        name: "Denis",
        id: 2
    }

    const addUser = new AddUser();
    let allUser = [];
    try {
        addUser.add(allUser, u1)
        addUser.add(allUser, u2)
        addUser.add(allUser, u3)
    } catch (e) {
        console.error(e);
    }

    if (allUser[0] != resultatAttendu[0] || allUser[1] != resultatAttendu[1]) {
        throw new Error(`Le tableau contenant les 2 users attendu n'est le bon`);
    } else {
        console.log(`Le tableau attendu est le bon, les 2 users ont bien été ajouter ! `)
    }
}

function main() {
    try {
        case1();
        case2();
    } catch (e) {
        console.error('Quelque chose ne fonctionne pas');
        console.error(e);
    }
}

main();