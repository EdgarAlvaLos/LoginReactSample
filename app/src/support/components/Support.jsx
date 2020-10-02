import React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import App from "./../../App";
import Redirect from "./../../pages/Redirect";
import Header from "../components/Header";
import NotFoundPage from "../../pages/NotFoundPage";
import Footer from "../../pages/docs/Footer";
import SupportHome from "../components/SupportHome";
import Merchants from "../components/Merchants";
import Customers from "../components/Customers";
import "../../App.css";
import "./Support.css";
import { APIContext } from "../../components/APIContext";

class Support extends React.Component {
  changeSelectedLink = (element) => {
    if (
      APIContext.supportHomeLink !== undefined &&
      APIContext.supportHomeLink !== null
    ) {
      APIContext.supportHomeLink.style.cssText = "";
      APIContext.supportHomeLink = undefined;
    }
    if (APIContext.leftMenuSelectedElement !== null) {
      APIContext.leftMenuSelectedElement.style.cssText = "";
    }
    if (element !== null) {
      element.target.style.cssText = "color:#3ac1cc; font-weight:500;";
    }

    APIContext.leftMenuSelectedElement = element.target;
  };

  componentDidMount() {
    let myroute = window.location.pathname;

    if (myroute.lastIndexOf("/") !== -1) {
      myroute = myroute.substr(myroute.lastIndexOf("/") + 1);
    }
    if (myroute.lastIndexOf("support") !== -1) {
      myroute = "homeSupport";
    }
    myroute = myroute + "Link";

    APIContext.leftMenuSelectedElement = document.getElementById(myroute);
    if (APIContext.supportHomeLink !== null) {
      APIContext.supportHomeLink = document.getElementById(myroute);
    }

    if (APIContext.leftMenuSelectedElement !== null) {
      APIContext.leftMenuSelectedElement.style.cssText =
        "color:#3ac1cc; font-weight:500;";
    }
  }

  render() {
    const PUBLIC_URL = APIContext.vestaConfig.ui.path;

    const routes = [
      {
        path: "/",
        exact: true,
        main: SupportHome,
      },
      {
        path: "/support",
        exact: true,
        main: SupportHome,
      },
      {
        path: "/support/merchants",
        exact: true,
        main: Merchants,
      },
      {
        path: "/support/customers",
        exact: true,
        main: Customers,
      },
      {
        path: "*",
        exact: true,
        main: NotFoundPage,
      },
    ];

    return (
      <div>
        <Router basename={PUBLIC_URL} component={App}>
          <Header />
          <Container fluid>
            <Row>
              <Col className="left-sidebar" sm={2}>
                <Link
                  to="/support"
                  id="supportLogoLink"
                  onClick={this.changeSelectedLink}
                >
                  <div className="support-logo"></div>
                </Link>
                <ul>
                  <li className="link">
                    <Link
                      to="/support"
                      id="homeSupportLink"
                      onClick={this.changeSelectedLink}
                    >
                      <span className="icon-home"></span>&nbsp;
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      to="/support/customers"
                      id="customersLink"
                      onClick={this.changeSelectedLink}
                    >
                      Customers
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      to="/support/merchants"
                      id="merchantsLink"
                      onClick={this.changeSelectedLink}
                    >
                      Merchants
                    </Link>
                  </li>
                  <li className="link">
                    <Link
                      to="/support/merchants"
                      id="developersLink"
                      onClick={this.changeSelectedLink}
                    >
                      Developers
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col className="main offset-md-2" sm={10}>
                <Switch>
                  <Route path="/support/developers" component={Redirect} />
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      children={<route.main />}
                    />
                  ))}
                </Switch>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default Support;
