CREATE DATABASE exercicio2_knexjs;

CREATE TABLE usuarios (
    id serial primary key,
    nome text not null,
    email text not null,
    senha text not null
);