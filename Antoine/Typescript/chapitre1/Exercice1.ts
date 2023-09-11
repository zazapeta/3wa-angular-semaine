interface User {
    name: string;
    id: number;
    status?: string;
}

function showStatus(user: User): boolean {
    if (user.status == undefined) {
        return false;
    } else {
        return true;
    }

}

function case1() {
    const resultatAttendu = false;
    const u1: User = {
        name: "Antoine",
        id: 1
    }
    const resultat = showStatus(u1);
    if (resultatAttendu != resultat) {
        throw new Error(`Le résultat attendu est ${resultatAttendu} mais nous avons ${resultat}`);
    } else {
        console.log(`Parfait ! :) Notre résultat ${resultat} est bien celui que nous voulions : ${resultatAttendu} `)
    }
}

function case2() {
    const resultatAttendu = true;
    const u2: User = {
        name: "Sarah",
        id: 2,
        status: "Marche"
    }
    const resultat = showStatus(u2);
    if (resultatAttendu != resultat) {
        throw new Error(`Le résultat attendu est ${resultatAttendu} mais nous avons ${resultat}`);
    } else {
        console.log(`Parfait ! :) Notre résultat ${resultat} est bien celui que nous voulions : ${resultatAttendu} `)
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