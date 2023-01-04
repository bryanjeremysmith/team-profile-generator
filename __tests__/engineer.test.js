// requires Engineer 
const Engineer = require('../lib/Engineer');

// creates engineer object 
test('creates an engineer correctly', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.name).toEqual('BJ Smith');
    expect(engineer.id).toEqual(2);
    expect(engineer.email).toEqual('bjsmith@gmail.com');
    expect(engineer.github).toEqual('bryanjeremysmith');
});

// creates engineer object, tests name is not incorrect
test('creates an engineer, tests name BJ Smith is not Bryan Smith', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.name).not.toEqual('Bryan Smith');
});

// creates engineer object, tests id is not incorrect
test('creates an engineer, tests id 2 is not 3', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.id).not.toEqual(3);
});

// creates engineer object, tests email is not incorrect
test('creates an engineer, tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.email).not.toEqual('bjsmith2@gmail.com');
});

// creates engineer object, tests github is not incorrect
test('creates an engineer, tests github name bryanjeremysmith is not brianjeremysmith', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.github).not.toEqual('brianjeremysmith');
});

// gets name using getName() 
test('using getName(), tests name is correct', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getName()).toEqual('BJ Smith');
});

// gets name using getName() 
test('using getName(), tests name BJ Smith is not Bryan Smith', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getName()).not.toEqual('Bryan Smith');
});

// gets id using getId() 
test('using getId(), tests id is correct', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getId()).toEqual(2);
});

// gets id using getId() 
test('using getId(), tests id 2 is not 3', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getId()).not.toEqual(3);
});

// gets email using getEmail()
test('using getEmail(), tests email is correct', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getEmail()).toEqual('bjsmith@gmail.com');
});

// gets email using getEmail()
test('using getEmail(), tests email bjsmith@gmail.com is not bjsmith2@gmail.com', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getEmail()).not.toEqual('bjsmith2@gmail.com');
});

// gets github using getGitHub()
test('using getGitHub(), tests github name is correct', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getGitHub()).toEqual('bryanjeremysmith');
});

// gets github using getGitHub()
test('using getGitHub(), tests github name bryanjeremysmith is not brianjeremysmith', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getGitHub()).not.toEqual('brianjeremysmith');
});

// gets role from getRole()
test('using getRole(), tests role is correct', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getRole()).toEqual('Engineer');
}); 

// gets role from getRole()
test('using getRole(), tests role Engineer is not Employee', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getRole()).not.toEqual('Employee');
}); 

// gets role from getRole()
test('using getRole(), tests role Engineer is not Manager', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getRole()).not.toEqual('Manager');
}); 

// gets role from getRole()
test('using getRole(), tests role Engineer is not Intern', () => {
    const engineer = new Engineer('BJ Smith', 2, 'bjsmith@gmail.com', 'bryanjeremysmith');

    expect(engineer.getRole()).not.toEqual('Intern');
}); 