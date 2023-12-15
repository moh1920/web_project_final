
alert("Remplire le formulaire");
function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (firstName == "" || lastName == "" || email == "" || message == "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        var symbole = false;
        for (var i = 0; i < email.length; i++) {
            if (email[i] == '@') {
                symbole = true;
                break;
            }
        }

        
        if (!symbole) {
            alert("Veuillez entrer une adresse e-mail valide.");
        } else {
            var successMessage = "Formulaire soumis avec succès!\n\n" +
                                "Prénom : " + firstName + "\n" +
                                "Nom : " + lastName + "\n" +
                                "E-mail : " + email + "\n" +
                                "Message : " + message;
            
            alert(successMessage);
        }
    }
}
