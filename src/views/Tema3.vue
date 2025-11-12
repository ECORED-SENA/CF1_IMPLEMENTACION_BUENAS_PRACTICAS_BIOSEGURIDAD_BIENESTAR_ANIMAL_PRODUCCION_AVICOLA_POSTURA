<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Bioseguridad
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img.ajuste___img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La bioseguridad es un sistema de <strong>medidas estructuradas</strong> para impedir la introducción y propagación de agentes patógenos (virus, bacterias, hongos, parásitos) en gallinas, instalaciones, equipos y productos. Incluye tanto la <strong>bioseguridad externa</strong> (control de ingreso de aves, personas, vehículos) como la <strong>interna</strong> (higiene, desinfección, control de plagas, manejo de cama y residuos).
    
    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Objetivos obligatorios según normatividad
    
    p.mb-5 Toda granja avícola debe cumplir los siguientes <strong>requisitos normativos establecidos por el ICA</strong> para operar legalmente y mantener el estatus sanitario:

    .row.align-items-center.m-0.mb-0.style___box_6.ajuste___color_box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img26.jpg', alt='' ).m-auto
      .col-xl
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span A
            | Registro ante el ICA como predio avícola (RSPA).
          li 
            .lista-ol--cuadro__vineta
              span B
            | Infraestructura mínima: distancias reglamentarias, filtros sanitarios, perímetros definidos, control de visitantes y transporte.
          li 
            .lista-ol--cuadro__vineta
              span C
            | Procedimientos operativos estandarizados (POES): ingreso/salida, limpieza, desinfección, agua, residuos, vacunaciones.
          li 
            .lista-ol--cuadro__vineta
              span D
            | Vigilancia epidemiológica activa: Influenza Aviar, Newcastle, Salmonella, entre otras; notificación inmediata al ICA en caso de sospecha.
          li 
            .lista-ol--cuadro__vineta
              span E
            | Certificación de Granja Avícola Biosegura (GAB): según línea productiva (postura, levante, engorde).
          li 
            .lista-ol--cuadro__vineta
              span F
            | Cumplimiento de planes vacunales obligatorios y seguimiento mediante análisis de laboratorio si la norma lo requiere.

    <!-- BLOQUE 2 -->
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Principios de bioseguridad avícola

    p.mb-5 Los principios fundamentales garantizan el control sanitario de la granja y la prevención de enfermedades infecciosas. A continuación se presentan los <strong>siete pilares</strong> clave:

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Control de acceso
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Restringir entrada de personas, vehículos y animales.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso exclusivo de ropa/calzado.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Desinfección en pediluvios y rodaluvios.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img27.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manejo sanitario del plantel
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Adquirir aves certificadas.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar vacunas programadas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Realizar monitoreo constante.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img28.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Higiene y desinfección
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Limpieza periódica de galpones y equipos.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Eliminación adecuada de residuos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Control de agua y alimento limpios.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img29.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Control de plagas y fauna silvestre
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Prevenir ingreso de aves silvestres, roedores e insectos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Uso de mallas, trampas y cebos.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img30.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manejo del personal
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Capacitación continua.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Higiene personal.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Registro de visitas y movimientos.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manejo del flujo de producción
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar sistema todo dentro - todo fuera.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Períodos de descanso sanitario.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Evitar mezcla de edades.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Monitoreo y registros
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Controlar mortalidad, consumo, producción.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Notificación de síntomas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Análisis de laboratorio.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
    
    p.mb-4 Se busca <strong>limitar el ingreso de agentes patógenos, prevenir su propagación interna y garantizar la salud del plantel</strong> mediante control estricto, limpieza y vigilancia constante.

    p.mb-5 El siguiente video habla sobre la <strong>importancia del control sanitario</strong> en la producción avícola: cómo detectar a tiempo enfermedades, aplicar vacunaciones efectivas y ejecutar protocolos de limpieza y desinfección para proteger la salud de las aves y garantizar productos seguros.

    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/siDV05TJCnA" title="Control sanitario en la producción avícola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: control sanitario en la producción avícola.

    <!-- BLOQUE 3 -->
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Protocolo operativo diario de bioseguridad

    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img34.png', alt='' ).m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-xl-auto(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img35.svg', alt='' ).m-auto
          .col-xl
            p.mb-0 Este protocolo integrado permite aplicar de forma práctica y sistemática las normas sanitarias y los principios de bioseguridad en granjas de postura. Es clave para cumplir con los requisitos del ICA y responder ante cualquier brote sospechoso.
        p.mb-0.style___box_8(data-aos="zoom-in") En el siguiente video se explica la importancia de la bioseguridad en las granjas avícolas, destacando las normas y procedimientos que garantizan la sanidad, el bienestar de las aves y la seguridad del personal, promoviendo una producción responsable y sostenible.
    
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/mVTYqfgvVpA" title="Conceptos y normatividad de bioseguridad en granjas avícolas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: conceptos y normatividad de bioseguridad en granjas avícolas.

    .fondo___color_3
      .px-5
        
        p.mb-5 Este protocolo reúne las acciones necesarias para cumplir con la normativa del ICA y aplicar medidas diarias de bioseguridad en granjas avícolas de postura. Su ejecución sistemática garantiza la salud del plantel y la trazabilidad sanitaria de la producción.
        
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 4.
          span Protocolo operativo de bioseguridad en granjas de postura
        .tabla-a(data-aos="zoom-in").mb-5
          table
            thead
              tr
                th.ajuste-border-tabla Etapa
                th.ajuste-border-tabla Qué hacer
                th.ajuste-border-tabla Responsable
                th.ajuste-border-tabla Frecuencia
                th Evidencia / registro
            tbody
              tr
                td.ajuste-border-tabla.texto-left Registro legal / inicio
                td.ajuste-border-tabla.texto-left Inscribir la granja en el RSPA si no lo está. Obtener certificación GAB si aplica.
                td.ajuste-border-tabla.texto-left Propietario / Gerente técnico.
                td.ajuste-border-tabla.texto-left Una vez (seguimiento anual).
                td.texto-left Registro ICA, certificado GAB.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Infraestructura / ubicación
                td.ajuste-border-tabla.texto-left Verificar cumplimiento de distancias mínimas, contar con filtro sanitario, cercado perimetral, control de visitantes.
                td.ajuste-border-tabla.texto-left Técnico / Encargado infraestructura.
                td.ajuste-border-tabla.texto-left Constante (revisión mensual).
                td.texto-left Informe de cumplimiento, planos, fotografías.
              tr
                td.ajuste-border-tabla.texto-left Ingreso de personas, vehículos y materiales
                td.ajuste-border-tabla.texto-left Control de visitantes, cambio de ropa y calzado, desinfección, flujo unidireccional.
                td.ajuste-border-tabla.texto-left Supervisor / Encargado sanitario.
                td.ajuste-border-tabla.texto-left Cada ingreso.
                td.texto-left Bitácora de entrada, registros, evidencia fotográfica.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Vacunación / planes sanitarios
                td.ajuste-border-tabla.texto-left Ejecutar plan vacunal oficial. Registrar fechas, lotes, cobertura.
                td.ajuste-border-tabla.texto-left Veterinario avícola.
                td.ajuste-border-tabla.texto-left Según cronograma (inicio, refuerzos).
                td.texto-left Registro de vacunas: fecha, lote, productor, cobertura.
              tr
                td.ajuste-border-tabla.texto-left Manejo de agua y alimento
                td.ajuste-border-tabla.texto-left Verificar calidad del agua y procedencia del alimento. Documentar tratamientos.
                td.ajuste-border-tabla.texto-left Encargado de salud / producción.
                td.ajuste-border-tabla.texto-left Agua: diario / alimento: por lote.
                td.texto-left Informes analíticos, bitácoras de consumo, rechazos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Limpieza y desinfección (POES)
                td.ajuste-border-tabla.texto-left Limpieza diaria, desinfección semanal, desinfección profunda entre lotes. Equipos e instalaciones incluidos.
                td.ajuste-border-tabla.texto-left Personal de limpieza / Responsable sanitario.
                td.ajuste-border-tabla.texto-left Diario, semanal, fin de lote.
                td.texto-left Registros POES: productos, dosis, fechas.
              tr
                td.ajuste-border-tabla.texto-left Gestión de residuos y mortalidad
                td.ajuste-border-tabla.texto-left Disposición adecuada de aves muertas. Eliminación controlada de estiércol y residuos.
                td.ajuste-border-tabla.texto-left Responsable sanitario.
                td.ajuste-border-tabla.texto-left Según necesidad.
                td.texto-left Registro de disposición, evidencias (fotos, informes).
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Monitoreo de salud / reconocimiento de enfermedades
                td.ajuste-border-tabla.texto-left Observar signos clínicos, reducción de postura, enviar muestras al ICA si aplica. Aplicar monitoreo serológico.
                td.ajuste-border-tabla.texto-left Veterinario / Encargado sanitario.
                td.ajuste-border-tabla.texto-left Diario / semanal / según plan.
                td.texto-left Bitácora sanitaria, reportes, análisis de laboratorio.
              tr
                td.ajuste-border-tabla.texto-left Reporte al ICA
                td.ajuste-border-tabla.texto-left Notificar inmediatamente casos sospechosos de enfermedades de declaración obligatoria.
                td.ajuste-border-tabla.texto-left Propietario / Veterinario sanitario.
                td.ajuste-border-tabla.texto-left Inmediato ante sospecha.
                td.texto-left Formatos ICA, reportes, seguimiento.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left Auditorías e inspecciones
                td.ajuste-border-tabla.texto-left Facilitar inspecciones del ICA. Realizar auditorías internas periódicas.
                td.ajuste-border-tabla.texto-left Gerente técnico / Responsable sanitario.
                td.ajuste-border-tabla.texto-left Interna: cada 3 - 6 meses / Oficial: cuando el ICA visite.
                td.texto-left Informes, planes de acción correctiva.
    
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
          .col
            h3 Cómo reconocer enfermedades aviares de importancia
    
    p.mb-5 Estos signos clínicos deben alertar al productor para activar protocolos de emergencia y contactar al ICA:

    .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img37.jpg', alt='' ).m-auto
      .col-xl
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mortalidad inusualmente alta o fuera del rango esperado.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Caída brusca en la producción de huevos.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Huevos deformes, con cáscaras blandas o de mala calidad.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Síntomas respiratorios: dificultad para respirar, estornudos, secreciones nasales u oculares.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Síntomas digestivos: diarrea, baja ingestión de alimento.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Síntomas nerviosos: temblores, descoordinación, caída, parálisis.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Signos generales: decaimiento, plumas erizadas, pérdida de apetito.</li>
        </ul>
    
    .fondo___color_4
      .px-5

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
          .col
            h3 Obligaciones legales del productor avícola
        
        p.mb-5 Los productores deben cumplir con las siguientes responsabilidades para operar conforme a la legislación sanitaria vigente en Colombia:

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0.style___box_5(data-aos="zoom-in")
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mantener actualizados los registros y documentación sanitaria exigida.</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cumplir las resoluciones ICA aplicables (como 3651 de 2014, 3652 de 2014, 30292 de 2017, entre otras).</li>
                  <li class="mb-3"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Autorizar el ingreso del personal del ICA para auditorías, vigilancia y toma de muestras.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No movilizar productos ni aves sin cumplir los requisitos sanitarios y permisos correspondientes.</li>
                </ul>
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img39.jpg', alt='' ).m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Normatividad - Instituto Colombiano Agropecuario (ICA)

    p.mb-5 Estas son las principales leyes y resoluciones que regulan la bioseguridad, la vigilancia, la notificación obligatoria y los planes sanitarios en granjas avícolas en Colombia. Su cumplimiento es obligatorio para todos los predios dedicados a la producción de aves, especialmente en sistemas de postura y levante.

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resolución ICA 3651 de 2014
                p.mb-0 Requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante. Establece condiciones estructurales, manejo, registros y sanidad para ≥200 aves.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img40.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resolución ICA 1515 de 2015
                p.mb-0 Registro Sanitario de Predio Avícola (RSPA). Obliga a registrar todos los predios avícolas y permite seguimiento, auditoría y certificación del ICA.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img41.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resolución ICA 02896 de 2005
                p.mb-0 Disposiciones sanitarias para construcción de granjas. Define condiciones técnicas de ubicación, distancias mínimas e infraestructura con filtros sanitarios.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img42.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resolución ICA 30292 de 2017
                p.mb-0 Control y erradicación de la enfermedad de Newcastle. Establece vigilancia, control obligatorio, notificación inmediata, cuarentena y erradicación.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img43.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Resolución ICA 1183 de 2010
                p.mb-0 Condiciones mínimas de bioseguridad para certificación. Incluye mecanismos de inspección, requisitos estructurales y posibles sanciones a granjas comerciales.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img44.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
