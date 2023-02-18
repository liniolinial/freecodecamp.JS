// 7. Create a function that filters out negative numbers
function filterNegativeNum(filter){

    let filtering = [filter];

    if(filtering.includes(i<0)){

    }
    return filter;
}
let array = [-5,5,-7,0,-6,5,8,11,456,-454,-7,75, -1, -30,55,251,96];
let noNegative = filterNegativeNum(array);
console.log(noNegative);

//remove negative number
//output just positive number

* @description 7. Create a function that filters out negative numbers */
function filterNegativNumbers(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) newArray.push(arr[i]);
    }
    console.log(`Task 7: ${JSON.stringify(newArray)}`);
}
filterNegativNumbers([-1, 2, 1, -5, 4]);