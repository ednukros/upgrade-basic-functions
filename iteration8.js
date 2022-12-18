//Iteration #8: Contador de repeticiones

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

function repeatCounter(array) {

    //Primero ordenamos el array
    array.sort();

    let uniqueArray = [];
    let repeats = [];
    let cont = 1;
    for (let i = 0; i < array.length; i++) {
        //console.log(array[i]);


        if (array[i + 1] === array[i]) {

            cont++;
        } else {
            uniqueArray.push(array[i]);
            repeats.push(cont);
            cont = 1;
        }

    }

    for (let j = 0; j < uniqueArray.length; j++) {

        if (repeats[j] === 1) {
            console.log("La palabra: " + uniqueArray[j] + " aparece " + repeats[j] + " vez.")

        } else {
            console.log("La palabra: " + uniqueArray[j] + " aparece " + repeats[j] + " veces.")
        }
    }
}




repeatCounter(counterWords);