CREATE DATABASE send_email_newsletter;

CREATE TABLE users (
	id serial PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL UNIQUE
);
