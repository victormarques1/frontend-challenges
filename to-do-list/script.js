
//validando task
document.querySelector('#btn-add-task').onclick = function () {
  if (document.querySelector('#input-add-task').value.length == 0) {
    alert("Por favor, digite uma tarefa para adicionar!")
  }
  //criando task
  else {
    document.querySelector('.edit-tasks').innerHTML += `
    <div class="task">
      <span id="taskname">
        ${document.querySelector('.add-tasks input').value}
      </span>
      <button class="delete">
      <i class="fa fa-trash-o" style="font-size:16px"></i>
      </button>
      </div>
    `;

    //removendo task
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      }
    }

    //riscando task 
    let tasks = document.querySelectorAll('.task');
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle('completed');
      }
    }

    //limpando input depois de adicionar task
    document.querySelector("#input-add-task").value = "";
  }
}