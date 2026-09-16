## Exercise 2

SELECT title, release_year FROM movies ORDER BY release_year; - Linea que devuelve el título y el año de estreno de todas las películas, ordenadas por año de estreno.

      title      | release_year 
-----------------+--------------
 Pulp Fiction    |         1994
 The Matrix      |         1999
 The Dark Knight |         2008
 Inception       |         2010
 Interstellar    |         2014
(5 rows)
- respuesta de la terminal

## Exercise 3

('Pulp Fiction', 'Intertwined stories of crime and redemption.', 1994),  - Contenido de la sinopsis anteriormente
UPDATE movies SET synopsis = '' WHERE id = 3; - Linea para cambiar la sinopsis de la pelicula seleccionada por id

## Exercise 4

INSERT INTO movies (title, synopsis, release_year) VALUES ('Dune', 'A young nobleman seeks vengeance and destiny on a desert planet.', 2021); - linea que agrega una nueva fila

DELETE FROM movies WHERE id = 6; - linea para eliminar la pelicula agregada

      title      | release_year 
-----------------+--------------
 Pulp Fiction    |         1994
 The Matrix      |         1999
 The Dark Knight |         2008
 Inception       |         2010
 Interstellar    |         2014
 Dune            |         2021
(6 rows)

UPDATE 1
DELETE 1
- respuesta de la terminal

## Exercise 5

SELECT m.title, m.release_year, g.name AS genre
FROM movies m INNER JOIN genres g ON m.genres_id = g.id ORDER BY m.release_year; - linea del inner join agregando el genero de cada pelicula

      title      | release_year |      genre      
-----------------+--------------+-----------------
 Pulp Fiction    |         1994 | Crime
 The Matrix      |         1999 | Science Fiction
 The Dark Knight |         2008 | Action
 Inception       |         2010 | Science Fiction
 Interstellar    |         2014 | Science Fiction
(5 rows)
- respuesta de la terminal