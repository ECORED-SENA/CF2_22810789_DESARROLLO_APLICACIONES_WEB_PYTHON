<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo de sentencias DML 
    p.mb-5(data-aos='fade-right') Las sentencias DML, también conocidas como l#[span.color-primario enguaje de definición de datos], son utilizadas para realizar la manipulación de la información que se encuentra dentro de una base de datos y está inmersa en el uso de unos comandos particulares que permiten realizar estos procesos.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
            .col-lg-10
              p.text-white.mb-0 Para las empresas es muy importante tener un control y gestión de la información, lo cual implica realizar una serie de operaciones, las cuales comprenden agregar nuevos datos, eliminar datos registrados y actualizarlos.
        p.mb-5(data-aos='fade-right') Estas operaciones se realizan prácticamente todos los días en un sistema de almacenamiento de información, por eso, es importante el lenguaje DML, ya que este contiene las funciones específicas para realizar estos procesos, los cuales se examinan a continuación:
      .col-lg-5.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/1.png', alt='')
    .subtitulo.mb-negative
      h3 Comando #[em insert]
    .p-5.mb-4.mn(style="background-color: #E4EBF2")
      .mt-5 
        .cajon-b.color-primario.arriba-derecha.p-3.mb-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              p.mb-0 Esta instrucción se utiliza para generar un nuevo registro dentro de la base de datos y es importante tener en cuenta que los registros son líneas completas de forma horizontal; es decir, el crecimiento que esta va a tener permite que los datos se lean de forma vertical; cada fila se genera y luego debe ser recorrida de manera vertical para la recuperación de los datos, como se observa en la figura. #[span.color-secundario Este es un ejemplo del uso del comando #[em insert] para crear un nuevo registro en la tabla de la base de datos:]
            .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/2.svg', alt='' style="width: 100px")
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2 
            br
            span.fst-italic  Comando insert
          img(src='@/assets/curso/temas/tema2/3.png', alt='La imagen muestra una captura de pantalla del comando INSERT en una base de datos SQL. En la interfaz, se puede observar la sintaxis del comando INSERT utilizado para insertar nuevos registros en una tabla específica')
      p.mb-5(data-aos='fade-right') Como se puede observar, en la imagen se aprecia el uso de la instrucción #[em insert], la cual consta de la siguiente estructura: inicialmente, se llama al comando que permite crear el nuevo registro, llamado #[em insert]; luego, la palabra #[em into], que indica dónde se va a colocar el nuevo registro; seguido del nombre de la tabla de la base de datos donde se insertarán los datos, acompañado de los campos de la tabla que se afectarán en el registro; luego, la palabra values, que significa valores a insertar, acompañada del orden específico de cómo se insertarán los datos en la tabla. Como se puede observar, primero se coloca el valor 1, que se guardará en el campo PKID, y luego, ‘Masculino’, que se guardará en el campo Nombre. #[span.color-primario Es importante tener en cuenta que cada dato a insertar está separado por coma, que los valores numéricos no llevan comillas y que los valores de carácter sí, como sucede en este caso.]
      .row.justify-content-center.mb-5
        .col-lg-7
          p.mb-3(data-aos='fade-right') La sentencia #[em insert] permite realizar un nuevo registro en la base de datos, de acuerdo con la estructura que se acaba de mencionar.
          .tarjeta.bg-tema2__1.px-3.py-4
            p.mb-0.ms-5 Cabe tener presente el orden de los campos a insertar, puesto que, si se invierten, estos no coincidirán y pueden mostrar errores al momento de la inserción de los datos. Se debe procurar que los datos que se inserten en la base de datos cumplan con las restricciones que se requieren.
              br
              br
              |Si se va a colocar un campo numérico, tener en cuenta que este se coloca literalmente como se escribe; mientras que si se va a insertar un dato de tipo caracter, se deben colocar las comillas, para evitar tener posteriores inconvenientes.
        .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/4.png', alt='')
      .subtitulo.mb-negative.mb-4
        h3 Comando #[em update]
      .cajon-b.color-primario.arriba-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-0 Este comando se utiliza cuando se tiene un registro realizado y se desea hacer un cambio en una o varias de sus columnas.
          .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/5.svg', alt='' style="width: 100px")
      .row.justify-content-center.mb-5
        .col-lg-5.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/6.png', alt='')
        .col-lg-7
          p.mb-0 Suponga que se registran los siguientes datos: Código, Nombre y Precio de un producto, y se requiere, en algún momento, cambiar el nombre del producto o su precio. El comando #[em Update] permite realizar esta operación para cambiar el valor contenido originalmente guardado en este campo.
            br
            br
            |Este comando es muy utilizado para realizar también cambios de varios registros; por ejemplo, que se cambie el precio de varios productos que comparten este mismo valor. #[span.color-primario A continuación, se visualiza la manera cómo el comando #[em Update] opera:]
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3
            br
            span.fst-italic Actualización de registros
          img(src='@/assets/curso/temas/tema2/7.png', alt='La imagen muestra una captura de pantalla de la actualización de registros en una base de datos SQL')
      .cajon-b.color-primario.arriba-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-0 Como se puede observar, se tienen 3 registros, los cuales tienen los siguientes campos: PKID, Nombre, Contacto, FKCodigo_Tbl_Sexo, Edad.
              br
              br
              |Cada uno de ellos guarda información del registro en columnas independientes, como se ilustra en la imagen; lo que se hará será actualizar uno de los datos que se encuentra en la tabla de la base de datos, en este caso, el que corresponde a “Javier Pérez”, #[span.color-primario y se ejecutará el comando, como se ilustra:]
          .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/8.svg', alt='' style="width: 100px")
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 4
            br
            span.fst-italic Comando update
          img(src='@/assets/curso/temas/tema2/9.png', alt='La imagen muestra una captura de pantalla de la actualización de registros en una base de datos SQL. En la interfaz, se visualiza la sintaxis del comando UPDATE utilizado para modificar datos existentes en una tabla específica. El comando UPDATE permite actualizar los valores de una o varias columnas en los registros seleccionados según una condición especificada.')
      p.mb-5(data-aos='fade-right') Como se puede observar, hay que ubicarse en la pestaña SQL para ejecutar el comando de actualización del registro de la tabla, procediendo a actualizar el nombre de la persona registrada, con la condición del documento de identidad que se refleja en el campo PKID, ya que este es el valor de campo que no se repite y es único para cada registro, procediendo a presionar el botón #[span.color-primario Continuar], en la parte inferior, para ejecutar la estructura de comandos y obteniendo el siguiente resultado:
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5
            br
            span.fst-italic Comando update
          img(src='@/assets/curso/temas/tema2/10.png', alt='La imagen muestra una captura de pantalla de la actualización de registros en una base de datos SQL, se pueden observar los nombres de las columnas y los nuevos valores que se están asignando.')
      p.mb-5(data-aos='fade-right') Como se puede observar en las imágenes anteriores, se ve el comportamiento de la actualización del registro de la base de datos con el nuevo nombre que se le ha asignado.
      .tarjeta.color-secundario.p-4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
          .col-lg-10
            p.text-white.mb-0 Es importante tener en cuenta la cláusula #[em where], ya que, si no se especifica el registro particular con el código que se actualizará, este procederá a realizar la actualización de todos los registros de la tabla de la base de datos.
      .subtitulo.mb-4
        h3 Comando #[em delete]
      .cajon-b.color-primario.arriba-derecha.p-3.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            p.mb-0 Este comando se utiliza para que, en el caso particular de que se necesite eliminar un registro de la base de datos, se pueda hacer con esta instrucción, aunque, en el caso particular de las bases de datos, la información que se registra dentro de ellas debe tener un tratamiento específico. En algunas ocasiones, realizar este proceso se hace bastante delicado, puesto que la eliminación de un registro implica su inexistencia y este podría estar relacionado con otros datos, lo cual podría generar un caos en la base de datos; por eso, es importante verificar antes de realizar la eliminación.
          .col-2(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/11.svg', alt='' style="width: 100px")
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .tarjeta.bg-tema1__1.p-5.mb-3
            p.ms-4.mb-0 Es posible que muchas de estas funcionalidades dentro de un sistema se manejen con mucha precaución debido al impacto negativo que puedan tener. A continuación se muestra un ejemplo de lo que ocurriría.
          p.mb-5(data-aos='fade-right') De los siguientes registros, se requiere realizar la eliminación del registro que tiene como identificación el número 45890567, que responde al nombre de Pepito Pérez, y para realizar este proceso, se debe utilizar la instrucción de eliminación de la siguiente manera:
        .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/12.png', alt='')
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 6
            br
            span.fst-italic Eliminar un dato de la Base de Datos
          img(src='@/assets/curso/temas/tema2/13.png', alt='En la imagen se puede observar la sintaxis del comando DELETE FROM utilizado para eliminar un dato o registros específicos de una tabla en la base de datos')
      p.mb-5(data-aos='fade-right') Como se puede evidenciar, se ha utilizado el comando #[em delete] para realizar la eliminación del registro de la base de datos.
        br
        br
        |Es importante denotar que para realizar la eliminación de este registro se ha colocado en la cláusula #[em where] el PKID o número de identificación, para señalar a la base de datos que este es el registro específico que debe eliminar. 
      .tarjeta.color-secundario.p-4.mb-5
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
          .col-lg-10
            p.text-white.mb-0 Si este proceso no se realiza de esta manera, se estarían eliminando todos los registros de la base de datos, lo cual sería un problema. Es importante tener siempre presente que se debe especificar, mediante un campo llave primaria, el dato a eliminar, para que solo este registro sea el que se elimine de la base de datos. 
</template>

<script>
export default {
  name: 'Tema2',
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
