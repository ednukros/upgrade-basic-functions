//Iteracion 6: Valores únicos

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(array) {

    let deleteDuplicates = array.filter((elemento, index)=> {
        return array.indexOf(elemento) === index;
    });
    
    console.log(deleteDuplicates);

}

removeDuplicates(duplicates);

