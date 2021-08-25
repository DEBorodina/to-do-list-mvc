import {header, todoList, card, modal} from "./templates.js";
import {model} from "./model.js";
import {controller} from "./controller.js";
import {root} from "./index.js";

export const view = {
    initListeners: function(modal){
    document.getElementById('add-todo').addEventListener('click',()=>view.openModal(modal));
    document.getElementById('delete-last-todo').addEventListener('click', ()=>controller.deleteLastTodo());
    document.getElementById('delete-all-todos').addEventListener('click', ()=>controller.deleteAllTodos());
    for(let i = 0; i < model.todos.length; i++){
        document.getElementById(`delete-button-${i}`).addEventListener('click',()=>controller.deleteTodo(i));
        document.getElementById(`checkbox-${i}`).addEventListener('change',()=>controller.completeTodo(i));
    }
    },
    initModalListeners: function(modal){
       document.getElementById("okButton").addEventListener('click',()=>controller.addTodo(modal));
       document.getElementById("cancelButton").addEventListener('click',()=>controller.cancelAddTodo(modal));
    },
    printApp: function(){
       root.insertAdjacentHTML("afterbegin",header(model.todos));
       root.insertAdjacentHTML("beforeend",todoList());
       root.insertAdjacentHTML("afterbegin",modal());
       view.initModalListeners(document.getElementById('modal'));
       for(let i = 0; i < model.todos.length; i++) {
        document.getElementById('todoList').insertAdjacentHTML('afterbegin', card(model.todos[i],i));
        }
       view.initListeners(document.getElementById('modal'));
    },
    openModal: function(modal){
        modal.classList.remove('hidden');
    },
    closeModal: function(modal){
        modal.classList.add('hidden');
    },
    render: function(){
        document.getElementById('header').remove();
        document.getElementById('todoList').remove();
        root.insertAdjacentHTML("afterbegin",header(model.todos));
        root.insertAdjacentHTML("beforeend",todoList());
        for(let i = 0;i < model.todos.length; i++) {
            document.getElementById('todoList').insertAdjacentHTML('afterbegin', card(model.todos[i],i));
        }
       view.initListeners(document.getElementById('modal'));
    },
}