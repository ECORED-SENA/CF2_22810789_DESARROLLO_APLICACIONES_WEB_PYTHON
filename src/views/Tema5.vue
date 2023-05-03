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
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .tarjeta.rounded-3.bg-tema1__1.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema5/2.svg', alt='')
            p.fw-bold.mb-0.ms-3 El tipo de dato
      .col-lg-4
        .tarjeta.rounded-3.bg-tema1__1.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema5/3.svg', alt='')
            p.fw-bold.mb-0.ms-3 La longitud
      .col-lg-4
        .tarjeta.rounded-3.bg-tema1__1.h-100.p-3 
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
        img(src='@/assets/curso/temas/tema5/5.png', alt='' style="width: 100%")
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
            | #[span.color-secundario Filas:] serían cada unidad necesaria de almacenamiento, que se corresponden con los registros de la tabla.
          li
            i.fas.fa-check(style="color: #221B6B")
            | #[span.color-secundario Columnas:] que se corresponden con los campos, unidad mínima de información, donde se podría almacenar cada dato referente a una propiedad del registro.
        p También sería posible tener una entidad débil, que es una entidad cuyos atributos no la identifican completamente, sino que solo la identifican de forma parcial. 
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/13.png', alt='' style="width: 100%")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema5/14.svg', alt='' style="width: 100%")
      .col-lg-11
        p.mb-0 Esta entidad debe participar en una interrelación que ayuda a identificarla. Es importante tener en cuenta que la entidad débil tiene una dependencia funcional con otra entidad de la base de datos y está estrechamente relacionada con la conexión de las llaves que esta pueda tener, es decir, depende de la existencia de otra entidad, la cual comparte con la misma la conexión de información registrada regularmente. Esta situación se da entre llaves primarias y foráneas donde el valor de la primaria debe coincidir completamente con el valor almacenado en la llave foránea.
    p.mb-5(data-aos='fade-right') 
      span.color-secundario Observe la representación de las entidades, a continuación, a través de un ejemplo:

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
