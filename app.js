// function favMovie(movie, name) {             // TRADITIONAL FUNCTION: BLOCK BODY SYNTAX
//     if (typeof name === 'undefined') {
//         name = 'world';
//     }
//     console.log(`My name is ${name} and my favorite movie is ${movie}.`);
// }

let favMovie = (movie, name) => console.log(`My name is ${name} and my favorite movie is ${movie}.`);       

favMovie('Pulp Fiction', 'Megan');

let getFirstName = (fullName) => {           // ARROW FUNCTION
    var firstName = fullName.split(' ', 1);
    return {firstName};
}

let getFirstNameAgain = fullName => {                // ARROW FUNCTION: CONCISE BODY SYNTAX
    var firstName = fullName.split(' ', 1);
    console.log(firstName);                  // USING 'RETURN' BREAKS CODE; ONLY 'CONSOLE.LOG' WORKS
}
getFirstName('Megan Solga');
getFirstNameAgain('Megan Solga');

let newFunc = (x, y) => {                       // FUNCTION => OBJECT LITERAL
    let square = (x ^ y);
    let product = (x * y);
    console.log(`${square}`);
    console.log(`${product}`);
    return {
        square: square,
        product: product,
    }
};
let calculate = newFunc(4, 9);

///////////                                     // SPREAD SYNTAX
function spread(name, location, favFood) {
    console.log(`Name: ${name}, Location: ${location}, Favorite Food: ${favFood}`);
}
let arr = ['Megan', 'Andorra', 'pho'];
spread(...arr);


//////////
let myName = 'Megan Dawn Solga-Slater';

function spreadStr(str) {
    let separate = [...str];
    for (i = 0; i < str.length; i++) {
        console.log(separate[i]);
    }
    i++;
}
spreadStr(myName);

