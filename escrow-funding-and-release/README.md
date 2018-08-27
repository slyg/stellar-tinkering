# Escrow account funding and funds release

This sequence of scripts executes an over-detailed scenario whereby (in a nutshell):

- A(lice) funds an escrow account with a fund release multisig transaction towards B(ob)
- Alice signs the funds release transaction
- Bob signs the funds release transaction and submits it

-> Bob received the funds

In reality this scenario is a bit more complex as the different accounts have to be created/funded.

Moreover, to mimic real use case, Alice and Bob do not sign any transaction at the same time. So to save the different keypairs and transactions, a few files a created while running those scripts.

## Here is the detail

### 1. Create pairs

Just create Alice, Bob, and an Escrow key pairs.

### 2. Fund accounts

Alice and Bob accounts are provisioned with 10K XLM by the testnet [friendbot](https://www.stellar.org/developers/horizon/reference/tutorials/follow-received-payments.html#funding-your-account).

### 3. Alice creates the Escrow Account

She also funds it with 2.5 XLM as per the [protocol fees constraints](https://www.stellar.org/developers/guides/concepts/fees.html#minimum-account-balance).

### 4. Escrow account configuration

The escrow account is configured so that only Alice and Bob's signatures are needed to validate a transaction.

### 5. Alice sends XLM to the Escrow account

Even though this could have been done at step no 3. But I separated the funding from the creation of the account.

### 6. Create the fund release transaction

A transaction of _N_ XLM is created (but not signed) then saved as base64 binary file.

### 7. Alice signs the transaction 

Alice loads the transaction, signs it, and saves it as base64 binary file.

### 8. Bob signs and submits the transaction

Bob loads the transaction, signs it, and submits it to the network.

### 9. Verify accounts balances
