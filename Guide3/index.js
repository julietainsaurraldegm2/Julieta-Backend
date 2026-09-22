const express = require('express');
const { Pool } = require('pg');
const pool = new Pool({database: 'postgres'});
const app = express();
const PORT = 3000;

app.use(express.json());

let genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Comedy' },
];
let nextGenreId = 3;

let movies = [
  { id: 1, title: 'Sample Movie', synopsis: 'Sample synopsis', trailerUrl: null, releaseYear: 2020, genreId: 1 },
];
let nextMovieId = 2;

// --- Genres ---

/*app.get('/genres', (req, res) => {
  res.json(genres);
});   Ruta reemplazada a logica SELECT*/

/*app.get('/movies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener las movies' });
  }
});*/

app.get('/movies/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM movies WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Movie no encontrada' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener la movie' });
  }
});


app.post('/genres', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'name es requerido' });

  const newGenre = { id: nextGenreId++, name };
  genres.push(newGenre);
  res.status(201).json(newGenre);
});

// --- Movies (relacionadas a un genre) ---

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const movie = movies.find((m) => m.id === Number(req.params.id));
  if (!movie) return res.status(404).json({ error: 'Movie no encontrada' });
  res.json(movie);
});

app.post('/movies', (req, res) => {
  const { title, synopsis, trailerUrl, releaseYear, genreId } = req.body;
  if (!title) return res.status(400).json({ error: 'title es requerido' });

  const newMovie = { id: nextMovieId++, title, synopsis, trailerUrl, releaseYear, genreId };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.put('/movies/:id', (req, res) => {
  const movie = movies.find((m) => m.id === Number(req.params.id));
  if (!movie) return res.status(404).json({ error: 'Movie no encontrada' });

  const { title, synopsis, trailerUrl, releaseYear, genreId } = req.body;
  if (title !== undefined) movie.title = title;
  if (synopsis !== undefined) movie.synopsis = synopsis;
  if (trailerUrl !== undefined) movie.trailerUrl = trailerUrl;
  if (releaseYear !== undefined) movie.releaseYear = releaseYear;
  if (genreId !== undefined) movie.genreId = genreId;
  res.json(movie);
});

app.delete('/movies/:id', (req, res) => {
  const index = movies.findIndex((m) => m.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Movie no encontrada' });

  movies.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`starter-api corriendo en http://localhost:${PORT}`);
});
