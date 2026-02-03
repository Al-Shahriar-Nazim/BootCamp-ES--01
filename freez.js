const employees = {
  name: "nazim",
  ages: 20,
  salary: 15000,
};

Object.freeze(employees)
//freeze er main kaj se kaw ke function er vitore add modify remove korte dey nh

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
