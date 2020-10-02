import React from "react";
import { APIContext } from "./../components/APIContext";

class Redirect extends React.Component {
  constructor(props) {
    super();
    this.state = { ...props };
  }

  componentWillMount() {
    const pathName = this.props.location.pathname;
    const DOCUMENTATION_URL = APIContext.vestaConfig.ui.documentationUrl;
    const PUBLIC_URL = APIContext.vestaConfig.ui.url;
    if (pathName === "/api-credentials")
      global.window &&
        (global.window.location.href =
          DOCUMENTATION_URL + "/payment-guarantee/onboarding/#api-credentials");
    else if (pathName === "/token")
      global.window &&
        (global.window.location.href =
          DOCUMENTATION_URL + "/payment-guarantee/onboarding/#tokenization");
    else if (pathName === "/support/developers")
      global.window &&
        (global.window.location.href = PUBLIC_URL + "/release-notes");
    else global.window && (global.window.location.href = DOCUMENTATION_URL);
  }

  render() {
    return <div>Redirecting...</div>;
  }
}

export default Redirect;
