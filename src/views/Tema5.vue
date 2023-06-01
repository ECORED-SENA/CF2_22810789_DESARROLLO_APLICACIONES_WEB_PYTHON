<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Tablas y atributos 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Las tablas, también llamadas entidades, son el espacio donde se almacena la información que registran los usuarios en un sistema de información.
    p.mb-5(data-aos='fade-right') Las tablas se dividen en los diferentes campos que convierten la información que suministra el usuario a través de los diversos canales de información. Se debe tener en cuenta que las tablas se conforman por atributos que, a su vez, permiten determinar:
    .bg-4.p-5.mn
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-lg-0.mb-3.col-md-8.col-10
          .tarjeta.rounded-3.bg-tema4__3.h-100.p-3
            .d-flex.justify-content-center.align-items-center
              img(src='@/assets/curso/temas/tema5/2.svg', alt='')
              p.fw-bold.mb-0.ms-3 El tipo de dato
        .col-lg-4.mb-lg-0.mb-3.col-md-8.col-10
          .tarjeta.rounded-3.bg-tema4__3.h-100.p-3
            .d-flex.justify-content-center.align-items-center
              img(src='@/assets/curso/temas/tema5/3.svg', alt='')
              p.fw-bold.mb-0.ms-3 La longitud
        .col-lg-4.col-md-8.col-10
          .tarjeta.rounded-3.bg-tema4__3.h-100.p-3 
            .d-flex.justify-content-center.align-items-center
              img(src='@/assets/curso/temas/tema5/4.svg', alt='')
              p.fw-bold.mb-0.ms-3 Nombre de este (para identificarlo al momento de realizar una operación)
      .cajon-b.color-primario.arriba-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-0 Ahora bien, en el caso de las tablas, estas pueden tener de manera inmersa una cantidad considerable de atributos, que permitirán que la información se almacene de manera separada dentro de la misma tabla; es decir, los datos se dividen por atributos, pero son almacenados en la tabla de la base de datos así:
          .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/5.svg', alt='' style="width: 100px") 
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 10 
            br
            span.fst-italic Estructura de una tabla o entidad 
          img(src='@/assets/curso/temas/tema5/5.png', alt='La imagen muestra la estructura de una tabla o entidad en una base de datos SQL. Se presentan las columnas de la tabla, junto con sus respectivos nombres y tipos de datos. Cada columna representa un atributo o campo de la entidad, y su tipo de dato define el tipo de información que puede almacenar.' style="width: 100%")
      p.mb-5(data-aos='fade-right') En la anterior imagen, se puede observar la estructura de una tabla o entidad de bases de datos, la cual, en este caso, tiene varios atributos con tipos de datos específicos, los cuales almacenarán la información suministrada por el usuario.
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          .tarjeta.color-secundario.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
              .col-lg-10
                p.text-white.mb-0 Es importante tener en cuenta que los campos que son de tipo de #[span.color-acento-botones datos #[em varchar]] deben estar acompañados de la longitud máxima que este permite, pero los campos que son de #[span.color-acento-botones tipo #[em int]] no requieren de longitud al momento de registrarlos, ya que el sistema de bases de datos le asignará por defecto ese valor de manera automática. 
          p Para llegar a comprender mejor las tablas, es necesario desarrollar varios conceptos que se deben manejar. Comenzando a partir del deseo de almacenar una información determinada en unos datos.
            br
            br
            span.color-primario Los datos serían la información que deseamos almacenar. Un dato puede ser:
        .col-lg-5.col-8: img(src='@/assets/curso/temas/tema5/6.png', alt='' style="width: 100%")
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.bg-tema5__1.p-4
        img(src='@/assets/curso/temas/tema5/7.svg', alt='' style="width: 90px").m-auto.mb-3
        h4.text-center El área de un parque natural
      .tarjeta.bg-tema5__1.p-4
        img(src='@/assets/curso/temas/tema5/8.svg', alt='' style="width: 90px").m-auto.mb-3
        h4.text-center El nombre de un parque natural
      .tarjeta.bg-tema5__1.p-4
        img(src='@/assets/curso/temas/tema5/9.svg', alt='' style="width: 90px").m-auto.mb-3
        h4.text-center La dirección de una oficina de correos
      .tarjeta.bg-tema5__1.p-4
        img(src='@/assets/curso/temas/tema5/10.svg', alt='' style="width: 90px").m-auto.mb-3
        h4.text-center El número de empleados de la oficina de correos
      .tarjeta.bg-tema5__1.p-4
        img(src='@/assets/curso/temas/tema5/11.svg', alt='' style="width: 90px").m-auto.mb-3
        h4.text-center El nombre de un accidente geográfico
      .tarjeta.bg-tema5__1.p-4
        img(src='@/assets/curso/temas/tema5/12.svg', alt='' style="width: 90px").m-auto.mb-3
        h4.text-center Las coordenadas de un accidente geográfico
    p.mb-5(data-aos='fade-right') Por otro lado, se tiene la entidad. Por entidad se entiende un objeto del mundo real que es posible distinguir del resto de objetos y del que interesan algunas propiedades.
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p En el modelo relacional, se puede observar que estas entidades se formarán por atributos o campos referidos a un mismo tema que interesa almacenar. 
        .tarjeta.color-secundario.p-4.mb-3
          p.mb-0.text-white Una entidad debe definir cualquier objeto real o abstracto (que pueda ser pensado) y acerca del cual se quiere guardar información. Se representan mediante rectángulos en el modelo relacional. 
        p Una entidad se correspondería, en el modelo relacional, con una tabla. #[span.color-primario La tabla, a su vez, estará formada por filas y columnas:]
        ul.lista-ul--color
          li
            i.fas.fa-check(style="color: #221B6B")
            | #[span.color-secundario Filas:] cada unidad necesaria de almacenamiento, que se corresponden con los registros de la tabla.
          li
            i.fas.fa-check(style="color: #221B6B")
            | #[span.color-secundario Columnas:] hace referencia a los campos, unidad mínima de información, donde se podría almacenar cada dato referente a una propiedad del registro. 
        p También sería posible tener una entidad débil, que es una entidad cuyos atributos no la identifican completamente, sino que solo la identifican de forma parcial. Esta entidad debe participar en una interrelación que ayuda a identificarla. 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/13.png', alt='' style="width: 100%")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/14.svg', alt='' style="width: 100%")
      .col-lg-11
        p.mb-0 Es decir, la entidad débil tiene una dependencia funcional con otra entidad de la base de datos y está estrechamente relacionada con la conexión de las llaves que esta pueda tener; en otras palabras, depende de la existencia de otra entidad, la cual comparte con la misma la conexión de información registrada regularmente. Esta situación se da entre llaves primarias y foráneas donde el valor de la primaria debe coincidir completamente con el valor almacenado en la llave foránea.
    p.mb-5(data-aos='fade-right') 
      span.color-secundario A continuación se expone la representación de las entidades a través de un ejemplo:
    ImagenInfografica.color-acento-botones.mb-5.d-lg-block.d-none
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema5/15.svg', alt='Texto que describa la imagen')
      .tarjeta.p-3(x="41.7%" y="53%" numero="+" style="background-color: #CDE6FF ")
        .h5.mb-2 Dos entidades
        p Se tienen dos entidades: una llamada “Persona” y otra llamada “Sexo”.
          br
          |(Una débil y una fuerte) 
      .tarjeta.p-3(x="29.7%" y="61.5%" numero="+" style="background-color: #CDE6FF ")
        .h5.mb-2 Persona
        p La representación de la entidad débil es  a través de un recuadro con doble línea.
      .tarjeta.p-3(x="66%" y="63%" numero="+" style="background-color: #CDE6FF ")
        .h5.mb-2 Sexo
        p La entidad Sexo es una entidad fuerte, ya que carece de una llave foránea, es decir, no tiene dependencia de ninguna otra entidad o valor de entidad.
      .tarjeta.p-3(x="29.7%" y="87%" numero="+" style="background-color: #CDE6FF ")
        .h5.mb-2 Sexo_Persona
        p La entidad “Persona” tiene dependencia con la entidad “Sexo” a través del atributo Sexo_Persona, ya que la entidad “Sexo” le proporciona este dato a la entidad “Persona”, dependiendo de esta asignación para poder realizar este registro.
      .tarjeta.p-3(x="65.7%" y="24%" numero="+" style="background-color: #CDE6FF ")
        .h5.mb-2 Codigo
        p (Igual que todos los demás que están en círculos) 
    .row.justify-content-center.mb-5
      .col-7
        ImagenInfografica.color-acento-botones.mb-5.d-lg-none.d-block
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/16.svg', alt='Texto que describa la imagen')
          .tarjeta.p-3(x="34.2%" y="83%" numero="+" style="background-color: #CDE6FF ")
            .h5.mb-2 Sexo
            p La entidad Sexo es una entidad fuerte, ya que carece de una llave foránea, es decir, no tiene dependencia de ninguna otra entidad o valor de entidad.
          .tarjeta.p-3(x="71.1%" y="57.2%" numero="+" style="background-color: #CDE6FF ")
            .h5.mb-2 Sexo_Persona
            p La entidad “Persona” tiene dependencia con la entidad “Sexo” a través del atributo Sexo_Persona, ya que la entidad “Sexo” le proporciona este dato a la entidad “Persona”, dependiendo de esta asignación para poder realizar este registro.
          .tarjeta.p-3(x="49.7%" y="64.8%" numero="+" style="background-color: #CDE6FF ")
            .h5.mb-2 Codigo
            p (Igual que todos los demás que están en círculos) 
    .cajon-b.color-primario.arriba-derecha.p-3.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-0 Otro de los conceptos para tener en cuenta es el de atributo, los atributos son cada una de las propiedades o características que tiene un tipo de entidad o un tipo de relación. Toman valores de uno o varios dominios que representan las características de la entidad, y estos, en el momento de realizar el registro de la información, se convierten en los datos que se solicitan, aunque es importante tener en cuenta que los atributos tienen diferentes tipos de datos, por lo cual, se hace necesario suministrar la información de acuerdo con este tipo de situaciones.
        .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/17.svg', alt='' style="width: 100px") 
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 11
          br
          span.fst-italic Atributos 
        img(src='@/assets/curso/temas/tema5/18.png', alt='Texto que describa la imagen' class="img-fluid" data-aos='fade-left')
    p.mb-5(data-aos='fade-right')
      span.color-primario Dentro del modelo relacional, se pueden encontrar atributos multivaluados y también opcionales, observe:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3.col-md-8.col-10
        .tarjeta.bg-tema4__2.p-4.h-100
          img(src="../assets/curso/temas/tema5/19.svg", alt="tema4-4" style="width: 77px").mb-4
          h4 Atributo multivaluado
          p.mb-0 Atributos de una entidad que pueden tener más de un valor.
      .col-lg-4.mb-lg-0.mb-3.col-md-8.col-10
        .tarjeta.bg-tema4__2.p-4.h-100
          img(src="../assets/curso/temas/tema5/20.svg", alt="tema4-4" style="width: 77px").mb-4
          h4 Atributo optativo
          p.mb-0 Aquel que puede admitir valores nulos.
      .col-lg-4.mb-lg-0.mb-3.col-md-8.col-10
        .tarjeta.bg-tema4__2.p-4.h-100
          img(src="../assets/curso/temas/tema5/21.svg", alt="tema4-4" style="width: 77px").mb-4
          h4 Atributo identificador
          p.mb-0 Uno o más campos cuyos valores son únicos en cada ejemplar de una entidad y deben distinguir a cada ejemplar que utiliza el modelo, teniendo en cuenta que todos los ejemplares de una entidad deben tener el mismo identificador.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Un atributo es importante aun cuando no tenga entidad concreta asociada, entonces se trata de una entidad y no de un atributo.
        .tarjeta.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
            .col-lg-10
              p.text-white.mb-0 Los atributos y tablas son componentes que le dan vida y razón de ser a la base de datos, estos permiten organizar la estructura de la base de datos de manera correcta. 
        p Los atributos de una entidad reflejan la cantidad de datos que esta recibe, la longitud y tipo de dato que es compatible con el mismo; es decir, si un atributo tiene como tipo de dato entero o int, no se podrán almacenar caracteres ni ningún tipo de dato diferente en el mismo.
          br
          br
          |Ahora bien, cabe destacar que, si el tipo de dato utilizado en el atributo es de tipo texto, caracter o #[em varchar], este permitirá almacenar cualquier tipo de dato que se requiera, solo que es necesario ilustrar la cantidad de datos que tiene para poder indicarle al usuario cómo debe ingresar los datos de manera correcta.
      .col-lg-5.col-6: img(src='@/assets/curso/temas/tema5/22.png', alt='Texto que describa la imagen' class="img-fluid" data-aos='fade-left')
</template>

<script>
export default {
  name: 'Tema5',
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
.bg-tema1
  &__1
      img
        width: 50px
      background-image: url('../assets/curso/temas/tema1/f2.svg')
      background-repeat: no-repeat
      background-size: 100%
      background-position: center
      transition: background-image 0.5s ease-in-out
      &:hover
        background-image: url('../assets/curso/temas/tema1/f3.svg')
.bg-4
  background-image: url('../assets/curso/temas/tema4/bg-tema4.svg')
  background-repeat: no-repeat
  background-position: initial
  background-size: cover

.bg-tema5
  &__1
      img
        width: 50px
      background-image: url('../assets/curso/temas/tema5/bg-f.svg')
      background-repeat: no-repeat
      background-size: 100%
      background-position: center
      transition: background-image 0.5s ease-in-out
      // &:hover
      //   background-image: url('../assets/curso/temas/tema4/f2.svg')
</style>
