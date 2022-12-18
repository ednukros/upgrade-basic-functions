//Iteration 2: Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(arrayP) {

    arrayP.sort();
    if (arrayP[0].length === arrayP[1].length) {

        if (arrayP[0].length === arrayP[1].length && arrayP[1].length === arrayP[2].length) {

            console.log(arrayP[0], arrayP[1], arrayP[2]);
        } else {

            console.log(arrayP[0], arrayP[1]);
        }

    } else {
        console.log(arrayP[0]);
    }

}

findLongestWord(avengers);