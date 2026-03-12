const addArrayProperty = (obj, key, arr) => {
  obj[key] = arr; 
  return obj;
};
const user = { name: 'Isaac'};
const hobbies = ['Powerlifting', 'Programar', 'Dj'];
console.log(addArrayProperty(user, "hobbies", hobbies));