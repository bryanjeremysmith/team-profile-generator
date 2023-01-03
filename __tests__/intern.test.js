// requires Intern 
const Intern = require('../lib/Intern');

// creates Intern object 
test('creates an intern', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.name).toEqual('BJ Smith');
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual('bjsmith@gmail.com');
    expect(intern.officeNumber).toEqual('8675309');
});

// gets name using getName() 
test('gets name', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getName()).toEqual('BJ Smith');
});

// gets id using getId() 
test('gets ID', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getId()).toEqual(3);
});

// gets email using getEmail()
test('gets email', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets school name using getSchool()
test('gets school', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getSchool()).toEqual('Alabama');
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getRole()).toEqual('Intern');
}); 