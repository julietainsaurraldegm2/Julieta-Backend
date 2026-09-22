DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS genres;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  synopsis TEXT,
  trailer_url VARCHAR(255),
  release_year INTEGER,
  genre_id INTEGER REFERENCES genres(id)
);

INSERT INTO genres (name) VALUES
  ('Action'),
  ('Comedy'),
  ('Drama'),
  ('Horror'),
  ('Science Fiction'),
  ('Musical');

INSERT INTO movies (title, synopsis, trailer_url, release_year, genre_id) VALUES
  ('The Great Escape', 'A group of prisoners meticulously plan and execute a daring escape from a high-security prison camp.', 'https://example.com/trailer1', 1963, 1),
  ('Laugh Out Loud', 'A comedian navigates a chaotic week in the city.', 'https://example.com/trailer2', 2015, 2),
  ('Silent Echoes', 'A family confronts a long-buried secret.', 'https://example.com/trailer3', 2001, 3),
  ('Night Terror', 'A group of friends is stalked in an abandoned house.', 'https://example.com/trailer4', 2019, 4),
  ('Beyond the Stars', 'A crew explores a distant galaxy after Earth becomes uninhabitable.', 'https://example.com/trailer5', 2022, 5),
  ('The Last Stand', 'A retired soldier is pulled back into one final mission.', 'https://example.com/trailer6', 2010, 1);
