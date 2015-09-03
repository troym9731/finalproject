CREATE DATABASE `bandjam`;

CREATE TABLE `user` (
 `user_id` INTEGER NOT NULL AUTO_INCREMENT,
 `first_name` VARCHAR(20),
 `last_name` VARCHAR(20),
 `address` VARCHAR(30),
 `zipcode` INTEGER,
 `email` VARCHAR(20),
 `password` VARCHAR(20),
 `genre` VARCHAR(10),
 `image` VARCHAR(100),
 `description` VARCHAR(1000),
 PRIMARY KEY (`user_id`)
);

CREATE TABLE `band` (
 `band_id` INTEGER NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(20),
 `image` VARCHAR(100),
 `members_needed` INTEGER,
 `address` VARCHAR(30),
 `zipcode` INTEGER,
 `genre` VARCHAR(10),
 `serious_level` VARCHAR(30),
 `owner` INTEGER,
 PRIMARY KEY (`band_id`)
);