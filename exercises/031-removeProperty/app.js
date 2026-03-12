const removeProperty = (obj, key) => { 
  delete obj[key];
  return obj; 
}; 
const user = {
  name: 'Isaac',
  age: '33'
};

console.log(removeProperty(user, 'name'));
