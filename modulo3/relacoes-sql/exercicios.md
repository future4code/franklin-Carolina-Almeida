##ex1
a) permite "buscar" dados de uma planilha diferente e usar na planilha que está sendo operada.
b) INSERT INTO Rating (id, comment, rate, movie_id) VALUES ("001", "Muito bom!", 7, "004");
c) INSERT INTO Rating (id, comment, rate, movie_id) VALUES ("00", "Muito bom!", 7, "005");
erro: Cannot add or update a child row: a foreign key constraint fails (tradução: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha)
d) ALTER TABLE Movie DROP COLUMN rating;
e) DELETE FROM Movies WHERE id = "005"; (a tabela "Movies" com "s" no final não existe, por isso não apagou o item de id=005)

##ex2
a) CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

é uma tabela que utiliza os dados das tabelas de filme e atores!

b) 
1: INSERT INTO MovieCast(movie_id, actor_id) VALUES("004", "001")
2: INSERT INTO MovieCast(movie_id, actor_id) VALUES("004", "002")
3: INSERT INTO MovieCast(movie_id, actor_id) VALUES("004", "003")
4: INSERT INTO MovieCast(movie_id, actor_id) VALUES("004", "004")
5: INSERT INTO MovieCast(movie_id, actor_id) VALUES("002", "001")
6: INSERT INTO MovieCast(movie_id, actor_id) VALUES("002", "002")

c) INSERT INTO MovieCast(movie_id, actor_id) VALUES("010", "010")
erro: Não é possível adicionar ou atualizar uma linha filha: uma restrição de chave estrangeira falha (`franklin-carolina-almeida`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

d) DELETE FROM MovieCast WHERE id = "015"; 
erro: Coluna desconhecida 'id' na 'cláusula where'

##ex3
a) o "ON" é usado quando queremos unir as tabelas, e mostra-las ao mesmo tempo

b) SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;