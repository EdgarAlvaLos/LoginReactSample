import axios from "axios";
import Logger from "./logger";

const VestaProxy = {
  getClassName: () => {
    return "vesta-proxy";
  },
  /**
   * This function sends POST request to MT
   *
   * @param {string} serviceName Service name
   * @param {string} serviceUrl MT Service Url
   * @param {object} options Object with params, errorhandler and callback functions
   * @returns {null} No returns
   */
  Invoke: (serviceName, serviceUrl, options) => {
    options = options || {};
    const params = options.params || {},
      callback = options.callback || function () {},
      onError = options.onError || this.ErrorHandler;
    axios
      .post(serviceUrl + "/" + serviceName, params)
      .then(function (response) {
        Logger.log(VestaProxy.getClassName(), response);
        let data = response.data;
        callback(data);
      })
      .catch(function (error) {
        Logger.error(VestaProxy.getClassName(), error);
        onError(error, serviceName);
      });
  },
  Consume: (endpointUrl, options, method = "post") => {
    options = options || {};
    let params = options.params || {};
    const callback = options.callback || function () {},
      onError = options.onError || this.ErrorHandler;
    if (method === "post") {
      const qsParams = new URLSearchParams();
      for (var key in params) {
        qsParams.append(key, params[key]);
      }
      axios
        .post(endpointUrl, qsParams)
        .then(function (response) {
          Logger.log(VestaProxy.getClassName(), response);
          let data = response.data;
          callback(data);
        })
        .catch(function (error) {
          Logger.error(VestaProxy.getClassName(), error);
          onError(error, endpointUrl);
        });
    } else {
      axios
        .get(endpointUrl)
        .then(function (response) {
          Logger.log(VestaProxy.getClassName(), response);
          let data = response.data;
          callback(data);
        })
        .catch(function (error) {
          Logger.error(VestaProxy.getClassName(), error);
          onError(error, endpointUrl);
        });
    }
  },
  Consume2: (endpointUrl, options, method = "post") => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    return axios.get(endpointUrl, config);
  },
  /**
   * This function registers the error message in browser console
   *
   * @param {object} data Response data
   * @param {string} serviceName Service name
   * @returns {null} No returns
   */
  ErrorHandler: (data, serviceName) => {
    if (data && "ResponseCode" in data) {
      console.log(
        "Vesta Service Error - " +
          serviceName +
          " (" +
          data.ResponseCode +
          ") : " +
          data.ResponseText
      );
    } else {
      console.log("Unexpected HTTP Error - " + serviceName + ": " + data);
    }
  },
};

export default VestaProxy;
