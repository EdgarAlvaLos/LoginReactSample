import React from "react";
import "./App.css";
import Utils from "./helpers/utils";

import { APIContext } from "./components/APIContext";


import ContentPage from "./pages/docs/ContentPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { supportMode: false };
    document.body.setAttribute("data-spy", "scroll");
    document.body.setAttribute("data-target", ".navbar");
    //Create service calls that will be used in the project like
    //API calls, Site API, Release Notes endpoint
    Utils.CreateServiceCalls();

  }

  toggleProgramMenu = (slug) => {
    let menuToToggle = document.getElementById(slug + "Menu");
    if (menuToToggle !== null) {
      if (menuToToggle.style.display === "none")
        menuToToggle.style.display = "";
      else menuToToggle.style.display = "none";
    }
  };

  changeTheme = (mode) => {
    if (!mode)
      document.getElementById("appContainer").className = "App darkMode";
    else document.getElementById("appContainer").className = "App";
  };
  changeSelectedLink = (element) => {
    if (APIContext.leftMenuSelectedElement !== null) {
      APIContext.leftMenuSelectedElement.style.cssText = "";
    }
    element.target.style.cssText = "color:#3ac1cc; font-weight:500;";
    APIContext.leftMenuSelectedElement = element.target;
  };
  changeToSupport = (e) => {
    e.preventDefault();
    this.setState({ supportMode: e });
  };

  componentDidMount() {
    let myroute = window.location.pathname;

    if (myroute.lastIndexOf("/") !== -1) {
      myroute = myroute.substr(myroute.lastIndexOf("/"));
    }
    if (myroute === "/") {
      myroute = "home";
    } else {
      myroute = myroute.substring(1);
    }
    myroute = myroute + "Link";
    APIContext.leftMenuSelectedElement = document.getElementById(myroute);
    if (APIContext.leftMenuSelectedElement !== null) {
      APIContext.leftMenuSelectedElement.style.cssText =
        "color:#3ac1cc; font-weight:500;";
    }
  }

  render() {
    const currentPath = window.location.pathname;
    const supportMatch = currentPath.search("/support");
    return (
      <div className="App">
        <ContentPage />
      </div>
    );
  }
}

export default App;
