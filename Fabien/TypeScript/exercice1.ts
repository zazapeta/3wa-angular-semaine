class User {
    name: string;
    id: number;
    status?: string; // attribut facultatif
  }

  function showStatus(user: User):void | string{
    if (user.status !== "" && user.status !== undefined && user.status !== null){
        return user.status;

        console.error("the statut is not completed");
    }
  }

  function testValidUser() {
    try {
      const validUser: User = {
        name: "John Doe",
        id: 1,
        status: "Active"
      };
  
      const result = showStatus(validUser);
      console.log("Résultat pour un utilisateur valide:", result); // Devrait afficher "Active"
    } catch (error) {
      console.error("Erreur lors du test avec un utilisateur valide:", error.message);
    }
  }
  
  function testEmptyStatusUser() {
    try {
      const emptyStatusUser: User = {
        name: "Alice Smith",
        id: 2,
        status: ""
      };
  
      const result = showStatus(emptyStatusUser);
      console.log("Résultat pour un utilisateur avec un statut vide:", result); // Ne devrait pas atteindre cette ligne
    } catch (error) {
      console.error("Erreur lors du test avec un utilisateur avec un statut vide:", error.message); // Devrait afficher "the status is not completed"
    }
  }
  
  function testUndefinedStatusUser() {
    try {
      const undefinedStatusUser: User = {
        name: "Bob Johnson",
        id: 3,
        status: undefined
      };
  
      const result = showStatus(undefinedStatusUser);
      console.log("Résultat pour un utilisateur avec un statut non défini:", result); // Ne devrait pas atteindre cette ligne
    } catch (error) {
      console.error("Erreur lors du test avec un utilisateur avec un statut non défini:", error.message); // Devrait afficher "the status is not completed"
    }
  }
  
  testValidUser();
  testEmptyStatusUser();
  testUndefinedStatusUser();