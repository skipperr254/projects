from hashlib import sha256

x = 5
y = 0

while sha256(f'{x * y}'.encode()) != "0":
    y += 1

print(y)
