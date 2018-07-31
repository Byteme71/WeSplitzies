CREATE DATABASE WeSplitzies;

USE WeSplitzies;

SELECT * FROM Bills;

SELECT * FROM Qrcodes; 

INSERT INTO Qrcodes (qr_code) VALUES ("12345");

INSERT INTO Bills (items, price, qty, claimed, QrcodeId) VALUES ("french fries", 5, 1, 1, 1);

INSERT INTO Bills (items, price, qty, claimed, QrcodeId) VALUES ("burgers", 10, 2, 1, 1);

INSERT INTO Bills (items, price, qty, claimed, QrcodeId) VALUES ("ice cream", 3, 1, 1, 1);

INSERT INTO Bills (items, price, qty, claimed, QrcodeId) VALUES ("pizza", 16, 4, 2, 1);

INSERT INTO Bills (items, price, qty, claimed, QrcodeId) VALUES ("garlic knots", 8, 1, 2, 1);