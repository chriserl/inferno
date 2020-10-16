import React from "react";
import { BrowserRouter } from "react-router-dom";
import Topnav from "../components/Topnav/Topnav";
import Sidebar from "../components/Sidebar/Sidebar";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Topnav />
        <Sidebar />
      </div>
    </BrowserRouter>
  );
};

export default App;
