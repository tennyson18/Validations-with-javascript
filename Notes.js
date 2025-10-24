let first_name = "Benjamin"
first_name = "Ola"

// console.log(first_name);

/******  Comparison */

/**let has_pen = true
let has_paper = true
if(has_pen && has_paper){
   console.log("Ready")
}
**/ 

// let weather = "raining"
/** if( weather == "raining"){
   console.log("Take an umbrella")
}
**/ 

// weather = "sunny"
/** if( weather == "raining"){
   console.log("Take an umbrella")
} else{
   console.log("It stopped raining")
}
**/

// weather = "cloudy"
// if(weather == "raining"){
//    console.log("Take an umbrella")
// } else if( weather === "cloudy"){
//    console.log("Take a jacket")
// }else{
//    console.log("Just stay at home")
// }

//Switch statements

// weather = "meh"

// switch (weather) {
//    case "raining":
//       console.log("It is raining")
//       break
//    case "sunny":
//       console.log("wear a sun glasses")
//       break
//    case "cloudy":
//       console.log("Go outside to play")
//       break
//    case "windy":
//       console.log("stay indoors")
//       break
//    default :
//       console.log(" Can't read weather at the moment")
//       break
// }

// Loops
//for loop
// for (let i = 0; i < 3; i++){
//    console.log("This is a loop: " +i)
// }

// //while loop 
// let i = 0
// while(i < 3){
//    console.log("this is a while loop " +i)
//    i++
// }

// //do while
// let banana = 10;
// do{ console.log("do while loop, going through the iteration: " +banana)
//    banana++
// } while (banana != 3);

//for in loop, iterate over an object
//  let obj = {a: 1, b: 2, c: 3}
// for (let key in obj){
//    console.log("for in loop, going thru keys: " +key + " this is value inside " + obj[key]);
// }

//for of loop iterate over a value
// let arr = ['a', 'b', 'c']
// for (let value in arr){
//    console.log('for of loop, this is value ' +value)
// }

// console.log(arr[1])
// console.log(obj['c'])

//Nested loops
// let letters = ['a', 'b', 'c']
// let numbers = [1, 2, 3]

// for (let i = 0; i < letters.length; i++){
//    for(let j = 0; j < numbers.length; j++){
//       console.log(`this is outer loop variable ${letters[i]} and this is inner loop variable ${numbers[j]}`)
//    }
// }

//Arrays

let colors = ['red', 'green', 'blue']
//access the first element
// console.log(colors[0]);

// let green = colors[1]
// console.log(green);

// colors[1] = 'yellow';
// console.log(colors);

//create an empty array
// let fruits = []
// fruits.push('apple');
// fruits.push('banana');
// console.log(fruits[1]);

//loop through an array
//let numbers_one = [1,2,3,4,5,6]

//for loop
// for(let i = 0; i < number_one.length; i++){
//    console.log(number_one[i])
// }

// let evenNumbers = numbers_one.filter(function(number){
//    return number % 2 === 0;
// })

// console.log(evenNumbers)

//for each
// colors.forEach(function(color){
//    console.log(color);
// });

//Join
// let words = ['Hello', 'world']
// let sentence = words.join(' ')
// console.log(sentence)

//Slice

// let numbers =[ 0,1,2,3,4,5]
// let slicedNumbers = numbers.slice(1, 3)
// console.log(slicedNumbers)

// Create a two-dimensional array
let matrix = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
]

let firstRow_firstNumber = matrix[2][2]
console.log(firstRow_firstNumber);

//loop through two dimentional array

for ( let i = 0; i< matrix.length; i++ ) //loop through the row, outer loop
   for (let j = 0; j < matrix[i].length; j++){
      console.log(matrix[i][j])
   }