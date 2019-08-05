import React from "react";

export default function Book({ name, isbn, pages, released }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, isbn),
    React.createElement("h2", {}, pages),
    React.createElement("h2", {}, released)
  ]);

  // return (
  //   <div>
  //     <h1>{name}</h1>
  //     <h2>{isbn}</h2>
  //     <h2>{pages}</h2>
  //     <h2>{released}</h2>
  //   </div>
  // );
}
