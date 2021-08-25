import {view} from "./view.js";
import {model} from "./model.js";

//ROOT
export const root = document.querySelector("#root");

//APP
function app(){
    model.getLocalStorage();
    view.printApp(root);
}

app()
