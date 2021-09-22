//  implementation classes
class human{
  gender="man"
  
  printGender=()=>{
      console.log(this.gender)

  }
}
class Person extends human{

  name="hanieh"
  gender="weman"
  
  printName =()=>{
  
  console.log(this.name)
}
}

const person=new Person()
person.printName()
person.printGender()
person.name="ali"
person.printName()








