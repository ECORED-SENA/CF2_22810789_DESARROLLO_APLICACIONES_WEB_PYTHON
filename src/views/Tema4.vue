<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Modelado de datos
    .bg-1.p-5.mn
      .row.justify-content-center.mb-5
        .col-lg-2.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src="../assets/curso/temas/tema4/1.svg", alt="tema4-1")
        .col-lg-10(data-aos="fade-left")
          p.mb-3 Un modelo de datos es un lenguaje orientado a hablar de una base de datos. Típicamente, permite describir las estructuras, el tipo de los datos y la forma en que se relacionan en una base.
          .tarjeta.color-secundario.p-4
            p.mb-0.text-white El modelado de datos se utiliza para dar a entender los componentes y tipos de datos que se consagran dentro de la base de datos y que estos pueden, de alguna manera, ayudar no solo a la comprensión de la misma, sino también a entender cómo se pueden utilizar dichos datos al momento que se requieran modificar o utilizar dentro de la base de datos.
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 8
        br
        span.fst-italic Modelado de datos
      .row.justify-content-center.mb-5
        .col-lg-8
          img(src="../assets/curso/temas/tema4/2.svg", alt="La imagen muestra como se realiza el modelado de una entidad de la base de datos llamada Persona, la cual tiene los atributos: ID, Nombre, Contacto, Correo, Dirección.")
      p.mb-5(data-aos='fade-right') Como se puede observar en la imagen, se realiza el modelado de una entidad de la base de datos llamada Persona, la cual tiene los atributos: ID, Nombre, Contacto, Correo, Dirección. 
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.bg-tema1__1.p-5.mb-lg-0.mb-4
            p.ms-4.mb-0 Cada uno de estos campos permite establecer la información que se le solicita al cliente y cómo se almacenan los datos en la base. Cada campo de estos establece una característica que determina la información completa de la entidad, es decir, los agrega a todos dentro de un mismo espacio de almacenamiento.
          p El modelado de bases de datos es una técnica relevante en el ámbito del desarrollo de #[em software], ya que permite conocer la distribución de los datos que se encuentran en la base de datos. También, establece la cantidad de datos a solicitar al usuario y, adicionalmente a ello, qué tipo de datos se solicitarán, los cuales pueden variar de acuerdo con las necesidades de almacenamiento que se tengan en el momento.
            br
            br
            span.color-primario En una base de datos, es posible encontrar los siguientes tipos de datos: 
        .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema4/3.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.bg-tema4__2.p-4.h-100
          img(src="../assets/curso/temas/tema4/4.svg", alt="tema4-4" style="width: 77px").mb-4
          h4.fst-italic Int
          p.mb-0 Son datos que solo reciben números enteros y sin ningún tipo de separador, como puntos o comas.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.bg-tema4__2.p-4.h-100
          img(src="../assets/curso/temas/tema4/4.svg", alt="tema4-4" style="width: 77px").mb-4
          h4.fst-italic Varchar
          p.mb-0 Es un tipo de dato que permite recibir prácticamente cualquier dato, como números, texto, caracteres, símbolos, entre otros.
      .col-lg-4
        .tarjeta.bg-tema4__2.p-4.h-100
          img(src="../assets/curso/temas/tema4/4.svg", alt="tema4-4" style="width: 77px").mb-4
          h4.fst-italic Float
          p.mb-0 Es un tipo de dato que permite almacenar datos con puntos decimales, tales como: 1.5 o 4.8.
    p.mb-5(data-aos='fade-right') Estos son los tipos de datos principales que manejan las bases de datos, y, de acuerdo con el tipo de información a guardar, así será el tipo de dato a utilizar; por ejemplo, si se requiere almacenar la información del documento de identidad, nombre, contacto y correo de una persona, #[span.color-primario quedarían distribuidos de la siguiente manera:] 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1 
          br
          span.fst-italic Distribución según tipo de dato
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr(style="background-color: #64B2FF ")
                th.h3  Tipo de dato
                th.h3  Nombre de campo
            tbody.text-center
              tr
                td int
                td Identificación
              tr
                td #[em varchar]
                td Nombre
              tr
                td int
                td Contacto
              tr
                td #[em varchar]
                td Correo
    .bg-1.p-5.mn
      .tarjeta.color-secundario.p-4.mb-4
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
          .col-lg-10
            p.text-white.mb-0 Es necesario tener en cuenta que, para el caso de los campos #[em varchar], se debe estipular la longitud que estos deben tener, la cual está estrechamente relacionada con la cantidad de caracteres que ese campo recibirá. Por ejemplo: Nombre varchar(50), esta sería la manera correcta con la cual se establece la declaración de dicho campo y delimita la cantidad de caracteres que este puede tener internamente; para los campos #[em int] y #[em float], no es necesario establecer una longitud, ya que por defecto el motor de la base de datos se los asigna. 
      p.mb-5(data-aos='fade-right') A continuación, se observan otros tipos de diseños que integran la manera en cómo se puede visualizar la conexión de los datos dentro de la base de datos. Es importante tener en cuenta que se puede relacionar más de una entidad al tiempo para ilustrar la distribución de la información:
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 9
            br
            span.fst-italic  Relación de entidades
          img(src="../assets/curso/temas/tema4/7.svg", alt="La imagen muestra las entidades, relaciones y atributos que componen la estructura de la base de datos. Las entidades se muestran como cuadros o rectángulos, las relaciones se indican mediante líneas y los atributos se especifican dentro de las entidades." style="width: 100%")
      .row.justify-content-center.mb-5
        .col-lg-1.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/8.svg', alt='')
        .col-lg-11 
          p.mb-0 En este diseño, a diferencia del anterior, se visualizan los tipos de datos que tiene cada campo de la base de datos y su respectiva conexión.
      .row.justify-content-center.mb-5
        .col-lg-7
          .tarjeta.color-secundario.p-5
            p.mb-0.text-white En este caso, las relaciones están establecidas mediante llaves primarias y llaves foráneas; una llave primaria es aquella que convierte el valor que se almacena en ese campo como único y no repetible. Un ejemplo de ello es si se requiere almacenar la información de una persona, como: identificación, nombres y contacto; en este caso, la identificación se establecerá como llave primaria, para que el campo de identificación no se repita, ya que esto ocasionaría problemas de duplicidad de datos dentro de la entidad o tabla que almacene la información.
              br
              br
              |Por otro lado, las llaves foráneas permiten conectar las entidades; es decir, una llave primaria se conectará con una llave foránea para así relacionar las dos entidades y poder realizar el almacenamiento de la información. Cabe decir que todas las tablas o entidades de una base de datos deben tener una llave primaria que identifique al campo que no se debe repetir.
        .col-lg-5.col-6: img(src='@/assets/curso/temas/tema4/9.png', alt='')
    .subtitulo.mb-4
      h3 Modelo físico de datos
    .cajon-b.color-primario.arriba-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            p.mb-0.mb-lg-0.mb-3 El modelo de datos físicos representa cómo se construirá el modelo en la base de datos. Un modelo de base de datos físico muestra todas las estructuras de tabla, incluidos el nombre de columna, el tipo de datos de columna, las restricciones de columna, la clave principal, la clave externa y las relaciones entre las tablas.
              br
              br
              span.color-primario El modelo físico de datos cuenta con características, etapas y funciones, las cuales se observan a continuación:
          .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/2.svg', alt='' style="width: 100px")
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/10.png', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Características").justify-content-center.align-items-center
            .col-md-7.mb-2.mb-md-0
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Cuenta con la especificación de todas las tablas y columnas.

                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Las claves externas se usan para identificar relaciones entre tablas.

                li.d-flex
                  i.fas.fa-check
                  p.mb-0 La desnormalización puede ocurrir según los requisitos del usuario.
            .col-md-3.col-6
              figure
                img(src='@/assets/curso/temas/tema4/11.svg', alt='Texto que describa la imagen')
          .row(titulo="Etapas").justify-content-center.align-items-center
            .col-md-7.mb-2.mb-md-0
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Convertir entidades en tablas.

                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Convertir relaciones en claves externas.

                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Convertir atributos en columnas.

                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Modificar el modelo de datos físicos en función de las restricciones / requisitos físicos.
            .col-md-3.col-6
              figure
                img(src='@/assets/curso/temas/tema4/12.svg', alt='Texto que describa la imagen')
          .row(titulo="Funciones").justify-content-center.align-items-center
            .col-md-7.mb-2.mb-md-0
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Permitir a los usuarios almacenar datos, acceder a ellos y actualizarlos, ocultando su estructura física.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Proporcionar un catálogo (diccionario de datos) accesible por los usuarios.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Proporcionar un mecanismo que garantice el procesamiento de las transacciones.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Proporcionar un mecanismo que realice el control de la concurrencia.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Proporcionar un mecanismo para recuperación ante fallos.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Proporcionar un mecanismo de seguridad.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Integrarse con algún #[em software] de comunicación.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Encargarse de mantener las reglas de integridad.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Encargarse de mantener la independencia entre los programas y la estructura de la base de datos.
                li.d-flex
                  i.fas.fa-check
                  p.mb-0 Proporcionar herramientas para administrar la base de datos.
            .col-md-3.col-6
              figure
                img(src='@/assets/curso/temas/tema4/13.svg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right')
      span.color-primario A su vez, a la hora del modelado de datos, debe procurar que cuente con lo siguiente:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/14.png', alt='Texto que describa la imagen')
        .p-3
          h5 Mínima redundancia de datos
          p Al integrar los datos en una sola estructura lógica y almacenando cada ocurrencia de un ítem de dato en un solo lugar de la base de datos, se reduce la redundancia.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/15.png', alt='Texto que describa la imagen')
        .p-3
          h5 Consistencia de datos 
          p Al controlar la redundancia de datos, se reduce enormemente la inconsistencia, dado que, al almacenarse un dato en un solo lugar, las actualizaciones no producen inconsistencia.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/16.png', alt='Texto que describa la imagen')
        .p-3
          h5 Integración de datos
          p En una base de datos, los datos son organizados de una manera lógica que permite definir los relacionamientos entre ellos.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/17.png', alt='Texto que describa la imagen')
        .p-3
          h5 Compartir datos
          p Una base de datos es creada para ser compartida por todos los usuarios que requieran de sus datos; muchos sistemas de bases de datos permiten a múltiples usuarios compartirlas en forma concurrente, aunque bajo ciertas restricciones.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/18.png', alt='Texto que describa la imagen')
        .p-3
          h5 Esfuerzo por estandarización
          p Establecer la función de Administración de Datos es una parte importante de este enfoque, su objetivo es tener la autoridad para definir y fijar los estándares de los datos, así como también posteriores cambios de estándares.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/19.png', alt='Texto que describa la imagen')
        .p-3
          h5 Facilitar el desarrollo de aplicaciones 
          p Este enfoque reduce el costo y tiempo para desarrollar nuevas aplicaciones.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/20.png', alt='Texto que describa la imagen')
        .p-3
          h5 Controles de seguridad, privacidad e integridad
          p El control centralizado que se ejerce bajo este enfoque, a través de la función Administración de Base de Datos, puede mejorar la protección de datos en comparación con archivos tradicionales. 
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/21.png', alt='Texto que describa la imagen')
        .p-3
          h5 Flexibilidad en el acceso
          p Este enfoque provee múltiples formas de recuperación de cada ítem de dato, permitiendo a un usuario mayor flexibilidad para ubicar datos que en archivos tradicionales.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/22.png', alt='Texto que describa la imagen')
        .p-3
          h5 Independencia de los datos
          p Permite cambiar la organización de los datos sin necesidad de alterar los programas. Es uno de los objetivos principales del enfoque de base de datos.
      .tarjeta.overflow-hidden.bg-f.h-100
        img(src='@/assets/curso/temas/tema4/23.png', alt='Texto que describa la imagen')
        .p-3
          h5 Reducción de la mantención de programas
          p Como los datos son independientes de los programas, se reduce la necesidad de modificar (mantener) los programas, aun cuando exista una modificación constante de estos.
      

          

</template>

<script>
export default {
  name: 'Tema4',
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
  background-image: url('../assets/curso/temas/tema4/bg1.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover

.bg-f
  background-image: url('../assets/curso/temas/tema4/bg-f.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover
</style>
