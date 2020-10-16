import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Topnav from "../components/Topnav/Topnav";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../views/Home/Home";
import "./app.scss";

const App = () => {
  let [layoutState, setLayoutState] = useState(() => ({
    sidebarState: "sidebar-open",
    mainState: "main-contained",
  }));

  const handleMainState = () => {
    setLayoutState(() =>
      layoutState.sidebarState === "sidebar-open"
        ? {
            ...layoutState,
            sidebarState: "sidebar-closed",
            mainState: "main-widened",
          }
        : {
            ...layoutState,
            sidebarState: "sidebar-open",
            mainState: "main-contained",
          }
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Topnav toggleSidebar={() => handleMainState()} />
        <Sidebar
          sidebarState={layoutState.sidebarState}
          toggleSidebar={() => handleMainState()}
        />
        <main className={layoutState.mainState}>
          <Home />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
