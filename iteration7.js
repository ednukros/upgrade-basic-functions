// **Iteración #7: Buscador de nombres**



const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, value) {
    
    for (const element of array) {

        if(element===value){
             
            console.log(array.findIndex(array => array === element));

             
        }else{
           
            return false;
            
        }
        
    }
  }

  finderName(nameFinder, "Xabier")

  