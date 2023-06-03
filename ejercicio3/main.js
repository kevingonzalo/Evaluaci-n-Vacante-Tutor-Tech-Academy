const cadenaTexto = prompt("Ingrese una cadena de texto: ");
const caracterRepetido = "o";

function contarRepeticiones(cadenaTexto, caracterRepetido) {
  let contador = 0;

  for (let i = 0; i < cadenaTexto.length; i++) {
    if (cadenaTexto.charAt(i) === caracterRepetido) {
      contador++;
    }
  }

  return contador;
}

const repeticiones = contarRepeticiones(cadenaTexto, caracterRepetido);
console.log(`La cantidad de veces que se repite el caracter "${caracterRepetido}" es: ${repeticiones}`);
