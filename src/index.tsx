import React from "react";
import ReactDOMClient from "react-dom/client";

document.body.innerHTML = '<div id="app"></div>';
const container = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(container);

root.render(<h1>Hello, world</h1>);
