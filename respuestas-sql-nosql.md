# Bloque 1 - SQL vs NoSQL
1. la diferencia entre SQL y NoSQL es principalmente la forma en que gestionan los datos. sql se usa para base de datos relacionales, utilizando un esquema fijo y tablas con filas y columnas, mientras que NoSQL se utiliza para bases de datos no relacionales, permitiendo almacenar datos en formatos más flexibles como documentos, grafos o pares clave-valor.

2. SQL motores de bases de datos 
    * MySQL
    * PostgreSQL
   NoSQL motores de bases de datos
    * MongoDB
    * Cassandra

3. Para mi proyecto de películas, con las entidades directors, movies y reviews, en lugar de tener tres tablas separadas conectadas por claves foráneas (director_id en movies y movie_id en reviews), se puede modelar como documentos teniendo un solo documento por película que contenga los datos del director adentro del documento, en vez de en otra tabla aparte, junto con un array de reseñas embebidas: por ejemplo, un documento de la película "El secreto de sus ojos" incluiría directamente el nombre y la nacionalidad del director (Juan José Campanella, Argentina) como un sub-objeto dentro del mismo documento, y las reseñas de los usuarios (con reviewer_name, rating y comment) como una lista dentro de ese mismo documento; esto elimina la necesidad de hacer JOINs para mostrar una película junto con su director y sus reseñas, aunque tiene como contrapartida que si un director hizo varias películas, sus datos quedan duplicados en cada una de ellas, a diferencia del modelo relacional donde el director vive en un único lugar y se referencia por su id.

4. Eligiria noSQL cuando los datos son muy variables en su estructura por ejemplo
   Cuando alguien entra a un sitio de compras sin estar registrado, el sitio necesita guardar temporalmente qué productos agregó al carrito, mientras navega. Estos datos:
    Se leen y escriben constantemente (cada vez que agrega/saca un producto, cada vez que carga una página hay que consultar el carrito).
    No necesitan relacionarse con otras tablas de forma compleja en ese momento (no hay que hacer JOINs para mostrar el carrito).
    La prioridad es velocidad extrema de acceso.

