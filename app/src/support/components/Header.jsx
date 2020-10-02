import React from "react";
import { withRouter } from "react-router";
import { Navbar, Nav } from "react-bootstrap";
import { APIContext } from "./../../components/APIContext";
import "./../../pages/docs/Header.css";
import "../../components/Search.css";

class Header extends React.Component {
  render() {
    const { location } = this.props;
    const PUBLIC_URL = APIContext.vestaConfig.ui.url;
    const DOC_URL = APIContext.vestaConfig.ui.documentationUrl;
    const VPORTALLOGIN_URL = APIContext.vestaConfig.ui.vPortalLoginUrl;
    return (
      <div className="header offset-md-3">
        <Navbar collapseOnSelect expand="sm" bg="white" variant="light">
          <Navbar.Brand href={PUBLIC_URL} />
          <Navbar.Toggle aria-controls="header-navbar-nav" />
          <Navbar.Collapse id="header-navbar-nav">
            <Nav className="mr-auto" />
            <Nav className="nav-header">
              {location.pathname.indexOf("/support") === -1 ? (
                <Nav.Link href="/search" target="_blank">
                  <div className="header-link-with-icon">
                    <span className="icon-search"></span>
                    <span
                      className="header-link-text"
                      onClick={this.openSearchPage}
                    >
                      Search APIs
                    </span>
                  </div>
                </Nav.Link>
              ) : null}
              <Nav.Link href={DOC_URL} target="_blank">
                <div className="header-link-with-icon">
                  <span className="icon-docs"></span>
                  <span className="header-link-text">
                    &nbsp;&nbsp;DOCUMENTATION&nbsp;&nbsp;
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link href={PUBLIC_URL + "/api"} id="api">
                <div className="header-link-with-icon">
                  <span className="icon-api"></span>
                  <span className="header-link-text">
                    &nbsp;&nbsp;API&nbsp;&nbsp;
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link href={VPORTALLOGIN_URL} target="_blank">
                <div className="header-link-with-icon">
                  <span className="icon-login"></span>
                  <span className="header-link-text">
                    &nbsp;&nbsp;LOGIN&nbsp;&nbsp;
                  </span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
