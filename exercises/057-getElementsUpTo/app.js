function getElementsUpTo(array, n) {
  // your code here
  let elementsUp = array.splice(0, n)
  return elementsUp;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
