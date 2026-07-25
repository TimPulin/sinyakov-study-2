class Person {
  firstName;
  lastName;

 constructor(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
 }   

 get fullName() {
  return `${this.firstName} ${this.lastName}`;
 }

 set fullName(str) {
  const [firstName = '', lastName = ''] = str.split(' ');
  this.firstName = firstName.trim();
  this.lastName = lastName.trim();
 }
}