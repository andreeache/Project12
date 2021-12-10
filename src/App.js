import Dashboard from "./Components/Dashboard";
import TopNav from "./Components/TopNav";
import UserError from "./Components/UserError";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Routes>
          <Route exact path="/dashboard/:userId" element={<Dashboard />} />
          <Route path="/error" element={<UserError />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
