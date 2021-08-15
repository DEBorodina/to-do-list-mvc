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
