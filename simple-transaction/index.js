const axios = require('axios')
const express = require('express')
const Stellar = require('stellar-sdk')

const app = express()
const server = new Stellar.Server('https://horizon-testnet.stellar.org')

Stellar.Network.useTestNetwork()

const pairA = Stellar.Keypair.random()
const pairB = Stellar.Keypair.random()
const pairs = [pairA, pairB]

app.get('/seed', async (req, res) => {
    
    await Promise.all(
        pairs.map(
            async (pair) => await axios.get('/friendbot', {
                baseURL: 'https://horizon-testnet.stellar.org/',
                params: { addr: pair.publicKey() }
            })
        )
    )

    res.send('ok')
})

app.get('/accounts', async (req, res) => {

    const accounts = await Promise.all(
        pairs.map( async (pair) => await server.loadAccount(pair.publicKey()) )
    )

    accounts.forEach(account => 
        account.balances.forEach((balance) => {
            res.write(`Account: ${account.id.slice(40)} | Type: ${balance.asset_type} | Balance: ${balance.balance} \n\n`)
        })
    )

    res.end()
})

app.get('/transferTo/B', async (req, res) => {

    const paymentToB = {
        destination: pairB.publicKey(),
        asset: Stellar.Asset.native(),
        amount: '30.0000001'
    }

    const accountA = await server.loadAccount(pairA.publicKey())

    const transaction = new Stellar.TransactionBuilder(accountA)
        .addOperation(Stellar.Operation.payment(paymentToB))
        .build()

    transaction.sign(pairA)

    await server.submitTransaction(transaction)

    res.send('ok')
})

app.listen(3000, () => console.log('Listening on http://localhost:3000/'))
