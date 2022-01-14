import Icon from '../assets/icons'

export const DataProps = {
  hero: {
    groom: 'israel',
    bride: 'jessica',
    subHeader: 'Nos Casamos',
    imgUrl: 'https://assets.digitalvilla.ca/images/issra-jess/hero.jpg',
  },
  intro: {
    title: 'receta para nuestra boda',
    ingredients: ['Novios', 'fecha', 'lugar', 'hora', 'banquete'],
    mainIngredient: 'ingrediente principal: tu compania',
  },
  countDown: {
    title: 'Te esperamos, ya falta menos...',
    targetDate: 'Feb 12 2022 15:30:00',
  },
  groom: {
    title: 'him',
    imagUrl:
      'https://assets.digitalvilla.ca/images/issra-jess/isrra-profile.jpg',
    icon: null,
    message:
      'Es cierto que el amor no se busca, llega cuando menos lo esperas y de pronto apareciste y supe que quería pasar mi vida a tu lado.',
  },
  bride: {
    title: 'her',
    imagUrl:
      'https://assets.digitalvilla.ca/images/issra-jess/jess-profile.jpg',
    icon: null,
    message:
      'Tanto tiempo soñando con este gran día pero faltaba mi compañero, mi amigo, mi cómplice, faltabas tú… Nos espera la mejor aventura de nuestras vidas!',
  },
  us: {
    title: 'Nuestra Historia',
    imagUrl: '',
    icon: Icon.heart,
    message:
      'El plan de Dios para nosotros ya estaba trazado… Nuestras vidas se cruzaron sin saberlo, yo estudiaba el primer año de gastronomía y tú el último, seguramente al estudiar en la misma escuela nuestros rostros se vieron por más de una ocasión pero fue 3 años después cuando nos conocimos trabajando en el mismo restaurante (1 de miles que encuentras en la ciudad) y ahí dio comienzo nuestra historia',
  },
  collage: {
    imgUrl: [
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-001.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-002.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-003.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-004.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-005.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-006.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-007.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-008.jpg',
      'https://assets.digitalvilla.ca/images/issra-jess/i&j-009.jpg',
    ],
  },
  cardLocation: {
    title: 'Ceremonia Y Recepcion',
    clipArt: Icon.engagementRing,
    paragraphList: [
      '12 de febrero jardin El Lago de los Sueños.',
      'Camino antiguo a santa Ines s/n col.Cuatlixco, Cuautla, Morelos.',
      'Recepcion 3:30 pm',
      'ceremonia 4:00 pm',
    ],
    linkUrl:
      'https://www.google.com/maps/dir/?api=1&destination=18.831672750593%2C-98.951060468356&fbclid=IwAR0qCU2lI1ZA-5xQPykIqtoGYs0m1-7TQxXDyypzF8zyO6RdXAudEDEtRI4',
    linkLabel: 'ubicacion',
  },
  messagearea: {
    title: 'Mensaje De Amor Para Los Novios',
    paragraphList: [
      'Compartir contigo este gran día hará que sea inolvidable!',
      'Nos encantaría que compartieras algún consejo, recuerdo, cita o deseo para poder llevarte siempre con nosotros.',
    ],
    labelarea: 'Nombre',
    labelwish: 'Mandanos tus deseos',
    btnsubmit: 'enviar',
  },
  giftTable: {
    title: 'Mesa De Regalos',
    clipArt: Icon.engagementRing,
    paragraphList: ['Liverpool- Boda Israel y Jessica', '# Evento-50755093'],
    linkUrl: 'https://mesaderegalos.liverpool.com.mx/milistaderegalos/50755093',
    linkLabel: 'ver mesa',
  },
}

export default DataProps
