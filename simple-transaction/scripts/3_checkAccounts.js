const Stellar = require('stellar-sdk')
const util = require('util')
const pairs = require('../pairs.json')

const server = new Stellar.Server('https://horizon-testnet.stellar.org')

Stellar.Network.useTestNetwork()

const checkAccounts = async pairs => {

    const accounts = await Promise.all(
        pairs.map( async (pair) => await server.loadAccount(pair.publicKey) )
    )

    return accounts.map(account => ({
        accountId: account.id,
        balances: account.balances.map( balance => ({
            type: balance.asset_type,
            balance: balance.balance
        }))
    }))

}

checkAccounts(pairs)
    .then((accounts) => console.log(util.inspect(accounts, false, null)))
    .catch((e) => { console.error(e); throw e})