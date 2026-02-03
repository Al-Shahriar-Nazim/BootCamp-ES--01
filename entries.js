const employees = {
  name: "nazim",
  ages: 20,
  salary: 15000,
};
const keys = Object.keys(employees);
const values = Object.values(employees);
const entries = Object.entries(employees);
console.log(keys);
//output :['name','ages','salary']
console.log(values);
// output : ['nazim', 2-, 15000]
console.log(entries);
/*
['name','nazim'],
['ages',20],
['salary',15000]
*/
