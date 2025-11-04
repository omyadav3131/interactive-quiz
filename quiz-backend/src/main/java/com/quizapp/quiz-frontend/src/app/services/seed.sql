CREATE DATABASE interactive_quiz;
USE interactive_quiz;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  password VARCHAR(255),
  total_points INT DEFAULT 0,
  level INT DEFAULT 1
);

CREATE TABLE questions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT,
  optionA VARCHAR(255),
  optionB VARCHAR(255),
  optionC VARCHAR(255),
  optionD VARCHAR(255),
  correctOption CHAR(1),
  level INT DEFAULT 1
);

INSERT INTO questions (text, optionA, optionB, optionC, optionD, correctOption, level)
VALUES ('Capital of India?', 'Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'B', 1);
