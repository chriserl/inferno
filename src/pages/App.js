import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Topnav from "../components/Topnav/Topnav";
import Bottomnav from "../components/Bottomnav/Bottomnav";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../views/Home/Home";
import Trending from "../views/Trending/Trending";
import Subscriptions from "../views/Subscriptions/Subscriptions";
import "./app.scss";

const App = (props) => {
  let [layoutState, setLayoutState] = useState(() => ({
    sidebarState: "sidebar-open",
    mainState: "main-contained",
    searchformState: "search-closed",
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

  const handleSearchToggle = () => {
    setLayoutState(() =>
      layoutState.searchformState === "search-open"
        ? {
            ...layoutState,
            searchformState: "search-closed",
          }
        : {
            ...layoutState,
            searchformState: "search-open",
          }
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Topnav
          searchformState={layoutState.searchformState}
          toggleSidebar={() => handleMainState()}
          toggleSearch={() => handleSearchToggle()}
        />
        <Sidebar
          sidebarState={layoutState.sidebarState}
          toggleSidebar={() => handleMainState()}
        />
        <Bottomnav />
        <main className={layoutState.mainState}>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/inferno" component={Home}></Route>
            <Route path="/inferno/trending" component={Trending}></Route>
            <Route
              path="/inferno/subscriptions"
              component={Subscriptions}
            ></Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
