import * as React from "react";
import * as ReactDOM from "react-dom";
export class yaBasic{
    private message:string;
    constructor(msg:string){
        this.message = msg;
    }
}

const element = document.getElementById("mainPage");
ReactDOM.render(
    React.createElement("h1", null, "Message in a webpage"), element
);
