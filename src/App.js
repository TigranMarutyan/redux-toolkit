import React from "react";
import Header from "./components/Header/";
import List from "./components/List";
import "./App.css";

function generateId() {
  let id = 0;
  return () => {
    return (id += 1);
  };
}

export const idGenerator = generateId();

function App() {
  return (
    <>
      <Header />
      <List />
    </>
  );
}

export default App;
