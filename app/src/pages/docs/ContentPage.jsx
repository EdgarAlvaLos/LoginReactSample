import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { APIContext } from "./../../components/APIContext";
import NotFoundPage from "./../NotFoundPage";

import App from "./../../App";

import "../../App.css";
import "./DocsPage.css";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";

class ContentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { supportMode: false };
  }

  componentDidMount() {
    let myroute = window.location.pathname;
    if (myroute === "/") {
      myroute = "/home";
    }
    myroute = myroute.substr(1);
    if (myroute.indexOf("/") !== -1) {
      myroute = myroute.substr(0, myroute.indexOf("/"));
    }
    myroute = myroute + "Link";
    APIContext.leftMenuSelectedElement = document.getElementById(myroute);
    if (APIContext.leftMenuSelectedElement !== null)
      APIContext.leftMenuSelectedElement.style.cssText =
        "color:#3ac1cc; font-weight:500;";

    if (myroute !== "homeLink" && APIContext.leftMenuSelectedElement !== null) {
      APIContext.leftMenuSelectedElement.style.cssText =
        "color:#3ac1cc; font-weight:500;";
    }
  }

  render() {
    const PUBLIC_URL = APIContext.vestaConfig.ui.path;
    
    const routes = [
      {
        path: "/CustomerJourneyWebApp",
        exact: true,
        main: LoginPage,
      },
      {
        path: "/ForgotPassword",
        exact: true,
        main: ForgotPassword,
      },
      {
        path: "/",
        exact: true,
        main: LoginPage,
      },
      {
        path: "*",
        exact: true,
        main: NotFoundPage,
      },
    ];

    return (
      <div className="docs-page" id="appContainer">
        <Router basename={PUBLIC_URL} component={App}>
          <Container id="mainDocContainer" fluid>
            <Row>
              <Col
                className="col-lg-12 col-md-12 col-sm-12"
                id="AppContent"
              >
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      // eslint-disable-next-line react/no-children-prop
                      children={<route.main/>}
                    />
                  ))}
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}
export default ContentPage;
