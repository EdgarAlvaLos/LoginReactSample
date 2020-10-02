
import VestaProxy from "./vesta-proxy";
import { APIContext } from "./../components/APIContext";

const Utils = {
  IsString: (str) => {
    return typeof str === "string";
  },
  /**
   * This function capitalizes the first letter for a string
   *
   * @param {string} stringValue String value
   * @returns {string} String with first letter upper cased
   */
  CapitalizeFirstLetter: (stringValue) => {
    return stringValue[0].toUpperCase() + stringValue.slice(1);
  },
  /**
   * This function capitalizes the first letter for a string
   *
   * @param {object} vestaConfig This objects comes from window.VestaConfig.
   * This object is created in proxy WEB-INF/scripts/config.jsp and those are generated with SwaggerUI values in properties file.
   * In case that the system is in development mode (running with nodejs), the config gets the info fron env.development.
   * @returns {null} No returns
   */
  UpdateVestaConfig: (vestaConfig) => {
    if (vestaConfig !== undefined) {
      //UI configuration
      APIContext.vestaConfig.proxy.url = vestaConfig.Proxy.URL;
      APIContext.vestaConfig.ui.debugMode = vestaConfig.UI.DebugMode === "true";
      APIContext.vestaConfig.ui.url = vestaConfig.UI.URL;
      APIContext.vestaConfig.ui.path = vestaConfig.UI.Path;
      APIContext.vestaConfig.ui.documentationUrl =
        vestaConfig.UI.DocumentationURL;
      APIContext.vestaConfig.ui.supportUrl = vestaConfig.UI.SupportURL;
      APIContext.vestaConfig.ui.vPortalLoginUrl =
        vestaConfig.UI.VPortalLoginURL;
      APIContext.vestaConfig.ui.apiBasePathURL = vestaConfig.UI.APIBasePathURL;

    } else {
      //UI configuration
      APIContext.vestaConfig.proxy.url = process.env.REACT_APP_MT_URL;
      APIContext.vestaConfig.ui.debugMode = process.env.REACT_APP_DEBUG_MODE;
      APIContext.vestaConfig.ui.url = process.env.PUBLIC_URL;
      APIContext.vestaConfig.ui.path = process.env.REACT_APP_BASEPATH;
      APIContext.vestaConfig.ui.documentationUrl =
        process.env.REACT_APP_DOCUMENTATION_URL;
      APIContext.vestaConfig.ui.supportUrl =
        process.env.PUBLIC_URL + "/support";
      APIContext.vestaConfig.ui.vPortalLoginUrl =
        process.env.REACT_APP_VPORTAL_LOGIN_URL;
      APIContext.vestaConfig.ui.apiBasePathURL =
        process.env.REACT_APP_API_BASEPATH_URL;


      APIContext.releaseNotesUrl = process.env.REACT_APP_RELEASENOTES_URL;
    }
  },
  CreateServiceCalls: () => {
    //Create proxy methods to be used in the application. After that those
    //will be accesible en APIContext
    const proxyServiceCalls = [
      "AccountNumberToPermanentToken",
      "AuthResult",
      "ChargeAccountToTemporaryToken",
      "ChargePaymentFraudRequest",
      "ChargePaymentRequest",
      "ChargebackSubmit",
      "CheckPaymentFraudRequest",
      "CheckPaymentRequest",
      "Disposition",
      "GetCardInfo",
      "GetPaymentDetail",
      "GetSessionTags",
      "GuaranteePayment",
      "ReverseCheckPaymentRequest",
      "ReversePaymentRequest",
      "ValidateAccountNumber",
    ];
    const serviceUrl = APIContext.vestaConfig.proxy.url;
    let serviceCalls = {};
    proxyServiceCalls.forEach(function (methodName) {
      // Capitalize the first letter for service call,
      //var serviceName = methodName.charAt(0).toUpperCase() + methodName.substring(1);
      //methodName.charAt(0).toUpperCase() + methodName.substring(1);
      const serviceName = methodName;
      // add functions
      serviceCalls[methodName] = function (options) {
        return VestaProxy.Invoke(serviceName, serviceUrl, options);
      };
    });
    serviceCalls["GetReleaseNotes"] = function (options) {
      return VestaProxy.Consume(APIContext.releaseNotesUrl, options, "get");
    };
    serviceCalls["CustomerSave"] = function (options) {
      return VestaProxy.Consume(
        APIContext.vestaConfig.ui.url + "/core/customer/save",
        options,
        "post"
      );
    };
    APIContext.serviceCalls = serviceCalls;
  },
  /**
   * This function convert the language name to prism code language. More info: https://prismjs.com/index.html#supported-languages
   *
   * @param {string} language Language name
   * @returns {string} Prism language code
   */
  GetPrismLanguageCode(language) {
    language = language.toLowerCase();
    if (language === "c#") return "cpp";
    if (language === "c++") return "cpp";
    if (language === "curl") return "bash";
    if (language === "react") return "jsx";
    if (language === "sample request") return "json";
    if (language === "sample response") return "json";
    else return language;
  },
};

export default Utils;
