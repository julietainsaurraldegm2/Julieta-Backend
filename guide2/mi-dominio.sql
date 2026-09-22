 DROP TABLE IF EXISTS movies; DROP TABLE IF EXISTS genres;
CREATE TABLE genres (id SERIAL PRIMARY KEY, name VARCHAR(50));
CREATE TABLE movies ( id SERIAL PRIMARY KEY, title VARCHAR(100) NOT NULL, synopsis TEXT NOT NULL, release_year INTEGER, trailer_url VARCHAR(100), genre_id INTEGER REFERENCES genres(id));
INSERT INTO genres (name) VALUES ('Action'), ('Science Fiction'), ('Drama'), ('Thriller'), ('Crime');
INSERT INTO movies (title, synopsis, release_year, genre_id) VALUES
('The Matrix', 'A hacker discovers reality is a simulation.', 1999, 2),
('Inception', 'A thief enters dreams to plant an idea.', 2010, 2),
('Pulp Fiction', 'Intertwined stories of crime and redemption.', 1994, 5),
('The Dark Knight', 'Batman faces chaos in Gotham with the Joker.', 2008, 1),
('Interstellar', 'A team travels through space to save humanity.', 2014, 2),
('Dune', 'A young nobleman seeks vengeance and destiny on a desert planet.', 2021, 3);
SELECT title, release_year FROM movies WHERE release_year >= 2000 ORDER BY release_year DESC;
UPDATE movies SET synopsis = '' WHERE id = 3;
DELETE FROM movies WHERE id = 6;
SELECT m.title, m.release_year, g.name AS genre
FROM movies m INNER JOIN genres g ON m.genre_id = g.id ORDER BY m.release_year;

