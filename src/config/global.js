export default {
  global: {
    componenteFormativo: 'Sistemas de almacenamiento y modelado de datos',
    descripcionCurso:
      'Este componente está orientado a brindar los conocimientos sobre el manejo de bases de datos, sentencias DML y sentencias SQL para realizar las consultas de la información almacenada, tablas y atributos, el esquema del modelo relacional y el diagrama entidad relación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos de bases de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de sentencias DML',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de sentencias SQL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelado de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tablas y atributos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Modelo relacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Diagrama entidad-relación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Manejo de sentencias SQL',
      referencia:
        'Chávez, J. (2016). <em>7 video consultas en phpMyAdmin con sql</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fHU0lY3FqB0&ab_channel=J%C3%B3seLuisCh%C3%A1vezG%C3%B3mez',
    },
    {
      tema: 'Modelo relacional',
      referencia:
        'Coronado, D., Rodríguez, R., Tineo, L. y Carrasquel, S. (2018). Gestión de Datos Difusos: Atributos Tipo 2 y Tipo 3 en bases de datos relacionales. <em>Publicaciones en Ciencias y Tecnología</em>, 12(2), p. 83-95.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_b4db22235526430295652b34b49ad6dd',
    },
    {
      tema: 'Modelo relacional',
      referencia:
        'Aragón, Y., González, C., Hernández, O. y Hernández, E. (2018). Herramienta para el aprendizaje de bases de datos relacionales. <em>Revista Cubana De Ciencias Informáticas</em>, 12(3), p. 163-176.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_c58ddc9f05b247f8aa014947f4cf730b',
    },
  ],
  glosario: [
    {
      termino: 'Atributo',
      significado:
        'son características de las entidades que permiten asignar un nombre, longitud y tipo a la misma y reflejan la información que se suministra a la base de datos.',
    },
    {
      termino: 'Base de datos',
      significado:
        'es una estructura de almacenamiento de información permanente y organizada, que permite insertar, actualizar, buscar y eliminar datos con facilidad.',
    },
    {
      termino: 'Cardinalidad',
      significado:
        'son las restricciones que tienen las relaciones de las entidades en la base de datos.',
    },
    {
      termino: 'DDL',
      significado:
        'significa lenguaje de definición de datos y se utiliza para crear la estructura principal de la base de datos, tales como las tablas y las relaciones.',
    },
    {
      termino: 'DML',
      significado:
        'significa lenguaje de manipulación de datos y permite realizar la inserción, actualización y eliminación de datos en una base de datos.',
    },
    {
      termino: 'Entidad',
      significado:
        'es un componente de la base de datos que permite el almacenamiento de la información que se le suministra a la base de datos.',
    },
    {
      termino: 'Modelo entidad-relación',
      significado:
        'es un esquema que refleja la manera como están relacionados los datos dentro de la base de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Araneda, P. (2020). <em>Base de Datos. El Camino de los datos a la información.</em> Bookdown.',
      link:
        'ttps://bookdown.org/paranedagarcia/database/modelamiento-de-datos.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dulfran Antonio Montaño Montaño',
          cargo: 'Experto Temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Diseñador Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fabian Zarate',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Camilo Bolaño',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres ',
          cargo: 'Validación audiovisual ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey ',
          cargo: 'Locución ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Ilustración ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Mary Jeans Palacio Camacho ',
          cargo: 'Producción audiovisual ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Producción audiovisual ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta ',
          cargo: 'Validación Contenido ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
