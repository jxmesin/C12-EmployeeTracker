use employees;

INSERT INTO department
    (name)
VALUES 
    ('Human Resources'),
    ('Marketing'),
    ('Information Technology'),
    ('Accounting');

INSERT INTO role  
    (title, salary, department_id)
VALUES 
    ('HR Manager', 100000, 1),
    ('HR', 50000, 1)
    ('Marketing Director', 140000, 2),
    ('Sales', 65000, 2),
    ('IT Director', 195000, 3),
    ('Desktop Support', 100000, 3),
    ('Account Manager', 110000, 4),
    ('Accountant', 90000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
('Lee', 'Taeyong', 1, NULL)
('Jung', 'Jaehyun', 2, 1)
('Moon', 'Taeil', 3, NULL)
('John', 'Jun Suh', 4, 3)
('Nakamoto', 'Yuta', 4, 3)
('Kim', 'Dong Young', 5, NULL)
('Kim', 'Jungwoo', 6, 5)
('Mark', 'Lee', 6, 5)
('Lee', 'Dong Hyuck', 7, NULL)
('Dong', 'Si Cheng', 7, 8)