import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div", {id :'parent'},
React.createElement("div", {id :'child'},
[React.createElement("h1", {id :'heading'}, "This a nested div tag implementation in React"),
React.createElement("h2", {id :'heading2'}, "This a second heading tag implementation")
])
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
