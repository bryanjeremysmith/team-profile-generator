// requires Engineer 
const Engineer = require('../lib/Engineer');

// creates engineer object 
test('creates an engineer', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.name).toEqual('BJ Smith');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual('bjsmith@gmail.com');
    expect(engineer.github).toEqual('bryanjeremysmith');
});

// gets name using getName() 
test('gets name', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getName()).toEqual('BJ Smith');
});

// gets id using getId() 
test('gets ID', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getId()).toEqual(2);
});

// gets email using getEmail()
test('gets email', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets github using getGitHub()
test('gets GitHub', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getGitHub()).toEqual('bryanjeremysmith');
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('BJ Smith', 1, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getRole()).not.toEqual('Employee');
    expect(engineer.getRole()).not.toEqual('Manager');
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getRole()).not.toEqual('Intern');
}); 
