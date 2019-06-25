const fs = require("fs").promises;
const { Stellar } = require("./sdk");

const loadTx = async path => {
  const fundsReleaseTx = await fs.readFile(path, { encoding: "base64" });

  const buffer = Buffer.from(fundsReleaseTx, "base64");

  const envelope = Stellar.xdr.TransactionEnvelope.fromXDR(buffer, "base64");

  const transaction = new Stellar.Transaction(envelope);

  return transaction;
};

const saveTx = async (filename, transaction) =>
  fs.writeFile(filename, transaction.toEnvelope().toXDR("base64"), {
    encoding: "base64"
  });

module.exports = { loadTx, saveTx };
