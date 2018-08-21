const axios = require('axios')
const Stellar = require('stellar-sdk')
const pairs = require('../pairs.json')

Stellar.Network.useTestNetwork()

const fundAccounts = async (pairs) => await Promise.all(
    pairs.map(
        async (pair) => await axios.get('/friendbot', {
            baseURL: 'https://horizon-testnet.stellar.org/',
            params: { addr: pair.publicKey }
        })
    )
)

console.log(pairs)

fundAccounts(pairs)
    .then(() => console.log('ok'))
    .catch((e) => { console.error(e); throw e})