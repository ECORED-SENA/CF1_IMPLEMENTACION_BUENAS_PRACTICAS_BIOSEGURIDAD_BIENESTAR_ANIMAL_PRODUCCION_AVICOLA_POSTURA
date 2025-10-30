<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 La producción avícola de postura representa una de las actividades pecuarias más importantes en Colombia, por su contribución a la seguridad alimentaria, la generación de empleo y el desarrollo rural. Este sistema se centra en el manejo técnico de aves ponedoras para garantizar la producción continua de huevos de alta calidad, inocuos y con valor nutricional, respondiendo a la creciente demanda nacional e internacional.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, la formación en bioseguridad, bienestar animal y manejo productivo adquiere especial relevancia. Aplicar correctamente las normas del Instituto Colombiano Agropecuario (ICA) y las buenas prácticas avícolas asegura no solo la sanidad del plantel, sino también la sostenibilidad del sistema y la confianza del consumidor. La capacitación técnica permite a los aprendices comprender los procesos que intervienen en la genética, la alimentación, el control sanitario y la infraestructura de los galpones.
    
    .row.align-items-center.m-0
      .col-xl.style___box_1(data-aos="fade-right")
        p.mb-0 Asimismo, la incorporación de criterios de sostenibilidad y responsabilidad social en la producción pecuaria promueve una visión integral del sector. Este componente formativo busca desarrollar habilidades que fortalezcan la productividad, reduzcan los impactos ambientales y garanticen el bienestar de las aves, alineándose con los estándares nacionales e internacionales que orientan una avicultura moderna, rentable y ética.
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/intro/img2.svg', alt='' ).m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
