import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Topnav from "../components/Topnav/Topnav";
import Sidebar from "../components/Sidebar/Sidebar";
import "./app.scss";

const App = () => {
  let [sidebarState, setSidebarState] = useState(() => "sidebar-open");

  const handleSidebarToggle = () => {
    setSidebarState(() =>
      sidebarState === "sidebar-closed" ? "sidebar-open" : "sidebar-closed"
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Topnav toggleSidebar={() => handleSidebarToggle()} />
        <Sidebar
          sidebarState={sidebarState}
          toggleSidebar={() => handleSidebarToggle()}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
