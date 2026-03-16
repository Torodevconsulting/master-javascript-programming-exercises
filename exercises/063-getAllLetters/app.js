const getAllLetters = str => {
    // your code here
    let myArray =[];
    for (let i = 0; i < str.length; i++)
    myArray.push(str[i])     
    
    return myArray;
}
    

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
