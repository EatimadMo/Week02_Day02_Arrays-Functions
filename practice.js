
console.log("============");



let matrix = [3, 4, 5, 6];

for (let i = 0; i < matrix.length; i++) {

    if (matrix[i] % 2 != 0) {
        matrix[i] = matrix[i] * 2;

    }
} console.log(matrix);

console.log("============");


let matrix = [3, 4, 5, 6];

for (let i = 0; i < matrix.length; i++) {

    if (matrix[i] % 2 == 0) {
        matrix[i] = matrix[i] * 2;

    }
} console.log(matrix);

console.log("============");


let myColoers = ["red", "blue", "green", "bink"];



for (let i = 0; i < myColoers.length; i++) {


    console.log("My Favorite Colors are : " + myColoers[i])

}


console.log("============");



let change = [5, 6, 7];
change.unshift(4)
change.push(8, 9, 10)
console.log(change);



console.log("============");




  
let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
let keyNumber = 5;

for (let i = 0; i < myArray.length; i++) {

    if (myArray[i] == keyNumber)
        console.log("true")
    else
        console.log("0")

}

console.log("============");


let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
let keyNumber = 9;

for (let i = 0; i < myArray.length; i++) {
  for (let j = i+1 ; j < myArray.length; j++) {


    if (myArray[i] + myArray[j] == keyNumber)
        console.log("the sum of " + myArray[i]+ " + " + myArray[j] + " = ", keyNumber) ;

  }
}
