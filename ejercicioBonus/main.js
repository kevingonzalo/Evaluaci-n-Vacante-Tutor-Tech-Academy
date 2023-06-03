function convertirAMayusculasHastaPunto(cadena) {
  let resultado = "";
  let encontradoPunto = false;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === ".") {
      resultado += ".";
      encontradoPunto = true;
    } else if (encontradoPunto) {
      resultado += cadena[i];
    } else {
      resultado += cadena[i].toUpperCase();
    }
  }

  return resultado;
}

// Ejemplo de uso
const entrada = "www.techacademy.com";
const salida = convertirAMayusculasHastaPunto(entrada);

console.log("Antes:", entrada);
console.log("Después:", salida);
