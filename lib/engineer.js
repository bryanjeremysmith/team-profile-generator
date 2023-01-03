// requires Employee to extend 
const Employee = require("./Employee");

// Engineer constructor extends Employee 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calls employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // get Github 
    getGithub () {
        return this.github;
    }

    // returns Engineer instead of Employee 
    getRole () {
        return 'Engineer';
    }
}

module.exports = Engineer; 