// Clase Persona
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  getDetalles() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Edad: ${this.edad}`);
  }
}

// Clase Jugador (hereda de Persona)
class Jugador extends Persona {
  constructor(nombre, apellido, edad, posicion) {
    super(nombre, apellido, edad);
    this.posicion = posicion;
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Posición: ${this.posicion}`);
  }
}

// Clase Entrenador (hereda de Persona)
class Entrenador extends Persona {
  constructor(nombre, apellido, edad, aniosExperiencia, idFederacion) {
    super(nombre, apellido, edad);
    this.aniosExperiencia = aniosExperiencia;
    // Generar número aleatorio de 5 dígitos si no se proporciona el id
    this.idFederacion = idFederacion || Math.floor(Math.random() * 90000) + 10000;
  }

  getDetalles() {
    super.getDetalles();
    console.log(`Años de experiencia: ${this.aniosExperiencia}`);
    console.log(`ID de Federación: ${this.idFederacion}`);
  }
}

// Clase Equipo
class Equipo {
  constructor(entrenador, jugadores) {
    this.entrenador = entrenador;
    this.jugadores = jugadores;
  }

  getDetalles() {
    console.log("--- Detalles del Entrenador ---");
    this.entrenador.getDetalles();

    console.log("--- Detalles de los Jugadores ---");
    this.jugadores.forEach((jugador) => {
      jugador.getDetalles();
      console.log("---------------------");
    });
  }
}

// Creación de objetos y prueba
const jugadores = [
  new Jugador("Juan", "García", 25, "Portero"),
  new Jugador("Pedro", "López", 28, "Defensa"),
  new Jugador("Luis", "Martínez", 23, "Medio"),
  new Jugador("Carlos", "Sánchez", 26, "Delantero"),
];

const entrenador = new Entrenador("Mario", "Gómez", 40, 15);

const equipo = new Equipo(entrenador, jugadores);

equipo.getDetalles();
