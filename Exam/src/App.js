import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import UList from "./comp/UList";
import UDetails from './comp/UDetails';
import UForm from './comp/UForm';
import SearchUni from './comp/SearchUni';

function App() {
  return (
    <div className="App">


    <Router>
      <nav>
        <h1>Welcome</h1>
        <UForm/>
        <div>
          <Link to="/">Home</Link>
          <Link to="/unis">Unis</Link>
        </div>
      </nav>
      <Routes>

        <Route path="/unis" element={
          <UList/>
        }/>

        <Route path="/unis/:name" element={
          <UDetails/>
        } />

        <Route path="search/:query" element={
          <SearchUni/>
        } />

      </Routes>

    </Router>


    </div>
  );
}

export default App;
