function Person() {}

Person.prototype.name = 'Kevin';
var person = new Person();

person.name = 'Daisy';

delete person.name;
console.log(person.name);
