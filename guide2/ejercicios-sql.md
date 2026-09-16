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
