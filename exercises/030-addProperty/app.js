const addProperty = (obj, key) => { 
  obj[key] = true;
  return obj
};
const user = {
  nombre: "Isaac"
}
console.log(addProperty(user, "isStudent"));