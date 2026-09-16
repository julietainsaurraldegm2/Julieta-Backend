## Exercise 2

SELECT title, release_year FROM movies ORDER BY release_year; - Line that returns the title and release year of all movies, ordered by release year.

      title      | release_year 
-----------------+--------------
 Pulp Fiction    |         1994
 The Matrix      |         1999
 The Dark Knight |         2008
 Inception       |         2010
 Interstellar    |         2014
(5 rows)
- terminal response

## Exercise 3

('Pulp Fiction', 'Intertwined stories of crime and redemption.', 1994),  - Previous synopsis content
UPDATE movies SET synopsis = '' WHERE id = 3; - Line to change the synopsis of the selected movie by id

## Exercise 4

INSERT INTO movies (title, synopsis, release_year) VALUES ('Dune', 'A young nobleman seeks vengeance and destiny on a desert planet.', 2021); - line that adds a new row

DELETE FROM movies WHERE id = 6; - line to delete the added movie

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
- terminal response

## Exercise 5

SELECT m.title, m.release_year, g.name AS genre
FROM movies m INNER JOIN genres g ON m.genres_id = g.id ORDER BY m.release_year; - inner join line adding the genre of each movie

      title      | release_year |      genre      
-----------------+--------------+-----------------
 Pulp Fiction    |         1994 | Crime
 The Matrix      |         1999 | Science Fiction
 The Dark Knight |         2008 | Action
 Inception       |         2010 | Science Fiction
 Interstellar    |         2014 | Science Fiction
(5 rows)
- terminal response