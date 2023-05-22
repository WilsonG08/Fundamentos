
const notasLenguaje = function(n1, n2, ...args) {
    let suma = 0;
    suma = n1 + n2;
    if (args.length > 0) args.forEach(e => suma += e)
    const promedio = suma / (2 + args.length);
    return promedio;
}

console.log("El promedio es: "+ notasLenguaje(18,17,15,20,10)+"/20");
