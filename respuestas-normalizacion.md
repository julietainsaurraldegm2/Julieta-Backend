# Bloque 2 - Normalización

1. Tener una sola tabla donde los datos del autor se repiten en cada fila de libro genera primero, redundancia de datos, ya que si un autor tiene varios libros su nombre y nacionalidad quedan duplicados en cada fila, ocupando espacio innecesario; segundo, riesgo de inconsistencia o anomalía de actualización, porque si hay que corregir un dato del autor (como un error de tipeo en el nombre) hay que actualizarlo en todas las filas donde aparece, y si te olvidás de alguna quedan datos contradictorios para el mismo autor; tercero, problema de inserción, porque no se podría agregar un autor nuevo que todavía no tiene ningún libro cargado, dado que en esta tabla única el autor solo existe colgado de una fila de libro. La solución es separar authors y books en dos tablas distintas, donde el autor vive en un solo lugar y cada libro simplemente lo referencia mediante author_id (clave foránea), evitando así la duplicación y los problemas de consistencia.

2. La normalización es organizar los datos en distintas tablas relacionadas entre sí, en vez de tenerlos todos mezclados en una sola tabla, para evitar que la información se repita y se generen errores o contradicciones al modificarla.

3. Una tabla está en Primera Forma Normal cuando cumple cuatro condiciones:

* Atomicidad: cada celda contiene un único valor indivisible. No puede haber listas, conjuntos ni múltiples valores separados por comas en una sola celda.
* Homogeneidad: todos los valores de una columna son del mismo tipo de dato.
* Unicidad de columnas: cada columna tiene un nombre único. No puede haber dos columnas con el mismo nombre ni grupos de columnas repetidos como telefono1, telefono2,telefono3.
* Clave primaria: cada fila es única e identificable de forma inequívoca por una clave primaria.

4. 
- Entidad 1: movie 
    Dato que le pertenece SOLO a esta entidad: overview (la sinopsis). El overview describe de qué trata la película en sí; no tiene sentido que le pertenezca al usuario ni a una reseña.

- Entidad 2: review 
    Dato que le pertenece SOLO a esta entidad: rating (la puntuación que le pone el usuario a esa película en particular). El rating es un dato de la reseña — no le pertenece a la película (que puede tener muchas reseñas con distintos ratings) ni al usuario en general (que puede calificar distinto cada película).