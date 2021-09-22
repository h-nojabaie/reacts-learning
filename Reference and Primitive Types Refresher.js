const person={
  name:"hanieh"
}

const newperson=person
//here we copy pointer to the object
console.log(newperson)
person.name="ali"
console.log(newperson)

const personsecond={
  ...person
}
// this is real copy of person
person.name="fatima"
console.log(personsecond)
console.log(person)
