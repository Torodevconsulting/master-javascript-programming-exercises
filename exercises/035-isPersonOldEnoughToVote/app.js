const isPersonOldEnoughToVote = person => person.age >= 18;
const person1 = {
  age: 16
}
console.log(isPersonOldEnoughToVote(person1));