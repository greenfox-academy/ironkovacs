'use strict';
// -  Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// -  Print the sum of the second and the third element

let r: number[] = [54, 23, 66, 12];
let total: number = 0;
    r.forEach(function(element){
        total += element;
    })
console.log(total);   