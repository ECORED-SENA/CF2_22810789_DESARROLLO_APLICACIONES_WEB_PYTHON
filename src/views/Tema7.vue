4<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Diagrama entidad-relación
    .row.justify-content-center.mb-5
      .col-lg-1.col-5.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema7/1.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 El Modelo Entidad Relación (MER) es una herramienta de modelado que fue introducida originalmente por Peter Chen, en 1976, y aunque ha sufrido variaciones en cuanto a los elementos de diagramas utilizados para representar sus elementos, su operación y utilidad siguen vigentes. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p La base del MER está en identificar los elementos o entidades importantes del sistema, los datos (atributos) que componen cada uno de ellos y la interacción (relación) entre dichos elementos.
          br
          br
          |El MER consiste en representar, a nivel conceptual, los datos que soportan el funcionamiento de un sistema y sus componentes básicos son: Entidades, Atributos y Relaciones. 
        .tarjeta.bg-tema2__1.px-3.py-4.mb-3
            p.mb-0.ms-5 Las entidades representan abstracciones con atributos que almacenan datos; las relaciones son las asociaciones que existen entre entidades y permiten generar información al combinarse entre sí.
        p Hasta este momento ya se ha dado una introducción a estos componentes básicos, pero para profundizar se amplía sobre su conceptualización a continuación:
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema7/2.png', alt='')
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Entidad")
        .col-md-9.mb-4.mb-md-0
          p Se denomina entidad a todo ente (conceptual o físico) del cual se desea establecer su participación dentro de un sistema de información. Una entidad concreta o física es aquella con existencia física, representa un objeto del mundo real (persona o elemento). Una entidad abstracta no tiene una representación física concreta (posición laboral, asignatura).
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema7/3.svg', alt='')
      .row(titulo="Atributo")
        .col-md-9.mb-4.mb-md-0
          p El atributo es un elemento de información que caracteriza a una entidad, identificándola, calificándola, cuantificándola, o declarando su estado. Por lo general, una entidad se compone de uno o más atributos (edad, genero, estatura, nombre, etc.). Los atributos permiten diferenciar elementos dentro de un conjunto de entidades. Dentro de una entidad de tipo persona, es muy raro el caso que existan dos con exactamente los mismos atributos.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema7/4.svg', alt='')
      .row(titulo="Relaciones")
        .col-md-9.mb-4.mb-md-0
          p Las relaciones identifican la interacción que existe entre dos o más entidades. Establecen el comportamiento del sistema de información. 
        .col-md-3
          figure
            img(src='@/assets/curso/temas/tema7/5.svg', alt='')
    .f7.p-5.mn.pb-2 
      p #[span.color-primario Los elementos básicos de MER] se presentan en un diagrama simple, que permite establecer en forma general un modelo de datos, tal como se ejemplifica en la imagen:
      .row.justify-content-center.mb-5
        .col-lg-8
          img(src='@/assets/curso/temas/tema7/6.png', alt='La imagen muestra los elementos básicos de un diagrama entidad-relación (DER). En el diagrama, se pueden identificar las entidades representadas como rectángulos, los atributos como ovalos, las relaciones entre entidades mediante líneas.')
      p Un ejemplo de uso sería el siguiente:
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 12 
            br
            span.fst-italic  Ejemplo MER
          img(src='@/assets/curso/temas/tema7/7.png', alt='La imagen muestra un ejemplo de un Modelo Entidad-Relación (MER). En el diagrama, se pueden identificar las entidades representadas como rectángulos, las relaciones entre las entidades mediante líneas y los atributos de las entidades dentro de los ovalos. ')
      .subtitulo.mb-3
        h3 Modelamiento lógico
      .cajon-b.color-primario.arriba-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-0 Un modelo de datos lógicos describe los datos con el mayor detalle posible, independientemente de cómo se implementarán físicamente en la base de datos.
              br
              br
              |El mismo también cuenta con características propias y etapas para realizar, #[span.color-primario las cuales se muestran a continuación:]
          .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/17.svg', alt='' style="width: 100px") 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2
        br
        span.fst-italic Características y etapas del modelamiento lógico
      .tabla-a.color-acento-contenido.mb-5
        table
          thead(style="background-color: #64B2FF ")
            tr
              th.h5.fw-bold Características
              th.h5.fw-bold  Etapas
          tbody.bg-white
            tr
              td 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Incluye todas las entidades y relaciones entre ellos.

                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Todos los atributos para cada entidad están especificados.

                  li.d-flex.fw-bold
                    i.fas.fa-check
                    p.mb-0 La clave principal para cada entidad está especificada.

                  li.d-flex.fw-bold
                    i.fas.fa-check
                    p.mb-0 Se especifican las claves externas (claves que identifican la relación entre diferentes entidades).

                  li.d-flex.fw-bold
                    i.fas.fa-check
                    p.mb-0 La normalización ocurre en este nivel.
              td.fw-bold 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Especificar claves primarias para todas las entidades.

                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Encontrar las relaciones entre diferentes entidades.

                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Encontrar todos los atributos para cada entidad.

                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Resolver las relaciones de muchos a muchos.

                  li.d-flex
                    i.fas.fa-check
                    p.mb-0 Realizar proceso de normalización.
    .subtitulo.mb-5
      h3 Cardinalidad
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La cardinalidad está definida como la cantidad de elementos, en términos de proporción, que participan en la relación entre dos o más entidades. Esta puede ser entre elementos únicos (unitarios) o múltiples. Generalmente, se utiliza la denominación “1” para elementos unitarios y “N” para varios elementos participantes.
    p.mb-5(data-aos='fade-right') Por ejemplo, el diagrama siguiente expresa que “un autor escribe varios libros” o “un libro es escrito por un autor”:
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 14
          br
          span.fst-italic Ejemplo Cardinalidad 
        img(src='@/assets/curso/temas/tema7/10.png', alt='La imagen muestra un ejemplo de cardinalidad en un diagrama entidad-relación, se pueden observar los símbolos de cardinalidad, como 1 y N, que indican una relación de uno a muchos. Esto significa que una instancia de una entidad se relaciona con varias instancias de la otra entidad. La cardinalidad es un aspecto importante en el diseño de bases de datos, ya que ayuda a definir las restricciones y las interrelaciones entre las entidades en un sistema.')
    p.mb-5(data-aos='fade-right') Las expresiones que pueden indicarse a partir de estos 4 diagramas son:
    .f7.mn.p-5
      .row.justify-content-center.mb-5
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.bg-tema4__2.p-4.h-100
            img(src="../assets/curso/temas/tema7/11.svg", alt="tema4-4" style="width: 77px").mb-4
            p.mb-0 Un Autor escribe Al Menos un Libro (Cardinalidad mínima=1).
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.bg-tema4__2.p-4.h-100
            img(src="../assets/curso/temas/tema7/12.svg", alt="tema4-4" style="width: 77px").mb-4
            p.mb-0 Un Autor escribe Varios Libros (Cardinalidad máxima = N).
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.bg-tema4__2.p-4.h-100
            img(src="../assets/curso/temas/tema7/13.svg", alt="tema4-4" style="width: 77px").mb-4
            p.mb-0 Un Autor escribe uno o Varios Libros (Cardinalidad mínima= 1, máxima =N).
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.bg-tema4__2.p-4.h-100
            img(src="../assets/curso/temas/tema7/14.svg", alt="tema4-4" style="width: 77px").mb-4
            p.mb-0 Un Libro es escrito por un solo un Autor (Cardinalidad mínima y máxima = 1) .
      p.mb-5(data-aos='fade-right') Otro ejemplo que se podría traer como práctica es el siguiente, donde se desea colocar la cardinalidad correcta, de acuerdo con el tipo de relación que se refleja dentro de la base de datos, y es posible observarlo en la figura siguiente:
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 15 
            br
            span.fst-italic Ejemplo Cardinalidad
          img(src='@/assets/curso/temas/tema7/15.png', alt='La imagen muestra un ejemplo de cardinalidad en un diagrama entidad-relación, se pueden observar los símbolos de cardinalidad, como 1 y N, que indican una relación de uno a muchos. Esto significa que una instancia de una entidad se relaciona con varias instancias de la otra entidad. La cardinalidad es un aspecto importante en el diseño de bases de datos, ya que ayuda a definir las restricciones y las interrelaciones entre las entidades en un sistema.')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema7/16.svg', alt='')
        .col-lg-11
          p Una vez ya se han visto reflejados los datos dentro de un sistema de bases de datos real, en este caso, se está utilizando el motor de base de datos MySQL. 
            br
            br
            | Es posible observar cómo quedan distribuidas las relaciones de acuerdo con las conexiones que se establecen en la base de datos; es decir, se pasa del modelo conceptual de entendimiento básico a ya crear un sistema de bases de datos con todas sus relaciones completas, como se puede visualizar a continuación:
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura  16 
            br
            span.fst-italic Ejemplo Sistema de bases de datos
          img(src='@/assets/curso/temas/tema7/17.png', alt='La imagen muestra un ejemplo de un Sistema de Bases de Datos, también se visualizan las bases de datos, representadas como recuadros, que contienen las tablas y los registros que conforman el sistema.')
      p.mb-5(data-aos='fade-right') Como se puede observar en la imagen anterior, se visualiza la forma en cómo está distribuida la información con las diferentes entidades que hacen parte de esta.
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          p También se pueden visualizar los diferentes tipos de datos que tienen los atributos de la base de datos. Es necesario recordar que para relacionar dos entidades estas utilizan algo llamado llaves, las cuales pueden ser primarias o foráneas, y deben compartir la misma longitud y tipo de dato para poder relacionarse de manera correcta.
          .tarjeta.color-secundario.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
              .col-lg-10
                p.text-white.mb-0 En pocas palabras, si se van a relacionar 2 entidades y una tiene la llave de tipo int y la otra de tipo varchar, no se podrá realizar la conexión de las entidades, ya que estas tienen como restricción el tipo de dato y longitud para poder realizar el proceso de conexión de manera correcta.
        .col-lg-5.col-8: img(src='@/assets/curso/temas/tema7/18.png', alt='')
      
</template>

<script>
export default {
  name: 'Tema7',
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
.acordion__activo
  background-color: #EBE7FF !important
.f7
  background-image: url('~@/assets/curso/temas/tema7/f7.svg')
  background-repeat: no-repeat
  background-position: left top
  background-size: cover
</style>
