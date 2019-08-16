const Stellar = require("stellar-sdk");
const { TimeoutInfinite } = require("stellar-base");

const TEST_SERVER_URL = "https://horizon-testnet.stellar.org";
const testServer = new Stellar.Server(TEST_SERVER_URL);

module.exports = {
  Stellar,
  server: testServer,
  SERVER_URL: TEST_SERVER_URL,
  TimeoutInfinite
};
