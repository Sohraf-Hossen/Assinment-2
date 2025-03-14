// calculateSum FUNCTION

function calculateSum(a , b){
     return a+b;

}
// let result = calculateSum(5,5);
// console.log(result);

console.log(calculateSum(4,6));
console.log(calculateSum(5,6));
console.log(calculateSum(6,6));


// EVEN OR ODD Number

function isEven (num){
     return num % 2 == 0;

}
console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(6));
console.log(isEven(7));


//LARGEST Number Form The Array
function findMax (numbers){
     return Math.max(...numbers);
}
console.log(findMax([1,2,3,4,5]));
console.log(findMax([10,20,30,40,50]));
console.log(findMax([101,205,303,4054,502]));




// Odd Number

function filterOddNumbers (numbers){
     return numbers.filter (num => num % 2 !== 0);

}
console.log(filterOddNumbers([1,2,3,4,5,6,7,8,9,11,12,13,14,15]));





//Numbers Of Words

let countWord = "Hello Javascript";
console.log(countWord.length);


//Duplicate Element Remove

function removeDuplicates(arr){
     return [...new Set(arr)]
}

console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5]));
console.log(removeDuplicates(["apple","apple","banana","banana","orange","mango","mango"]));










