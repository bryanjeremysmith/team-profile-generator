// requires Intern 
const Intern = require('../lib/Intern');

// creates Intern object 
test('creates an intern correctly', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.name).toEqual('BJ Smith');
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual('bjsmith@gmail.com');
    expect(intern.school).toEqual('Alabama');
});

// creates intern object, tests name is not incorrect
test('creates an intern, tests name BJ Smith is not Bryan Smith', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.name).not.toEqual('Bryan Smith');
});

// creates intern object, tests id is not incorrect
test('creates an intern, tests id 3 is not 4', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.id).not.toEqual(4);
});

// creates intern object, tests email is not incorrect
test('creates an intern, tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.email).not.toEqual('bjsmith2@gmail.com');
});

// creates intern object, tests school is not incorrect
test('creates an intern, tests school name Alabama is not Georgia', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.school).not.toEqual('Georgia');
});

// gets name using getName() 
test('using getName(), tests name is correct', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getName()).toEqual('BJ Smith');
});

// gets name using getName() 
test('using getName(), tests name BJ Smith is not Bryan Smith', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getName()).not.toEqual('Bryan Smith');
});

// gets id using getId() 
test('using getId(), tests id is correct', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getId()).toEqual(3);
});

// gets id using getId() 
test('using getId(), tests id 3 is not 4', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getId()).not.toEqual(4);
});

// gets email using getEmail()
test('using getEmail(), tests email is correct', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets email using getEmail()
test('using getEmail(), tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getEmail()).not.toEqual('bjsmith2@gmail.com');
});

// gets school name using getSchool()
test('using getSchool(), tests school name is correct', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getSchool()).toEqual('Alabama');
});

// gets school name using getSchool()
test('using getSchool(), tests school name Alabama is not Georgia', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getSchool()).not.toEqual('Georgia');
});

// gets role from getRole()
test('using getRole(), tests role is correct', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getRole()).toEqual('Intern');
}); 

// gets role from getRole()
test('using getRole(), tests role Intern is not Employee', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getRole()).not.toEqual('Employee');
}); 

// gets role from getRole()
test('using getRole(), tests role Intern is not Manager', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getRole()).not.toEqual('Manager');
}); 

// gets role from getRole()
test('using getRole(), tests role Intern is not Engineer', () => {
    const intern = new Intern('BJ Smith', 3, 'bjsmith@gmail.com', 'Alabama');

    expect(intern.getRole()).not.toEqual('Engineer');
}); 