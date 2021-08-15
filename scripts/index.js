import {view} from "./view.js";
import {model} from "./model.js";
import {controller} from "./controller.js";

const root = document.querySelector("#root");


function app(){
    view.init(root);
    model.get();
    const modal = document.querySelector("#modal");
    view.render(root);
}

app();

/*
//root
const root = document.querySelector("#root");

//data
let todos = [];

createAddButton();
createModal();

const okButton = document.querySelector("#okButton");
const cancelButton = document.querySelector("#cancelButton");
const addButton = document.querySelector("#addButton");


addButton.addEventListener('click', () => {
    const modal = document.querySelector("#modal");
    modal.classList.toggle('hidden');
}) 

cancelButton.addEventListener('click', () => {
    const modal = document.querySelector("#modal");
    modal.classList.toggle('hidden');
}) 

okButton.addEventListener('click', () => {
    const inputText = document.querySelector("#inputText");
    const inputTitle = document.querySelector("#inputTitle");
    const inputTime = document.querySelector("#inputTime");
    let todo = {};
    todo.title = inputTitle.value;
    todo.time = inputTime.value;
    todo.text = inputText.value;
    inputText.value = '';
    inputTime.value = '';
    inputTitle.value = '';
    modal.classList.toggle('hidden');
    createCard(todo);
    todos.push(todo);
})
*/


