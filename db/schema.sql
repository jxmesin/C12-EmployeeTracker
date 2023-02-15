DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE role(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    deparmtment_id INT UNSIGNED NOT NULL,
    INDEX dep_ind (department_id),
    CONSTANINT fk_department FOREIGN KEY (deparmtment_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER(10) NULL,
    PRIMARY KEY (id)
)