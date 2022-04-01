let form = document.querySelector('#task_form');
let taskList = document.querySelector("ul");
let AllTask = document.querySelector('#tasks');
let inputTask = document.querySelector('#new_task');
let clearTask = document.querySelector('#clear_tasks_btn');
let filter = document.querySelector('#filter_task');



form.addEventListener("submit", addTask);
clearTask.addEventListener("click", clearAll);
filter.addEventListener("keyup",filterTask);

function addTask(e){
    if(inputTask.value === ''){
        alert("Add a Task!");
    }
    else{
        let li = document.createElement('li');
        let link = document.createElement('a');
        li.appendChild(document.createTextNode(inputTask.value + " "));
        link.setAttribute('href','#');
        link.innerHTML = "x";
        li.appendChild(link);
        taskList.appendChild(li);
        //localStorage.setItem("Tasks", inputTask.value);
        inputTask.value = '';
       
       
        
    }
    e.preventDefault();
}
function clearAll(){
    taskList.innerHTML = '';
    //localStorage.clearAll();
}

function filterTask(e){
    let text = e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
       // console.log(item);
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    })
    //filter.value = '';
    
}