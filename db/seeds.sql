INSERT INTO department (department_name)
VALUES  ("Reception"),
        ("Sales"),
        ("Accounting"),
        ("Customer Service"),
        ("Operations"),
        ("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUES  ("Receptionist", 80000, 1),
        ("Manager", 23000, 2),
        ("Co-Manager", 53000, 2),
        ("Operations Manager", 64000, 2),
        ("Salesman", 12000, 2),
        ("Head Accountant", 45000, 3),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Scott", 1, 2),
        ("Jimmy", "Lawrence", 2, null),
        ("Josh", "Turner", 3, 2),
        ("Sam", "Smith", 4, 2),
        ("Preston", "Freight", 5, 2),
        ("Grant", "Insole", 5, 2),



