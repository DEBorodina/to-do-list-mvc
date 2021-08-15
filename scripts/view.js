import {card, header, modal} from "./templates.js";
import {model} from "./model.js";

export const view = {
    init: function(root){
       root.insertAdjacentHTML("afterbegin",header());
       root.insertAdjacentHTML("afterbegin",modal());
    },
    openModal: function(modal){
        modal.classList.remove('hidden');
    },
    closeModal: function(modal){
        modal.classList.add('hidden');
    },
    render: function(root){
        let htmlString = model.todos.map(item=>card(item)).join('');
        root.insertAdjacentHTML('beforeend',htmlString);
    },
}