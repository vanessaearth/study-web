function greeter(person: Person) {
  return "Hello, " + person;
}


class Student {
  fullname: string;
  constructor(public firstName:string, public middleName:string, public lastName:string) {
    this.fullname = firstName + middleName + lastName
  }
}
interface Person {
  firstName: string
  lastName: string
}
var user =new Student('Jan','M.','tom')
greeter(user)
