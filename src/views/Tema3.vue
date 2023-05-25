<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Manejo de sentencias SQL 
    p.mb-5(data-aos='fade-right') Las sentencias SQL son instrucciones que permiten recuperar información que se encuentra previamente registrada en la base de datos, estas deben seguir un patrón y secuencia específica de sintaxis para poder realizar este proceso de manera correcta.
    .bg-1.mn.p-5
      .row.justify-content-center.mb-5
          .col-lg-7
            .tarjeta.bg-tema2__1.px-3.py-4.mb-3
              p.mb-0.ms-5 Una sentencia SQL también se puede comparar con una expresión ordenada que solicita información de manera específica de un sistema de almacenamiento, donde se indican las columnas o datos que se desean extraer y visualizar al usuario que requiere la información. Algo que es considerable dentro del uso de las sentencias SQL es la forma en cómo la información se solicita y los resultados que se esperan al realizar estas operaciones.
            p.mb-0(data-aos='fade-right') Se debe ser muy específico cuando estas se realizan. Dentro de las sentencias SQL, se encuentran varios comandos que acompañan las instrucciones y que permiten que la información pueda ser mucho más precisa y entendible para el usuario. A continuación, se observa una tabla de bases de datos con información y se ejecutan varias sentencias SQL para recuperar información de manera ordenada y precisa: 
          .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/1.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 7
            br
            span.fst-italic Tabla con registros 
          img(src='@/assets/curso/temas/tema3/2.png', alt='La imagen muestra una captura de pantalla de una tabla de registros de una base de datos SQL. En la interfaz, se visualizan los datos almacenados en una tabla específica. Cada columna representa un atributo o campo, mientras que cada fila corresponde a un registro individual.')
      p.mb-5(data-aos='fade-right') Como se puede observar, se tiene una tabla y, de acuerdo con esta información, se van a ejecutar las instrucciones SQL para recuperar los datos, teniendo en cuenta la secuencia que estos deben seguir para realizar dichos procesos; observe cómo:
      .tarjeta.bg-slyder.p-5
        SlyderA(tipo='b')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Mostrar el nombre del producto y categoría de todos los que se encuentran registrados.
              p #[span.fw-bold.fst-italic select NombreProducto, Categoría from tbl_productos]
                br
                br 
                |Se recibe la información acerca de un producto que se necesita. En la misma, se encuentra la cantidad, tiempo y aplicación.

                br
                br 
                |En la consulta anterior, se percibe la aplicación de la sentencia SQL que permite recuperar el nombre y categoría de los productos registrados en la tabla llamada "tbl productos". En este caso, si el usuario requiere realizar dicho registro, este comando le permite solo recuperar estos datos de los registros de la base de datos.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/3.png', alt='Texto que describa la imagen')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Mostrar el nombre, existencias, id, precio unidad de los productos que tienen como unidades en existencias entre 10 y 50 productos.
              p #[span.fw-bold.fst-italic Select NombreProducto, IdProducto, PrecioUnidad from tbl_productos where UnidadesEnExistencia >= 10 and UnidadesEnExistencia <= 50]
                br
                br
                |En la imagen se muestra cómo se devuelve el resultado solicitado a través de la instrucción SQL. Hay que recordar que estas instrucciones deben ser precisas al momento de solicitar la información, ya que si no se indica cuáles son los resultados, que se desea mostrarle al usuario, no se verán de la manera que se necesita.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/4.png', alt='Texto que describa la imagen')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Contar cuáles son los productos que se encuentran en la categoría de Bebidas y que su existencia esté dentro de 20 a 80, mostrar su id, nombre de producto, existencias, precio, proveedor y existencias.
              p #[span.fst-italic.fw-bold Select IdProducto,NombreProducto,UnidadesEnExistencia,<br> PrecioUnidad,Proveedor,<br> UnidadesEnExistencia from tbl_productos where Categoría = 'Bebidas' <br> and (UnidadesEnExistencia >=20 and UnidadesEnExistencia <=80)]
                br
                br
                | En el resultado se especifica cada uno de los datos solicitados por el usuario, los cuales cumplen con el criterio de búsqueda dentro de la sentencia SQL. Los resultados presentados reflejan la solicitud explícita del usuario por la visualización de los mismos. Ahora bien, todo lo que se encuentra delante de la instrucción #[em select] y detrás de la instrucción #[em from] son los datos y encabezados que se visualizarán para el usuario en la instrucción SQL, por lo tanto, todos los campos que se soliciten en este apartado son los que serán visibles para el usuario una vez se ejecute la consulta SQL.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema3/5.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/6.svg', alt='')
      .col-lg-11
        p.mb-0 Seguramente, usted se hará la pregunta: ¿estos comandos en qué aportan a los sistemas de información? Pues hay que entender que el sistema de información se encuentra compuesto por varios componentes, uno de ellos llamado #[span.color-primario.fst-italic Front-End], que es toda la parte visual con la que interactúa el usuario; luego, existe un componente llamado #[span.color-primario.fst-italic Back-End], el cual define cuál es la lógica que se debe implementar en el sistema para que este cumpla las operaciones que requiere el usuario que el sistema realice.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .tarjeta.color-secundario.p-4
          p.mb-0.text-white "Ahora bien, en este punto, se puede cuestionar: ¿estos comandos en qué aportan a los sistemas de información? Pues hay que entender que el sistema de información se encuentra compuesto por varios componentes, uno de ellos llamado #[em Front-End], que es toda la parte visual con la que interactúa el usuario; luego, existe un componente llamado #[em Back-End], el cual define cuál es la lógica que se debe implementar en el sistema para que este cumpla las operaciones que requiere el usuario que el sistema realice; es en esta última donde se codifican estos componentes.
      .col-lg-5: img(src='@/assets/curso/temas/tema3/7.png', alt='')
    p.mb-5(data-aos='fade-right') En pocas palabras, en el #[em back-end], existe una parte que permite la conexión con un sistema de bases de datos y recopila la información que solicita el usuario; este proceso es llevado a cabo a través de los comandos SQL. Dicho de otra forma, el usuario solicita la información interactuando con los componentes que el sistema tiene y luego este, al conectarse con la base de datos, solicita esta información a través de los comandos SQL, a la vez que estos devuelven al programa la información resultante solicitada por el usuario; siendo lo anterior, desde este punto de vista, relevante el estudio del lenguaje SQL, para poder comprender cómo la información llega desde el servidor de bases de datos a la pantalla del usuario mostrando la información que este requiere ver.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bg-1
  background-image: url('../assets/curso/temas/tema3/bg1.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover
.bg-slyder
  background-image: url('../assets/curso/temas/tema3/bg-slyde.svg')
  background-repeat: no-repeat
  background-position: center
  background-size: cover
</style>
