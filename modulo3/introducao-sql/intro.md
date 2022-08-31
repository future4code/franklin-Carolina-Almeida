#ex1 <h1>
a) CREATE TABLE: usado para criar a tabela
   VARCHAR: strings de no máximo n de caracteres
   PRIMARY KEY: chave primária, identificador único (obrigatório)
   NOT NULL: o dado inserido não pode ser nulo
   DATE: representa uma data (YYYY-MM-DD)
b) SHOW DATABASES: mostra banco de dados
   SHOW TABLES: mostra tabelas
c) DESCRIBE: apresenta toda a configuração realizada na tabela

#ex2 <h1>
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
   VALUES(
    "002"
    "Glória Pires"
    1200000
    "1963-08-23"
    "female"
   );
b) SQL Error [1062] [23000]: Duplicate entry '001' for key 'PRIMARY' (tradução: 
Entrada duplicada '002' para a chave 'PRIMARY'), aconteceu esse erro por causa do: id VARCHAR(255) PRIMARY KEY, que só permite um ID único para cada iserção.

c) SQL Error [1136] [21S01]: Column count doesn't match value count at row 1 (tradução: A contagem de colunas não corresponde à contagem de valores na linha 1), aconteceu esse erro porque foi informado apenas (id,name,salary) e inserido id, name, salary, birth e gender.

d) SQL Error [1364] [HY000]: Field 'name' doesn't have a default value (tradução: O campo 'nome' não tem um valor padrão), aconteceu porque o campo name não pode ser nulo, e na inserção dos valores, ele não foi informado.

e) SQL Error [1292] [22001]: Data truncation: Incorrect date value: '1950' for column 'birth_date' at row 1 (tradução: truncamento de dados: valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1), a data deve ser inserida entre aspas.

#ex3 <h1>
a) SELECT * from Actor WHERE gender = "female"
b) SELECT salary from Actor WHERE name = "Tony Ramos"
c) SELECT * from Actor WHERE gender = "invalid" (apareceu a tabela vazia, pois não existe nenhum gênero "invalid")
d) SELECT id, name, salary from Actor WHERE salary <= 500000
e) SQL Error [1054] [42S22]: Unknown column 'nome' in 'field list' (tradução: Coluna desconhecida 'nome' na 'lista de campos) o nome da coluna é "name" e não "nome"

#ex4 <h1>
a) SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000; serve para mostrar na tabela todos os dados de um ator que o nome comece com a letra 'A' ou 'J' e tenha salário maior que 300000.
b) SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
c) SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
d) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

#ex5 <h1>
a) CREATE TABLE Movie ( 
    **//criando uma nova tabela chamada "Movie"**

	id VARCHAR(255) PRIMARY KEY, 
    **//id com ate 255 caracteres variados, usado como PK**

    title VARCHAR(255) NOT NULL UNIQUE, 
    **//titulo unico, não pode ter nenhum dado de título igual e não pode ser nulo**

    synopsis TEXT NOT NULL, 
    **//sinopse com tipo "text" e não "varchar" não tem limite de caracteres, não pode ser nulo **

    release_Date DATE NOT NULL, 
    **data de lançamento no formato de data AAAA-MM-DD, não pode ser nulo**

    rating INT NOT NULL 
    **// avaliação do filme, tipo INT número inteiro e também não pode ser nulo**
)

b) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  " Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
c) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  " Doce de Mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  19
);
d) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
e) INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "Juntos e Enrolados",
  "Após dois anos de união e muita economia financeira, Júlio e Daiana finalmente alcançaram o sonho de realizar a festa de casamento. Tudo parece estar indo bem, até que o noivo recebe uma mensagem em seu celular antes da cerimônia começar. Uma confusão generalizada acontece, mas a festa precisa continuar.",
  "2022-01-13", 
  9
);

#ex6 <h1>
a) SELECT id, title, rating FROM Movie WHERE rating = 9;
b) SELECT * FROM Movie WHERE title = "Dona Flor e Seus Dois Maridos";
c) SELECT id, title, synopsis FROM Movie WHERE rating > 7;

#ex7 <h1>
a) SELECT * FROM Movie WHERE title LIKE "%vida%" OR "Vida%";
b) SELECT * FROM Movie WHERE title LIKE "%flor%" OR synopsis LIKE "%flor%"
c) SELECT * FROM Movie WHERE release_Date < "2022-08-31";
d) SELECT * FROM Movie WHERE release_Date < "2022-08-31" AND (title LIKE "%flor%" OR synopsis LIKE "%flor%") AND rating > 7;