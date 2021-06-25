import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LayoutComponent from "./components/LayoutComponent";
import {  BrowserRouter as Router,  Switch,  Route,  Link
} from "react-router-dom";
import Login from "./pages/Login.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";

function App() {
  return (
    <Router>
    <div className="App">
      <LayoutComponent>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
      </LayoutComponent>
    </div>
    </Router>
  );
}

export default App;
