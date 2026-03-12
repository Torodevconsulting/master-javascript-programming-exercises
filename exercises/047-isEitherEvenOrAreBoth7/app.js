const isEitherEvenOrAreBoth7 = (num1, num2) => (num1 % 2 === 0 || num2 % 2 === 0) || (num1 === 7 && num2 === 7);
console.log(isEitherEvenOrAreBoth7(5,10));
console.log(isEitherEvenOrAreBoth7(2,3));
 