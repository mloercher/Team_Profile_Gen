//Render Manager_________________________________________________
function renderManager(manager) {
    return `<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>
                My manager
            </h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="card-header">
           ${manager.name} 
        </div>
        <div class="card-title">
           ${manager.getRole()} 
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
           <li class="list-group-item">${manager.id}</l1>
           <li class="list-group-item">${manager.email}</l1>
           <li class="list-group-item">${manager.officeNumber}</l1>
        </ul>
        </div>
</div>`
};

//Render Intern_________________________________________________
function renderIntern(intern) {
    return `<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>
                Intern
            </h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="card-header">
           ${intern.name} 
        </div>
        <div class="card-title">
           ${intern.getRole()} 
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
           <li class="list-group-item">${intern.id}</l1>
           <li class="list-group-item">${intern.email}</l1>
           <li class="list-group-item">${intern.school}</l1>
        </ul>
        </div>
</div>`
};

//Render Engineer_________________________________________________
function renderEngineer(engineer) {
    return `<div class="container">
    <div class="row">
        <div class="col-12">
            <h1>
                Engineer
            </h1>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        <div class="card-header">
           ${engineer.name} 
        </div>
        <div class="card-title">
           ${engineer.getRole()} 
        </div>
    </div>
    <div class="card-body">
        <ul class="list-group">
           <li class="list-group-item">${engineer.id}</l1>
           <li class="list-group-item">${engineer.email}</l1>
           <li class="list-group-item">${engineer.github}</l1>
        </ul>
        </div>
</div>`
};

module.exports = { renderManager, renderIntern, renderEngineer };

