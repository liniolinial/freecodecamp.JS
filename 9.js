//9. Return a Boolean if a number is divisible by 10
function divisibleTen(input){
    if(input % 10 === 0){
       return true;
    }
    else{
        return false;
    }
}

let a = 0;
console.log(divisibleTen(a));

let b = 58;
console.log(divisibleTen(b));