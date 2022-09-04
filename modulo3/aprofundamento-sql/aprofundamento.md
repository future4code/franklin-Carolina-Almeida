###ex1
a) ALTER TABLE Actor DROP COLUMN salary; -> apaga a coluna salary
b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); -> altera o nome de "gender" para "sex", 6 caracteres
c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); -> mantém o nome "gender" e altera para 255 caracteres
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

###ex2
a) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2022-09-04" WHERE id = "003";
b) UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
   UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
c) UPDATE Actor SET name = "Moacyr Franco", birth_date = "2022-09-04", salary = 890000, gender = "male" WHERE id = "005";
d) usei (UPDATE Ines SET name = "Erica Monteiro" WHERE name = "Jessica Lima";) "Ines" é uma tabela que não existe, logo o DBeaver apresentou o seguinte erro: SQL Error [1146] [42S02]: Table 'franklin-carolina-almeida.Ines' doesn't exist

###ex3
a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

###ex4
a) SELECT MAX(salary) FROM Actor;
b) SELECT MIN(salary) FROM Actor WHERE gender = "female";
c) SELECT COUNT(*) FROM Actor WHERE gender = "female"
d) SELECT SUM(salary) FROM Actor;

###ex5
a) na query "SELECT COUNT(*), gender FROM Actor GROUP BY gender;" foi retornado quantos atores do genero female e quantos do genero male, existiam na tabela
b) SELECT id, name FROM Actor ORDER BY name DESC;
c) SELECT * FROM Actor ORDER BY salary;
d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

###ex6
a) ALTER TABLE Movie ADD playing_limit_date DATE;
b) ALTER TABLE Movie CHANGE rating rating FLOAT;
c) UPDATE Movie SET playing_limit_date = "2019-09-04" WHERE id = "001"
UPDATE Movie SET playing_limit_date = "2023-09-04" WHERE id = "002"
d) DELETE FROM Movie WHERE id = "001"