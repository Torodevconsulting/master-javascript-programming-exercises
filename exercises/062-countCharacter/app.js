const countCharacter = (str, char) => {
    let letra = 0;  
    for (let i = 0; i < str.length; i++){ 
        if (str[i] === char) 
            letra = letra +1;
       
    }
        return letra; 
}
let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
