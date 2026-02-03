const numbers = [1, 2, 34, 43];
for (const num of numbers) {
  console.log(num);
}
// output
/*
1
2
34
43
*/

const person = {
  name: "nazim",
  prof: "Web Developer",
  age: 23,
};
for (const key in person) {
  const values = person[key];
  console.log(key);
  console.log(values);
}
//output
/*
name
prof
age
*/

const keys = Object.keys(person);
console.log(keys);
//output : [ 'name', 'prof', 'age' ]
for (const key of keys) {
  console.log(key);
}
/**
name
prof
age
 */
