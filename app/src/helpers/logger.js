import { APIContext } from "./../components/APIContext";

const Logger = {
  /**
   * This function prints in browser console an error message
   *
   * @param {string} err Error string message
   * @returns {null} No returns a value
   */
  error(logger = undefined, err) {
    if (logger !== undefined) {
      console.log("[ERROR] " + logger + ". See below: ", "color: red;");
      console.log(err);
    } else console.log(err);
  },
  /**
   * This function prints in browser console a log message
   *
   * @param {string} msg Log string message
   * @returns {null} No returns a value
   */
  log(logger = undefined, msg) {
    if (APIContext.vestaConfig.ui.debugMode) {
      if (logger !== undefined) {
        console.log("%c[DEBUG] " + logger + ". See below: ", "color: blue;");
        console.log(msg);
      } else console.log(msg);
    }
  },
};

export default Logger;
