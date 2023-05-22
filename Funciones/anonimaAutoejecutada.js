console.log(function(){
    return "Este es un mensaje de confirmacion de su compra"
}());


(function(){
    console.log("Funcion para enviar la notificación!")
})()

const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="¿Confirmar compra?"
buscador.appendChild(button);

button.addEventListener('click',function(){
    alert("¡Compra realizada con éxito!")
})