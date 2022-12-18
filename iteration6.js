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

function removeDuplicates(param) {

    let deleteDuplicates = duplicates.filter((elemento, index)=> {
        return duplicates.indexOf(elemento) === index;
    });
    
    console.log(deleteDuplicates);

}

removeDuplicates();

