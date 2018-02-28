'use strict';


import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}


function print(dominoes: Domino[]) {

  dominoes.forEach(function (value) {

    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

let domi0: number[] = [];


for (let i: number = 0; i < dominoes.length; i++) {
  domi0.push(dominoes[i].values[0])
}

let newArr: any[] = [];
function reArr(funcDomino) {
  newArr.push(funcDomino[0]);
  
  for (let i: number = 0; i < funcDomino.length - 1 ; i++) {
    newArr.push(funcDomino[domi0.indexOf(newArr[i].values[1])])
  }
  return newArr;
}


console.log(reArr(dominoes));
//print(dominoes);