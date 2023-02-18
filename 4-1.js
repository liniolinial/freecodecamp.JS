//4. calculate all the decimal numbers in an arrays
function sum(){
    let decimals = [];
    let decimalSum = 0;
    for(let i = 0; i<20; i+= 0.3){ //
            decimals.push(i);
            decimalSum += i;
    }
    console.log(decimalSum);
}
sum();
//nicht geklappt