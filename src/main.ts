import './style.css'

const todoform = document.getElementById("todoform") as HTMLFormElement
const todoinput = document.getElementById("todoinput") as HTMLInputElement
const todolist = document.getElementById("todolist") as HTMLUListElement

let todos: string[] = []

function render() {
  todolist.innerHTML = ""
  todos.forEach((todo, index) => {
    const li = document.createElement("li")
    li.innerText = todo

    const btn = document.createElement("button")
    btn.innerText = "Hapus"
    btn.style.marginLeft = "10px"

    btn.addEventListener("click", () => {
      todos.splice(index, 1)
      render()
    })

    li.appendChild(btn)
    todolist.appendChild(li)
  })
}

todoform.addEventListener("submit", (ev) => {
  ev.preventDefault()
  const text: string = todoinput.value.trim()

  if (text === "") {
    return
  }

  alert 

  todos.push(text)
  render()
  
  todoform.reset()
}) 

const clearAllBtn = document.createElement("button");
clearAllBtn.innerText = "Hapus Semua";
clearAllBtn.style.marginTop = "10px";

clearAllBtn.addEventListener("click", () => {
  todos = [];      
  render();        
});

todoform.insertAdjacentElement("afterend", clearAllBtn);


render()