<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Enfermedades aviares de importancia sanitaria en Colombia

    p.mb-5 Algunas enfermedades que son de vigilancia obligatoria o declarables y deben ser reconocidas, prevenidas y reportadas:

    .row.align-items-center.m-0
      .col-xl(data-aos="fade-right")
        .row.align-items-center.style___box_4
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img45.jpg', alt='' ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Influenza aviar de alta patogenicidad (IAAP).</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Enfermedad de Newcastle notificable / de alta virulencia.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><em>Salmonella</em> spp. (en aves).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Otras enfermedades que puedan afectar producción, bienestar animal, salud pública (aunque no siempre declarables).</li>
            </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img46.png', alt='' ).m-auto
    
    <!-- BLOQUE 1 -->
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 <em>Newcastle</em> (NDV - <em>Paramyxovirus aviar</em> tipo 1)

    p.mb-5 Es una enfermedad viral altamente contagiosa que afecta a las aves domésticas y silvestres. Puede provocar graves pérdidas económicas en la producción avícola. Es una enfermedad altamente contagiosa. 
    
    .fondo___color_5
      .px-5 
    
        .fondo___slider
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Cepas y síntomas
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Velogénicas</strong>: altamente patógenas. Signos respiratorios (tos, estornudos), nerviosos (tortícolis, temblores), digestivos (diarrea verde). Mortalidad muy alta.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Mesogénicas</strong>: moderadas. Afectan producción de huevos y causan síntomas respiratorios.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Lentogénicas</strong>: cuadros leves. Usadas como cepas vacunales.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img47.png', alt='' style="max-width: 500px").m-auto
                
                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Impacto
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Pérdidas económicas por mortalidad, caída en postura, restricciones sanitarias.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Zoonosis leve: conjuntivitis transitoria en humanos.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Medidas de control
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Vacunación obligatoria (según ICA). </li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cuarentena y notificación inmediata.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Eliminación de aves infectadas y desinfección del área afectada.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Transmisión del virus
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Secreciones respiratorias y excrementos.</li>
                      <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Contacto directo entre aves.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Objetos, vehículos, agua, alimento, personas contaminadas.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Signos clínicos
                    p.mb-0 Fiebre, depresión, diarrea verdosa, dificultad respiratoria, tos, secreciones nasales, plumaje erizado, falta de apetito, parálisis, torsión del cuello, baja postura.
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img49.png', alt='' style="max-width: 500px").m-auto

                .row.h-100.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Vías de transmisión
                    <ul class="fa-ul estilo___ul mb-0">
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aves infectadas.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Huevos o material biológico.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Instalaciones y equipos.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Personas.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Agua contaminada.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Plagas y roedores.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aves silvestres.</li>
                      <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Carne y subproductos.</li>
                    </ul>
                  .col-xl-6
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 500px").m-auto
      
        <!-- BLOQUE 2 -->
        Separador
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Influenza aviar (IA)
        
        p.mb-5 La influenza aviar es una enfermedad viral altamente contagiosa, causada por el virus de influenza tipo A. Los subtipos de mayor interés sanitario son <strong>H5</strong> y <strong>H7</strong>, especialmente aquellos clasificados como de <strong>alta patogenicidad</strong>, por su capacidad para provocar brotes graves en aves.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
          .col
            h3 Características principales
        
        p.mb-5 A continuación, se presentan los principales aspectos relacionados con la influenza aviar, incluyendo su naturaleza, síntomas, relevancia sanitaria y medidas de control aplicadas en Colombia para prevenir su propagación y mitigar los impactos productivos y comerciales.

        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Naturaleza")
            .row.justify-content-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img54.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Naturaleza
                p.mb-0 Es una enfermedad causada por virus de influenza tipo A. Los subtipos de interés son <strong>H5</strong> y <strong>H7</strong>.

          .py-3.py-md-4(titulo="Síntomas clínicos")
            .row.justify-content-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img53.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Síntomas clínicos
                p.mb-3 Varían según la cepa, pero en los casos más severos se presentan: 
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Depresión.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Caída brusca de postura.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Edema en cabeza y crestas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Diarreas verdes.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Hemorragias internas.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Alta mortalidad.</li>
                </ul>
          
          .py-3.py-md-4(titulo="Importancia sanitaria")
            .row.justify-content-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img55.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Importancia sanitaria
                p.mb-0 Presenta un riesgo zoonótico, ya que algunos subtipos pueden transmitirse a los humanos. Está altamente regulada por la <strong>OIE/WOAH</strong> y el <strong>ICA</strong> en Colombia. Puede generar el cierre de mercados internacionales y provocar graves pérdidas económicas.

          .py-3.py-md-4(titulo="Medidas de control")
            .row.justify-content-center
              .col-xl-5.order-2.order-lg-1
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img56.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Medidas de control
                p.mb-0 En Colombia se aplican programas de vigilancia permanente en aves domésticas y silvestres. Las pruebas oficiales son obligatorias para movimientos, exportaciones y certificaciones sanitarias. En caso de brote, se implementan medidas como el sacrificio sanitario, la cuarentena y la restricción de zonas.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Signos de alarma en aves
    
    p.mb-5 Deben estar atentos a los siguientes signos clínicos en las aves, ya que podrían indicar la presencia de influenza aviar:

    .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img57.jpg', alt='' ).m-auto
      .col-xl
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Muerte repentina de aves en granjas o patios.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aves decaídas y con el plumaje erizado.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disminución en el consumo de alimento y agua.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Presencia de estornudos, lagrimeo y ronquidos.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Alteraciones en la producción de huevos, como disminución, cáscaras blandas o deformes.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Coloración azulada en cresta, barbilla y patas.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Su vigilancia es esencial para mantener a Colombia libre de influenza aviar.</li>
        </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Acciones recomendadas
    
    p.mb-5 En caso de observar signos sospechosos en las aves, deben seguir las siguientes recomendaciones:

    .row.justify-content-center.mb-5
      .col-xl-2.col-md-10(data-aos="zoom-in")
        .style___box_3.h-100.ajuste___box_3_1
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/img58.svg", alt='' style="max-width: 80px").m-auto
          h4.mb-0.text-center Reportar
          p.mb-0 Comuníquense de inmediato con la oficina del <strong>ICA</strong> más cercana.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_3.h-100.ajuste___box_3_1
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/img58.svg", alt='' style="max-width: 80px").m-auto
          h4.mb-0.text-center Restringir
          p.mb-0 Eviten movilizar aves o productos derivados mientras se determina la situación sanitaria.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_3.h-100.ajuste___box_3_1
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/img58.svg", alt='' style="max-width: 80px").m-auto
          h4.mb-0.text-center Esperar
          p.mb-0 Sigan las instrucciones del personal del ICA y respeten los protocolos de bioseguridad establecidos.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_3.h-100.ajuste___box_3_1
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/img58.svg", alt='' style="max-width: 80px").m-auto
          h4.mb-0.text-center Colaborar
          p.mb-0 Faciliten la información necesaria sobre las aves y el área afectada.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_3.h-100.ajuste___box_3_1
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/img58.svg", alt='' style="max-width: 80px").m-auto
          h4.mb-0.text-center Apoyar
          p.mb-0 Respaldar las acciones del ICA es clave para garantizar la sanidad animal y prevenir la propagación del virus.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Rol como funcionarios de autoridad ambiental
    
    .row.align-items-center.m-0.style___box_8(data-aos="zoom-in")
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img59.svg', alt='' ).m-auto
      .col-xl
        p.mb-0 Como funcionarios de una autoridad ambiental, deben participar activamente en la vigilancia, detección y reporte de posibles brotes de influenza aviar. También es fundamental que promuevan la educación sanitaria en las comunidades rurales y apoyen la implementación de las medidas de control establecidas por las autoridades competentes.

    <!-- BLOQUE 3 -->
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 <em>Salmonelosis aviar</em>
    
    p.mb-5 La <em>Salmonelosis aviar</em> es una enfermedad bacteriana que afecta tanto la salud de las aves como la inocuidad de los productos avícolas, generando implicaciones sanitarias y comerciales importantes.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agente causal
                p.mb-0 La enfermedad es provocada por bacterias del género Salmonella, con serotipos que varían en su impacto tanto en animales como en humanos.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Serotipo
                h5 Características
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><em>S. Enteritidis</em> y <em>S. Typhimurium:</em> son serotipos zoonóticos que pueden transmitirse a los humanos a través del consumo de huevos o carne contaminada.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><em>S. Gallinarum</em> y <em>S. Pullorum</em>: son específicos de las aves y causan septicemias y alta mortalidad en pollitos, sin representar riesgo humano.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img61.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Signos clínicos
                p.mb-0 Los signos clínicos dependen de la edad y el estado fisiológico de las aves, lo cual es clave para la detección oportuna de la enfermedad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tipo de ave
                h5 Signos observables
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Pollitos</strong>: depresión, diarrea blanca y mortalidad elevada.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Aves adultas</strong>: portadoras asintomáticas, caída en la postura y posible transmisión a los huevos.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img65.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impacto
                p.mb-3  La salmonelosis representa una amenaza directa para la sanidad aviar y la inocuidad de los alimentos, lo cual puede afectar negativamente el comercio.
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Representa un problema de salud pública, ya que puede transmitirse a los humanos.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Genera restricciones comerciales al afectar la calidad sanitaria de los productos avícolas.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Medidas de control
                p.mb-3  Para prevenir y controlar la diseminación de <em>Salmonella</em> en las explotaciones avícolas, deben implementarse medidas integrales de manejo sanitario.
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mantener una higiene rigurosa en las granjas y plantas de incubación.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Asegurar la calidad microbiológica del alimento y del agua.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Realizar la eliminación de aves portadoras y controlar la presencia de roedores.</li>
                  <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar vacunación preventiva en líneas seleccionadas de ponedoras.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Establecer monitoreo y registros sanitarios permanentes para la trazabilidad y el seguimiento del estatus sanitario del plantel.</li>
                </ul>
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img64.png', alt='' style="max-width: 500px").m-auto
    
    p.mb-5 La siguiente figura presenta las principales vías de transmisión de Salmonella en los sistemas avícolas, abarcando tanto el contagio directo entre aves como las fuentes indirectas de contaminación que pueden afectar la producción y la salud humana.

    .fondo___color_6
      .px-5

        .row.justify-content-center
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Vías de transmisión de <em>Salmonella</em>
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img66.svg', alt='Diagrama sobre las vías de transmisión de enfermedades en aves de corral, con elementos como humanos, alimentos, agua, aire, huevos, carne, polluelos, vectores (moscas, ácaros, escarabajos, roedores) y aves migratorias silvestres, que ilustran la circulación y diseminación de agentes patógenos.').m-auto

    <!-- BLOQUE 4 -->
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Plan de vacunación y desparasitación en avicultura de postura

    p.mb-5 El plan sanitario integral en gallinas ponedoras comerciales debe incluir tanto la vacunación como la desparasitación, ya que ambas estrategias son fundamentales para preservar la salud de las aves, asegurar la producción de huevos y mantener la bioseguridad en las granjas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Vacunación
    
    p.mb-5 La vacunación es una herramienta preventiva clave frente a enfermedades infecciosas que afectan directamente la productividad y bienestar animal.

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Objetivos de la vacunación

    p.mb-5 La implementación de un programa de vacunación busca alcanzar los siguientes objetivos:

    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta(data-aos="zoom-in")
          p.mb-0 Prevenir pérdidas en la producción de huevos y en la calidad de la cáscara.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta(data-aos="zoom-in")
          p.mb-0 Disminuir la mortalidad y morbilidad en las aves.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta(data-aos="zoom-in")
          p.mb-0 Evitar la diseminación de enfermedades dentro y fuera de la granja.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .estilo___tarjeta(data-aos="zoom-in")
          p.mb-0 Reducir el uso de antibióticos mediante inmunización preventiva.
    
    .fondo___color_5
      .px-5 

        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Esquema de vacunación sugerido

        p.mb-5 La siguiente tabla presenta un esquema orientativo de vacunación por edad, con las vacunas más comunes y sus respectivas vías de administración:

        .row.justify-content-center.mb-5
          .col-xl-10

            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Esquema de vacunación
            .tabla-a(data-aos="zoom-in")
              table
                caption Nota. La frecuencia puede variar según diagnóstico, condiciones sanitarias y asesoría veterinaria.
                thead
                  tr
                    th.ajuste-border-tabla Edad (semana)
                    th.ajuste-border-tabla Descripción de vacunas
                    th Vía de aplicación
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Semana 1
                    td.ajuste-border-tabla.texto-left Newcastle B1B1, Bronquitis Mass H120, Gumboro.
                    td.texto-left Ocular, agua por aspersión.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Semana 2
                    td.ajuste-border-tabla.texto-left Newcastle B1B1, Bronquitis Mass H120, Gumboro.
                    td.texto-left Ocular, agua por aspersión.
                  tr
                    td.ajuste-border-tabla.texto-left Semana 4
                    td.ajuste-border-tabla.texto-left Newcastle B1 Lasota + Bronquitis Mass H120, Viruela.
                    td.texto-left Ocular, aspersión, Ala.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Semana 6
                    td.ajuste-border-tabla.texto-left Newcastle B1 Lasota + Bronquitis Mass H120, Coriza.
                    td.texto-left Ocular, aspersión, IM, SC.
                  tr
                    td.ajuste-border-tabla.texto-left Semana 10
                    td.ajuste-border-tabla.texto-left Newcastle B1 Lasota + Bronquitis Mass H120, Newcastle Oleosa + Bronquitis, Viruela + Encéfalo, Cólera viva.
                    td.texto-left Ocular, Ala, IM, SC.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Semana 14
                    td.ajuste-border-tabla.texto-left Coriza.
                    td.texto-left Subcutánea (SC).
                  tr
                    td.ajuste-border-tabla.texto-left Semana 16
                    td.ajuste-border-tabla.texto-left Newcastle B1 Lasota + Bronquitis Mass H120, Newcastle Oleosa + Bronquitis Mass H120, Cólera.
                    td.texto-left Ocular, IM, SC.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cada 2 meses
                    td.ajuste-border-tabla.texto-left Newcastle B1 Lasota + Bronquitis Mass H120.
                    td.texto-left Ocular, agua por aspersión.
        
        h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Vías de vacunación empleadas

    p.mb-5 En avicultura, se utilizan diversas vías de administración de vacunas, dependiendo del tipo de biológico, la edad del ave y el objetivo sanitario.

    .row.justify-content-center.mb-5
      .col-xl-2.col-md-10(data-aos="zoom-in")
        .style___box_9.h-100
          h4.mb-0.text-center Intramuscular (IM)
          p.mb-0 Inyección directa en el músculo.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100
          h4.mb-0.text-center Subcutánea (SC)
          p.mb-0 Inyección debajo de la piel.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100
          h4.mb-0.text-center Oral
          p.mb-0 Mezcla con el agua de bebida o el alimento.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100
          h4.mb-0.text-center Óculo-nasal
          p.mb-0 Aplicación en ojo o nariz mediante gotas.
      .col-xl-2.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100
          h4.mb-0.text-center Por aspersión (spray)
          p.mb-0 Nebulización sobre el lote de aves.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Desparasitación
    
    p.mb-5 La desparasitación es tan importante como la vacunación, ya que los parásitos internos y externos comprometen el consumo de alimento, la conversión alimenticia, la producción de huevo y predisponen a otras enfermedades.

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Principales parásitos en ponedoras

    p.mb-5 A continuación, se presentan  los principales grupos de parásitos que deben considerarse en gallinas ponedoras:

    .row.align-items-center.m-0.mb-5(data-aos="zoom-in")
      .col-xl-6.style___box_10
        figure.mb-4
          img(src='@/assets/curso/temas/img68.svg', alt='' style="max-width: 77px")
        h4 Internos
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Nematodos: <em>Ascaridia galli, Heterakis gallinarum, Capillaria spp</em>.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cestodos: <em>Raillietina spp</em>.</li>
        </ul>
      .col-xl-6.style___box_11.espacio___movil_3
        figure.mb-4
          img(src='@/assets/curso/temas/img69.svg', alt='' style="max-width: 77px")
        h4 Externos
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Piojos (<em>Mallophaga</em>), Ácaros rojos (<em>Dermanyssus gallinae</em>), Ácaros norteños (<em>Ornithonyssus sylviarum</em>), Pulgas (menos comunes).</li>
        </ul>

    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Desparasitación interna

    p.mb-5 La desparasitación interna tiene como objetivo eliminar parásitos gastrointestinales, con un enfoque preventivo y de control durante todo el ciclo productivo.

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-10(data-aos="zoom-in")
        .style___box_9.h-100.ajuste___box_9
          h4.mb-0.text-center Principales productos
          p.mb-0 <em>Levamisol, Piperazina, Albendazol, Fenbendazol, Flubendazol</em> (en alimento).
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9
          h4.mb-0.text-center Momentos clave de aplicación
          p.mb-0 Durante la recría (antes de postura), y refuerzos cada 8 - 12 semanas durante la fase de producción, dependiendo del sistema de crianza y carga parasitaria.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9
          h4.mb-0.text-center Recomendaciones
          p.mb-0 Alternar principios activos para evitar resistencia. Administrar en agua o alimento de forma controlada. Evitar la aplicación durante el pico máximo de postura.
    
    h4.mb-5.caja-titulos-cuarto-nivel(data-aos="fade-right") Desparasitación externa

    p.mb-5 El control de ectoparásitos como ácaros y piojos debe realizarse mediante tratamientos dirigidos al ave y al entorno.
    
    .fondo___color_2
      .px-5 

        TabsB.color-acento-contenido(data-aos="zoom-in").mb-5
          .py-4.py-md-5(titulo="Métodos y productos" :icono="require('@/assets/curso/temas/img70.svg')")
            .row
              .col-xl-6.ajuste__movil_3
                h4 Métodos y productos
                p.mb-0 Aplicación de acaricidas/insecticidas: piretroides, organofosforados, <em>spinosad, ivermectina, fluralaner</em>, entre otros. Pueden administrarse por aspersión, polvo o en agua de bebida (según el producto).
              .col-lg-6.mb-4.mb-md-0
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img71.png', alt="" style="max-width: 450px").m-auto

          .py-4.py-md-5(titulo="Control ambiental" :icono="require('@/assets/curso/temas/img70.svg')")
            .row
              .col-xl-6.ajuste__movil_3
                h4 Control ambiental
                p.mb-0 Tratamiento de instalaciones, grietas, perchas y nidos. Refuerzos cada 4 - 6 semanas si hay infestación confirmada.
              .col-lg-6.mb-4.mb-md-0
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img72.png', alt="" style="max-width: 450px").m-auto
        
        

        p.mb-5 La siguiente tabla presenta un programa orientativo de desparasitación para aves ponedoras, detallando las etapas de aplicación, los parásitos a controlar, la frecuencia recomendada y las principales observaciones para mantener la sanidad y productividad del lote.

        .row.justify-content-center
          .col-xl-10

            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Esquema orientativo de desparasitación
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Etapa / Edad
                    th.ajuste-border-tabla Parásitos a controlar
                    th.ajuste-border-tabla Frecuencia estimada
                    th Comentarios / Observaciones
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Día de nacimiento
                    td.ajuste-border-tabla.texto-left Prevención de ectoparásitos en instalaciones.
                    td.ajuste-border-tabla.texto-left Según riesgo.
                    td.texto-left Control ambiental, camas limpias, desinfección del transporte.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Semana 3 - 5
                    td.ajuste-border-tabla.texto-left Nemátodos, cestodos, ácaros.
                    td.ajuste-border-tabla.texto-left Una dosis.
                    td.texto-left Supervisión veterinaria y uso de productos aprobados por el ICA.
                  tr
                    td.ajuste-border-tabla.texto-left Semana 6 - 8
                    td.ajuste-border-tabla.texto-left Repetición interna si hay infestación; control externo continuo.
                    td.ajuste-border-tabla.texto-left Cada 4 - 6 semanas.
                    td.texto-left Alternar productos para evitar resistencia.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Entrada a producción (18 - 20 semanas)
                    td.ajuste-border-tabla.texto-left Desparasitación interna + externa preventiva.
                    td.ajuste-border-tabla.texto-left Antes del pico productivo.
                    td.texto-left Clave para evitar pérdidas en inicio de postura.
                  tr
                    td.ajuste-border-tabla.texto-left Durante producción
                    td.ajuste-border-tabla.texto-left Mantenimiento / reducción de carga parasitaria.
                    td.ajuste-border-tabla.texto-left Cada 8 - 12 semanas o según coproparasitología.
                    td.texto-left Evaluación periódica de heces para ajustar el programa.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Etapa final / salida
                    td.ajuste-border-tabla.texto-left Desparasitación de cierre antes de venta o sacrificio.
                    td.ajuste-border-tabla.texto-left 4 - 6 semanas antes del retiro.
                    td.texto-left Considerar tiempos de retiro de productos químicos.

</template>

<script>
export default {
  name: 'Tema4',
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
