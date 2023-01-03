// requires Employee to extend 
const Employee = require('./Employee');

// Manager constructor extends Employee 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calls employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // get office number
    getOfficeNumber () {
        return this.officeNumber;
    }
    
    // returns Manager instead of Employee 
    getRole () {
        return 'Manager';
    }
}

module.exports = Manager; 