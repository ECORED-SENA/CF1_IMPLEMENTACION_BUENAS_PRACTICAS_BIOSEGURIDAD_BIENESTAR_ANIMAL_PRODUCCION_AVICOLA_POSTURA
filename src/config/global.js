export default {
  global: {
    Name:
      'Producción avícola de postura: conceptos, genética, instalaciones y bioseguridad',
    Description:
      'El componente formativo Producción avícola de postura: conceptos, genética, instalaciones y bioseguridad, fortalece las competencias técnicas y sanitarias en el manejo de gallinas ponedoras, garantizando la calidad e inocuidad del huevo. Incluye genética, bioseguridad, bienestar animal, vacunación, desparasitación y manejo productivo, promoviendo sostenibilidad, innovación y cumplimiento normativo del ICA en el sector avícola colombiano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Avicultura de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Fundamentos normativos en Colombia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia económica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia social',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Importancia nutricional del huevo',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Líneas modernas de ponedoras en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Razas criollas y huevos azules',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos obligatorios según normatividad',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Principios de bioseguridad avícola',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolo operativo diario de bioseguridad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Normatividad - Instituto Colombiano Agropecuario (ICA)',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Enfermedades aviares de importancia sanitaria en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              '<em>Newcastle</em> (NDV - <em>Paramyxovirus aviar</em> tipo 1)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Influenza aviar (IA)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: '<em>Salmonelosis aviar</em>',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Plan de vacunación y desparasitación en avicultura de postura',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Galpones para avicultura de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Diseño y manejo de galpones avícolas ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de galpones para avicultura de postura',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Ventilación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Iluminación',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Espacio',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Importancia de la avicultura de postura',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Equipos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Bebederos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Comederos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Nidales',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Grameras (balanzas para aves y productos avícolas)',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Perchas',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Cubetas para huevos',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Pediluvios',
            hash: 't_6_7',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Manejo productivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Manejo de cortinas y ventilación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Manejo de camas o yacija',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Manejo de la alimentación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Clasificación y almacenamiento del huevo',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Manual de protocolos avícolas',
            hash: 't_7_5',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'Bioseguridad',
      referencia:
        'Federación Nacional de Avicultores de Colombia (FENAVI). (2023). Cartilla Bioseguridad: Una oportunidad para la rentabilidad avícola.',
      tipo: 'Cartilla informativa',
      link:
        'https://fenavi.org/publicaciones-programa-economico/documentos-avicolas/cartilla-bioseguridad-una-oportunidad-para-la-rentabilidad-avicola/',
    },
    {
      tema: 'Bioseguridad',
      referencia:
        'Federación Nacional de Avicultores de Colombia (FENAVI). (2024). Cartilla Gestión Ambiental en Plantas de Beneficio de Aves de Corral.',
      tipo: 'Cartilla técnica',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/cartilla-gestion-ambiental-en-plantas-de-beneficio-de-aves-de-corral-2022/ ',
    },
    {
      tema: 'Bioseguridad',
      referencia:
        'Federación Nacional de Avicultores de Colombia (FENAVI). (2025). Videos Programa Técnico de FENAVI.',
      tipo: 'Video / recurso multimedia',
      link: 'https://fenavi.org/programa-tecnico/videos-programa-tecnico/ ',
    },
    {
      tema: 'Normatividad - Instituto Colombiano Agropecuario (ICA)',
      referencia:
        'Federación Nacional de Avicultores de Colombia (FENAVI). (2019). Código Buenas Prácticas Avícolas (BPAV).',
      tipo: 'Manual técnico',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/C%C3%93DIGO-BUENAS-PR%C3%81CTICAS-AV%C3%8DCOLAS-BPAV-V2.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Avicultura de postura',
      significado:
        'rama de la producción avícola dedicada a la cría y manejo de aves ponedoras con el fin de producir huevos para consumo humano.',
    },
    {
      termino: 'Bebederos',
      significado:
        'dispositivos utilizados para suministrar agua potable a las aves de manera continua y controlada.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'estado físico y mental de las aves en relación con las condiciones en las que viven, incluyendo alimentación, salud, comportamiento y entorno.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas preventivas diseñadas para evitar la entrada y propagación de agentes patógenos en una granja avícola.',
    },
    {
      termino: 'Comederos',
      significado:
        'recipientes o sistemas empleados para distribuir el alimento balanceado a las aves de forma eficiente.',
    },
    {
      termino: 'Galpón',
      significado:
        'estructura destinada al alojamiento de aves, diseñada para controlar factores ambientales como ventilación, temperatura, iluminación y espacio.',
    },
    {
      termino: 'Línea genética',
      significado:
        'grupo de aves con características productivas y reproductivas definidas, obtenidas mediante selección genética.',
    },
    {
      termino: '<em>Newcastle</em>',
      significado:
        'enfermedad viral altamente contagiosa que afecta al sistema respiratorio, digestivo y nervioso de las aves, con alta tasa de mortalidad.',
    },
    {
      termino: 'Nidales',
      significado:
        'espacios habilitados dentro del galpón para que las gallinas puedan poner sus huevos de forma cómoda y segura.',
    },
    {
      termino: 'Salmonelosis',
      significado:
        'enfermedad bacteriana causada por Salmonella spp., que puede afectar a las aves y representar riesgo para la salud humana.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asociación Latinoamericana de Avicultura. (2019). Manual de buenas prácticas de bioseguridad en avicultura de postura. ALPA.',
      link: '',
    },
    {
      referencia:
        'Castillo, J. (2021, mayo 10). Valoración del nivel de aplicación de normas de bioseguridad en la avícola Nuevo Amanecer [Práctica profesional, Universidad de Cundinamarca]. Repositorio Universidad de Cundinamarca. ',
      link: 'https://repositorio.ucundinamarca.edu.co/handle/20.500.12558/3471',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia (FENAVI). (2020). Guía de bienestar animal para la producción de huevo en Colombia. Bogotá: FENAVI.',
      link: '',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (2018). Good practices for animal welfare in egg production systems. FAO. ',
      link: 'https://www.fao.org/family-farming/detail/es/c/1739716',
    },
    {
      referencia:
        'González Álvarez, A. M. (2024, noviembre 8). Implementación de Buenas Prácticas Pecuarias (BPP) en Sistema de Producción Avícola, en la Finca Agroecológica La Selva, Vereda Las Olas, dentro del Corregimiento de San Rafael de Tuluá [Tesis de grado, Universidad Nacional Abierta y a Distancia]. Repositorio UNAD. ',
      link: 'https://repository.unad.edu.co/handle/10596/64567',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2014). Resolución 3651 de 2014: Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. ICA. ',
      link: '',
    },
    {
      referencia:
        'Instituto Interamericano de Cooperación para la Agricultura, Servicio Ecuatoriano en Sanidad Agropecuaria, & Corporación Nacional de Avicultores del Ecuador. (s. f.). Buenas Prácticas de Producción Avícola: bioseguridad en avicultura. IICA. ',
      link: 'https://repositorio.iica.int/handle/11324/19788',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (2021). Código Sanitario para los Animales Terrestres: Bienestar de los pollos de engorde y gallinas ponedoras. OIE. ',
      link: '',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2020). Manual de bioseguridad y buenas prácticas en la producción avícola frente a enfermedades emergentes. OPS.',
      link: '',
    },
    {
      referencia:
        'Villamil, J., & Bautista, A. (2022). Bioseguridad y bienestar animal en la producción avícola: Retos y perspectivas en Latinoamérica. Revista Colombiana de Ciencias Pecuarias, 35(2), 115–128. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Diana Milena Picon Rincón',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
}
