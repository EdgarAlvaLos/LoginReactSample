import React from "react";
import "../css/Customers.css";
import "../css/Common.css";
import { Link } from "react-router-dom";

class Customers extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid" id="top-menu">
          <div className="main-row">
            <h1 className="main-title">Technical Support</h1>
          </div>
          <div className="main-row">
            <h5 className="main-subtitle">
              Our friendly technical support staff is here to help!
            </h5>
          </div>
        </div>
        <div className="container-fluid" id="container-merchants">
          <div className="row" id="contact-row">
            <div className="col-sm-6" id="data-column">
              <h5 className="title-blue" id="notEmergency-title">
                Non-Emergency
              </h5>
              <p className="paragraph">
                <b>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{" "}
                <Link to="/" onClick={this.changeSelectedLink}>
                  vsafe.support@trustvesta.com
                </Link>
              </p>
              <p className="paragraph">
                <b>Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> 1-88-208-6232
              </p>
              <p className="paragraph">
                <b>Hours: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> Monday thru Friday
                8am-5pm PST
              </p>
            </div>
            <div className="col-sm-6" id="emergency-column">
              <h5 className="title-blue" id="emergency-title">
                Emergency
              </h5>
              <p className="paragraph">
                <b>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>{" "}
                <Link to="/" onClick={this.changeSelectedLink}>
                  noc@trustvesta.com
                </Link>
              </p>
              <p className="paragraph">
                <b>Phone: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> 503-552-3480
              </p>
              <p className="paragraph">
                <b>Hours: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> 24/7, 365 days a
                year
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Customers;
