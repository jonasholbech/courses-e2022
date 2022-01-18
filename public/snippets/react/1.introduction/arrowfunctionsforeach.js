const users = [
  {
    name: "Jonas",
    age: 42
  },
  {
    name: "Birk",
    age: 7
  }
];

users.forEach(function(person) {
  console.log(person.name);
});

//can be written as
users.forEach(person => {
  console.log(person.name);
});