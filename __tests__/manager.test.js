// requires Manager 
const Manager = require('../lib/Manager');

// creates Manager object 
test('creates a manager', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.name).toEqual('BJ Smith');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('bjsmith@gmail.com');
    expect(manager.officeNumber).toEqual('8675309');
});

// gets name using getName() 
test('gets name', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getName()).toEqual('BJ Smith');
});

// gets id using getId() 
test('gets ID', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getId()).toEqual(1);
});

// gets email using getEmail()
test('gets email', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets office number using getOfficeNumber()
test('gets office number', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getOfficeNumber()).toEqual('8675309');
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getRole()).toEqual('Manager');
}); 