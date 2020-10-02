import React from "react";
import { APIContext } from "./../../components/APIContext";
import Logger from "./../../helpers/logger";
import "./Customers.css";
import "../css/Common.css";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      displayErrors: false,
      response: { ResponseCode: 1, ResponseText: "" },
    };
    this.firstname = React.createRef();
    this.lastname = React.createRef();
    this.companyName = React.createRef();
    this.email = React.createRef();
    this.message = React.createRef();
  }

  getClassName() {
    return "Support/Customers";
  }

  stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
      data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true });
      return;
    }
    this.setState({ displayErrors: false });
    const data = {
      firstname: this.firstname.current.value,
      lastname: this.lastname.current.value,
      companyName: this.companyName.current.value,
      email: this.email.current.value,
      message: this.message.current.value,
    };

    let options = {
      params: data,
      callback: (data) => {
        this.setState({
          displayErrors: false,
          response: data,
        });
      },
      onError: (error) => {
        this.setState({
          displayErrors: true,
        });
        console.log(error);
      },
    };
    try {
      APIContext.serviceCalls.CustomerSave(options);
    } catch (error) {
      Logger.error(this.getClassName(), error);
    }

    this.clearForm();
  }

  clearForm() {
    this.firstname.current.value = "";
    this.lastname.current.value = "";
    this.companyName.current.value = "";
    this.email.current.value = "";
    this.message.current.value = "";
  }

  render() {
    const { displayErrors, response } = this.state;
    if (response.ResponseCode === 0) {
    }
    return (
      <div>
        <div className="container-fluid" id="top-menu">
          <div className="main-row">
            <h1 className="main-title">We're here to help</h1>
          </div>
          <div className="main-row">
            <div className="col-sm-5" id="paragraph-columns">
              <h5 className="main-subtitle" id="paragraph-customers">
                Over the last 25 years, we've worked hard to earn our reputation
                as a trusted partner for our customers. We're not about to
                change that.
              </h5>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="container-customers">
          <div className="row" id="mail-row">
            <div className="col-sm-6" id="left-panel">
              <form
                onSubmit={this.handleSubmit}
                noValidate
                className={displayErrors ? "displayErrors" : ""}
                method="POST"
              >
                <h5 className="title-blue">
                  <b>Lest's get started</b>
                </h5>
                <p id="p-text">
                  Tell us about yourself and we'll find a solution.
                </p>
                {displayErrors ? (
                  <div className="alert alert-danger" role="alert">
                    Please, fill the fields required.
                  </div>
                ) : (
                  ""
                )}
                {response.ResponseCode === 0 ? (
                  <div className="alert alert-success" role="alert">
                    <p>
                      Thank you for getting in touch! We appreciate you
                      contacting us. One of our colleagues will get back in
                      touch with you soon!
                    </p>
                  </div>
                ) : (
                  response.ResponseText
                )}
                <div className="row" id="first-name">
                  <input
                    name="firstname"
                    data-parse="string"
                    type="text"
                    className="custom-input"
                    placeholder="FIRST NAME"
                    required
                    ref={this.firstname}
                  />
                </div>
                <div className="row" id="last-name">
                  <input
                    name="lastname"
                    data-parse="string"
                    type="text"
                    className="custom-input"
                    placeholder="LAST NAME"
                    required
                    ref={this.lastname}
                  />
                </div>
                <div className="row" id="company-name">
                  <input
                    name="companyName"
                    data-parse="string"
                    type="text"
                    className="custom-input"
                    placeholder="COMPANY NAME"
                    ref={this.companyName}
                  />
                </div>
                <div className="row" id="email-address">
                  <input
                    name="email"
                    data-parse="email"
                    type="email"
                    className="custom-input"
                    placeholder="EMAIL ADDRESS"
                    required
                    ref={this.email}
                  />
                </div>
                <div className="row" id="message">
                  <textarea
                    name="message"
                    data-parse="text"
                    className="custom-input"
                    rows="3"
                    placeholder="MESSAGE"
                    ref={this.message}
                  />
                </div>
                <div id="button-row">
                  <button type="submit" id="submit-button">
                    <b id="button-text">SUBMIT</b>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-sm-6" id="right-panel">
              <h5 className="title-blue" id="contact-title">
                <b>
                  Have questions regarding a charge from Vesta on your credit
                  card bill or bank statement?
                </b>
              </h5>
              <p id="address">
                <span className="icon-location"></span>
                &nbsp; &nbsp;
                <a
                  id="location-link"
                  href="https://www.google.com/maps/place/Vesta+Corporation/@45.417155,-122.7353317,17z/data=!3m1!4b1!4m5!3m4!1s0x54950cdc25f26997:0xd7584615775a3828!8m2!3d45.417155!4d-122.733143"
                >
                  5400 Meadows Road, 5th Floor, Lake Oswego, OR 97035
                </a>
              </p>
              <p id="phone">
                <span className="icon-phone"></span>
                &nbsp; &nbsp;1-888-440-9956{" "}
                <span className="highlights">Americas</span>
              </p>
              <p id="second-phone">
                <span className="icon-phone"></span>
                &nbsp; &nbsp;353 (0)42 939 4600{" "}
                <span className="highlights">Europe</span>
              </p>
              <p id="email">
                <span className="icon-email"></span>
                &nbsp; &nbsp;trustvesta@trustvesta.com{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Customers;
