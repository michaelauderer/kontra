var kontra = (function(kontra, document) {
  /**
   * Set up the canvas.
   * @memberOf kontra
   *
   * @param {object} options - Options for the game.
   * @param {string|Canvas} options.canvas - ID string or Canvas element to draw the game on.
   */
  kontra.init = function init(options) {
    options = options || {};

    if (kontra.isString(options.canvas)) {
      this.canvas = document.getElementById(options.canvas);
    }
    else if (kontra.isCanvas(options.canvas)) {
      this.canvas = canvas;
    }
    else {
      this.canvas = document.getElementsByTagName('canvas')[0];

      if (!this.canvas) {
        var error = new ReferenceError('No canvas element found.');
        kontra.log.error(error, 'You must provide a canvas element for the game.');
        return;
      }
    }

    this.context = this.canvas.getContext('2d');
    this.gameWidth = this.canvas.width;
    this.gameHeight = this.canvas.height;
  };

  /**
   * Object for logging to the client.
   */
  kontra.log = {};

  /**
   * Throw an error message to the user with readability formating.
   * @memberOf kontra
   *
   * @param {Error}  error - Error object.
   * @param {string} message - Error message.
   */
  kontra.log.error = function logError(error, message) {
    error.originalMessage = error.message;
    error.message = 'Kontra: ' + message + '\n\t' + error.stack;
    console.error(error.message);
  };

  /**
   * Noop function.
   * @memberOf kontra
   */
  kontra.noop = function noop() {};

  /**
   * Determine if a value is an Array.
   * @memberOf kontra
   *
   * @param {*} value - Value to test.
   *
   * @returns {boolean}
   */
  kontra.isArray = Array.isArray;

  /**
   * Determine if a value is a String.
   * @memberOf kontra
   *
   * @param {*} value - Value to test.
   *
   * @returns {boolean}
   */
  kontra.isString = function isString(value) {
    return typeof value === 'string';
  };

  /**
   * Determine if a value is a Number.
   * @memberOf kontra
   *
   * @param {*} value - Value to test.
   *
   * @returns {boolean}
   */
  kontra.isNumber = function isNumber(value) {
    return typeof value === 'number';
  };

  /**
   * Determine if a value is an Image.
   * @memberOf kontra
   *
   * @param {*} value - Value to test.
   *
   * @returns {boolean}
   */
  kontra.isImage = function isImage(value) {
    return value && value.nodeName.toLowerCase() === 'img';
  };

  /**
   * Determine if a value is a Canvas.
   * @memberOf kontra
   *
   * @param {*} value - Value to test.
   *
   * @returns {boolean}
   */
  kontra.isCanvas = function isCanvas(value) {
    return value && value.nodeName.toLowerCase() === 'canvas';
  };

  return kontra;
})(kontra || {}, document);