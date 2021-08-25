import { model } from "./model.js";
import {view} from "./view.js";

export const controller = {
    deleteTodo: function(i){
        model.todos.splice(i, 1);
        model.setLocalStorage();
        view.render();
    },
    completeTodo: function(i){
        if(document.getElementById(`checkbox-${i}`).checked){
          model.todos[i].isDone = true;
        }
        else{
            model.todos[i].isDone = false;
        }
        model.setLocalStorage();
        view.render();
    },
    cancelAddTodo(modal){
        const inputText = document.querySelector("#inputText");
        const inputTitle = document.querySelector("#inputTitle");
        inputText.value = '';
        inputTitle.value = '';
        view.closeModal(modal);
    },
    addTodo: function(modal){
        const inputText = document.querySelector("#inputText");
        const inputTitle = document.querySelector("#inputTitle");

        let todo = {};
        let date = new Date();

        todo.title = inputTitle.value;
        todo.time = `${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
        todo.text = inputText.value;
        todo.isDone = false;

        inputText.value = '';
        inputTitle.value = '';

        model.todos.push(todo);
        model.setLocalStorage();
        view.closeModal(modal);
        view.render();
    },
    deleteAllTodos: function(){
        model.todos = [];
        model.setLocalStorage();
        view.render();
    },
    deleteLastTodo: function(){
        if(model.todos.length){
            model.todos.shift();
        }
        model.setLocalStorage();
        view.render();
    },
}