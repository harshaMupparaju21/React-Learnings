import React from "react";
import ReactDOM  from "react-dom/client";

//JSX is transpiled by Babel and managed by Parcel so that JS Engine can understand.
const jsxHeading = (<h1 className="heading" tabIndex={5}>
    Creating H1 tag using JSX
    </h1>)

const ele = <span>This is React element</span>

const Title = () => (
    <h1 className="head">
        {ele}
        Title Component
    </h1>
)

//Component Composition  : Using one component in another
const HeadingComponent2 = () => (
    <div id = "container">
    <Title />
    <h1 className="heading"> Creating H1 tag using Functional Component</h1>
    </div>
)

//<Title /> or {Title()} to ways of using one component inside another
//This one and the above one are same.
const HeadingComponent1 = () => (
    <div id = "container">
    {Title()}
    <h1 className="heading"> Creating H1 tag using Functional Component 
    using Interpolation</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how we render functional Components
root.render(<HeadingComponent1 />);

// This is how we render elements
// root.render(jsxHeading)

