<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Manejo productivo

    .row.align-items-center.m-0.mb-5.style___box_2(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img131.png', alt='' ).m-auto
      .col-xl
        p.mb-0 El manejo productivo integra decisiones ambientales, zootécnicas y operativas que impactan directamente morbilidad, conversión, persistencia de postura y calidad del huevo. A partir de mediciones objetivas y registros trazables, el equipo alinea ventilación, cama, alimentación y flujo de trabajo diario para sostener bienestar, bioseguridad y desempeño estable.

    <!-- BLOQUE 1 -->
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Manejo de cortinas y ventilación

    p.mb-5 El manejo adecuado de las cortinas y la ventilación en los galpones de postura es fundamental para garantizar el bienestar animal, mantener condiciones ambientales estables y prevenir enfermedades respiratorias, golpes de calor o estrés térmico.

    .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img132.jpg', alt='' ).m-auto
      .col-xl
        h5 Objetivo
        p.mb-3 El objetivo principal de la ventilación y el control de cortinas es:
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Evitar la acumulación de gases nocivos como amoníaco y dióxido de carbono.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Regular la temperatura interna y la humedad relativa.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Prevenir variaciones térmicas bruscas que puedan afectar el comportamiento y la productividad de las aves.</li>
        </ul>
      
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo operativo para el manejo ambiental
        
    p.mb-5 Este protocolo debe aplicarse diariamente y ajustarse según el clima, la edad de las aves y el diseño del galpón.

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Monitoreo ambiental

    p.mb-5 Debe realizarse tres veces al día (mañana, mediodía y tarde) utilizando un termohigrómetro confiable. Además, se debe verificar la presencia de amoníaco: un olor fuerte a orina indica concentraciones superiores a 20 ppm, lo cual es perjudicial para las aves.

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Manejo de cortinas

    p.mb-5 La apertura o cierre de cortinas debe basarse en la temperatura interna del galpón. A continuación, se presenta la acción recomendada según el rango térmico:

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-10(data-aos="zoom-in")
        .style___box_9.h-100.ajuste___box_9_4
          h4.mb-0.text-center < 20 °C
          p.mb-0 Mantener cortinas cerradas. Evitar corrientes de aire directas.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_4
          h4.mb-0.text-center 21 - 24 °C
          p.mb-0 Apertura parcial y progresiva para mantener estabilidad térmica.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_4
          h4.mb-0.text-center ≥ 25 °C
          p.mb-0 Apertura total o activación de ventilación forzada (extractores, túneles, ventiladores).

    p.mb-5 Durante la temporada de lluvias, es esencial regular la entrada de aire para evitar el exceso de humedad en la cama, lo cual favorece la aparición de enfermedades.

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Movimiento de aire

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0
          .col-xl.style___box_16.ajuste___box_16(data-aos="fade-right")
            p.mb-3 El flujo de aire dentro del galpón debe ser homogéneo y constante. Se recomienda:
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Evitar <strong>corrientes directas</strong> sobre las aves, especialmente a nivel del suelo.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Garantizar una <strong>renovación completa del aire cada 1 - 2 minutos</strong> para prevenir la acumulación de gases.</li>
            </ul>
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img133.png', alt='' ).m-auto

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Observación del comportamiento del lote

    p.mb-5 El comportamiento de las aves sirve como <strong>indicador ambiental</strong>. A continuación, se presentan los comportamientos y sus posibles causas:

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.justify-content-center
          .col-xl-6.col-md-10(data-aos="zoom-in")
            .style___box_9.h-100.ajuste___box_9_4
              h4.mb-0.text-center Jadeo, alas extendidas, aves aglomeradas
              p.mb-0 Exceso de calor y mala ventilación.
          .col-xl-6.col-md-10(data-aos="zoom-in").espacio___movil_3
            .style___box_9.h-100.ajuste___box_9_4
              h4.mb-0.text-center Aves amontonadas en esquinas
              p.mb-0 Corrientes de aire frío o ventilación deficiente.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Registro de datos ambientales

    p.mb-5 Debe mantenerse una <strong>bitácora de manejo ambiental</strong> donde se consignen:

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0.style___box_4(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img134.jpg', alt='' ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mediciones de <strong>temperatura</strong> y <strong>humedad</strong>.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Ajustes realizados en las <strong>cortinas</strong> o en el sistema de <strong>ventilación</strong>.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Observaciones relevantes sobre el <strong>comportamiento del lote</strong>.</li>
            </ul>

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Errores comunes que deben evitarse

    p.mb-5 Evitar estas prácticas incorrectas es crucial para proteger la salud de las aves:

    .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img135.jpg', alt='' ).m-auto
      .col-xl
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cerrar las cortinas <strong>bruscamente</strong>, lo que genera cambios térmicos extremos y estrés.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No controlar la <strong>humedad</strong>, favoreciendo hongos y bacterias en la cama.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Abrir solo <strong>un lateral del galpón</strong>, lo que causa <strong>corrientes localizadas</strong> y estrés térmico.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Ignorar los <strong>niveles de amoníaco</strong>, perjudicando la salud respiratoria y la postura.</li>
        </ul>

    .fondo___color_5
      .px-5 
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Indicadores de control ambiental
        
        p.mb-5 El cumplimiento de estos parámetros indica un manejo eficiente del ambiente en el galpón:
        
        .row.justify-content-center
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 14.
              span Condiciones ambientales ideales en el galpón
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Parámetro
                    th Valor óptimo
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Temperatura interna
                    td.texto-left 20 - 24 °C.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Humedad relativa
                    td.texto-left 50 - 70 %.
                  tr
                    td.ajuste-border-tabla.texto-left Amoníaco
                    td.texto-left < 20 ppm (ausencia de olores fuertes).
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Comportamiento de las aves
                    td.texto-left Actividad normal, distribución homogénea, sin jadeo ni hacinamiento.

        <!-- BLOQUE 2 -->
        Separador
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Manejo de camas o yacija
        
        p.mb-5 El manejo adecuado de la cama o yacija en los galpones es esencial para mantener la salud, el confort y la productividad de las aves. Una cama bien gestionada reduce la presencia de amoníaco, evita enfermedades en patas y piel, y limita la proliferación de microorganismos.

    .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img136.jpg', alt='' ).m-auto
      .col-xl
        p.mb-3 El objetivo del manejo de cama es mantenerla seca, aireada y limpia, garantizando:
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reducción de gases nocivos como el amoníaco.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Prevención de lesiones en patas (<em>pododermatitis</em>) y quemaduras.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Control de bacterias, hongos y parásitos.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Bienestar animal y mejores condiciones de salubridad.</li>
        </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo operativo para el manejo de cama
        
    p.mb-5 A continuación, se detallan los pasos recomendados para el manejo eficiente de la cama en los galpones:

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Inspección diaria").ajuste-cajaAcordion
              p.mb-3 Revisar la cama dos veces al día (mañana y tarde) mediante evaluación visual y olfativa. Prestar atención a zonas críticas: debajo de los bebederos, junto a paredes, esquinas y áreas de mayor tránsito.
            .row(titulo="Manejo físico del material").ajuste-cajaAcordion
              p.mb-3 Airear y mantener mecánicamente la cama: voltear diariamente con rastrillo para mantenerla suelta y oxigenada, retirar secciones húmedas o compactadas, y reemplazar con material seco y limpio (viruta sin químicos, paja picada o cascarilla de arroz).
            .row(titulo="Espesor y calidad recomendados").ajuste-cajaAcordion
              p.mb-3 Espesor uniforme en todo el galpón: mínimo 5 cm y máximo 10 cm. El material debe ser absorbente, sin polvo excesivo ni residuos tóxicos.
            .row(titulo="Manejo preventivo de humedad").ajuste-cajaAcordion
              p.mb-3 Ajustar la altura y presión de los bebederos para evitar derrames, controlar la ventilación para mantener la humedad relativa entre 50 % y 70 %, y aplicar cal agrícola u otros absorbentes en zonas húmedas cuando sea necesario.
            .row(titulo="Reemplazo y desinfección de la cama").ajuste-cajaAcordion
              p.mb-3 Cambiar totalmente la cama según su estado o cada 8 - 12 semanas. Retirar la cama usada, lavar y desinfectar el galpón con productos aprobados por el ICA (amonio cuaternario, yodo, glutaraldehído), y mantener vacío sanitario durante 10 - 15 días antes del reingreso de las aves.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img137.png", alt="" ).m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Errores comunes que deben evitarse
        
    p.mb-5 La mala gestión de la cama puede generar pérdidas económicas y afectar la sanidad del lote. A continuación, se enumeran los errores más frecuentes:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_22(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No retirar secciones húmedas: aumenta la producción de amoníaco, generando problemas respiratorios.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Usar materiales con polvo: causa irritación ocular y en las vías respiratorias.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar capas muy delgadas (< 5 cm): escasa absorción, mayor humedad y contacto directo con excretas.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Exceder el espesor recomendado (> 12 cm): compactación, fermentación y proliferación de hongos.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img138.jpg", alt="" ).m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Indicadores de control de cama
        
    p.mb-5 Los siguientes indicadores deben revisarse periódicamente para asegurar que el manejo de la yacija es adecuado:

    .row.justify-content-center
      .col-xl-3.col-md-10(data-aos="zoom-in")
        .style___box_9.h-100.ajuste___box_9_5
          h4.mb-0.text-center Olor a amoníaco
          p.mb-0 ≤ 20 ppm (sin olores penetrantes en el ambiente).
      .col-xl-3.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_6
          h4.mb-0.text-center Condición física
          p.mb-0 Suelta, seca al tacto, sin zonas compactadas.
      .col-xl-3.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_5
          h4.mb-0.text-center Estado de las patas de las aves
          p.mb-0 Limpias, sin lesiones ni quemaduras visibles.
      .col-xl-3.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_6
          h4.mb-0.text-center Humedad de la cama
          p.mb-0 25 - 35 % (debe deshacerse en la mano sin escurrir agua).

    <!-- BLOQUE 3 -->
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Manejo de la alimentación
    
    p.mb-5 Garantizar una alimentación equilibrada es fundamental para mantener la salud, la productividad y el bienestar de las gallinas ponedoras. Una adecuada rutina de alimentación reduce desperdicios, mejora la conversión alimenticia y evita caídas en la postura.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 asegurar una nutrición equilibrada, minimizar las pérdidas de alimento y optimizar la eficiencia productiva, ajustando la dieta a cada etapa del ciclo de vida de las aves.
    
    p.mb-5 En el siguiente video se aborda la relación entre bioseguridad y nutrición en las granjas avícolas, resaltando cómo las buenas prácticas y una alimentación adecuada contribuyen a la prevención de enfermedades, al bienestar de las aves y a la obtención de productos inocuos y de alta calidad.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: TEXTO
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Rutina de alimentación según tipo de sistema
        
    p.mb-5 El manejo alimenticio varía según el nivel de tecnificación de la granja. A continuación, se describen las características y recomendaciones para cada tipo de sistema.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Mecanizado
                p.mb-0 Utiliza cadenas, tolvas o dispensadores automáticos que recorren el galpón. Permite fraccionar la dieta en un 70 % en la mañana y 30 % en la tarde. Los horarios deben cumplirse con estricta puntualidad, ya que las gallinas son animales de hábitos y los cambios inesperados pueden afectar su consumo y producción.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img140.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Manual o no mecanizado
                p.mb-0 El suministro del alimento se realiza de forma manual entre 2 y 3 veces al día, manteniendo la proporción del 70 % en la mañana y 30 % en la tarde. Es fundamental garantizar una distribución homogénea en todos los comederos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img141.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Alternativo (pastoreo o semi-intensivo)
                p.mb-0 Requiere complementar el concentrado con forraje verde o acceso diario a áreas de pastoreo controlado para cubrir las necesidades nutricionales y estimular el comportamiento natural de las aves.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img142.png', alt='' style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Acciones específicas para el manejo diario
        
    p.mb-5 Implementen las siguientes acciones como parte del protocolo diario:

    .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img143.jpg', alt='' ).m-auto
      .col-xl
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Revisar la disponibilidad de alimento al inicio de la jornada.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Ajustar la altura de los comederos al nivel del dorso del ave.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Llenar las tolvas hasta un máximo de dos tercios para evitar el desperdicio.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Retirar alimento contaminado o húmedo.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Adaptar la dieta según la etapa productiva de la parvada.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Suplementar con <strong>carbonato de calcio (CaCO₃)</strong> en la tarde, en cantidades específicas según la etapa.</li>
        </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Almacenamiento del concentrado
        
    p.mb-5 La calidad del alimento depende en gran medida de su correcta conservación. Para ello, se deben seguir estas recomendaciones:

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Bodegas").ajuste-cajaAcordion
              p.mb-3 Utilizar estibas a una altura mínima de 15 cm del piso y 50 cm de las paredes. Organizar los sacos por lotes y fechas de ingreso siguiendo el sistema PEPS (Primero en Entrar, Primero en Salir). Evitar la humedad, las filtraciones y el contacto directo con el suelo. Implementar control de plagas y roedores mediante sellado de accesos, y restringir el ingreso de aves silvestres.
            .row(titulo="Canecas plásticas tapadas").ajuste-cajaAcordion
              p.mb-3 Recomendadas para granjas pequeñas o para el almacenamiento diario. Deben ubicarse lejos de productos químicos o agroinsumos y mantenerse correctamente etiquetadas con el tipo de alimento y la fecha de apertura.
            .row(titulo="Protocolos generales").ajuste-cajaAcordion
              p.mb-3 Capacitar al personal en higiene y manejo del concentrado. Registrar entradas, salidas y consumo. Realizar limpieza frecuente de bodegas, estibas y recipientes para prevenir contaminación o proliferación de plagas.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img144.png", alt="" ).m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Importancia de la puntualidad en los horarios
        
    p.mb-5 El cumplimiento estricto de los horarios de alimentación es clave. Las gallinas son muy sensibles a los cambios en la rutina; retrasos o modificaciones generan estrés, reducen el consumo y afectan la producción de huevos. A continuación, se presenta una tabla con los requerimientos promedio de alimento para cada fase productiva:

    .fondo___color_5
      .px-5 
        
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 15.
              span Requerimiento de concentrado según edad y etapa
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Etapa
                    th.ajuste-border-tabla Edad (semanas)
                    th.ajuste-border-tabla Consumo (g/ave/día)
                    th Objetivo nutricional
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Iniciación
                    td.ajuste-border-tabla.texto-left 1 - 6
                    td.ajuste-border-tabla.texto-left 35 - 60
                    td.texto-left Crecimiento y desarrollo de órganos y esqueleto.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Recría temprana
                    td.ajuste-border-tabla.texto-left 7 - 12
                    td.ajuste-border-tabla.texto-left 60 - 75
                    td.texto-left Desarrollo muscular y resistencia ósea.
                  tr
                    td.ajuste-border-tabla.texto-left Recría tardía
                    td.ajuste-border-tabla.texto-left 13 - 18
                    td.ajuste-border-tabla.texto-left 75 - 90
                    td.texto-left Preparación del aparato reproductor.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Pre-postura
                    td.ajuste-border-tabla.texto-left 19 - 20
                    td.ajuste-border-tabla.texto-left 90 - 100
                    td.texto-left Transición a dieta de postura.
                  tr
                    td.ajuste-border-tabla.texto-left Postura temprana
                    td.ajuste-border-tabla.texto-left 21 - 40
                    td.ajuste-border-tabla.texto-left 105 - 115
                    td.texto-left Alta producción de huevos, alta demanda energética.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Postura media
                    td.ajuste-border-tabla.texto-left 41 - 60
                    td.ajuste-border-tabla.texto-left 110 - 120
                    td.texto-left Mantener persistencia de postura.
                  tr
                    td.ajuste-border-tabla.texto-left Postura tardía
                    td.ajuste-border-tabla.texto-left 61 - 80+
                    td.ajuste-border-tabla.texto-left 115 - 125
                    td.texto-left Sostener calidad de cáscara y condición corporal.

        p.mb-5 En esta tabla se especifica el requerimiento de calcio y las recomendaciones para su suplementación según etapa productiva:

        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 16.
              span Suplementación con carbonato de calcio (CaCO₃)
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Etapa
                    th.ajuste-border-tabla Edad (semanas)
                    th.ajuste-border-tabla % de calcio en dieta
                    th Suplementación recomendada
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Recría temprana
                    td.ajuste-border-tabla.texto-left 1 - 6
                    td.ajuste-border-tabla.texto-left 1,0 %
                    td.texto-left No suplementar.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Recría tardía
                    td.ajuste-border-tabla.texto-left 7 - 12
                    td.ajuste-border-tabla.texto-left 1,0 - 1,2 %
                    td.texto-left No suplementar.
                  tr
                    td.ajuste-border-tabla.texto-left Pre-postura
                    td.ajuste-border-tabla.texto-left 13 - 18
                    td.ajuste-border-tabla.texto-left 2,0 - 2,5 %
                    td.texto-left Introducir calcio grueso gradualmente.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Inicio de postura
                    td.ajuste-border-tabla.texto-left 19 - 30
                    td.ajuste-border-tabla.texto-left 3,5 - 4,0 %
                    td.texto-left 3 - 4 g/ave/día de CaCO₃ grueso (2 - 4 mm) en la tarde.
                  tr
                    td.ajuste-border-tabla.texto-left Postura persistente
                    td.ajuste-border-tabla.texto-left 31 - 60
                    td.ajuste-border-tabla.texto-left 3,8 - 4,2 %
                    td.texto-left Mantener suplemento vespertino (3 - 4,5 g/ave/día).
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Postura tardía
                    td.ajuste-border-tabla.texto-left 61 - 80+
                    td.ajuste-border-tabla.texto-left 4,0 - 4,5 %
                    td.texto-left Aumentar a 4 - 5 g/ave/día para sostener calidad de cáscara.

    p.mb-5 Los puntos clave del manejo de calcio son: 

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.style___box_22(data-aos="zoom-in")
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>El calcio fino se absorbe rápidamente, pero no cubre el periodo de formación de la cáscara.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>El calcio grueso (grano de 2 - 4 mm) se absorbe lentamente durante la noche, momento en que se forma la cáscara.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Por ello, deben suministrar el calcio grueso por la tarde.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No excedan el calcio en la fase de recría, pues puede causar problemas renales y óseos.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mantengan un equilibrio adecuado en la relación calcio:fósforo (Ca:P) para favorecer la absorción.</li>
            </ul>
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img145.jpg", alt="" ).m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Clasificación y almacenamiento del huevo

    p.mb-5 Establezcan procedimientos adecuados para estandarizar el producto, facilitar su comercialización y conservar su calidad desde la recolección hasta el consumo.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bodegas
                p.mb-0 Utilizar estibas a una altura mínima de 15 cm del piso y 50 cm de las paredes. Organizar los sacos por lotes y fechas de ingreso siguiendo el sistema PEPS (Primero en Entrar, Primero en Salir). Evitar la humedad, las filtraciones y el contacto directo con el suelo. Implementar control de plagas y roedores mediante sellado de accesos, y restringir el ingreso de aves silvestres.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img146.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Canecas plásticas tapadas
                p.mb-0 Recomendadas para granjas pequeñas o para el almacenamiento diario. Deben ubicarse lejos de productos químicos o agroinsumos y mantenerse correctamente etiquetadas con el tipo de alimento y la fecha de apertura.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img147.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Protocolos generales
                p.mb-0 Capacitar al personal en higiene y manejo del concentrado. Registrar entradas, salidas y consumo. Realizar limpieza frecuente de bodegas, estibas y recipientes para prevenir contaminación o proliferación de plagas.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img148.png', alt='' style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo operativo

    p.mb-5 Apliquen los siguientes pasos de forma ordenada y constante para asegurar que el manejo del huevo cumpla con los requisitos sanitarios, de calidad y trazabilidad exigidos en la producción avícola comercial.

    .bg--img_03.mb-4
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img149.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Recolección y materiales").ajuste-cajaAcordion
              p.mb-3 Recolectar los huevos de forma oportuna con materiales limpios y desinfectados que eviten contaminación o roturas. Utilizar cubetas en buen estado y realizar la recolección varias veces al día para prevenir exposición a humedad, calor o suciedad.
            .row(titulo="Clasificación por peso").ajuste-cajaAcordion
              p.mb-0 Clasificar los huevos según su peso para cumplir con los estándares comerciales:
              p.mb-0 Pequeño: menos de 50 g.
              p.mb-0 Mediano: 50 - 60 g.
              p.mb-3 Grande: más de 60 g.
            .row(titulo="Separación de huevos defectuosos").ajuste-cajaAcordion
              p.mb-3 Detectar y separar los huevos con defectos visibles (rotos, sucios, fisurados, de doble yema o deformes). Registrar las cantidades por categoría y destinarlos al consumo interno controlado o compostaje.
    
    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Limpieza").ajuste-cajaAcordion
              p.mb-3 Aplicar limpieza en seco con esponjillas, papel o lijas finas (lija 1000). Evitar el uso de agua o productos químicos que puedan dañar la cáscara o facilitar la contaminación bacteriana.
            .row(titulo="Categorías de clasificación").ajuste-cajaAcordion
              p.mb-3 Conservar los huevos en bandejas limpias, colocados con la parte puntiaguda hacia abajo, en un cuarto fresco, limpio y ventilado. Mantener temperatura entre 15 y 20 °C y humedad relativa del 70 - 80 %. Evitar exposición solar directa y aplicar el sistema PEPS (Primero en Entrar, Primero en Salir).
            .row(titulo="Registros diarios").ajuste-cajaAcordion
              p.mb-3 Documentar diariamente la cantidad de huevos recolectados, su clasificación y los defectos observados. Esto permite controlar la producción, detectar problemas sanitarios y evaluar el desempeño del lote. Se recomienda una tabla con las siguientes columnas: Fecha, Total de huevos recolectados, Clasificación (Peq / Med / Gde), Huevos defectuosos y Observaciones.
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img150.png", alt="" ).m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Errores comunes a evitar
        
    p.mb-5 Eviten prácticas que comprometan la calidad del huevo, tales como:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_6(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img151.jpg', alt='' ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Lavar con agua sin desinfección adecuada.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Almacenar en lugares húmedos, calurosos o mal ventilados.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Usar cubetas viejas, contaminadas o húmedas.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Limpiar con trapos húmedos o clara de huevo.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Manipular bruscamente los huevos durante la recolección o clasificación.</li>
            </ul>

    .fondo___color_5
      .px-5 
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
          .col
            h3 Indicadores de control
            
        p.mb-5 Verifiquen periódicamente estos parámetros para asegurar que el manejo del huevo cumpla con los estándares sanitarios y de calidad establecidos:
        
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 17.
              span Indicadores de control
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Indicador
                    th Valor esperado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Huevos con cáscara limpia e intacta
                    td.texto-left ≥ 98 % del total recolectado.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Registro diario actualizado
                    td.texto-left 100 % de días registrados.
                  tr
                    td.ajuste-border-tabla.texto-left Temperatura de almacenamiento
                    td.texto-left 15 - 20 °C.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Humedad relativa del almacenamiento
                    td.texto-left 70 - 80 %.
                  tr
                    td.ajuste-border-tabla.texto-left Porcentaje de defectuosos
                    td.texto-left < 2 - 3 % por día.
        
        p.mb-5 En el siguiente video se explica la importancia de los registros y la recolección de datos en las granjas avícolas, destacando cómo la documentación y el análisis de la información permiten asegurar la trazabilidad, optimizar los procesos productivos y facilitar la toma de decisiones para una gestión más organizada y eficiente.

        figure(data-aos="zoom-in")
          .video.mb-1
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption(data-aos="zoom-in") <strong>Video</strong>: TEXTO

    <!-- BLOQUE 5 -->
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Manual de protocolos avícolas
    
    p.mb-5 Este manual reúne los procedimientos esenciales para garantizar el manejo eficiente, seguro y productivo de las aves en una granja avícola. Cada protocolo está orientado a mantener la bioseguridad, el bienestar animal y la trazabilidad sanitaria.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de recepción de aves
        
    p.mb-5 Este protocolo define las acciones necesarias para recibir adecuadamente a las aves, minimizando el estrés y asegurando su correcta adaptación.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 garantizar que las aves lleguen en óptimas condiciones sanitarias y se adapten al galpón sin estrés, cumpliendo con las normativas de bienestar animal y bioseguridad.
    
    p.mb-5 En el siguiente video se explica la función del alojamiento en la producción avícola, destacando su papel en la protección y el confort de las aves. También se describen las orientaciones, dimensiones y condiciones técnicas que deben cumplir los galpones para favorecer la productividad y el bienestar animal según el clima y el tipo de producción.

    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") <strong>Video</strong>: TEXTO

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

    p.mb-5 A continuación, se detalla el procedimiento recomendado para la recepción de aves, abarcando las fases antes, durante y después de su llegada al galpón.

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-3.py-md-4(titulo="Previo a la llegada")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img152.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Previo a la llegada
            p.mb-0 Preparar rigurosamente el entorno antes del arribo. Asegurar que el galpón esté desinfectado, con cama nueva, seca y libre de contaminantes. Desinfectar equipos (bebederos, tolvas, calefactores, básculas, ventiladores, etc.) y comprobar su funcionamiento. Instalar cesteaderos o perchas según la densidad del lote. Activar pediluvios en todos los accesos y permitir el ingreso solo al personal autorizado con indumentaria completa de bioseguridad (overol, mascarilla, guantes y botas plásticas). Exigir lavado de manos con agua y jabón antes de ingresar.

      .py-3.py-md-4(titulo="Durante la recepción")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img153.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Durante la recepción
            p.mb-0 Cumplir medidas estrictas para garantizar la integridad de las aves. Transportarlas únicamente después de la semana 16 de vida, según la normatividad vigente. Descargar en horarios frescos (5:00 - 7:00 a. m. o 4:00 - 6:00 p. m.), manipular con cuidado evitando golpes o amontonamientos. Contar las aves, revisar su estado sanitario y descartar las lesionadas o débiles. Trasladarlas al galpón con acceso inmediato a agua potable tratada o clorada.
      
      .py-3.py-md-4(titulo="Después de la recepción")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img154.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Después de la recepción
            p.mb-0 Evaluar el estado general del lote. Vigilar el comportamiento durante la primera hora (jadeo, estrés, agrupamiento, inactividad). Registrar mortalidad inicial y cantidad exacta de aves recibidas. Pesar una muestra del 10 % y comparar con los estándares de la línea genética. Suministrar agua con electrolitos y antiestrés durante los primeros tres días, lavando los bebederos a diario. Iniciar la alimentación con concentrado una hora después de la llegada y ajustar la dieta según la tabla nutricional y la normativa vigente. Establecer horarios fijos de alimentación para minimizar el estrés.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de adecuación del galpón
        
    p.mb-5 Esta sección establece los pasos necesarios para preparar un ambiente higiénico, funcional y adecuado antes del ingreso de las aves.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 preparar un entorno limpio, seguro y confortable para el alojamiento de las aves.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

    p.mb-5 A continuación, se resume las acciones que deben realizarse en las 72, 48 y 24 horas previas al ingreso del lote, garantizando condiciones óptimas de bioseguridad y comfort.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 72 horas antes
                p.mb-0 Retirar completamente la cama vieja, el estiércol y el polvo acumulado. Lavar y desinfectar pisos, paredes, techos y equipos utilizando productos aprobados.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img155.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 48 horas antes
                p.mb-0 Colocar cama nueva, seca y limpia con un grosor uniforme de 5 a 10 cm. Instalar tolvas y bebederos en cantidad proporcional al número de aves. Revisar el estado de las mallas, cortinas y del sistema eléctrico.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img156.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 24 horas antes
                p.mb-0 Verificar el funcionamiento de los pediluvios. Precalentar el galpón según la edad del lote: 28 - 30 °C para pollitas y 20 - 24 °C para ponedoras. Llenar los bebederos con agua limpia y tratada, y asegurar la disponibilidad del alimento inicial.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img157.png', alt='' style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de alimentación
        
    p.mb-5 Aquí se detalla la rutina de suministro de alimento y suplementación, asegurando un manejo nutricional equilibrado y oportuno.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 asegurar un aporte nutricional equilibrado, en horarios controlados y ajustados al estado productivo.

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

    p.mb-5 A continuación, se detalla las acciones recomendadas para la revisión de tolvas, suplementación y control del consumo de alimento en aves de postura.

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img158.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Horarios de revisión de tolvas").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>5:30 - 6:00 a. m.</strong>: realizar la primera revisión y llenar las tolvas hasta 2/3 de su capacidad.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>12:00 - 1:00 p. m.</strong>: efectuar una revisión intermedia y reponer alimento si es necesario.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>4:00 - 5:00 p. m.</strong>: hacer la última revisión y ajuste del suministro.</li>
              </ul>
            .row(titulo="Suplementación").ajuste-cajaAcordion
              p.mb-3 Administrar vitaminas y minerales en el agua según el plan sanitario, preferiblemente en la mañana. Suministrar calcio adicional (grit o concha molida) en la tarde para favorecer la formación adecuada de la cáscara.
            .row(titulo="Control y registros").ajuste-cajaAcordion
              p.mb-3 Registrar el consumo diario de alimento (kilogramos por ave) y verificar la uniformidad del consumo en todo el lote para identificar posibles variaciones o deficiencias.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de limpieza
        
    p.mb-5 Este protocolo establece las rutinas de higiene para prevenir enfermedades y mantener condiciones óptimas en el galpón.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 mantener la higiene del galpón y reducir el riesgo de enfermedades.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

    p.mb-5 A continuación, se describe la frecuencia y las actividades recomendadas para mantener la higiene y bioseguridad en las instalaciones avícolas.

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-10(data-aos="zoom-in")
        .style___box_9.h-100.ajuste___box_9_7
          h4.mb-0.text-center Diario
          p.mb-0 Lavar los bebederos entre las 7:00 y 9:00 a. m., retirar excretas, recolectar basura y plumas.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_7
          h4.mb-0.text-center Semanal
          p.mb-0 Lavar tolvas y equipos, y eliminar el polvo acumulado en cortinas, techos y lámparas.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_7
          h4.mb-0.text-center Mensual
          p.mb-0 Efectuar una desinfección profunda utilizando productos aprobados como amonio cuaternario o yodo.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de manejo y mantenimiento de equipos
        
    p.mb-5 Un buen mantenimiento previene fallas que afectan el confort de las aves y la eficiencia productiva.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 garantizar el correcto funcionamiento de los equipos mediante revisiones periódicas.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

    p.mb-5 A continuación, se presentan las actividades recomendadas para el mantenimiento regular de los equipos e instalaciones, con el fin de garantizar su correcto funcionamiento.

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-10(data-aos="zoom-in")
        .style___box_9.h-100.ajuste___box_9_7
          h4.mb-0.text-center Diario
          p.mb-0 Revisar bebederos, tolvas, cortinas y temporizadores de luz (6:00 - 7:00 a.m.).
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_7
          h4.mb-0.text-center Semanal
          p.mb-0 Engrasar bisagras y poleas; revisar lámparas y reemplazar las dañadas.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_7
          h4.mb-0.text-center Mensual
          p.mb-0 Verificar red eléctrica, extractores y ventiladores; sustituir piezas desgastadas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de recolección y clasificación de huevos
        
    p.mb-5 Este procedimiento busca reducir pérdidas y mantener la calidad de los huevos producidos.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 garantizar la calidad del huevo, minimizando roturas y pérdidas.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

    p.mb-5 A continuación, se resumen las actividades y recomendaciones para garantizar una recolección adecuada y una clasificación higiénica y organizada de los huevos.

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-3.py-md-4(titulo="Recolección")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img159.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Recolección
            p.mb-3 Realizar tres recolecciones diarias: 
            <ul class="fa-ul estilo___ul mb-3">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>8:00 a.m.</strong>: primera recolección. </li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>12:00 m</strong>: segunda recolección.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>4:00 p.m.</strong>: tercera recolección. </li>
            </ul>
            p.mb-0 Utilizar bandejas limpias y desinfectadas, evitando que los huevos permanezcan mucho tiempo en los nidales o en contacto con la cama.

      .py-3.py-md-4(titulo="Clasificación")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img160.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Clasificación
            p.mb-3 Separar los huevos según su estado: 
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Limpios</strong>: aptos para la venta en el mercado.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Sucios, fisurados o dobles</strong>: destinados al consumo interno o descarte.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Por peso</strong>: clasificarlos en pequeños, medianos o grandes para estandarizar la comercialización.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de almacenamiento de huevo
        
    p.mb-5 El almacenamiento correcto prolonga la vida útil del huevo y conserva su calidad interna.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 conservar la calidad y vida útil del huevo mediante condiciones óptimas de almacenamiento.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

    p.mb-5 A continuación, se detalla las recomendaciones para conservar la calidad y prolongar la vida útil de los huevos después de su recolección.

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.style___box_22(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/temas/img161.jpg", alt="" ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Guardar los huevos en bandejas limpias de plástico o cartón.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Almacenar en un cuarto fresco (15 - 20 °C) con humedad controlada (70 - 80 %).</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Evitar exposición a la luz solar directa o a corrientes de aire caliente.</li>
              <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar el sistema PEPS (primero en entrar, primero en salir).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Verificar diariamente el estado de la cámara o bodega.</li>
            </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Protocolo de labores diarias
        
    p.mb-5 Este protocolo organiza las rutinas diarias del personal, mejorando la eficiencia operativa y la bioseguridad.

    .row.justify-content-center.mb-5
      .col-xl-8
        .row.align-items-center.m-0(data-aos="zoom-in")
          .col-xl-auto.style___box_23_img(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/img139.svg", alt="" style="max-width: 137px").m-auto
          .col-xl.style___box_23
            h5 Objetivo: 
            p.mb-0 organizar las actividades diarias para mejorar la productividad y mantener la bioseguridad del sistema.
    
    .fondo___color_5
      .px-5 
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Procedimiento

        p.mb-5 La siguiente tabla describe la programación de actividades recomendadas para el manejo integral del galpón durante una jornada completa.
        
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 18.
              span Procedimiento diario de manejo del galpón
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Hora
                    th Actividad
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left 5:30 - 6:00 a.m.
                    td.texto-left Revisión inicial del galpón, estado de las aves, apertura de cortinas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 6:00 - 7:00 a.m.
                    td.texto-left Alimentación inicial y revisión de agua.
                  tr
                    td.ajuste-border-tabla.texto-left 7:00 - 9:00 a.m.
                    td.texto-left Limpieza de bebederos y volteo de cama.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 8:00 a.m.
                    td.texto-left Primera recolección de huevos.
                  tr
                    td.ajuste-border-tabla.texto-left 9:00 - 11:00 a.m.
                    td.texto-left Observación del lote y registro sanitario.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 12:00 m
                    td.texto-left Segunda recolección, revisión de alimento y agua.
                  tr
                    td.ajuste-border-tabla.texto-left 1:00 - 3:00 p.m.
                    td.texto-left Mantenimiento menor de equipos, control de plagas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 4:00 p.m.
                    td.texto-left Tercera recolección de huevos.
                  tr
                    td.ajuste-border-tabla.texto-left 4:30 - 5:00 p.m.
                    td.texto-left Alimentación suplementaria (calcio).
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 5:00 - 6:00 p.m.
                    td.texto-left Cierre progresivo de cortinas, revisión de iluminación.
                  tr
                    td.ajuste-border-tabla.texto-left 7:00 p.m.
                    td.texto-left Verificación final del galpón antes del descanso de las aves.
    
    p.mb-5 La aplicación rigurosa de estos protocolos permite a la granja:

    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta_1(data-aos="zoom-in")
          .estilo___tarjeta_img
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img162.svg", alt='' style="max-width: 85px").m-auto
          .estilo___tarjeta_body
            p.mb-0 Mantener altos estándares de bioseguridad.
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta_1(data-aos="zoom-in")
          .estilo___tarjeta_img
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/img163.svg", alt='' style="max-width: 85px").m-auto
          .estilo___tarjeta_body
            p.mb-0 Garantizar el bienestar animal.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta_1(data-aos="zoom-in")
          .estilo___tarjeta_img
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/img164.svg", alt='' style="max-width: 85px").m-auto
          .estilo___tarjeta_body
            p.mb-0 Lograr una productividad estable.
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta_1(data-aos="zoom-in")
          .estilo___tarjeta_img
            figure(data-aos="fade-left")
              img(src="@/assets/curso/temas/img165.svg", alt='' style="max-width: 85px").m-auto
          .estilo___tarjeta_body
            p.mb-0 Asegurar la trazabilidad sanitaria del sistema de producción.
    
    p.mb-5 A continuación, se presenta el conjunto de formatos que permiten registrar y monitorear las actividades clave en la unidad avícola. Se invita a revisar cada uno para garantizar el cumplimiento de los procedimientos establecidos y fortalecer las buenas prácticas de manejo:

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center
          .col-xl-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/1_CRONOGRAMA_ACTIVIDADES.pdf')" target="_blank")(data-aos="fade-right")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Cronograma de actividades.
            a.anexo.mb-4(:href="obtenerLink('/downloads/2_REGISTRO_CONTROL_INSECTOS_ROEDORES.pdf')" target="_blank")(data-aos="fade-right")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Control de roedores e insectos.
            a.anexo.mb-4(:href="obtenerLink('/downloads/3_REGISTRO_APLICACION_MEDICAMENTOS.pdf')" target="_blank")(data-aos="fade-right")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Aplicación de medicamentos, vitaminas y vermífugo.
            a.anexo.mb-4(:href="obtenerLink('/downloads/4_REGISTRO_INGRESO_UNIDAD_AVICOLA.pdf')" target="_blank")(data-aos="fade-right")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Registro de ingreso de personas y vehículos.
          .col-xl-6
            a.anexo.mb-4(:href="obtenerLink('/downloads/5_REGISTRO_MORTALIDAD.pdf')" target="_blank")(data-aos="fade-left")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Registro de mortalidad.
            a.anexo.mb-4(:href="obtenerLink('/downloads/6_REGISTRO_LIMPIEZA_DESINFECCION_GALPONES.pdf')" target="_blank")(data-aos="fade-left")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Limpieza y desinfección de galpones y equipos.
            a.anexo.mb-4(:href="obtenerLink('/downloads/7_REGISTRO_PRODUCCION_HUEVOS.pdf')" target="_blank")(data-aos="fade-left")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Producción de huevo.
            a.anexo.mb-4(:href="obtenerLink('/downloads/8_REGISTRO_TRATAMIENTO_AGUA.pdf')" target="_blank")(data-aos="fade-left")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Web. Tratamiento del agua.

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

<style lang="sass"></style>
