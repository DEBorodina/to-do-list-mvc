export const model = {
    todos: [],
    getLocalStorage: function(){
        if(localStorage.getItem("todos") != null){
        model.todos = JSON.parse(localStorage.getItem('todos'));
        } 
    },
    setLocalStorage: function(){
        localStorage.setItem('todos', JSON.stringify(model.todos));
    },
}