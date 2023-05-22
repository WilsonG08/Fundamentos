function saludoInvitados(nameOne, nameTwo="Maria") {
    return "¡Bienvenidos "+nameOne+" y "+nameTwo+" a mi graduación!";
}

const personOne = "Daniela";

const welcomeMessage = saludoInvitados(personOne);
console.log(welcomeMessage);
