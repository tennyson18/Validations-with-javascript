//Method A
function sum(a,b){
    return a+b;
}

console.log(sum(5,6));

function product(a,b){
    return a*b;
}

console.log(product(5,6));

//Method B
const bigNumber = sum(11113, 11114);
console.log(bigNumber);


//Annonymous functions
setTimeout (function () {
    console.log("Hey man, you got this!");
}, 1000);

//Arrow functions
setTimeout(() => console.log("Hey man, you got this!"), 1000);