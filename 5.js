//count all vowels in Input string Value
// string -> array transfer, 
export function getCount(str){
    let vowelsCount = 0;   // Beginn mit 0
    const arr = str.split("");
    for(let i = 0; i<arr.length; i++){
        switch(arr[i]){
            case 'a':
                vowelsCount++;
                break;
            case 'e':
                vowelsCount++;
                break;
            case 'i':
                vowelsCount++;
                break;
            case 'o':
                vowelsCount++;
                break;
            case 'u':
                vowelsCount++;
                break;
        }
    }
    return vowelsCount;
}
getCount('hello'); //string value sollte immer in ""/'' geschrieben werden.