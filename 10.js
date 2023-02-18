//10. Return the number of vowels in a string
// string -> einzele Buchstaben -> vowel finden -> von 0 an fängt die ++
function getCount(str){
    let vowelsCount = 0; 
    const word = str.split("");
    for(let i = 0; i<word.length; i++){
        switch(word[i]){
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