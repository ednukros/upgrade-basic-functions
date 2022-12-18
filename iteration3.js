//Iteracion 3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

    let suma = 0;
    for (const number of numbers) {

        suma += number;
    }

    console.log(suma);
}

sumAll();