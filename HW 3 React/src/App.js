import React from "react";
import FuncComp from "./components/FuncComp";
import ClassComp from "./components/ClassComp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {


  return (
      <div className="App">
        
        <Router>
      <nav>
        <h1>Welcome</h1>
      <ClassComp/>
        <div>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/cs">cs</Link>
        </div>
      </nav>
      <Routes>

        <Route path="/cs" element={
         <FuncComp/>
        }/>


      </Routes>

    </Router>


      </div>
  );
  
}

export default App;