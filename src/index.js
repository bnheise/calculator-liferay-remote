import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";

class WebComponent extends HTMLElement {
    connectedCallback() {
        ReactDOM.render(<App />, this)
    }
}

const ELEMENT_ID = "calculator-app";

if (!customElements.get(ELEMENT_ID)) {
    customElements.define(ELEMENT_ID, WebComponent)
}
