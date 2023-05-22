function saludoInvitados(nameOne, nameTwo) {
    return "¡Bienvenidos " + nameOne+" y "+nameTwo+" a mi graduación!";
}

const personOne = "Daniela";
const personTwo = "María";

const welcomeMessage = saludoInvitados(personOne,personTwo);
console.log(welcomeMessage);
