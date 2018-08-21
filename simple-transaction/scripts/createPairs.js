const fs = require('fs')
const Stellar = require('stellar-sdk')

Stellar.Network.useTestNetwork()

const pair = Stellar.Keypair.random();

fs.writeFileSync(
    "pairs.json",
    JSON.stringify([
        {
            secretSeed: pair.secret(),
            publicKey: pair.publicKey(),
        }
    ])
)
