function fullName(name, lastName) {
  const complete = `${name} ${lastName}`.toUpperCase();
  const characterCount = complete.length;
  return { complete, characterCount };
}

const result1 = fullName("Juan", "Pérez");
const result2 = fullName("María", "González");
const result3 = fullName("Carlos", "Fernández");

console.log(result1);
console.log(result2);
console.log(result3);