// requires Manager 
const Manager = require('../lib/Manager');

// creates Manager object 
test('creates a manager correctly', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.name).toEqual('BJ Smith');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('bjsmith@gmail.com');
    expect(manager.officeNumber).toEqual('8675309');
});

// creates manager object, tests name is not incorrect
test('creates a manager, tests name BJ Smith is not Bryan Smith', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.name).not.toEqual('Bryan Smith');
});

// creates manager object, tests id is not incorrect
test('creates a manager, tests id 1 is not 2', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.id).not.toEqual(2);
});

// creates manager object, tests email is not incorrect
test('creates a manager, tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.email).not.toEqual('bjsmith2@gmail.com');
});

// creates manager object, tests office number is not incorrect
test('creates a manager, tests office number 8675309 is not 8675310', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.officeNumber).not.toEqual('8675310');
});

// gets name using getName() 
test('using getName(), tests name is correct', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getName()).toEqual('BJ Smith');
});

// gets name using getName() 
test('using getName(), tests name BJ Smith is not Bryan Smith', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getName()).not.toEqual('Bryan Smith');
});

// gets id using getId() 
test('using getId(), tests id is correct', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getId()).toEqual(1);
});

// gets id using getId() 
test('using getId(), tests id 1 is not 2', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getId()).not.toEqual(2);
});

// gets email using getEmail()
test('using getEmail(), tests email is correct', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets email using getEmail()
test('using getEmail(), tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getEmail()).not.toEqual('bjsmith2@gmail.com');
});

// gets office number using getOfficeNumber()
test('using getOfficeNumber(), tests office number is correct', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getOfficeNumber()).toEqual('8675309');
});

// gets office number using getOfficeNumber()
test('using getOfficeNumber(), tests office number 8675309 is not 8675310', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getOfficeNumber()).not.toEqual('8675310');
});


// gets role from getRole()
test('using getRole(), tests role is correct', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getRole()).toEqual('Manager');
}); 

// gets role from getRole()
test('using getRole(), tests role Manager is not Employee', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getRole()).not.toEqual('Employee');
}); 

// gets role from getRole()
test('using getRole(), tests role Manager is not Engineer', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getRole()).not.toEqual('Engineer');
}); 

// gets role from getRole()
test('using getRole(), tests role Manager is not Intern', () => {
    const manager = new Manager('BJ Smith', 1, 'bjsmith@gmail.com', '8675309');

    expect(manager.getRole()).not.toEqual('Intern');
}); 