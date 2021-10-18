
console.log("============");



//let matrix = [3, 4, 5, 6];
function oddNumber(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] % 2 != 0) {
            matrix[i] = matrix[i] * 2;
        }
    }
    return console.log(matrix);
}

oddNumber(matrix)

console.log("============");


//let matrix = [3, 4, 5, 6];
function evenNumber(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i] % 2 == 0) {
            matrix[i] = matrix[i] * 2;
        }
    }
    return console.log(matrix);
}


console.log("============");




//let myColoers = ["red", "blue", "green", "bink"];

function myFavoritecolor(myColoers) {
    for (let i = 0; i < myColoers.length; i++) {

        console.log("My Favorite Colors are : " + myColoers[i])
    }
}


console.log("============");



//let change = [5, 6, 7];
function add(change) {
    change.unshift(4)
    change.push(8, 9, 10)
    console.log(change);
} add(change);



console.log("============");





//let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
//let keyNumber = 5;
function array(myArray, keyNumber) {
    for (let i = 0; i < myArray.length; i++) {

        if (myArray[i] == keyNumber) {
            console.log("true")
            break;
        }
        else
            console.log("0")
    }

}

console.log("============");


//let myArray = [1, 2, 3, 4, 5, 6, 7, 8];
//let keyNumber = 9;
function myArrayFunction(myArray)
for (let i = 0; i < myArray.length; i++) {
    for (let j = i + 1; j < myArray.length; j++) {


        if (myArray[i] + myArray[j] == keyNumber)
            console.log("the sum of " + myArray[i] + " + " + myArray[j] + " = ", keyNumber);

    }
}
