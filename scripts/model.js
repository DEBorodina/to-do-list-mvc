export const model = {
    todos: [],
    get: function(){
        if(localStorage.length!=0){
        model.todos = JSON.parse(localStorage.getItem('todos'));
        } 
    },
    set: function(value){
        model.todos.push(value);
        localStorage.setItem('todos', JSON.stringify(model.todos));
    },
}