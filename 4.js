//calculate the sum of numbers within an array
//#1
// export function sumOne(){
//     for(let i = -10; i<= 10; i++){
//         if(i < 0){
//             let negative = [];
//             let sum = 0;
//             negative.push(sumOne);
//             sum += i;
//         }
//     }
//     console.log(negative);
// }

//#2
function sum(){
    let negative = [];
    let positive = [];
    let negativeSum = 0;
    let positiveSum = 0;
    for(let i = -10; i< 10; i++){
       if(i < 0){
            negative.push(i);
            negativeSum += i;
        }
        else{
            positive.push(i);
            positiveSum += i;
        }
    }
    console.log(negativeSum);
    console.log(positiveSum);
}
