// requires Intern 
const Intern = require('../lib/Intern');

// creates Intern object 
test('creates an intern', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.name).toEqual('BJ Smith');
    expect(intern.name).not.toEqual('Bryan Smith');
    expect(intern.id).toEqual(3);
    expect(intern.id).not.toEqual(4);
    expect(intern.email).toEqual('bjsmith@gmail.com');
    expect(intern.email).not.toEqual('bjsmith2@gmail.com');
    expect(intern.school).toEqual('Alabama');
    expect(intern.school).not.toEqual('Georgia');
});

// gets name using getName() 
test('gets name', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getName()).toEqual('BJ Smith');
    expect(intern.getName()).not.toEqual('Bryan Smith');
});

// gets id using getId() 
test('gets ID', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getId()).toEqual(3);
    expect(intern.getId()).not.toEqual(4);
});

// gets email using getEmail()
test('gets email', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getEmail()).toEqual('bjsmith@gmail.com');
    expect(intern.getEmail()).not.toEqual('bjsmith2@gmail.com');
});

// gets school name using getSchool()
test('gets school', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getSchool()).toEqual('Alabama');
    expect(intern.getSchool()).not.toEqual('Geogia');
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getRole()).not.toEqual('Employee');
    expect(intern.getRole()).not.toEqual('Manager');
    expect(intern.getRole()).not.toEqual('Engineer');
    expect(intern.getRole()).toEqual('Intern');
}); 