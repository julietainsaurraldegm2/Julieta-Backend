 DROP TABLE IF EXISTS movies; DROP TABLE IF EXISTS genres;
CREATE TABLE genres (id SERIAL PRIMARY KEY, name VARCHAR(50));
CREATE TABLE movies ( id SERIAL PRIMARY KEY, title VARCHAR(100) NOT NULL, synopsis VARCHAR(100) NOT NULL, release_year INTEGER, trailer_url VARCHAR(100), genres_id INTEGER REFERENCES genres(id));
INSERT INTO genres (name) VALUES ('Action'), ('Science Fiction'), ('Drama'), ('Thriller'), ('Crime');
INSERT INTO movies (title, synopsis, release_year) VALUES
('The Matrix', 'A hacker discovers reality is a simulation.', 1999),
('Inception', 'A thief enters dreams to plant an idea.', 2010),
('Pulp Fiction', 'Intertwined stories of crime and redemption.', 1994),
('The Dark Knight', 'Batman faces chaos in Gotham with the Joker.', 2008),
('Interstellar', 'A team travels through space to save humanity.', 2014);
SELECT title, release_year FROM movies ORDER BY release_year;
