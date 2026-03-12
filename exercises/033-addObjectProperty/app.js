const addObjectProperty = (obj1, key, obj2) => {
  obj1[key] = obj2;
  return obj1; 
};

const person1 = {
  name: 'Isaac',
  role: 'shlub'
}; 
const person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
}

console.log(addObjectProperty(person1, "manager", person2));
