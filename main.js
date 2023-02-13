// //print all even numbers from 0-10
for(let i = 0; i< 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//print a table containing multiplication tables
for(let i = 1; i<= 10; i++){
    let one = "";
    for(let j = 1; j <= 10; j++){
        one += i * j + " ";
    }
    console.log(one);
}

//create a length converter function
function converter (kilo){
    let miles = kilo * 0.62137;
    console.log("Your Input: " + kilo + "kg" + " is " + miles + "miles.");
}
console.log (converter(5));

//calculate the sum of numbers within an array
