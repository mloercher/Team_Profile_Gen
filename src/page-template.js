//Render Manager_________________________________________________
function renderManager(manager) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">MANAGER</h5>
    <ul class="list-group">
      <li class="list-group-item">Name: ${manager.name} </l1>
      <li class="list-group-item">ID: ${manager.id}</l1>
      <li class="list-group-item">E: <a href="mailto: ${manager.email}">${manager.email}</a></l1>
      <li class="list-group-item">P: ${manager.officeNumber}</l1>
   </ul>
  </div>
</div>`;
}

//Render Intern_________________________________________________
function renderIntern(intern) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">INTERN</h5>
    <ul class="list-group">
      <li class="list-group-item">Name: ${intern.name} </l1>
      <li class="list-group-item">ID: ${intern.id}</l1>
      <li class="list-group-item">E: <a href="mailto: ${intern.email}">${intern.email}</a></l1>
      <li class="list-group-item">School: ${intern.school}</l1>
   </ul>
  </div>
</div>`;
}

//Render Engineer_________________________________________________
function renderEngineer(engineer) {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">ENGINEER</h5>
    <ul class="list-group">
      <li class="list-group-item">Name: ${engineer.name} </l1>
      <li class="list-group-item">ID: ${engineer.id}</l1>
      <li class="list-group-item">E: <a href="mailto: ${engineer.email}">${engineer.email}</a></l1>
      <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</l1></a>
   </ul>
  </div>
</div>`;
}

module.exports = { renderManager, renderIntern, renderEngineer };
