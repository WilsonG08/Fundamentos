function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
  }
  
  var radio = 8;
  var area = calcularAreaCirculo(radio);
  console.log("El área del círculo con radio " + radio + " es: " + area);
  