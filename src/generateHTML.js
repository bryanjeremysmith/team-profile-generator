// create Manager card function
const generateManager = function (manager) {
    return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`
}

// create Engineer card function
const generateEngineer = function (engineer) {
    return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
            </ul>
        </div>
    </div>
    `
}

// create Intern card function
const generateIntern = function (intern) {
    return `<div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `
};

// generate HTML from employees 
generateHTML = (data) => {
    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // if manager, call call manager function
        if (role === 'Manager') {
            pageArray.push(generateManager(employee));
        }
        // if engineer, generate Engineer card
        else if (role === 'Engineer') {
            pageArray.push(generateEngineer(employee));
        }
        // else if intern, generate Intern card
        else if (role === 'Intern') {
            pageArray.push(generateIntern(employee));
        }        
    }

    // concatenate cards 
    const employeeCards = pageArray.join('')

    // return to generated page
    return generateTeamPage(employeeCards);
}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 p-5 mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${employeeCards}
              </div>
          </div>
      </div>      
  </body>
  </html>`;
}

// export to index
module.exports = generateHTML; 