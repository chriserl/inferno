import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
      </div>
    </BrowserRouter>
  );
};

export default App;
