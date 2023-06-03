for (let i = 0; i < 5; i++) {
  const num = Math.floor(Math.random() * 100);
  const esPar = num % 2 === 0;

  document.write(esPar ? `El Numero Generado es Par: ${num} <br/>` : `El Numero Generado es Impar: ${num} <br/>`);
}
