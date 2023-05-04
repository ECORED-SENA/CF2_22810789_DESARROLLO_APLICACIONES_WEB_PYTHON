<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Modelo relacional 
    p.mb-2(data-aos='fade-right') Para mejor ilustración de lo que es un modelo relacional y complementar lo que ya se ha visto hasta ahora sobre el mismo, es preciso comenzar con un ejemplo simple de dos tablas que una pequeña empresa podría utilizar para procesar pedidos de sus productos.
    .f6.mn.p-5
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.p-4.mb-3(style="background-color: #D5CEF8 ")
            p La primera tabla es una tabla de información del cliente, por lo que cada registro incluye el nombre, la dirección, la información de envío y facturación, el número de teléfono y otra información de contacto. Cada bit de información (cada atributo) está en su propia columna y la base de datos asigna un ID único (una clave) a cada fila. 
              br
              br
              | En la segunda tabla, una tabla del pedido del cliente, cada registro incluye el ID del cliente que realizó el pedido, el producto solicitado, la cantidad, el tamaño y el color seleccionados, etcétera, pero no el nombre o la información de contacto del cliente.
              br
              br
              | Estas dos tablas tienen solo una cosa en común: la columna de ID (la clave). 
              br
              br
              | Gracias a esa columna en común, la base de datos relacional puede crear una relación entre las dos tablas. Entonces, cuando la aplicación de procesamiento de pedidos de la empresa envía un pedido a la base de datos, la base de datos puede ir a la tabla de pedidos del cliente, extraer la información correcta sobre el pedido del producto y usar el ID del cliente de esa tabla para buscar la información de facturación y envío en la tabla de información del cliente. 
              br
              br
              | Entonces, el almacén puede extraer el producto correcto, el cliente puede recibir la entrega del pedido a tiempo y la empresa puede recibir el pago. 
          p El modelo relacional significa que las estructuras lógicas de datos (las tablas de datos, las vistas y los índices) están separadas de las estructuras físicas de almacenamiento. 
        .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema6/1.png', alt='')
      .tarjeta.p-4.mb-4(style="background-color: #A3B9CF")
        .row.justify-content-center
          .col-lg-1.col-6: img(src='@/assets/curso/temas/tema6/2.svg', alt='')
          .col-lg-11
            p.mb-0 Esta separación significa que los administradores de bases de datos pueden administrar el almacenamiento físico de datos sin afectar el acceso a esos datos como una estructura lógica. Por ejemplo, cambiar el nombre de un archivo de base de datos no cambia el nombre de las tablas almacenadas en él.
      .row.justify-content-center.mb-5
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema6/3.png', alt='')
        .col-lg-8
          .tarjeta.color-secundario.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
              .col-lg-10
                p.text-white.mb-0 La distinción entre lógica y física también se aplica a las operaciones de la base de datos, que son acciones claramente definidas que permiten a las aplicaciones manipular los datos y las estructuras de la base de datos. Las operaciones lógicas permiten que una aplicación especifique el contenido que necesita, mientras que las operaciones físicas determinan cómo se debe acceder a esos datos y luego realizan la tarea.
          p Para garantizar que los datos sean siempre precisos y accesibles, las bases de datos relacionales siguen ciertas reglas de integridad. Por ejemplo, una regla de integridad puede especificar que no se permitan filas duplicadas en una tabla, para eliminar la posibilidad de que se ingrese información errónea en la base de datos, #[span.color-primario como se ilustra en la imagen a continuación.]
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 12
            br
            span.fst-italic Modelo relacional
          img(src='@/assets/curso/temas/tema6/4.svg', alt='').mb-3
          figcaption.bg-white Nota. Adaptado de Araneda (2020).
      p.mb-5(data-aos='fade-right')
        span.color-primario Observe a continuación, a través de un video, cómo se llega al modelo relacional:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .subtitulo.mb-3
      h3 Modelo relacional y coherencia de datos
    p.mb-5(data-aos='fade-right') El modelo relacional es el mejor para mantener la consistencia de los datos en todas las aplicaciones y copias de la base de datos (denominadas instancias). 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Por ejemplo, cuando un cliente deposita dinero en un cajero automático y luego mira el saldo de la cuenta en un teléfono móvil, el cliente espera ver que ese depósito se refleje inmediatamente en un saldo de cuenta actualizado. Las bases de datos relacionales se destacan en este tipo de consistencia de datos, lo que garantiza que múltiples instancias de una base de datos tengan los mismos datos todo el tiempo.
          br
          br
          |Es difícil para otros tipos de bases de datos mantener este nivel de coherencia oportuna con grandes cantidades de datos. Algunas bases de datos recientes, como NoSQL, solo pueden proporcionar “coherencia eventual”.
        .tarjeta.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
            .col-lg-10
              p.text-white.mb-0 Según este principio, cuando se escala la base de datos o cuando varios usuarios acceden a los mismos datos al mismo tiempo, los datos necesitan algo de tiempo para “ponerse al día”. La coherencia eventual es aceptable para algunos usos, como mantener listados en un catálogo de productos, pero para operaciones comerciales críticas, como transacciones de carrito de compras, la base de datos relacional sigue siendo lo ideal. 
      .col-lg-5.col-6: img(src='@/assets/curso/temas/tema6/5.png', alt='')
</template>

<script>
export default {
  name: 'Tema6',
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
.f6
  background-image: url('~@/assets/curso/temas/tema6/f6.svg')
  background-repeat: no-repeat
  background-position: right bottom
  background-size: cover
</style>
