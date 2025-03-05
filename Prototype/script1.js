function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log(`Hi i am ${this.name} and my age is ${this.age} and I got ${this.grade} grade`);
}

let user = new Person('Mohit', 25);
user.sayHello();

user.toString(); //Prototype chain user do not have toString() also Person do not have so js will look into object.prototype and inherit toString method from there.

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
}

Student.prototype = Person.prototype;
Student.prototype.constructor = Student;

const student = new Student('Mohit', 25, 'A+');
student.sayHello();