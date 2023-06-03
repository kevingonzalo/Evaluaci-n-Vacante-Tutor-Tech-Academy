let num = parseInt(prompt("ingrese un valor"));
for (let i = 1; i <= 100; i++) {
  if (i % num === 0) {
    console.log(`el valor ${i} es multiplo de ${num}`);
  }
}
