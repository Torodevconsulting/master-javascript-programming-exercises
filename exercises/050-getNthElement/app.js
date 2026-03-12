const getNthElement = (array, n) => array[n % array.length];
console.log(getNthElement([1, 3, 5], 1));