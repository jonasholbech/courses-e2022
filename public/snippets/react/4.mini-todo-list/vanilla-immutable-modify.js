let persons = [
  { name: "Jonas", id: 1 },
  { name: "Klaus", id: 2 },
  { name: "Peter", id: 3 },
];
function modify(id, newName) {
  const newPersons = persons.map((person) => {
    if (person.id === id) {
      person.name = newName;
    }
    return person;
  });
  return newPersons;
}
const nextPersons = modify(1, "Dannie");
