//seal er main kaj holo aita function add ba remove korte deve nnh
const employees = {
  name: "nazim",
  ages: 20,
  salary: 15000,
};

Object.seal(employees)


// fuction remove proparty
// delete employees.salary;
//output :{name:'nazim',ages : 20}


// fuction modify proparty
employees.salary = employees.salary + 5000;
//output: { name: 'nazim', ages: 20, salary: 20000 }

// fuction add proparty
employees.location = "Dhaka";
// output : { name: 'nazim', ages: 20, salary: 20000, location: 'Dhaka' }
console.log(employees);
