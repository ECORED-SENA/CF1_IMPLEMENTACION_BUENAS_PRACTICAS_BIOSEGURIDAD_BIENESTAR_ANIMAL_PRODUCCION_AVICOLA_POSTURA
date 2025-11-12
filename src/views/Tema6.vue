<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Equipos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img102.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los equipos empleados en la producción de huevos son fundamentales para garantizar una buena alimentación, hidratación, comportamiento natural de postura y bienestar general de las aves. La correcta selección y manejo de estos equipos permite mejorar la eficiencia productiva, la bioseguridad y la inocuidad del huevo.

    <!-- BLOQUE 1 -->
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Bebederos

    p.mb-5 El agua representa entre el 60 % y el 70 % del peso corporal del ave. Es un nutriente esencial que regula funciones clave como la digestión, la termorregulación, el metabolismo y la producción de huevos. Una gallina ponedora consume entre 200 y 300 mililitros diarios de agua, y esta cantidad puede aumentar hasta en un 30 % en climas cálidos. La temperatura ideal del agua es de 20 - 25 °C para pollitas y 15 - 20 °C para aves adultas. La falta de agua o el suministro de agua de mala calidad puede generar consecuencias graves:

    .row.justify-content-center.mb-5
      .col-xl-10
        .row.align-items-center.m-0.mb-0.style___box_6(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img103.jpg', alt='' ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disminución inmediata de la postura (hasta un 30 % en 24 horas).</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Estrés hídrico, pérdida de peso y menor consumo de alimento.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mayor incidencia de enfermedades digestivas y respiratorias.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aumento de amoníaco debido al exceso de humedad en la cama.</li>
            </ul>
    
    .fondo___color_5
      .px-5 
        
        p.mb-5 Antes de implementar o ajustar el sistema de suministro, deben evaluar la calidad del agua con base en los siguientes parámetros:
        
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Parámetros de calidad del agua
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Parámetro
                    th Valor de referencia
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Sólidos disueltos totales
                    td.texto-left < 1.000 mg/L.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left pH
                    td.texto-left 6,3 - 7,5.
                  tr
                    td.ajuste-border-tabla.texto-left Dureza total
                    td.texto-left < 60 mg/L de CaCO₃.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cloruro
                    td.texto-left ≤ 500 ppm.
                  tr
                    td.ajuste-border-tabla.texto-left Nitrato
                    td.texto-left < 10 mg/L.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Nitrito
                    td.texto-left < 1 mg/L.
                  tr
                    td.ajuste-border-tabla.texto-left Sulfato
                    td.texto-left < 250 mg/L.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Hierro
                    td.texto-left < 2 mg/L.
                  tr
                    td.ajuste-border-tabla.texto-left Manganeso
                    td.texto-left < 0,1 mg/L. 
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Coliformes totales
                    td.texto-left < 1.000 / 100 mL.
        
        p.mb-5 Es necesario realizar al menos un análisis anual y garantizar que la recolección de muestras cumpla con las indicaciones del laboratorio. La cloración del agua es obligatoria para mantener su potabilidad, especialmente en temporadas de lluvia.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de bebederos
        
    p.mb-5 Los tipos de bebederos varían según el sistema de producción, el nivel de tecnificación y la disponibilidad de recursos.

    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Campana (manual o automática)
                p.mb-0 <strong>Ventajas</strong>: económicos y fáciles de instalar. 
                p.mb-0 <strong>Desventajas</strong>: alta contaminación y necesidad de limpieza frecuente.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img104.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 <em>Nipple</em> (tetina)
                p.mb-0 <strong>Ventajas</strong>: agua limpia, bajo desperdicio y reducción de humedad. 
                p.mb-0 <strong>Desventajas</strong>: requieren presión constante (10 - 20 psi) y filtrado adecuado.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img105.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Goteros o copa
                p.mb-0 <strong>Ventajas</strong>: fáciles de controlar, muy usados en aviarios.
                p.mb-0 <strong>Desventajas</strong>: pueden obstruirse si el sistema no tiene buen filtrado.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img106.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Rústicos (baldes, tinas)
                p.mb-0 <strong>Ventajas</strong>: bajo costo y fácil implementación. 
                p.mb-0 <strong>Desventajas</strong>: alto riesgo de contaminación y baja durabilidad.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img107.png', alt='' style="max-width: 500px").m-auto

    .fondo___color_5
      .px-5 
        
        p.mb-5 La siguiente tabla resume las cantidades recomendadas de bebederos según su tipo y la cantidad de aves, con el propósito de garantizar un suministro adecuado y continuo de agua en los galpones avícolas.
        
        .row.justify-content-center
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 10.
              span Recomendaciones técnicas para el suministro de agua
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Tipo de bebedero
                    th Cantidad recomendada
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Tipo campana
                    td.texto-left 1 por cada 100 gallinas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Tipo tetina (<em>nipple</em>)
                    td.texto-left 1 por cada 12 gallinas.
                  tr
                    td.ajuste-border-tabla.texto-left Tipo canoa
                    td.texto-left 1,27 cm lineales por ave.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Tipo volteo
                    td.texto-left 1 por cada 25 aves.
                  tr
                    td.ajuste-border-tabla.texto-left Tipo artesanal
                    td.texto-left Variable, según el modelo.

        <!-- BLOQUE 2 -->
        Separador
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Comederos

        p.mb-5 El alimento balanceado representa aproximadamente el 70 % del costo total de producción en avicultura de postura, por lo cual el manejo de los comederos es determinante para la eficiencia económica. Una gallina ponedora consume entre 100 y 120 gramos de alimento al día, dependiendo de su genética, etapa productiva y condiciones climáticas. Una mala elección o manejo del comedero puede generar pérdidas superiores al 10 %.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de comederos
        
    p.mb-5 Los diferentes tipos de comederos se seleccionan según el sistema productivo y el nivel de tecnificación de la granja.

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-3.py-md-4(titulo="Tolva manual")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img108.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tolva manual
            p.mb-0 <strong>Ventajas</strong>: económicos y mantienen alimento disponible de forma continua. 
            p.mb-0 <strong>Desventajas</strong>: alto desperdicio si no se regula el flujo.

      .py-3.py-md-4(titulo="Canal o lineal")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img109.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Canal o lineal
            p.mb-0 <strong>Ventajas</strong>: permiten un control preciso del suministro. 
            p.mb-0 <strong>Desventajas</strong>: requieren ajuste de altura y limpieza diaria.
      
      .py-3.py-md-4(titulo="Automático (cadena o sinfín)")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img110.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Automático (cadena o sinfín)
            p.mb-0 <strong>Ventajas</strong>: reducen la mano de obra y garantizan un suministro uniforme.
            p.mb-0 <strong>Desventajas</strong>: implican una alta inversión inicial y mantenimiento técnico.

      .py-3.py-md-4(titulo="Circular")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img111.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Circular
            p.mb-0 <strong>Ventajas</strong>: facilitan la distribución y el manejo del alimento. 
            p.mb-0 <strong>Desventajas</strong>: su costo es elevado y requieren cierto grado de tecnificación.
      
      .py-3.py-md-4(titulo="Rústico (PVC, guadua, etc.)")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img112.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Rústico (PVC, guadua, etc.)
            p.mb-0 <strong>Ventajas</strong>: de bajo costo y fácil construcción.
            p.mb-0 <strong>Desventajas</strong>: presentan dificultad para controlar pérdidas y contaminación.

    p.mb-5 Las recomendaciones técnicas para la instalación de comederos varían según el tipo de sistema utilizado. En los sistemas abiertos o lineales, se debe garantizar un espacio de 8 a 10 centímetros lineales por ave, lo que permite un acceso uniforme al alimento y reduce la competencia entre las aves. En cambio, en los galpones cerrados con comederos tipo canal, la recomendación es alojar entre 40 y 50 aves por metro lineal de comedero, asegurando una distribución equitativa del alimento y una adecuada eficiencia productiva dentro del lote.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Relación entre equipos y tipo de galpón
        
    p.mb-5 A continuación, se presenta una relación orientativa entre los tipos de galpón y los equipos de alimentación e hidratación más adecuados:

    .fondo___color_5
      .px-5 
        
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 11.
              span Equipos de alimentación y bebida según el tipo de galpón
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Tipo de galpón
                    th.ajuste-border-tabla Bebederos recomendados
                    th Comederos recomendados
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Tradicional (piso en tierra o cemento, abierto)
                    td.ajuste-border-tabla.texto-left Campana, rústicos (baldes, tinas).
                    td.texto-left Tolvas manuales, canales de madera o metal.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cerrado (control ambiental)
                    td.ajuste-border-tabla.texto-left <em>Nipple</em>, gotero o copa.
                    td.texto-left Canales con distribución manual o semiautomática.
                  tr
                    td.ajuste-border-tabla.texto-left Automático / aviarios
                    td.ajuste-border-tabla.texto-left <em>Nipple</em> con reguladores de presión.
                    td.texto-left Automáticos (cadena o sinfín).
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Pastoreo / alternativo
                    td.ajuste-border-tabla.texto-left Campana o rústicos.
                    td.texto-left Rústicos, tolvas simples.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
          .col
            h3 Importancia del manejo adecuado de los equipos
            
        p.mb-5 El éxito en la producción avícola no solo depende de contar con equipos adecuados, sino también del manejo correcto de los mismos. A continuación, se destacan las prácticas recomendadas:

        .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img113.jpg', alt='' ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>El agua debe estar siempre limpia, fresca y disponible. Cualquier corte puede afectar la postura en cuestión de horas.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Se debe evitar la acumulación de alimento en los comederos, ya que favorece la fermentación y el crecimiento de hongos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Todos los equipos deben lavarse regularmente para prevenir formación de <em>biofilm</em> y acumulación de bacterias.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>La altura de los comederos y bebederos debe ajustarse al dorso del ave para evitar contaminación.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>En sistemas automáticos, deben calibrarse para asegurar un acceso uniforme al alimento y al agua.</li>
            </ul>

    p.mb-0 La elección y el manejo adecuado de los equipos influyen directamente en la rentabilidad, la eficiencia del sistema y el bienestar de las aves.

    <!-- BLOQUE 3 -->
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.3 Nidales
    
    .row.align-items-center.m-0.mb-5
      .col-xl-6.style___box_16.ajuste___box_16(data-aos="fade-right")
        p.mb-0 Los nidales son espacios habilitados para que las gallinas expresen su comportamiento natural de postura en condiciones de comodidad, protección e higiene. Un diseño adecuado contribuye a reducir el estrés, mejorar la calidad del huevo y evitar que las aves pongan en el suelo.
      .col-xl-3(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img114.png', alt='' ).m-auto
      .col-xl-3.espacio___movil_3
        figure.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/temas/img86.svg', alt=''  style="max-width: 85px")
        p.mb-0 Deben ubicarse en zonas tranquilas, con acceso libre durante el fotoperiodo, y sin obstáculos como bebederos, comederos o perchas que limiten la entrada. Se recomienda un nido por cada 4 a 5 gallinas, y una superficie mínima de 80 cm² por cada 100 aves.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de nidales
        
    p.mb-5 Existen diversos tipos de nidales, que varían según el sistema productivo, el nivel de tecnificación y los materiales disponibles. A continuación, se describen los más comunes:

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .py-3.py-md-4(titulo="Tradicional / artesanal")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img115.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tradicional / artesanal
            p.mb-0 Elaborados con materiales locales o reciclados como madera, costales o canastos.

      .py-3.py-md-4(titulo="Mecánico (piso inclinado)")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img116.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Mecánico (piso inclinado)
            p.mb-0 El diseño inclinado permite que el huevo ruede hacia una bandeja recolectora, mejorando la higiene.
      
      .py-3.py-md-4(titulo="Automático (industrial)")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img117.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Automático (industrial)
            p.mb-0 Incorporan cintas transportadoras para la recolección continua de huevos; ideales para granjas tecnificadas.

      .py-3.py-md-4(titulo="Móvil")
        .row.justify-content-center
          .col-xl-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img118.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Móvil
            p.mb-0 Se usan en sistemas de pastoreo o alternativos; son livianos y fácilmente trasladables.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplos de nidales artesanales reciclados
        
    p.mb-5 Los nidales reciclados son una opción accesible para producciones a pequeña escala. En la siguiente tabla se resumen distintos materiales y sus ventajas y desventajas:

    .fondo___color_5
      .px-5 
        
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 12.
              span Ventajas y desventajas de materiales reciclados en galpones avícolas
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Material reciclado
                    th.ajuste-border-tabla Ventajas
                    th Desventajas
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Madera reciclada (pallets, cajones)
                    td.ajuste-border-tabla.texto-left Económica, fácil de fabricar, buena aislación.
                    td.texto-left Se daña con la humedad, puede albergar parásitos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Plástico reciclado (baldes, cajones)
                    td.ajuste-border-tabla.texto-left Resistente, fácil de limpiar y desinfectar.
                    td.texto-left Poco aislante, se calienta en climas cálidos.
                  tr
                    td.ajuste-border-tabla.texto-left Canastos de bejuco, mimbre o costales
                    td.ajuste-border-tabla.texto-left Muy económicos, buena ventilación.
                    td.texto-left Difíciles de limpiar, poco duraderos.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Metálicos (bidones, láminas)
                    td.ajuste-border-tabla.texto-left Muy duraderos, lavables y desinfectables fácilmente.
                    td.texto-left Pesados, temperaturas extremas según el clima.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
          .col
            h3 Medidas recomendadas
            
        p.mb-5 Las dimensiones del nidal deben adaptarse al tamaño de las aves y garantizar comodidad durante la postura. A continuación, se indican las medidas estándar:

        .row.justify-content-center.mb-5
          .col-xl-4.col-md-10(data-aos="zoom-in")
            .style___box_9.h-100.ajuste___box_9_4
              h4.mb-0.text-center Individual
              p.mb-0 30 x 30 x 35; entrada de 20 - 25 cm.
          .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
            .style___box_9.h-100.ajuste___box_9_4
              h4.mb-0.text-center Colectivo
              p.mb-0 100 x 40 - 50 x 40.
          .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
            .style___box_9.h-100.ajuste___box_9_4
              h4.mb-0.text-center Altura desde el suelo
              p.mb-0 40 - 50 cm para evitar humedad y facilitar limpieza.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Mantenimiento de los nidales
        
    p.mb-5 El mantenimiento regular de los nidales garantiza condiciones higiénicas para la postura, reduce la contaminación de los huevos y previene problemas de salud en las aves. Es indispensable establecer rutinas específicas de limpieza y revisión. Las siguientes acciones deben formar parte del protocolo de mantenimiento:

    .row.align-items-center.m-0.mb-5.style___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img119.jpg', alt='' ).m-auto
      .col-xl
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Realizar limpieza diaria retirando plumas, cáscaras y restos orgánicos.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cambiar la cama (paja, aserrín o viruta seca) cada 2 a 3 días.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Aplicar desinfección semanal con cal, ceniza, vinagre u otros productos naturales.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Reparar materiales desgastados: madera astillada, clavos sueltos, plásticos rotos.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Controlar plagas mediante aplicación de cal y eliminación de humedad acumulada.</li>
        </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Ubicación adecuada de los nidales
        
    p.mb-5 La ubicación de los nidales influye directamente en su uso por parte de las aves. Una mala distribución puede aumentar la competencia, generar estrés y provocar puesta en el suelo. Para lograr un uso efectivo, deben cumplirse las siguientes condiciones:

    .row.justify-content-center
      .col-xl-10
        .row.align-items-center.m-0.mb-0.style___box_6(data-aos="zoom-in")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img120.jpg', alt='' ).m-auto
          .col-xl
            <ul class="fa-ul estilo___ul mb-0">
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Instalar los nidales en zonas oscuras o semioscurecidas, tranquilas y limpias.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Distribuirlos uniformemente para evitar competencia excesiva entre aves.</li>
              <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Asegurar accesibilidad mediante rampas o perchas que faciliten el ingreso.</li>
            </ul>

    <!-- BLOQUE 4 -->
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Grameras (balanzas para aves y productos avícolas)

    p.mb-5 Las grameras permiten monitorear el crecimiento y desarrollo de las aves, lo cual es fundamental para ajustar la alimentación, evaluar la uniformidad del lote y detectar problemas sanitarios o de manejo. Antes de seleccionar el tipo de gramera, deben considerar su función, frecuencia de uso y nivel de precisión requerido.

    .bg--img_03.mb-4
      .row.h-100.align-items-center
        .col-xl-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/temas/img121.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Función de las grameras").ajuste-cajaAcordion
              p.mb-3 Permiten asegurar que las aves alcancen el peso objetivo establecido por la curva genética. Para ello, se debe pesar semanalmente una muestra representativa a la misma hora, registrar los datos y compararlos con los estándares de la línea genética utilizada.
            .row(titulo="Tipos de grameras").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Manual</strong>: mecánicas, económicas y de uso básico. </li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Digital</strong>: ofrecen mayor precisión y facilitan la lectura de datos. </li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Automática</strong>: permiten pesaje continuo y generan reportes automáticamente.</li>
              </ul>
            .row(titulo="Función de las clasificadoras").ajuste-cajaAcordion
              p.mb-3 Separan los huevos por peso, tamaño y calidad de cáscara, mejorando la presentación del producto final y facilitando la comercialización.
    
    .bg--img_03
      .row.h-100.align-items-center
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Tipos de clasificadoras").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Manual</strong>: bandejas o tablas con orificios de distinto tamaño, separación manual. </li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Semiautomática</strong>: mesas con rodillos que separan por peso, ideales para granjas medianas. </li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Automática / industrial</strong>: clasifican por peso, tamaño y calidad; pueden incluir limpieza, sellado y empaque automático.</li>
              </ul>
            .row(titulo="Categorías de clasificación").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Por peso</strong>: varían desde extra pequeños hasta jumbo, según las normas comerciales. </li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span><strong>Por calidad de cáscara</strong>: se agrupan en limpios, con suciedad, rotos o deformes.</li>
              </ul>
            .row(titulo="Manejo y uso de clasificadoras").ajuste-cajaAcordion
              <ul class="fa-ul mb-3">
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Clasificar diariamente después de la recolección.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Manipular los huevos con cuidado para evitar roturas.</li>
                <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Almacenarlos en bandejas limpias, en lugares frescos y ventilados.</li>
              </ul>
        .col-xl-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/temas/img122.png", alt="" ).m-auto

    <!-- BLOQUE 5 -->
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Perchas
    
    p.mb-5 Las perchas son estructuras que permiten a las aves descansar en altura, fortalecen la musculatura y reducen el estrés. Deben ser introducidas desde la recría para que las aves se habitúen a su uso.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Diseño y medidas recomendadas
        
    p.mb-5 El diseño debe asegurar comodidad y evitar que las aves usen comederos o bebederos como lugar de descanso. A continuación, se indican las recomendaciones técnicas:

    .fondo___color_5
      .px-5 
        
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 13.
              span Parámetros técnicos para la instalación de perchas
            .tabla-a.ajuste___tabla(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla Parámetro
                    th Valor recomendado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Edad de introducción
                    td.texto-left A partir de los 10 días de edad.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Espacio en recría
                    td.texto-left 7,5 cm por pollita.
                  tr
                    td.ajuste-border-tabla.texto-left Espacio en postura
                    td.texto-left 15 cm por ave.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Distancia a paredes o techo
                    td.texto-left Mínimo 20 cm.
                  tr
                    td.ajuste-border-tabla.texto-left Grosor de las barras
                    td.texto-left Entre 2,5 y 7,6 cm.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Material
                    td.texto-left Madera o metal, según diseño del galpón.
        
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
          .col
            h3 Manejo de sesteaderos
            
        p.mb-5 Los sesteaderos deben usarse exclusivamente para transportar huevos, y su correcto manejo garantiza la integridad del producto y la higiene durante el proceso. Antes de cada uso, deben asegurarse de que los sesteaderos estén limpios y en buen estado. Además, es necesario seguir las siguientes recomendaciones:

        .row.justify-content-center
          .col-xl-10
            .row.align-items-center.m-0.mb-0.style___box_6(data-aos="zoom-in")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img123.jpg', alt='' ).m-auto
              .col-xl
                <ul class="fa-ul estilo___ul mb-0">
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No mezclar sesteaderos con transporte de aves.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>No sobrecargar: máximo 5 a 6 docenas por cesta.</li>
                  <li class="mb-2"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Lavar y desinfectar semanalmente.</li>
                  <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Colocar material amortiguador como paja, papel o cartón para evitar golpes.</li>
                </ul>

    <!-- BLOQUE 6 -->
    Separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.6 Cubetas para huevos
    
    .row.align-items-center.m-0.mb-5
      .col-xl-4.style___box_16(data-aos="fade-right")
        p.mb-0 Las cubetas son envases diseñados para proteger los huevos durante su recolección, almacenamiento, transporte y comercialización. Su uso adecuado evita roturas, contaminación y pérdidas económicas. Antes de elegir el tipo de cubeta, deben considerar el uso que se le dará (recolección, transporte interno, distribución o venta final) y el nivel de exposición del huevo.
      .col-xl-3(data-aos="zoom-in")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img124.png', alt='' ).m-auto
      .col-xl-5.style___box_20.espacio___movil_3
        p.mb-3 Las funciones principales de las cubetas son: 
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Facilitan la recolección y clasificación dentro de la granja.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Permiten el transporte seguro a centros de empaque o puntos de venta.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Conservan la calidad del huevo al mantenerlo limpio, protegido y estable.</li>
        </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de cubetas disponibles
        
    p.mb-5 A continuación, se describen los tipos más utilizados en sistemas avícolas:

    .fondo___slider
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Cartón prensado (celulosa)
                p.mb-0 Biodegradables, económicas y ampliamente usadas en mercados y supermercados.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img125.png', alt='' style="max-width: 500px").m-auto
            
            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Plástico reutilizable
                p.mb-0 Resistentes, lavables y frecuentes en granjas y distribución a gran escala.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img126.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Poliestireno transparente
                p.mb-0 Ligeras, resistentes a la humedad; permiten visualizar el contenido en venta directa.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img127.png', alt='' style="max-width: 500px").m-auto

            .row.h-100.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Industriales (30 huevos)
                p.mb-0 De cartón o plástico, diseñadas para almacenamiento y transporte en volumen.
              .col-xl-6
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/temas/img128.png', alt='' style="max-width: 500px").m-auto

    <!-- BLOQUE 7 -->
    Separador
    #t_6_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.7 Pediluvios
    
    p.mb-5 El pediluvio es una herramienta básica, económica y efectiva para reforzar las medidas de bioseguridad en las granjas avícolas. Su uso correcto reduce significativamente el riesgo de entrada de agentes patógenos al interior de los galpones.

    .row.align-items-center.m-0.mb-5.style___box_6.ajuste___box_6(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img129.jpg', alt='' ).m-auto
      .col-xl
        p.mb-3 Implementar pediluvios en las entradas de las instalaciones permite:
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Prevenir la entrada de virus, bacterias y otros agentes infecciosos.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Proteger la salud de las aves y evitar brotes sanitarios.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Disminuir la contaminación cruzada entre áreas limpias y sucias.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cumplir con estándares básicos de bioseguridad exigidos por autoridades sanitarias.</li>
        </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de pediluvios utilizados
        
    p.mb-5 Existen varios modelos según el nivel de tecnificación y el tipo de tránsito en la granja. A continuación, se resumen:

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-10(data-aos="zoom-in")
        .style___box_9.h-100.ajuste___box_9_4
          h4.mb-0.text-center Básico
          p.mb-0 Bandeja plástica con desinfectante; de bajo costo y fácil instalación.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_4
          h4.mb-0.text-center Con esponja o tapete absorbente
          p.mb-0 Retiene mejor la solución, prolongando el contacto con el calzado.
      .col-xl-4.col-md-10(data-aos="zoom-in").espacio___movil_3
        .style___box_9.h-100.ajuste___box_9_4
          h4.mb-0.text-center Doble (enjuague y desinfección)
          p.mb-0 Un compartimento con agua limpia y otro con desinfectante, para mayor eficacia.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img7.svg" style="max-width: 60px").m-auto
      .col
        h3 Manejo y recomendaciones de uso
        
    p.mb-5 Para que los pediluvios sean efectivos, deben aplicarse las siguientes pautas de manejo:

    .row.align-items-center.m-0(data-aos="zoom-in")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/temas/img130.png', alt='' ).m-auto
      .col-xl.style___box_21
        <ul class="fa-ul estilo___ul mb-0">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Colocar en todas las entradas de galpones y zonas críticas.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Mantener un nivel adecuado de solución (mínimo 2 - 3 cm).</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Cambiar la solución desinfectante cada 24 a 48 horas.</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Utilizar productos seguros y efectivos: amonio cuaternario, yodo, cal, entre otros.</li>
          <li class="mb-0"><span class="fa-li"><i class="fas fa-check-circle"></i></span>Capacitar al personal para asegurar que todos pasen correctamente por el pediluvio, mojando completamente el calzado.</li>
        </ul>

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

<style lang="sass"></style>
