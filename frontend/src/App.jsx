import { useState } from "react";
import "./App.css";
import ModelForm from "./components/ModelForm";
import Navbar from "./components/Navbar";
import TableList from "./components/Tablelist";

function App() {

  const[isOpen, setIsOpen]= useState(flase);

  return (
    <>
      <Navbar />
      <TableList />
      <ModelForm/>
    </>
  );
}

export default App;
