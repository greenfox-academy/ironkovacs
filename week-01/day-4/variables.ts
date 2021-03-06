// VARIABLES
// Creating different variables for each type
// String
let welcome: string = 'Hello, World';
console.log(welcome);

// Boolean
let isAwesome: boolean = true;
console.log(isAwesome);

// Integer
let theMeaningOfLifeAndTheUniverseAndEverything: number = 42;
console.log(theMeaningOfLifeAndTheUniverseAndEverything);

// Floating point number
let pi: number = 3.141592;
console.log(pi);

// Assigning and creating a variable, (define its value)
let number: number = 12;

// Mutate a variable, (redefine its value)
number = 23;

// Any
let dynamic: any = 5;
dynamic = true;
dynamic = 'strange';

//Arithmetic Assignment Operators

let a: number = 12;
a = a + 4;
console.log(a); // Prints 16

let b: number = 12;
b = b - 4;
console.log(b); // Prints 8

let c: number = 12;
c *= 3;
console.log(c); // Prints 36

let d: number = 12;
d /= 3;
console.log(d); // Prints 4

let e: number = 12;
e %= 7;
console.log(e); // Prints 5

let f: number = 12;
f++;
console.log(f); // Prints 13

let g: number = 12;
g--;
console.log(g); // Prints 11

let h: number = 10;
console.log(h); // Prints 10
console.log(h++); // Prints 10
console.log(h); // Prints 11

let i: number = 10;
console.log(i); // Prints 10
console.log(++i); // Prints 11
console.log(i); // Prints 11