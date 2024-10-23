# The Chain
A minimal block chain to see, understand and learn how the technology works.

Starts with a blockchain class with:
1. A list of all the blocks within the chain, `chain`.
2. A list of all transactions that happen in the blockchain, `current_transactions`. The list resets after every new block is created and added to the chain.

## How it works.
When a transaction happens, the `new_transaction` method is called with details about the sender, recipient and the amount of the transaction and adds to the list of `current_transactions`. It returns the last block in the chain.

