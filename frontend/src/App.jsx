import { useState } from "react";
import "./App.css";
import ModelForm from "./components/ModelForm";
import Navbar from "./components/Navbar";
import TableList from "./components/TableList";

function App() {

  const[isOpen, setIsOpen]= useState(false);
  const[modelMode, setModelMode]= useState('add');

const handleOpen =(mode)=>{
  setIsOpen(true)
}


const handleSubmit =()=>{
  if(modelMode === 'add'){
    console.log('modal mode add');
  } else{
    console.log('modal mode Edit');
  }
}

  return (
    <>
      <Navbar />
      <TableList />
      <ModelForm/>
    </>
  );
}

export default App;
