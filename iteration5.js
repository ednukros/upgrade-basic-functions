//Iteracion 5: Calcular promedio de Strings

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {

    let total = 0;

    for (const element of mixedElements) {

        if (typeof element === 'number') {

            total += element;
        } else {

            total += element.length;
        }

    }

    console.log(total);

}

averageWord(mixedElements);