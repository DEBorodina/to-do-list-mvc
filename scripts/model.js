export const model = {
    todos: [],
    getLocalStorage: function(){
        if(localStorage.length != 0){
        model.todos = JSON.parse(localStorage.getItem('todos'));
        } 
    },
    setLocalStorage: function(){
        localStorage.setItem('todos', JSON.stringify(model.todos));
    },
}