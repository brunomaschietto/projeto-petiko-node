-- Active: 1678488339882@@127.0.0.1@3306
CREATE TABLE
    pallet(
        cpf TEXT UNIQUE NOT NULL,
        telefone TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        imagem TEXT NOT NULL
    );



INSERT INTO pallet(cpf, telefone, email, imagem)
VALUES
("12345555891", "35900001111", "johndoe@email.com", "image.jpg"),
("73281946372", "83274236278", "james@email.com", "image.jpg"),
("01923829381", "73824672819", "lebron@email.com", "image.jpg"),
("42535163781", "99102839012", "eminem@email.com", "image.jpg");

SELECT * FROM pallet;