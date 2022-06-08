import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header"
console.log(blogData);

function Header (props) {
  return (
    <header>
      <h1> { blogData.name } </h1>
    </header>
  )
}

function App () {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header />
    </div>
  );
}

export default App;
