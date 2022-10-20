import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import AppRoutes from "./components/AppRoutes";
import {useEffect, useState} from "react";
import {AuthContext} from "./context/Auth";
import Navigation from "./components/Navigation";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      if (localStorage.getItem("auth")) {
          setIsAuth(true);
      }
      setIsLoading(false);
  }, []);
  return (
      <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
          <div className="App">
              <Router>
                  <Navigation/>
                  <AppRoutes/>
              </Router>
          </div>
      </AuthContext.Provider>
  );
}

export default App;