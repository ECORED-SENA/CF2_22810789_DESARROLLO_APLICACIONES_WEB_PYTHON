<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .tarjeta.bg-intro.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
        .col-lg-9
          p.mb-0 Bienvenidos a este componente formativo, en el cual abordaremos las temáticas relacionadas con los #[span.color-primario sistemas de almacenamiento de información], también llamados bases de datos. A continuación, le invitamos a ver el siguiente video para conocer un poco más sobre estos sistemas de almacenamiento y modelado de datos:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bg-intro
  background-image: url('../assets/curso/temas/intro/fondo.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: bottom
</style>
