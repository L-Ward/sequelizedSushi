### Schema

CREATE DATABASE sushi_db;
USE sushi_db;

CREATE TABLE sushi
(
	id int NOT NULL AUTO_INCREMENT,
	sushi_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (id)
);
