//calculate all the decimal numbers in an arrays
function sum(a){
    let integers = [];
    let decimals = [];
    let integerSum = 0;
    let decimalSum = 0;
    for(let i = 0; i<20.5; i++){
        if(a%i === 0){
            integers.push(i);
            integerSum += i;
        }
        else if(i % 2 > 0){
            decimals.push(i);
            decimalSum += i;
        }
    }
    console.log(integerSum);
    console.log(decimalSum);
}