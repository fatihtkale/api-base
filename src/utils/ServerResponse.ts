
/**
 * @method SendSuccess
 * @param { any } message
 * @param { any } response
 * @param { number } statusCode
 * @returns {object} { messsage, response, statusCode } 
 * @description Send success to the frontend
 */
export const SendSuccess = (message: any, response: any, statusCode = 200) => {
    return { message, response, statusCode };
  };
  
  /**
   * @method SendError
   * @param { any } message
   * @param { any } response
   * @param { number } statusCode
   * @returns {object} { messsage, response, statusCode } 
   * @description Send error to the frontend
   */
  export const SendError = (message: any, response?: string, statusCode = 400) => {
    return { message, response, statusCode };
  };
  
  /**
   * @method isEmpty
   * @param {String | Number | Object} value
   * @returns {Boolean} true & false
   * @description this value is Empty Check
   */
  export const IsEmpty = (value: string | number | object): boolean => {
    if (value === null) {
      return true;
    } else if (typeof value !== "number" && value === "") {
      return true;
    } else if (typeof value === "undefined" || value === undefined) {
      return true;
    } else if (
      value !== null &&
      typeof value === "object" &&
      !Object.keys(value).length
    ) {
      return true;
    } else {
      return false;
    }
  };
  