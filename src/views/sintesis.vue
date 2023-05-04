<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Las bases de datos son esa alternativa esencial en las empresas para el manejo y procesamiento de información, por su capacidad de almacenamiento casi ilimitada y posibilidades de realizar los procesos de actualización y búsqueda de información con una velocidad y precisión casi perfectas.
      br
      br
      |Por lo cual, al hablar de sistemas de almacenamiento y modelado de datos, se hace referencia expresamente a ellas, a sus elementos constitutivos y a las sentencias, modelos y diagramas que se desplegarán a través de estas.
      br
      br
      span.color-primario A continuación, una síntesis de lo visto en este componente: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
