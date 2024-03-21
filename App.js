// const heading = React.createElement("h1", {id : "heading"}, "Creating h1 tag using React separated");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// Nested Elements
// Below "parent" is a JS object not a HTML elements. When rendering to DOM, React converts into HTML values.
// const parent = React.createElement("div", {id :'parent'},
// React.createElement("div", {id :'child'},
// React.createElement("h1", {id :'heading'}, "This a nested div tag implementation in React"))
// )


//More Nested Tags
const parent = React.createElement("div", {id :'parent'},
React.createElement("div", {id :'child'},
[React.createElement("h1", {id :'heading'}, "This a nested div tag implementation in React"),
React.createElement("h2", {id :'heading2'}, "This a second heading tag implementation")
])
)

// If there is already some tags inside the root tag in index.html, it gets repalced by this parent element 
// we are creating
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
