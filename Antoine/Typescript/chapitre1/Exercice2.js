var AddUser = /** @class */ (function () {
    function AddUser() {
    }
    AddUser.prototype.add = function (tab, user) {
        var resultat = false;
        for (var i = 0; i < tab.length; i++) {
            if (tab[i].id == user.id) {
                resultat = true;
            }
        }
        if (resultat) {
            throw new Error("L'user avec l'id ".concat(user.id, " est d\u00E9j\u00E0 dans mon tableau"));
        }
        else {
            tab.push(user);
            console.log("L'user id ".concat(user.id, " avec le pr\u00E9nom ").concat(user.name, " est ajout\u00E9 au tableau"));
        }
    };
    return AddUser;
}());
function case1() {
    var u1 = {
        name: "Antoine",
        id: 1
    };
    var u2 = {
        name: "Sarah",
        id: 2,
        status: "Marche"
    };
    var addUser = new AddUser();
    var allUser = [];
    addUser.add(allUser, u1);
    addUser.add(allUser, u2);
    if (allUser.length != 2) {
        throw new Error("Le longueur du tableau attendu est 2 mais nous avons ".concat(allUser.length));
    }
    else {
        console.log("Parfait ! :) Notre r\u00E9sultat ".concat(allUser.length, " est bien celui que nous voulions, les 2 users sont bien dans le tableau ! "));
    }
}
function case2() {
    var u1 = {
        name: "Antoine",
        id: 1
    };
    var u2 = {
        name: "Sarah",
        id: 2,
        status: "Marche"
    };
    var u3 = {
        name: "Denis",
        id: 2
    };
    var addUser = new AddUser();
    var allUser = [];
    addUser.add(allUser, u1);
    addUser.add(allUser, u2);
    addUser.add(allUser, u3);
    if (allUser.length != 2) {
        throw new Error("Le longueur du tableau attendu est 2 mais nous avons ".concat(allUser.length));
    }
    else {
        console.log("Parfait ! :) Notre r\u00E9sultat ".concat(allUser.length, " est bien celui que nous voulions, les 2 users sont bien dans le tableau et pas notre 3e user ! "));
    }
}
function main() {
    try {
        case1();
        case2();
    }
    catch (e) {
        console.error('Quelque chose ne fonctionne pas');
        console.error(e);
    }
}
main();
