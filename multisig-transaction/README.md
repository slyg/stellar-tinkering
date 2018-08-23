## Sequence description

### 1. Create a pair of secret/publickey -> PairA and PairB

### 2. Ask friendbot to fund the accounts (10000 XLM by default) -> Account A and Account B

> NB: An account needs to be funded with a minimum amount of XLM to be picked up by the network.

### 3. Account A changes itself such as :

- It needs 2 signatures for payments
- It needs the 2<sup>nd</sup> signee to be Account B

Submit this change to the network.

### 4. Account A creates a pre-signed transaction:

- Create a payment transaction from Account A to Account B,
- Make Account A sign it
- Save the transaction as a binary file


> NB:
>
> - At this stage, the transaction is not submitted to the network, as it would be invalid (not signed by all signees).
> - The objective of saving the transaction as a file illustrates a real usecase where signees are not co-located and may act in different times.

### 5. Account B signs and submits the payment transaction

- Load the payment transaction
- Recreate the transaction object
- Make Account B sign the transaction

Submit this transaction to the network.

### 6. Verify the balances of Account A and Account B 
