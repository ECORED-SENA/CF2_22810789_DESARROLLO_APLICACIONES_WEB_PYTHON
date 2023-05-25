<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos de bases de datos 
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Las bases de datos se han convertido en la alternativa esencial en las empresas para el manejo y procesamiento de información, ya que estas tienen una capacidad de almacenamiento casi ilimitada y realizan los procesos de actualización y búsqueda de información con una velocidad y precisión casi perfecta. 
    p.mb-5(data-aos='fade-right')
      span.color-primario El siguiente video amplía esta temática:      
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TG-a63FEdzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mt-2 Video. Conceptos base de datos
    p.mb-5(data-aos='fade-right') Las bases de datos proponen un estilo de almacenamiento de la información que se encuentra distribuido en filas y columnas. Este estilo de organización permite que la información se distribuya de tal manera que su crecimiento se realice de forma vertical. Es así como los datos siempre incrementarán: #[span.color-primario entre mayor cantidad de filas contenga la base de datos, mayor cantidad de datos e información se verán reflejados en la misma.]
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.bg-tema1__1.p-5.h-100
          p.ms-4.mb-0 Como se puede ver en la siguiente figura, los datos se encuentran registrados por medio de filas, las cuales tienen su incremento de forma vertical; es decir, cada vez que se registra una nueva persona, se agrega una nueva fila, que está acompañada del conjunto de columnas llamadas campos.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          br
          span.fst-italic Estructura Base de Datos
        img(src='@/assets/curso/temas/tema1/3.png', alt='La imagen muestra una captura de pantalla de una estructura de bases de datos. En la interfaz, se visualizan las tablas y relaciones que componen la base de datos. Las tablas representan entidades o conceptos dentro del sistema y contienen columnas que representan los atributos de cada entidad.') 
    p.mb-5(data-aos='fade-right')
      span.color-primario En este caso, los campos que se observan son 5:
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/4.svg', alt='')
            p.fw-bold.mb-0.ms-3  PKID
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/5.svg', alt='')
            p.fw-bold.mb-0.ms-3  Nombre
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/6.svg', alt='')
            p.fw-bold.mb-0.ms-3  Contacto
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/7.svg', alt='')
            p.fw-bold.mb-0.ms-3  FKCodigo_Tbl#[br]_Sexo
      .col-lg-3.col-md-8.col-10
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/8.svg', alt='')
            p.fw-bold.mb-0.ms-3  Edad
    .tarjeta.color-secundario.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
        .col-lg-10
          p.text-white.mb-0 Estos campos corresponden a los datos que se le solicitan al cliente y que luego pasan a ser parte de las filas del almacenamiento de la información en la base de datos. Esta debe contar con algo denominado llave primaria, la cual evita que un registro que se realizó previamente se pueda repetir en la base de datos, evitando así duplicidad de la información; para el caso de ejemplo, la llave primaria es PKID, que corresponde al número de identificación de la persona registrada. 
    p.mb-5(data-aos='fade-right') Es importante saber que las bases de datos están conformadas por tablas, las cuales requieren que cada una de sus columnas (llamadas campos) reciban un tipo de dato específico que se almacene en él.
      br
      br
      span.color-primario Los datos más conocidos y utilizados en los sistemas de bases de datos son los siguientes: 
    .row.justify-content-center.align-items-center.mb-2
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/10.svg', alt='')
            p.fw-bold.mb-0.ms-3  Varchar
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/11.svg', alt='')
            p.fw-bold.mb-0.ms-3  Int
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/12.svg', alt='')
            p.fw-bold.mb-0.ms-3  Date 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-8.col-10.mb-lg-0.mb-3
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/13.svg', alt='')
            p.fw-bold.mb-0.ms-3  Double
      .col-lg-3.col-md-8.col-10
        .tarjeta.rounded-3.bg-tema1__2.h-100.p-3
          .d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/temas/tema1/14.svg', alt='')
            p.fw-bold.mb-0.ms-3  Float 
    .tarjeta.p-4.mb-5(style="background-color: #D6EAFF")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
        .col-lg-10
          p.mb-0 Estos tipos de datos permiten que la información se pueda almacenar en el formato que corresponda, de acuerdo con las necesidades del cliente. Se debe tener en cuenta que almacenar un dato que no corresponda a su valor dentro de la base de datos podría acarrear problemas de manipulación de los datos en un futuro, por eso se hace necesario que se determinen los tipos de datos de acuerdo con la información que será almacenada en el mismo. 
      
















</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

  &__2
    img
      width: 50px
    background-image: url('../assets/curso/temas/tema1/f2.svg')
    background-repeat: no-repeat
    background-size: 100%
    background-position: center
    transition: background-image 0.5s ease-in-out
    &:hover
      background-image: url('../assets/curso/temas/tema1/f3.svg')
</style>
