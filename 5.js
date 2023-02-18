//5. create a function that reverses an array
// const array1 = [0, 1, 2, 3, 4, 5];
// console.log('array1: ' + array1);

// const reversed = array1.reverse();
// console.log('reversed: ' + reversed);


//reversed function const
function reversedArray(array){
    let reverseArray = [i];  // ...array destructuring
    reverseArray.push(array);
    for(let i = 0; i < array.length; i++){
        
        return reverseArray.reverse();    
    }
}
let array2 = [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let reverseArray = reversedArray(array2);
console.log(reverseArray);

//nicht geklappt
//arrow function Reihenfolge wichtig
//hier mit for array nicht mit reverse(), sondern die Zahl i-- und von array.length-1 damit vom letzten anfangen kann.