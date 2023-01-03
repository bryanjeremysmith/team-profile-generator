// requires Employee 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.name).toEqual('BJ Smith');
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual('bjsmith@gmail.com');
});

// gets name using getName() 
test('gets name', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getName()).toEqual('BJ Smith');
});

// gets id using getId() 
test('gets ID', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getId()).toEqual(1);
});

// gets email using getEmail()
test('gets email', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('BJ Smith', 1, 'bjsmith@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
}); 
