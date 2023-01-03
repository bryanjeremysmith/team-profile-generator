// requires Employee to extend 
const Employee = require('./Employee');

// Intern constructor extends Employee 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // get school 
    getSchool () {
        return this.school;
    }

    // retuns Intern instead of Employee
    getRole () {
        return 'Intern';
    }
}

module.exports = Intern; 