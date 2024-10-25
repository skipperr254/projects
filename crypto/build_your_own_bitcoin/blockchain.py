import hashlib
import json
from time import time

# Each block has an index, a timestamp (unix time), list of transactions, proog and hash of previous block

class Blockchain():
	def __init__(self):
		self.chain = []
		self.current_transactions = []

		#create the genesis block
		self.new_block(previous_hash=1, proof=100)

	def proof_of_work(self, last_proof):
		"""
		Simple Proof of Work Algorithm.
		- Find a number p' such that hash(pp') contains leading 4 zeroes, where p is the previous p'.
		- p is the previous proof, and p' is the new proof
		:param last_proof: <int> Hash of the previous block
		:return: <int>
		"""

		proof = 0
		while self.valid_proof(last_poof, proof) is False:
			proof += 1

	@staticmethod
	def valid_proof(last_proof, proof):
		"""
		Validates the Proof: Does hash(last_proof, proof) containe 4 leading zeroes?
		:param last_proof: <int> Previous proof
		:param proof: <int> Current proof
		:return: <bool> True if correct, False if not
		"""

		guess = f'{last_proof}{proof}'.encode()
		guess_hash = hashlib.sha256(guess).hexdigest()
		return guess_hash[:4] == "0000"

	def new_block(self, previous_hash=None, proof): # creates a new block and adds it to the chain
		"""
		create a new block in the blockchain
		:param previous_hash: (Optional) <str> The hash of the previous block
		:param proof: <int> The proof given by the Proof of Work Algorithm
		:return: <dict> New Block
		"""

		block = {
			'index': len(self.chain) + 1,
			'timestamp': time(),
			'transactions': self.current_transactions,
			'proof': proof,
			'previous_hash': previous_hash or self.hash(self.chain[-1])
		}

		# Reset the current list of transactions
		self.current_transactions = []

		self.chain.append(block)
		return block

	def new_transaction(self, sender, recipient, amount): # creates a new transaction and adds it to the list of transactions
		"""
		creates a new transaction to go into the next mined block
		:param sender: <str> address of the sender
		:param recipient: <str> address of the recipient
		:param amount: <int> the amount of the transaction
		return: <int> the index of the block that will hold this transaction
		"""

		self.current_transactions.append({
			'sender': sender,
			'recipient': recipient,
			'amount': amount
			})

		return self.last_block['index'] + 1

	@staticmethod
	def hash(block): # hashes a block
		"""
		Creates a SHA-256 has of a Block
		:param block: <dict> Block
		:return: <str> The hash
		"""

		# First make sure the dictionary is ordered to avoid inconsistent hashes
		block_string = json.dumps(block, sort_keys=True).encode()
		return hashlib.sha256(block_string).hexdigest()

	@property
	def last_block(self): # returns the last block in the chain
		return self.chain[-1]