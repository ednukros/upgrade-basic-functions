//Iteration 2: Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {

    avengers.sort();
    if (avengers[0].length === avengers[1].length) {

        if (avengers[0].length === avengers[1].length && avengers[1].length === avengers[2].length) {

            console.log(avengers[0], avengers[1], avengers[2]);
        } else {

            console.log(avengers[0], avengers[1]);
        }

    } else {
        console.log(avengers[0]);
    }

}

findLongestWord();