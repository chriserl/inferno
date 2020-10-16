import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import SubscriptionSlider from "../components/SubscriptionSlider/SubscriptionSlider";
import Topnav from "../components/Topnav/Topnav";
import Sidebar from "../components/Sidebar/Sidebar";
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
          <SubscriptionSlider />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
