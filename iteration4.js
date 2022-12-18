// Iteración #4: Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  
    let total = 0;
for (const number of array) {
    
    total += number;
}

console.log(total/array.length);
}

average(numbers);