import { useState } from "react";
import "./App.css";
import { Cumstomer } from "./Components/Cumstomer";
import { Footer } from "./Components/Footer";
import { HomePage } from "./Components/HomePage";
import { Navbar } from "./Components/Navbar";

import { Submit } from "./Components/Pages/Submit";
import { Process } from "./Components/Process";
import { SignUp } from "./Components/SignUp";
import Table from "./Components/Table";
import Copyright from "./Components/CopyRight";

function App() {

const[allFormData, setAllFormData]=useState([])
  return (
    <div className="bg-black ">
      <Navbar  setAllFormData={setAllFormData} allFormData={allFormData}/>
      <HomePage />
      <Process />
      <Cumstomer />
      <SignUp />
      <Table allFormData={allFormData}/>
      <Footer />
      <Copyright/>
    </div>
  );
}

export default App;
