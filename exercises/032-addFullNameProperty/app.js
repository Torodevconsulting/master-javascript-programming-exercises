const addFullNameProperty = (obj) => {
  obj.fullName = `${obj.firstName} ${obj.lastName}`;
  return obj; 
}
const person = {
  firstName: 'Isaac',
  lastName: 'Toro'
};

console.log(addFullNameProperty(person, 'fullname'));