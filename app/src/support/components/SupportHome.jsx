import React from "react";
import { Link } from "react-router-dom";
import "../css/Common.css";
import { APIContext } from "../../components/APIContext";
class SupportHome extends React.Component {
  changeSelectedLink = (element) => {
    if (element !== undefined && element !== null) {
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
      APIContext.leftMenuSelectedElement = document.getElementById(
        element + "Link"
      );
      APIContext.leftMenuSelectedElement.style.cssText =
        "color:#3ac1cc; font-weight:500;";
    }
  };

  render() {
    return (
      <div id="support-container">
        <div className="container-fluid" id="top-menu">
          <div className="main-row">
            <h1 className="main-title">Welcome to Vesta Support</h1>
          </div>
          <div className="main-row">
            <h5 className="main-subtitle">
              Get in touch! We are here to help.
            </h5>
          </div>
        </div>
        <div className="container-fluid" id="pages-menu">
          <div className="row" id="options">
            <div className="col-lg-1 col-md-2 mb-4">
              <div id="customers_logo"></div>
            </div>
            <div className="col-lg-5 col-md-4 mb-4">
              <h3 id="customers-title">Customers</h3>
              <p className="support-paragraph">
                Have a general cuestion or especific questions about a charge on
                your card?
              </p>
              <Link
                className="continue-link"
                to="/support/customers"
                onClick={() => this.changeSelectedLink("customers")}
              >
                Continue &gt;
              </Link>
            </div>

            <div className="col-lg-1 col-md-2 mb-4">
              <div id="merchants_logo"></div>
            </div>
            <div className="col-lg-5 col-md-4 mb-4">
              <h3 id="merchants-title">Merchants</h3>
              <p className="support-paragraph">
                Have a question regarding your account? Our friendly tech
                support team is here to help!
              </p>
              <Link
                className="continue-link"
                to="/support/merchants"
                onClick={() => this.changeSelectedLink("merchants")}
              >
                {" "}
                Continue &gt;
              </Link>
            </div>
          </div>
          <div className="row" id="options-2">
            <div className="col-lg-1 col-md-2 mb-4">
              <div id="developers_logo"></div>
            </div>
            <div className="col-lg-5 col-md-4 mb-4">
              <h3 id="developers-title">Developers</h3>
              <p className="support-paragraph">
                Are you currently integrating to the platform an need
                assistance?
              </p>
              <Link className="continue-link" to="/support/merchants">
                Continue &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SupportHome;
