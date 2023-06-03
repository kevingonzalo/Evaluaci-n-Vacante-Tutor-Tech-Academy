const invertirArr = (array) => {
  const arrInvertido = array.reverse();
  return arrInvertido;
};

const array = [23, 5, 34, 56, 98, "cadena", 7];

console.log("Array Original: ");
console.log(array);
const arrayInvertido = invertirArr(array);
console.log("Array Invertido: ");
console.log(arrayInvertido);
