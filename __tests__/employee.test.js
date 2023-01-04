// requires Employee 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee correctly', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.name).toEqual('BJ Smith');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('bjsmith@gmail.com');
});

// creates employee object, tests name is not incorrect
test('creates an employee, tests name BJ Smith is not Bryan Smith', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.name).not.toEqual('Bryan Smith');
});

// creates employee object, tests id is not incorrect
test('creates an employee, tests id 1 is not 2', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.id).not.toEqual(2);
});

// creates employee object, tests email is not incorrect
test('creates an employee, tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.email).not.toEqual('bjsmith2@gmail.com');
});

// gets name using getName() 
test('using getName(), tests name is correct', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getName()).toEqual('BJ Smith');
});

// gets name using getName() 
test('using getName(), tests name BJ Smith is not Bryan Smith', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getName()).not.toEqual('Bryan Smith');
});

// gets id using getId() 
test('using getId(), tests id is correct', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getId()).toEqual(1);
});

// gets id using getId() 
test('using getId(), tests id 1 is not 2', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getId()).not.toEqual(2);
});

// gets email using getEmail()
test('using getEmail(), tests email is correct', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets email using getEmail()
test('using getEmail(), tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getEmail()).not.toEqual('bjsmith2@gmail.com');
});

// gets role from getRole()
test('using getRole(), tests role is correct', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
}); 

// gets role from getRole()
test('using getRole(), tests role Employee is not Manager', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getRole()).not.toEqual('Manager');
}); 

// gets role from getRole()
test('using getRole(), tests role Employee is not Engineer', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getRole()).not.toEqual('Engineer');
}); 

// gets role from getRole()
test('using getRole(), tests role Employee is not Intern', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getRole()).not.toEqual('Intern');
}); 