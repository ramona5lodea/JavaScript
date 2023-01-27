// exercise 1

function saveRecipes (param1, param2, param3) {
    let result = {
        title:param1 ,
        quantity:param2 ,
        ingredients:param3
    }

    return result;
}

console.log(saveRecipes("pizza", 20 , ['aluat', 'sunca', 'cascaval']));

// exercise 2
const object2 = {a:1, b:2, c:3}

function returnObject (object , property) { 
    delete object[property];
    return object;
        
}

console.log(returnObject(object2 , 'b'))



// exercise 3

const input = [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true },
 { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];


const value = input.map(isRead);

function isRead (input) { 
    console.log(input.titlu + ' de ' + input.autor  );
         if ( input.esteCitita == true) {
             return     console.log( 'Ai citit deja '+ input.titlu + ' de ' + input.autor + '\n');
         } else  {
             return     console.log( 'Trebuie sa citesti '+ input.titlu + ' de ' + input.autor + '\n');}
     

};

