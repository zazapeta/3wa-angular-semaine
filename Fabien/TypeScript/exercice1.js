var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
function showStatus(user) {
    if (user.status !== "" && user.status !== undefined && user.status !== null) {
        return user.status;
        console.error("the statut is not completed");
    }
}
function testValidUser() {
    try {
        var validUser = {
            name: "John Doe",
            id: 1,
            status: "Active"
        };
        var result = showStatus(validUser);
        console.log("Résultat pour un utilisateur valide:", result); // Devrait afficher "Active"
    }
    catch (error) {
        console.error("Erreur lors du test avec un utilisateur valide:", error.message);
    }
}
function testEmptyStatusUser() {
    try {
        var emptyStatusUser = {
            name: "Alice Smith",
            id: 2,
            status: ""
        };
        var result = showStatus(emptyStatusUser);
        console.log("Résultat pour un utilisateur avec un statut vide:", result); // Ne devrait pas atteindre cette ligne
    }
    catch (error) {
        console.error("Erreur lors du test avec un utilisateur avec un statut vide:", error.message); // Devrait afficher "the status is not completed"
    }
}
function testUndefinedStatusUser() {
    try {
        var undefinedStatusUser = {
            name: "Bob Johnson",
            id: 3,
            status: undefined
        };
        var result = showStatus(undefinedStatusUser);
        console.log("Résultat pour un utilisateur avec un statut non défini:", result); // Ne devrait pas atteindre cette ligne
    }
    catch (error) {
        console.error("Erreur lors du test avec un utilisateur avec un statut non défini:", error.message); // Devrait afficher "the status is not completed"
    }
}
testValidUser();
testEmptyStatusUser();
testUndefinedStatusUser();
