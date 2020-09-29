/*   
*PROTOTYPAL INHERITANCE, cos js cant do so this is a work-around
*Create a person class with common attributes
*first name and last name
*/
// Teacher.prototype = new Person(); <— creates the relationship

 //Step 1
 function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//Step 2
function Teacher(firstname, lastname, instituteName, teacherID) {
    //Step 5 - use the constructor from the parent class
   Person.call(this, firstname, lastname);
   this.instituteName = instituteName;
   this.teacherID = teacherID;
}

//Step 3
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;

//Step 4 - initialize an object
var teacher = new Teacher('Vaibhav', 'Vashishtha', 'Mages', 1234);