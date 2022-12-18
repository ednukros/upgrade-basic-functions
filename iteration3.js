//Iteracion 3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {

    let suma = 0;
    for (const number of array) {

        suma += number;
    }

    console.log(suma);
}

sumAll(numbers);