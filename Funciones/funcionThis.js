function vehiculo(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.presentarVehiculo = function() {
      console.log("Este es una " + this.marca + " " + this.modelo + " del año:" + this.anio);
    };
  }
  
  const miCoche = new vehiculo("Toyota", "Hilux", 2015);
  miCoche.presentarVehiculo();
  