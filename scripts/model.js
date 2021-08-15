export const model = {
    data : [],
    get:function(){
        if(localStorage.length!=0){
        model.data = JSON.parse(localStorage.getItem('todos'));
        } 
    },
    set: function(value){
        model.data.push(value);
        localStorage.setItem('todos', JSON.stringify(model.data));
    },
}

const todos = [
    {
        title: '',
        time: '',
        text: '',
        isDone: true,
        id: '0',
    }
]