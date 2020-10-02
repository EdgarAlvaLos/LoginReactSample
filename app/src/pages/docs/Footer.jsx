import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="offset-md-2">
        <div className="footer">
          <div className="container-fluid" id="footer-container">
            <div className="row">
              <div className="col-lg-2 col-md-6  mb-4">
                <a id="location-link" href="https://trustvesta.com/">
                  <div id="logoFooter"></div>
                </a>
              </div>
              <div className="col-lg-2 col-md-6 mb-4" id="description-col">
                <a
                  className="footerText"
                  href="https://trustvesta.com/what-we-do/"
                >
                  <h6 className="footerTitle">WHAT WE DO</h6>
                </a>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/what-we-do/how-we-do-it/"
                  >
                    How we do it
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/what-we-do/solution/"
                  >
                    Solutions
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/what-we-do/solution/payment-guarantee/"
                  >
                    Payment Guarantee
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/what-we-do/solution/payment-protect/"
                  >
                    Payment Protect
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/what-we-do/solution/account-protect/"
                  >
                    Account Protect
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/what-we-do/benefits/"
                  >
                    Benefits
                  </a>
                </li>
              </div>
              <div className="col-lg-2 col-md-6 mb-4" id="partnerts-col">
                <div>
                  <a
                    className="footerText"
                    href="https://trustvesta.com/who-we-work-with/"
                  >
                    <h6 className="footerTitle">WHO WE WORK WITH</h6>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 mb-4" id="company-col">
                <a
                  className="footerText"
                  href="https://trustvesta.com/company/"
                >
                  <h6 className="footerTitle">COMPANY</h6>
                </a>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/company/about-us/"
                  >
                    About
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/company/about-us/the-team/"
                  >
                    Team
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://trustvesta.com/careers/"
                  >
                    Careers
                  </a>
                </li>
              </div>
              <div className="col-lg-2 col-md-6 mb-4" id="contact-col">
                <a
                  className="footerText"
                  href="https://trustvesta.com/contact/"
                >
                  <h6 className="footerTitle">CONTACT</h6>
                </a>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="mailto:trustvesta@trustvesta.com"
                  >
                    trustvesta@trustvesta.com
                  </a>
                </li>
                <li className="footer-li">
                  <a className="footerText" href="tel:5037902500">
                    503-790-2500
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    className="footerText"
                    href="https://www.google.com/maps/place/Vesta+Corporation/@45.417155,-122.7353317,17z/data=!3m1!4b1!4m5!3m4!1s0x54950cdc25f26997:0xd7584615775a3828!8m2!3d45.417155!4d-122.733143"
                  >
                    <p className="footerText">
                      {" "}
                      5400 Meadows Road, 5th Floor Lake Oswego, OR 97035 USA
                    </p>
                  </a>
                </li>
              </div>
              <div className="col-lg-1  col-md-2 mb-4" id="twitter-col">
                <a id="location-link" href="https://twitter.com/trustvesta">
                  <div id="logoTwitter"></div>
                </a>
              </div>
              <div className="col-lg-1 col-md-2 mb-4" id="linked-col">
                <a
                  id="location-link"
                  href="https://www.linkedin.com/company/vestacorporation/"
                >
                  <div id="logoLinked"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
