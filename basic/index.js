const StellarSdk = require('stellar-sdk')

StellarSdk.Network.useTestNetwork()

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org')

// const transactionsListFor = async (accountAddress) => {
//     const transactions = server
//         .transactions()
//         .forAccount(accountAddress)

//     try {
//         const { records } = await transactions.call()
//         console.log(records)
//         // console.log(records.map(record => record.memo))
//     } catch (e) {
//         console.log(e)
//     }
    
// }

// transactionsListFor('GASOCNHNNLYFNMDJYQ3XFMI7BYHIOCFW3GJEOWRPEGK2TDPGTG2E5EDW')


var es = server.payments()
  .cursor('now')
  .stream({
    onmessage: function (message) {
      console.log(message.type);
    }
  })