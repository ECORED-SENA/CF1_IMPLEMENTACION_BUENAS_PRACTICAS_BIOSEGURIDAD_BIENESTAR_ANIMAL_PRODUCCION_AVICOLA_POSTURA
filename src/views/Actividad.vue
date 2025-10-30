<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación de Producción Avícola de Postura: Conceptos, Genética, Instalaciones y Bioseguridad.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer los conocimientos sobre la implementación de principios de bienestar animal en el transporte de especies pecuarias, abordando aspectos clave como sanidad, bioseguridad, trazabilidad, sostenibilidad y normativas vigentes, con el propósito de garantizar un transporte seguro, humanitario, eficiente y sostenible.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de la bioseguridad en granjas avícolas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la producción sin control.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prevenir la entrada y propagación de enfermedades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir los costos de alimentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'liminar el uso de registros productivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué debe hacerse antes de recibir un nuevo lote de aves?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abrir todas las entradas del galpón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Colocar inmediatamente la cama sin revisar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar limpieza, desinfección y adecuación del galpón.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Permitir el ingreso libre de visitantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la frecuencia recomendada de recolección de huevos en producción de postura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tres veces al día (mañana, mediodía y tarde).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una vez al día.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cada dos días.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo cuando haya suficiente cantidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué práctica corresponde a bienestar animal en gallinas de postura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener aves con hambre para estimular postura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar la limpieza para no estresarlas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sobrecargar los nidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ofrecer agua fresca, espacio suficiente y ventilación adecuada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué documento permite evidenciar trazabilidad en la producción avícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factura de compra de concentrado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Registro sanitario y productivo (mortalidad, postura, consumo de alimento).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Guía de movilización pecuaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carné de vacunación del operario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué se debe hacer con los huevos sucios, fisurados o con doble yema?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Venderlos al mismo precio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Destinarlos a consumo interno o descarte.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mezclarlos con los limpios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guardarlos sin clasificar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué acción de bioseguridad debe realizar el operario antes de ingresar al galpón?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo usar gorra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entrar con ropa de calle.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lavarse las manos y desinfectar calzado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'No hacer ningún procedimiento especial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la temperatura adecuada de almacenamiento de los huevos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '25 - 30 °C.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '15 - 20 °C.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '10 - 12 °C.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cualquier temperatura ambiente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué indicador refleja un buen manejo productivo en gallinas de postura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aves con estrés frecuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Huevos rotos en gran proporción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Galpón con exceso de humedad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alta tasa de postura con baja mortalidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué contaminante biológico puede encontrarse en los huevos mal manejados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Salmonella.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Plaguicidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Metales pesados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restos de alimento concentrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
