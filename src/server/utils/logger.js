/* eslint no-console: 0 */
const logger = (message) => {
  const date = new Date();
  const timestamp = date.toUTCString();

  console.log(`${timestamp}: ${message}`);
};

module.exports = logger;
