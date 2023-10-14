CREATE DATABASE catalogo_pokemons;

CREATE TABLE usuarios (
    id serial primary key,
    nome text not null,
    email text not null unique,
    senha text not null
);

CREATE TABLE pokemons (
    id serial primary key,
    usuario_id integer references usuarios(id),
    nome text not null,
    habilidades text not null,
    imagem text,
    apelido text
);