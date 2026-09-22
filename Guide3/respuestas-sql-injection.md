1. Es cuando un atacante aprovecha que una aplicación arma sus queries SQL pegando texto directamente, sin validar ni tratar de forma segura lo que el usuario escribió.

2. Concatenar = todo es un solo texto que la base parsea junto, el dato puede "escaparse" y convertirse en código.
Placeholder = la estructura se fija primero, los datos viajan aparte y nunca se re-interpretan como sintaxis, el dato nunca puede convertirse en código, pase lo que pase adentro.
3. La ruta seria GET / movies/:id recibe un id del usuario y arma la query concatenando el strin. Alguien podría mandar algo como 3 OR 1=1 en el campo del id, para que la condición del WHERE deje de filtrar y la consulta devuelva todas las filas de la tabla en vez de una sola.
- const query = `SELECT * FROM movies WHERE id = ${id}`;
- SELECT * FROM movies WHERE id = 3 OR 1=1