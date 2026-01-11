// Mock data for CucsiAo Wiki

export const wikiSections = [
  {
    id: 'bienvenida',
    title: 'Bienvenida',
    icon: 'scroll',
    content: {
      greeting: 'Wiki Cucsi Ao',
      message: '"Hola viajero, mi nombre es Cypher y soy el creador, amo y señor de estas tierras. Bienvenido a este placentero viaje, aquí encontrarás toda la información que necesites para ser el mejor guerrero. Prometo hacer lo posible para que te diviertas y no te sientas solo. Ahora, acepta este ropaje, estas bebidas y manzanas y atrévete a conocer mi mundo, las tierras de CucsiAO…"',
      description: 'CucsiAO® es un servidor de Argentum Online, basado principalmente en Cucsifae AO. No es un MOD del mismo, ya que fue programado desde cero, solo sienta las bases en servidores de ese tipo. Es un mestizaje entre Rol y Agite, en donde el punto justo de balance entre ambos, hacen a una placentera manera de disfrutar el juego.',
      roleInfo: 'La base del rol en Cucsi, se encuentra en los clanes y los castillos. En el mapa se encuentran cuatro Castillos con sus respectivos reyes, los cuales tendrán que ser conquistados por clanes, obteniendo como premio "PUNTOS" que aportaran para un Ranking que será visible cuando el usuario lo desee y que será explicado a la brevedad.',
      mapInfo: 'El mapa del mundo de Cucsi, fue basado en el mapa oficial de Argentum Online, respetando las principales ciudades, como "Ullatorphe", "Nix", "Banderbill", entre otras, y usando los dungeons originales con pequeñas modificaciones, tales como "Marabel", "Verill", "Dragon", etc. Fue agregado también el tan usado "Barco", cuya idea original fue obtenida de Cucsifae AO'
    }
  },
  {
    id: 'cuenta',
    title: 'Crear Cuenta, Habilitar Cuenta y Sistema de Referidos',
    icon: 'user-plus',
    content: {
      description: 'Información sobre cómo crear tu cuenta, habilitarla y beneficiarte del sistema de referidos.',
      placeholder: 'Contenido detallado sobre el proceso de creación de cuenta vendrá aquí...'
    }
  },
  {
    id: 'crear-personaje',
    title: 'Crear Personaje',
    icon: 'user-plus',
    content: {
      description: 'Proceso de creación de tu personaje en CucsiAO.',
      text: 'Para crear personajes debemos haber iniciado sesión con nuestra Cuenta y seleccionar la opción "Crear". Podremos crear hasta ocho personajes en una misma Cuenta. Es aconsejable leer Información de personajes para entender respecto a sus características antes de la creación del mismo. Esto permitirá comenzar con la mayor ventaja posible, además las características elegidas no podrán cambiarse una vez terminada la creación del personaje.'
    }
  },
  {
    id: 'razas',
    title: 'Razas',
    icon: 'users',
    content: {
      description: 'En estos tiempos de la edad media, hasta el momento se conocen 6 diferentes razas que habitan las tierras de CucsiAO.',
      races: ['Humano', 'Elfo', 'Elfo Oscuro', 'Gnomo', 'Enano', 'Orco'],
      text: 'Cada una de estas razas, tiene una característica que le da ciertas ventajas y desventajas respecto a otras razas, según la clase u oficio del personaje.',
      attributesTable: {
        title: 'Atributos según la Raza',
        subtitle: 'Según la raza que elijas, tus atributos iniciales se verán modificados de la siguiente manera:',
        headers: ['Raza', 'Fuerza', 'Agilidad', 'Inteligencia', 'Carisma', 'Constitución'],
        rows: [
          ['Humano', '+3', '+3', '-1', '0', '+2'],
          ['Elfo', '-2', '+4', '+3', '+1', '-1'],
          ['Elfo Oscuro', '+2', '+2', '+1', '-1', '0'],
          ['Gnomo', '-4', '+5', '+5', '+2', '-2'],
          ['Enano', '+3', '-1', '-7', '-1', '+3'],
          ['Orco', '+5', '-2', '-8', '-2', '+4']
        ]
      },
      combatTable: {
        title: 'Ventajas en Combate',
        subtitle: 'Además, cada raza tendrá ciertas ventajas y desventajas a la hora de combatir:',
        headers: ['Raza', 'Evasión', 'Prob golpe fís', 'Daño fís', 'Prob golpe arco', 'Daño Arco', 'DefMag'],
        rows: [
          ['Humano', '+0.01', '+0.02', '+0.03', '+0.02', '+0.01', '+1%'],
          ['Elfo', '+0.03', '+0.04', '+0.02', '+0.08', '+0.02', '+4%'],
          ['Elfo Oscuro', '+0.02', '+0.03', '+0.04', '+0.04', '+0.04', '+2%'],
          ['Gnomo', '+0.04', '+0.06', '+0.01', '+0.04', '+0.01', '+6%'],
          ['Enano', '+0.01', '+0.02', '+0.07', '+0.01', '+0.06', '+1%'],
          ['Orco', '0', '+0.01', '+0.08', '0', '+0.08', '+0%']
        ]
      }
    }
  },
  {
    id: 'atributos',
    title: 'Atributos',
    icon: 'biceps',
    content: {
      description: 'Los atributos son características de los personajes que afectan sus aptitudes para diversas acciones dentro del juego.',
      intro: 'Los atributos son características de los personajes que afectan sus aptitudes para diversas acciones dentro del juego, como por ejemplo: su capacidad para lanzar hechizos, su vida, su destreza en combate físico, etc. Durante la creación de un personaje, el usuario "tirará los dados de su destino" que determinarán los valores para cada atributo (entre 19 y 20) y a su vez estos se verán afectados por la raza del personaje elegida. Los atributos de un personaje pueden conocerse al emplear el comando /est o bien con el botón de estadísticas.',
      attributes: [
        {
          name: 'Fuerza',
          description: 'La fuerza de un personaje influye en el daño que es capaz de infligir con sus ataques físicos. Cuanta más fuerza tenga un personaje, mayor será el daño causado con armas cuerpo a cuerpo, a distancia o sin armas por lo que es un atributo de suma importancia para las clases que combatan con esta modalidad. Este atributo puede incrementarse temporalmente, al igual que la agilidad.'
        },
        {
          name: 'Agilidad',
          description: 'La agilidad es el atributo que afecta a la capacidad evasiva y la puntería de un personaje. En un atributo ofensivamente útil para las clases de combate físico y defensivamente favorable para todos los personajes. Este atributo puede incrementarse temporalmente, al igual que la fuerza.'
        },
        {
          name: 'Inteligencia',
          description: 'La inteligencia afecta en forma directa la cantidad de maná que ganará un personaje al subir de nivel, dependiendo también de la clase. Es un atributo muy importante para todas las clases que necesiten utilizar hechizos, marcando muchas veces el límite en la capacidad mágica de un personaje.'
        },
        {
          name: 'Carisma',
          description: 'El carisma afecta las capacidades de un personaje para la creación de una party así como su facilidad para la doma de criaturas. Cuanto mayor sea el valor de este atributo, más poderosas serán las criaturas que podrá domar un personaje.'
        },
        {
          name: 'Constitución',
          description: 'Los puntos de vida de un personaje dependen directamente de su constitución y clase. Un valor más elevado en este atributo aumenta los puntos de vida iniciales y ganados por nivel de un personaje. Sin duda es un valor importante para todos los personajes.'
        }
      ]
    }
  },
  {
    id: 'clases',
    title: 'Clases',
    icon: 'swords',
    content: {
      description: 'Al iniciar tu aventura elegirás que clase quieres ser, esto definirá tus características.',
      text: 'Al iniciar tu aventura eligiras que clase quieres ser, esto definirá tu características tales como el daño físico que infligirás, tu mana, tu vida, tu evasión, tu chance de acierto, tu equipamiento, entre otras cosas. Cada clase posee características propias de si mismo, y se diferencian siempre las unas de las otras.',
      classes: [
        'Asesino',
        'Bardo',
        'Cazador',
        'Clérigo',
        'Druida',
        'Guerrero',
        'Ladrón',
        'Mago',
        'Paladín',
        'Pirata',
        'Trabajador'
      ]
    }
  },
  {
    id: 'trabajo',
    title: 'Trabajo',
    icon: 'briefcase',
    content: {
      description: 'Aprende sobre los diferentes trabajos y oficios disponibles.',
      placeholder: 'Detalles sobre trabajos, recompensas y progresión...'
    }
  },
  {
    id: 'entrenamiento',
    title: 'Guía de Entrenamiento',
    icon: 'target',
    content: {
      description: 'Métodos y estrategias para entrenar a tu personaje eficientemente.',
      placeholder: 'Guías de entrenamiento por nivel y clase...'
    }
  },
  {
    id: 'experiencia',
    title: 'EXP. x Nivel y Skills Naturales',
    icon: 'trending-up',
    content: {
      description: 'Tablas de experiencia requerida y skills naturales por nivel.',
      placeholder: 'Tablas de progresión y habilidades naturales...'
    }
  },
  {
    id: 'mapa',
    title: 'Mapa',
    icon: 'map',
    content: {
      description: 'Explora el vasto mundo de CucsiAO y sus territorios.',
      placeholder: 'Información sobre ciudades, dungeons y ubicaciones importantes...'
    }
  },
  {
    id: 'party',
    title: 'Party',
    icon: 'users',
    content: {
      description: 'Sistema de grupos y beneficios de jugar en party.',
      placeholder: 'Cómo formar parties, límites y bonificaciones...'
    }
  },
  {
    id: 'criaturas',
    title: 'Criaturas',
    icon: 'bug',
    content: {
      description: 'Bestiario completo de las criaturas de CucsiAO.',
      placeholder: 'Lista de criaturas, niveles, drops y ubicaciones...'
    }
  },
  {
    id: 'quests',
    title: 'Quests & Modo Historia',
    icon: 'book-open',
    content: {
      description: 'Misiones épicas y la historia del mundo de CucsiAO.',
      placeholder: 'Listado de quests disponibles y modo historia...'
    }
  },
  {
    id: 'domar',
    title: 'Domar Animales',
    icon: 'paw-print',
    content: {
      description: 'Aprende a domar y controlar criaturas salvajes.',
      placeholder: 'Guía de domesticación y animales domables...'
    }
  },
  {
    id: 'hechizos',
    title: 'Hechizos',
    icon: 'sparkles',
    content: {
      description: 'Compendio de todos los hechizos disponibles.',
      placeholder: 'Lista de hechizos por clase, efectos y requisitos...'
    }
  },
  {
    id: 'items',
    title: 'Items',
    icon: 'package',
    content: {
      description: 'Catálogo completo de items, armas y armaduras.',
      placeholder: 'Base de datos de items con stats y ubicaciones...'
    }
  },
  {
    id: 'clanes',
    title: 'Clanes',
    icon: 'flag',
    content: {
      description: 'Todo sobre el sistema de clanes y faccciones.',
      placeholder: 'Cómo crear clanes, jerarquías y beneficios...'
    }
  },
  {
    id: 'guerras',
    title: 'Guerras de Clan',
    icon: 'swords',
    content: {
      description: 'Mecánicas de las guerras entre clanes.',
      placeholder: 'Reglas de guerra, conquistas y recompensas...'
    }
  },
  {
    id: 'castillos',
    title: 'Castillos',
    icon: 'castle',
    content: {
      description: 'Información sobre los castillos conquistables.',
      placeholder: 'Ubicaciones, defensas y beneficios de los castillos...'
    }
  },
  {
    id: 'invocaciones',
    title: 'Invocaciones',
    icon: 'flame',
    content: {
      description: 'Sistema de invocación de criaturas y elementales.',
      placeholder: 'Hechizos de invocación y criaturas invocables...'
    }
  },
  {
    id: 'facciones',
    title: 'Facciones',
    icon: 'shield',
    content: {
      description: 'Las diferentes facciones del mundo y sus conflictos.',
      placeholder: 'Información sobre facciones disponibles...'
    }
  },
  {
    id: 'poder-cypher',
    title: 'Poder de Cypher',
    icon: 'crown',
    content: {
      description: 'Los poderes especiales otorgados por Cypher.',
      placeholder: 'Detalles sobre poderes divinos y bendiciones...'
    }
  },
  {
    id: 'isla-mara',
    title: 'Isla Mara',
    icon: 'anchor',
    content: {
      description: 'La misteriosa Isla Mara y sus secretos.',
      placeholder: 'Cómo llegar y qué encontrar en Isla Mara...'
    }
  },
  {
    id: 'nobleza',
    title: 'Nobleza',
    icon: 'medal',
    content: {
      description: 'Sistema de títulos nobiliarios y prestigio.',
      placeholder: 'Rangos de nobleza y cómo obtenerlos...'
    }
  },
  {
    id: 'gema-liberacion',
    title: 'Gema de Liberación',
    icon: 'gem',
    content: {
      description: 'La poderosa Gema de Liberación y sus usos.',
      placeholder: 'Información sobre la gema y cómo obtenerla...'
    }
  },
  {
    id: 'artesano',
    title: 'Artesano',
    icon: 'hammer',
    content: {
      description: 'Guía completa del sistema de crafteo.',
      placeholder: 'Recetas, materiales y habilidades de artesano...'
    }
  },
  {
    id: 'cofres',
    title: 'Cofres',
    icon: 'box',
    content: {
      description: 'Sistema de cofres y recompensas aleatorias.',
      placeholder: 'Tipos de cofres y posibles recompensas...'
    }
  },
  {
    id: 'blibla',
    title: 'Blibla',
    icon: 'message-circle',
    content: {
      description: 'Sistema especial Blibla.',
      placeholder: 'Información sobre el sistema Blibla...'
    }
  },
  {
    id: 'puntos-usuario',
    title: 'Puntos de Usuario',
    icon: 'star',
    content: {
      description: 'Sistema de puntos y recompensas de usuario.',
      placeholder: 'Cómo ganar y usar puntos de usuario...'
    }
  },
  {
    id: 'cucsi-puntos',
    title: 'Cucsi Puntos',
    icon: 'coins',
    content: {
      description: 'Moneda premium del juego.',
      placeholder: 'Cómo obtener y gastar Cucsi Puntos...'
    }
  },
  {
    id: 'apariciones',
    title: 'Apariciones de Cypher',
    icon: 'eye',
    content: {
      description: 'Eventos especiales de aparición de Cypher.',
      placeholder: 'Cuándo y dónde aparece Cypher...'
    }
  },
  {
    id: 'eventos',
    title: 'Eventos Automáticos',
    icon: 'calendar',
    content: {
      description: 'Calendario de eventos automáticos del servidor.',
      placeholder: 'Lista de eventos programados y recompensas...'
    }
  },
  {
    id: 'entrenador',
    title: 'Entrenador en Ullathorpe',
    icon: 'graduation-cap',
    content: {
      description: 'El entrenador especial de la ciudad principal.',
      placeholder: 'Servicios del entrenador y ubicación...'
    }
  },
  {
    id: 'emekilitus',
    title: 'Emekilitus',
    icon: 'zap',
    content: {
      description: 'El poderoso Emekilitus.',
      placeholder: 'Información sobre Emekilitus...'
    }
  },
  {
    id: 'mercado-personajes',
    title: 'Mercado de Personajes',
    icon: 'shopping-cart',
    content: {
      description: 'Compra y vende personajes de forma segura.',
      placeholder: 'Reglas del mercado de personajes...'
    }
  },
  {
    id: 'mercado-items',
    title: 'Mercado de Items',
    icon: 'shopping-bag',
    content: {
      description: 'Mercado de intercambio de items.',
      placeholder: 'Sistema de comercio y mercado...'
    }
  },
  {
    id: 'datos-utiles',
    title: 'Datos Útiles',
    icon: 'info',
    content: {
      description: 'Información variada y consejos útiles.',
      placeholder: 'Tips, trucos y datos importantes...'
    }
  },
  {
    id: 'errores',
    title: 'Solución de Errores',
    icon: 'alert-circle',
    content: {
      description: 'Soluciones a problemas comunes del juego.',
      placeholder: 'Guía de troubleshooting...'
    }
  }
];

export const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/CucsiAo/',
    icon: 'facebook'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/cucsi.ao/',
    icon: 'instagram'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCqp1llmMkWug6mbqJoc_QjQ',
    icon: 'youtube'
  },
  {
    name: 'Discord',
    url: 'https://discord.com/invite/cHBBS5A',
    icon: 'message-square'
  }
];