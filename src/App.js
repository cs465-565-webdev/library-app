import React from "react";
// import React, { createElement } from "react";
// import ReactDOM from "react-dom";
import { render } from "react-dom";
// import { Book } from "./Book";
import Book from "./Book";

const character = "luke";

const App = () => {
  return React.createElement("div", { id: "some-attr" }, [
    React.createElement("h1", {}, "My Game of Thrones Library"),
    React.createElement(Book, {
      name: "A Game of Thrones",
      isbn: "978-0553103540",
      pages: 694,
      released: 1996
    }),
    React.createElement(Book, {
      name: "A Clash of Kings",
      isbn: "978-0553108033",
      pages: 768,
      released: 1999
    }),
    React.createElement(Book, {
      name: "A Storm of Swords",
      isbn: "978-0553106633",
      pages: 992,
      released: 2000
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
