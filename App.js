const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "grandchild" }, "I am grandchild1"),
    React.createElement("h1", { id: "grandchild" }, "I am grandchild2")]
  ),
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "grandchild" }, "I am grandchild3"),
    React.createElement("h1", { id: "grandchild" }, "I am grandchild4")]
  )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
