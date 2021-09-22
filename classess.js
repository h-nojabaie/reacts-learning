//  implementation classes
class human{
  constructor(){
    this.gender="wenman"
  }
  printGender(){
      console.log(this.gender)

  }
}
class Person extends human{
  constructor(){
    super()
    this.name="hanieh"
  }
  printName(){
  
  console.log(this.name)
}
}

let person=new Person()
person.printName()
person.printGender()
person.name="ali"
person.printName()








