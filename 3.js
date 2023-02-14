//create a length converter function
export function converter (km){
    let miles = km * 0.62137;
    console.log("Your Input: " + km + "km" + " is " + miles + " miles.");
}
console.log (converter(5));