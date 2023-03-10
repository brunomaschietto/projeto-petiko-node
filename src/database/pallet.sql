-- Active: 1678488339882@@127.0.0.1@3306
CREATE TABLE
    pallet(
        cpf TEXT UNIQUE NOT NULL,
        telefone TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        imagem TEXT NOT NULL
    );