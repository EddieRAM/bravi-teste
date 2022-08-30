CREATE DATABASE bravi_contact_manager;
USE bravi_contact_manager;
CREATE TABLE People(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `first_name` VARCHAR(50),
    `last_name`VARCHAR(50)
);

CREATE TABLE Contacts(
    `contact_id` INT NOT NULL PRIMARY KEY,
    `phone` VARCHAR(50),
    `email` VARCHAR(50),
    `whatsapp` VARCHAR(50),
    `people_id` INT NOT NULL,
    FOREIGN KEY(people_id) REFERENCES People(id)
);

CREATE TABLE Users(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL
);

INSERT INTO Users(username, password) VALUES('admin', 'admin');