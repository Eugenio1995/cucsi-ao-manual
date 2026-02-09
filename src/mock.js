// Mock data for CucsiAo Wiki

import redpesca from './assets/redpesca.png';
import herreria from './assets/herreria.png';
import tala from './assets/tala.png';
import carpinteria from './assets/carpinteria.png';
import mineria from './assets/mineria.png';
import sastreria from './assets/sastreria.png';
import botanica from './assets/botanica.png';
import lingotes from './assets/lingotes.png';
import alquimia from './assets/alquimia.png';
import esquila from './assets/esquila.png';
import hilado from './assets/hilado.png';
import recursos from './assets/recursos.png';

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
  /* {
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
  }, */
  {
    id: 'razas',
    title: 'Razas',
    icon: 'users',
    content: {
      description: 'En estos tiempos de la edad media, hasta el momento se conocen 6 diferentes razas que habitan las tierras de CucsiAO.',
      races: [
        { name: 'Humano', image: 'https://fenixao.com.ar/manual/resources/media/Heads/3.png' },
        { name: 'Elfo', image: 'https://fenixao.com.ar/manual/resources/media/Heads/107.png' },
        { name: 'Elfo Oscuro', image: 'https://fenixao.com.ar/manual/resources/media/Heads/203.png' },
        { name: 'Gnomo', image: 'https://fenixao.com.ar/manual/resources/media/Heads/401.png' },
        { name: 'Enano', image: 'https://fenixao.com.ar/manual/resources/media/Heads/301.png' },
        { name: 'Orco', image: 'https://fenixao.com.ar/manual/resources/media/Heads/5.png' }
      ],
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
    id: 'clases',
    title: 'Clases',
    icon: 'shield',
    content: {
      description: 'Al iniciar tu aventura elegirás que clase quieres ser, esto definirá tus características.',
      text: 'Al iniciar tu aventura eligiras que clase quieres ser, esto definirá tu características tales como el daño físico que infligirás, tu mana, tu vida, tu evasión, tu chance de acierto, tu equipamiento, entre otras cosas. Cada clase posee características propias de si mismo, y se diferencian siempre las unas de las otras.',
      classes: [
        {
          name: 'Asesino',
          image: 'https://manual.alkononline.com.ar/images/c/c5/Asesin.jpg',
          description: 'Las clase asesino son capaces de encontrar el punto débil a todos sus oponentes convirtiéndose en la clase más habilidosa al momento de apuñalar a sus enemigos. Sus golpes pueden parecer débiles pero cuidado, pueden derribar a los más resistentes y derrotar adversarios de un solo golpe.\n\nEsta clase posee una excelente preparación para el combate físico resultando en una gran evasión y muy buen manejo de armas cuerpo a cuerpo. Puede utilizar conjuros mágicos como complemento a sus tácticas ofensivas y defensivas con precaución de su limitada cantidad de maná.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.85', '0.76', '0.7', '0.6', '0.4', '0.4', '0.9', '1', '1%']
          },
          special: 'Multiplicador de Apuñalar: 1,7 Frente y costados, 1,8 por la espalda. Probabilidad de Apuñalar: 26% Frente y costados, +10% por la espalda.',
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '6 a 8', '6 a 9', '7 a 9', '7 a 10', '8 a 11', '9 a 11'],
              ['Mana', '25', '23', '21', '19', '13', '12'],
              ['Golpe', '3', '3', '3', '3', '3', '3'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          },
          abilities: [
            {
              title: 'Ocultarse',
              description: 'El Asesino podrá ocultarse y caminar entre las sombras sin ser visto. Este efecto es cancelado si el personaje ataca cuerpo a cuerpo (con o sin arma) o habla. La chance de éxito dependerá de los puntos de habilidad que tengas en ocultar.'
            }
          ]
        },
        {
          name: 'Bardo',
          image: 'https://manual.alkononline.com.ar/images/e/ee/Bard.jpg',
          description: 'Los Bardos son capaces de desconcertar al oponente con sus melodías induciéndolos a lanzar una ofensiva imprecisa, facilitándole la predicción del mismo y esquivarlos sin dificultad, por eso es la clase con mas evasión. Sus místicos instrumentos le otorgan gran concentración permitiéndole lanzar hechizos mas precisos, provocando gran daño mágico. Tienen un leve entrenamiento en combate físico, concediéndole el uso de algunas armas, escudos y cascos.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.7', '0.72', '0.7', '0.7', '0.4', '0.4', '0.97', '0.87', '2%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '6 a 8', '6 a 9', '7 a 9', '7 a 10', '7 a 11', '8 a 11'],
              ['Mana', '50', '46', '42', '38', '26', '24'],
              ['Golpe', '2', '2', '2', '2', '2', '2'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          }
        },
        {
          name: 'Cazador',
          image: 'https://manual.alkononline.com.ar/images/b/b6/Cazador.jpg',
          description: 'Nacidos en los bosques, los cazadores son expertos únicos en el combate a distancia, con una fuerza y puntería digna de envidiar. Gracias a su gran entrenamiento en el arte de la guerra, tienen buenas propiedades a la hora de ocultarse entre las sombras y poseen una moderada evasión. Esta clase no utiliza mana ni hechizos.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.8', '0.72', '0.96', '1.02', '0.5', '0.4', '0.8', '0.75', '0%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '7 a 10', '8 a 10', '9 a 10', '9 a 11', '9 a 12', '10 a 12'],
              ['Mana', '0', '0', '0', '0', '0', '0'],
              ['Golpe', '3', '3', '3', '3', '3', '3'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          }
        },
        {
          name: 'Clérigo',
          image: 'https://manual.alkononline.com.ar/images/a/a2/Clerig.jpg',
          description: 'Gracias a su inspiradora fe, sea a un Dios malévolo o benévolo, el Clérigo puede combinar ataques de daño decente con hechizos de una variedad y poder mágico muy interesantes. Tal vez sea una de las Clases más versátiles del todo el juego, donde la destreza será necesaria para hacer relucir sus atributos. Ésta particularidad los convierte en una clase elegida por cualquier raza aunque tienden a abundar humanos y elfos oscuros cuyas habilidades innatas se encuentran en sintonía con el modo de combate de los clérigos.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.75', '0.72', '0.7', '0.5', '0.4', '0.4', '0.7', '0.72', '2%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '6 a 8', '6 a 9', '7 a 9', '7 a 10', '8 a 11', '9 a 11'],
              ['Mana', '50', '46', '42', '38', '26', '24'],
              ['Golpe', '2', '2', '2', '2', '2', '2'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          }
        },
        {
          name: 'Druida',
          image: 'https://manual.alkononline.com.ar/images/f/f0/Druid.jpg',
          description: 'Los druidas son seres sumamente sabios, poseen una gran conexión con la naturaleza permitiéndole invocar criaturas que acudan en su ayuda. Gracias a su gran conocimiento son expertos en el uso de hechizos con un buen poder y resistencia mágica, aunque se ha visto a algunos con un arma en su mano. Son tambien expertos en la doma de criaturas.\n\nBonidifación Ahorro de Mana: Utilizando el ítem Flauta Élfica el cual le concederá una reducción del 20% para los hechizos invocación.\n\nBonidifación Domar Animales: Utilizando el ítem Flauta Mágica tendrás 20% más de poder de domación.\n\nHabilidad Única: Extracción de raíces para la creación de pociones.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.65', '0.68', '0.83', '0.65', '0.4', '0.4', '0.5', '0.5', '4%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '5 a 8', '5 a 9', '6 a 9', '7 a 9', '7 a 11', '8 a 11'],
              ['Mana', '62', '58', '52', '48', '32', '30'],
              ['Golpe', '2', '2', '2', '2', '2', '2'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          },
          abilities: [
            {
              title: 'Domar',
              description: 'El Druida se caracteriza por poseer la habilidad de domar poderosas criaturas que otras clases no podrán.'
            },
            {
              title: 'Botánica y Alquimia',
              description: 'El Druida también se caracteriza por poseer la habilidad de crear pociones con caracteristicas especiales que ninguna otra clase podrá: Botánica - Extracción de Raíces, Alquimia - Creación de Pociones'
            }
          ]
        },
        {
          name: 'Guerrero',
          image: 'https://manual.alkononline.com.ar/images/0/01/Guerrer.jpg',
          description: 'Los guerreros son expertos únicos en el combate cuerpo a cuerpo y a distancia, con una fuerza extraordinaria capaces de derribar a sus enemigos con pocos golpes. Su gran fuerza le permite cargar con pesadas armaduras y junto a su destacada vitalidad, ser una de las clases mas resistentes. Gracias a su gran entrenamiento en el arte de la guerra, también son hábiles arqueros, causan un gran daño a distancia y también pueden apuñalar. Esta clase no utiliza mana ni hechizos.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['1.05', '0.72', '0.87', '0.7', '0.4', '0.6', '0.78', '0.85', '0%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '8 a 10', '8 a 11', '9 a 11', '10 a 11', '10 a 12', '11 a 12'],
              ['Mana', '0', '0', '0', '0', '0', '0'],
              ['Golpe', '4', '4', '4', '4', '4', '4'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          }
        },
        {
          name: 'Ladrón',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3NHMkt4J_ibUP7RIzI4wER1Q8EwjjAEbpQ&s',
          description: 'Los ladrones son astutos rivales, pueden robar gran cantidad de objetos y oro al enemigo casi sin ser detectado. Dominan el arte del sigilo, al igual que los bandidos pueden caminar oculto entre las sombras sin ser detectado. No tienen conocimientos en la magia, por lo que no usan hechizos ni mana. Su daño está abocado al golpe físico cuerpo a cuerpo utilizando guantes, arcos y cuchillas.\n\nBonificación Guantes de Lucha: Utilizando el objeto Guantes de Lucha y sin arma equipada, cuando acertemos un golpe, tendremos una chance de paralizar al objetivo como así de desarmarlo. (Desequipa el Arma / Solo funciona a USUARIOS)',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.8', '0.69', '0.8', '0.75', '0.8', '0.72', '0.9', '0.75', '2%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '6 a 9', '7 a 9', '8 a 10', '8 a 11', '9 a 11', '9 a 12'],
              ['Mana', '0', '0', '0', '0', '0', '0'],
              ['Golpe', '3', '3', '3', '3', '3', '3'],
              ['Stamina', '18', '18', '18', '18', '18', '18']
            ]
          },
          abilities: [
            {
              title: 'Robar',
              description: 'La habilidad especial del Ladrón, es el robo. Presionando *R + Click* (por defecto), podrás robarle a una víctima, pero ten cuidado, que te convertirás en criminal si lo haces.\n\nChances de Robo: 67% ORO, 33% ITEMS.\n\nRobar Oro: Cuando robes oro, tendrás cierto porcentaje de acierto al robar, por ejemplo, con 100 skills, el porcentaje de acierto en robo es 60%. Si logras robar oro, la formula que determina la cantidad de monedas a robar es la siguiente: Oro Robado: Minimo a Robar (Nivel del Ladrón x25) y Maximo a Robar (Nivel del Ladrón x50). Ejemplo: Si tu Ladrón es Nivel 24, robará entre 600 a 1.200 monedas de oro. Bonificación: Si utilizamos Guantes de Hurto robaremos el doble de monedas de oro. (x2)\n\nRobar Items: Cuando robes al usuario, tendrás cierto porcentaje de acierto al robar objetos: 30% de chances de robar un objeto, 1% a 8% de cantidad robada por objeto.'
            },
            {
              title: 'Ocultarse',
              description: 'El Ladrón podrá ocultarse y caminar entre las sombras sin ser visto. Este efecto es cancelado si el personaje ataca cuerpo a cuerpo (con o sin arma) o habla. La chance de éxito dependerá de los puntos de habilidad que tengas en ocultar.'
            },
            {
              title: 'Combate Sin Armas',
              description: 'Pueden optar por el combate sin armas, dando fuertes golpes si se usa guante de lucha y guante de hurto, que le brindarán un mayor daño. También podrá paralizar a su rival atacando con Wrestling (combate sin armas) y equipado el ítem Guantes de Hurto. Mientras más skilles posea en Wrestling mayor será el porcentaje de paralizarlo. (No deberá de poseer arma equipada para poder paralizar al rival)'
            },
            {
              title: 'Cuchillas',
              description: 'Las Cuchicllas poseen las siguientes habilidades especiales en nuestra clase Ladrón: Desarmar le des-equipa el arma al personaje enemigo dándole al Ladrón la oportunidad de robársela para neutralizarlo. Con Guantes de Hurto tenemos una chance de paralizar al enemigo. Acuchillar nos permite lograr un daño superior al normal. Cuando un Ladrón acierta un golpe con cuchillas estas tienen un 20% de posibilidad de hacer un 20% de daño aumentado.'
            }
          ]
        },
        {
          name: 'Mago',
          image: 'https://manual.alkononline.com.ar/images/e/e5/Mag.jpg',
          description: 'Los magos son poderosos seres con un gran conocimiento en la hechicería. Su inteligencia única y característica les permite usar poderosos conjuros e invocar viles criaturas para acudir en su ayuda. Este atributo les permite lanzar el doble o incluso el triple de hechizo que el resto de las clases con un poder mágico tan devastador que excede con creces la capacidad de cualquiera. Así mismo son seres débiles al enfrentamiento cuerpo a cuerpo y torpes en el uso de armas, por lo que su posicionamiento en combate será exclusivamente el uso de hechizos evitando el enfrentamiento frontal.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.5', '0.4', '0.5', '0.5', '0.3', '0.4', '0.3', '0', '6%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '4 a 8', '5 a 8', '5 a 9', '6 a 9', '6 a 10', '7 a 10'],
              ['Mana', '75', '69', '63', '57', '39', '36'],
              ['Golpe', '1', '1', '1', '1', '1', '1'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          }
        },
        {
          name: 'Paladín',
          image: 'https://manual.alkononline.com.ar/images/f/f6/Paladi.jpg',
          description: 'Los paladines poseen un amplio conocimiento en el combate, pueden utilizar una gran variedad de armas, armaduras, cascos y escudos. Su medida inteligencia es suficiente para aprender una gran mayoría de hechizos tanto ofensivos como defensivos, dándole al paladín una combinación entre golpes y hechizo. Está abocado al combate físico cuerpo a cuerpo, es una clase resistente, puede soportar gran cantidad de golpes pudiendo hacerle frente a cualquier amenaza.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.9', '0.81', '0.75', '0.85', '0.4', '0.4', '0.8', '0.9', '1%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '7 a 9', '7 a 10', '8 a 10', '9 a 10', '9 a 11', '10 a 11'],
              ['Mana', '25', '23', '21', '19', '13', '12'],
              ['Golpe', '3', '3', '3', '3', '3', '3'],
              ['Stamina', '15', '15', '15', '15', '15', '15']
            ]
          }
        },
        {
          name: 'Pirata',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQvR_MOFAQ6RetdbPWgQ9_nEPSRZhBNdKgow&s',
          description: 'Los piratas son expertos navegantes, desde muy temprano aprenden a recorrer los mares y usar los navíos más sofisticados.\n\nHabilidad Especial:\n• Bonificación en skills para navegar, requiere: Barca: 40, Galera: 45 y Galeón: 50\n• Puede acceder a cualquier Dungeon sin requerimientos de nivel.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.8', '0.69', '0.8', '0.8', '0.5', '0.4', '0.9', '0.6', '2%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '6 a 9', '7 a 9', '7 a 10', '8 a 10', '8 a 11', '9 a 11'],
              ['Mana', '0', '0', '0', '0', '0', '0'],
              ['Golpe', '3', '3', '3', '3', '3', '3'],
              ['Stamina', '20', '20', '20', '20', '20', '20']
            ]
          }
        }
      ]
    }
  },
  {
    id: 'trabajo',
    title: 'Trabajo',
    icon: 'briefcase',
    content: {
      description: 'En las tierras de CucsiAO, el trabajo es un medio muy importante para el progreso de tu personaje o de un clan en sí. Ahora vas a poder realizar todos los trabajos con tu personaje, dejó de existir la clase trabajador. Los recursos son agotables.',
      intro: 'Estas son los diferentes trabajos que tu personaje podrá realizar:',
      importantNote: {
        title: 'Importante',
        items: [
          'Cualquier Personaje de Nivel 1 a 12 extraerán entre 1 a 5 recursos de cualquier tipo. (Leña, Minerales, Peces, Lanas, Raíces).',
          'Ahora pueden trabajar en zona segura y van a extraer 1 a 5 recursos.',
          'Los Personajes de Nivel 13 o superior extraerán más recursos.'
        ]
      },
      trabajos: [
        {
          id: 'pesca',
          nombre: 'Pesca',
          icon: redpesca,
          descripcion: 'El oficio de la pesca consiste en la obtención de peces. Para esto el personaje debe tener seleccionada y equipada una caña de pescar o una red de pesca (ésta última es solo equipable por el trabajador), luego buscar agua ya sea un lago, río, etc. y presionar la tecla U (por defecto o doble click sobre la herramienta) y hacer click sobre el agua.',
          descripcion2: 'El Trabajador con el oficio en Pescar puede extraer mas de un recurso a la vez dependiendo del nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez.',
          bonificacion: {
            title: 'Bonificación',
            items: [
              'Con Red de Pesca en Zona Insegura extraemos más recursos por nivel.',
              'Utilizando la embarcación Galera y Red de Pesca en Zona Insegura, tendremos la posibilidad de obtener Cofres de Pesca.'
            ]
          },
          itemsTable: {
            title: 'Items de Pesca',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Caña de Pescar', 'Item necesario para la extración de peces, se vende en el NPC "Vendedor"'],
              ['Red de Pesca', 'Item necesario para la extración de variedad de peces, se vende en el NPC "Vendedor" (SE CAE)']
            ]
          },
          resourcesTable: {
            title: 'Tipos de Peces y Precios',
            headers: ['Nombre', 'Precio'],
            rows: [
              ['Pez Dorado', '6 monedas de oro. Requiere red de pesca'],
              ['Pez Espada', '5 monedas de oro. Requiere red de pesca'],
              ['Merluza', '4 monedas de oro. Requiere red de pesca'],
              ['Pescado', '2 monedas de oro']
            ]
          },
          cofresNote: 'IMPORTANTE: Al abrir los cofres existe la posibilidad de conseguir hasta 3 de los objetos del cofre como también la posibilidad de que el cofre no de ningún objeto.',
          cofresTable: {
            title: 'Tipos de Cofres',
            headers: ['Nombre del cofre', 'Prob. de conseguirlo', 'Objetos'],
            rows: [
              ['Cofre de Pesca Verde', '1,2%', '2.000 Pescados - 1.000 Pez Dorado - 500 Merluza - 250 Pez Espada - 1.000 Monedas de Oro - 2 Gema Verde (5 puntos de usuario) - 2 Gema Naranja (3 puntos de usuario) - 2 Gema Azul (1 puntos de usuario).'],
              ['Cofre de Pesca Celeste', '0,9%', '6.000 Pescados - 5.000 Pez Dorado - 3.000 Merluza - 2.000 Pez Espada - 5.000 Monedas de Oro - 1 Cofre de Pesca Verde - 3 Gema Verde (5 puntos de usuario) - 3 Gema Naranja (3 puntos de usuario) - 3 Gema Azul (1 puntos de usuario).'],
              ['Cofre de Pesca Violeta', '0,6%', '1 Cofre de Pesca Verde - 1 Cofre de Pesca Celeste - 10.000 Monedas de Oro - 20 Poción Roja - 5 Gema Verde (5 puntos de usuario) - 5 Gema Naranja (3 puntos de usuario) - 5 Gema Azul (1 puntos de usuario).'],
              ['Cofre de Pesca de Oro', '0,3%', '1 Cofre de Pesca Verde - 1 Cofre de Pesca Celeste - 1 Cofre de Pesca Violeta - 1 Red de Pesca - 400 Pociones de Rojas - 7 Gema Verde (5 puntos de usuario) - 7 Gema Naranja (3 puntos de usuario) - 7 Gema Azul (1 puntos de usuario).']
            ]
          },
          extraccion: {
            title: 'Extracción de Peces',
            intro: 'A la hora de Pescar con nuestro trabajador lo podremos realizar en Zona Segura o en Zona Insegura. El beneficio de pescas en Zona Insegura es que recibiremos una bonificación de extracción de una mayor cantidad de recursos pero SOLO será con nuestra Red de Pesca. Para poder utilizar la Red de Pesca deberemos de estar embarcados y el tipo de embarque es indistinto ya sea Barca, Galera o Galeón dado a que la bonificación solo se aplica para la zona segura o insegura. Con Caña de Pescar extraeremos la misma cantidad de recursos estando en tierra o navegando.',
            calculoTitle: 'Cálculo de Extracción',
            calculoIntro: 'Para saber cuantos peces recojeremos con nuestro trabajador influirán los siguientes factores:',
            zonas: [
              {
                nombre: 'Zona Segura',
                items: [
                  'Caña de Pesca: extraemos SIEMPRE entre 1 a 5 peces sin importar nuestro nivel.',
                  'Red de Pesca: extraemos SIEMPRE entre 1 a 10 peces sin importar nuestro nivel.'
                ]
              },
              {
                nombre: 'Zona Insegura',
                items: [
                  'Caña de Pesca: (Mínimo: TuNivel -10 / Máximo: TuNivel -7). Osea si somos Nivel 20 extraemos entre 10 y 13 peces.',
                  'Red de Pesca: (Mínimo: TuNivel -10 / Máximo: TuNivel -5). Osea si somos Nivel 20 extraemos entre 10 y 15 peces.'
                ]
              }
            ],
            rateNote: 'El cálculo expresado está realizado sobre el multiplicador x1 por lo cual para saber realmente cuanto extraeremos, utilizando la formula informada, deberemos de multiplicar el resultado por el rate de Extracción.'
          },
          importantNotes: [
            'Los PECES SE CAEN si morimos en AGUA.',
            'La RED DE PESCA se cae como cualquier otro item de trabajador, también en agua.'
          ],
          trabajoCastillo: 'La extracción de este recurso solo es posible siempre y cuando nuestro Clan sea Nivel 3 ya que nos permitirá realizar trabajos en las Catacumbas de los Castillos. Caso contrario de que no poseamos el nivel de clan no se nos permitirá trabajar. Las catacumbas se encuentran ubicadas en los Castillos Norte, Sur, Este y Oeste y no es necesario tenerlos conquistados para ingresar a las catacumbas.'
        },
        {
          id: 'tala',
          nombre: 'Tala',
          icon: tala,
          descripcion: 'El oficio de la tala consiste en la obtención de leños, una vez que tengas un hacha de leñador deberás equiparla con la tecla equipar (E), luego buscar un árbol, presionar la tecla Usar (U), se te activa el macro automático del servidor) y hacer click sobre el árbol. Los trabajadores pueden extraer o construir de a uno o más recursos/objetos a la vez, dependiendo de su nivel. Mientras más nivel sea, más recursos obtendrá por vez y más objetos podrá construir por vez (ver Extracción).',
          descripcion2: 'El Trabajador con el oficio en Talar puede extraer mas de un recurso a la vez dependiendo del nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez. Las leñas sirven para que puedas construir items de Carpintería.',
          itemsTable: {
            title: 'Items de Tala',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Hacha de Leñador', 'Item necesario para extraer materiales de los árboles, se vende en el NPC "Vendedor"'],
              ['Hacha de Leña Élfica', 'Item necesario para extraer materiales de los árboles élficos, se vende en el NPC "Vendedor"'],
              ['Leña', 'Recurso extraído desde un Árbol'],
              ['Leña Élfica', 'Recurso extraído desde un Árbol Élfico']
            ]
          },
          extraccion: {
            title: 'Extracción de Leña',
            intro: 'Con nuestro trabajador y su herramienta de trabajo Hacha de Leñador o Hacha de Leña Élfica, dependiendo del tipo de recurso que deseamos extraer, nos dirigiremos a zona insegura para empezar nuestra tala.',
            calculoTitle: 'Cálculo de Extracción',
            formulas: [
              'Nivel 1 a 12: extraemos entre 2 a 5 de Leña sin importar tu nivel.',
              'Nivel 13 o Más: extraemos (Mínimo: TuNivel -10 / Máximo: TuNivel -5). Osea si somos Nivel 20 extraemos entre 10 y 15 Leña.'
            ],
            rateNote: 'El cálculo expresado está realizado sobre el multiplicador x1 por lo cual para saber realmente cuanto extraeremos, utilizando la formula informada, deberemos de multiplicar el resultado por el rate de Extracción.'
          },
          importantNotes: [
            'Mientras más nivel tenga nuestro trabajador más recursos extraerá.',
            'Un Trabajador podrá navegar a partir de Nivel 13 y tener 60 skills en navegación para usar la Barca, 68 skills en navegación para usar la Galera, 75 skills para usar el Galeón.'
          ],
          locationInfo: [
            'La Leña podremos extraerla de cualquier árbol de las tierras.',
            'En cambio para poder extraer Leña Élfica deberemos de dirigirnos al Bosque Élfico situado al Sureste de la ciudad de Nix ubicado en el Mapa 145, ya que es el único lugar de las tierras donde podremos hacernos de ella pero para llegar a dicho lugar deberemos de navegar.'
          ],
          trabajoCastillo: 'La extracción de este recurso solo es posible siempre y cuando nuestro Clan sea Nivel 3 ya que nos permitirá realizar trabajos en las Catacumbas de los Castillos. Caso contrario de que no poseamos el nivel de clan no se nos permitirá trabajar. Las catacumbas se encuentran ubicadas en los Castillos Norte, Sur, Este y Oeste y no es necesario tenerlos conquistados para ingresar a las catacumbas.'
        },
        {
          id: 'carpinteria',
          nombre: 'Carpintería',
          icon: carpinteria,
          descripcion: 'El oficio de la carpintería sirve para construir objetos a base de leña. Una vez que tengas un serrucho deberás equiparlo con la tecla Equipar (E) y luego presionar tecla Usar (U o doble click). De esta forma se abrirá una ventana que mostrará el listado de objetos que el personaje podrá construir según la clase y puntos de habilidad en carpintería.',
          descripcion2: 'El Trabajador con el oficio en Carpintería podrá crear una gran variedad de objetos (todos los del listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).',
          itemsTable: {
            title: 'Items de Carpintería',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Serrucho', 'Item necesario para la construcción con madera, se vende en el NPC "Vendedor"'],
              ['Leña', 'Recurso extraído desde un Árbol para la elaboración de objetos'],
              ['Leña Élfica', 'Recurso extraído desde un Árbol Élfico para la elaboración de objetos']
            ]
          },
          creacion: {
            title: 'Creación',
            steps: [
              'Utilizando el Serrucho abrimos el menú de creación.',
              'Seleccionamos el objeto a construir junto con su cantidad.'
            ]
          },
          craftingTable: {
            title: 'Lista de Objetos de Creación',
            headers: ['Item', 'Leña', 'Leña Élfica', 'Skills', 'Defensa', 'Daño'],
            rows: [
              ['Cuchara', '3', '-', '5', '', ''],
              ['Caña de Pescar', '70', '-', '12', '', ''],
              ['Arco Simple', '42', '-', '20', '', ''],
              ['Flecha', '1', '-', '20', '', ''],
              ['Barca (Navegas 5% más rápido)', '10.000', '-', '80 / (60 trabajadores) / (40 piratas)', '5/10', '5/10'],
              ['Flecha +1', '3', '-', '40', '', ''],
              ['Galera (Navegas 10% más rápido)', '45.000', '25.000', '90 / (68 trabajadores) / (45 piratas)', '10/15', '7/15'],
              ['Flecha +2', '5', '-', '60', '', ''],
              ['Tambor', '800', '-', '75', '', ''],
              ['Flauta', '800', '-', '75', '', ''],
              ['Arco De Oro', '1.500', '-', '80', '-', '5/9'],
              ['Bastón Nudoso', '2.500', '-', '80', '', ''],
              ['Arco de Perla Azul', '3.500', '-', '90', '-', '8/10'],
              ['Flecha +3', '7', '-', '90', '', ''],
              ['Flauta Mágica', '3.000', '-', '100', '', ''],
              ['Laúd Mágico', '3.300', '-', '100', '', ''],
              ['Ballesta', '10.000', '1.000', '100', '-', '7/12'],
              ['Báculo Engarzado', '8.000', '-', '100', '', ''],
              ['Flauta Élfico', '-', '3.650', '100', '', ''],
              ['Laúd Élfico', '-', '3.650', '100', '', ''],
              ['Galeón (Navegas 15% más rápido)', '90.000', '50.000', '100 / (75 trabajadores) / (50 pirata)', '15/20', '10/17']
            ]
          },
          desmantelacion: {
            title: 'Desmantelación de Objetos de Carpintería',
            descripcion: 'El oficio desmantelar consiste en la recuperación de piezas para poder a reutilizar la madera, una vez que tengas una cierta cantidad de objetos a desmantelar deberás buscar un serrucho ubicado en la casa del carpintero de cada ciudad, seleccionar el objeto, presionar tecla Usar (U o doble click) y clickear sobre el serrucho. La desmantelación depende de la clase y los puntos ya que los objetos a desmantelar son aquellos creados mediante la Carpintería. Que requieran al menos 50 skills, se podrán desmantelar para obtener un porcentaje de los materiales utilizados para crearlos, la cantidad dependerá del azar y podrá ser entre 45% y 75% de los materiales utilizados en su construcción.',
            note: 'IMPORTANTE: SOLO podremos fundir los objetos del siguiente listado cuales SKILLS en CARPINTERIA deberán de ser 50 o superiores:',
            table: {
              headers: ['Item', 'Leña', 'Leña Élfica', 'Skills'],
              rows: [
                ['Galera (Navegas 10% más rápido)', '45.000', '25.000', '90 / (68 trabajadores) / (45 piratas)'],
                ['Flecha +2', '5', '-', '60'],
                ['Tambor', '800', '-', '75'],
                ['Flauta', '800', '-', '75'],
                ['Arco De Oro', '1.500', '-', '80'],
                ['Bastón Nudoso', '2.500', '-', '80'],
                ['Arco de Perla Azul', '3.500', '-', '90'],
                ['Flecha +3', '7', '-', '90'],
                ['Flauta Mágica', '3.000', '-', '100'],
                ['Laúd Mágico', '3.000', '-', '100'],
                ['Ballesta', '6.000', '3.000', '100'],
                ['Báculo Engarzado', '4.500', '-', '100'],
                ['Flauta Élfico', '-', '3.650', '100'],
                ['Laúd Élfico', '-', '3.650', '100'],
                ['Galeón (Navegas 15% más rápido)', '90.000', '50.000', '100 / (75 trabajadores) / (50 pirata)']
              ]
            }
          }
        },
        {
          id: 'botanica',
          nombre: 'Botánica',
          icon: botanica,
          descripcion: 'La botánica es el trabajo dedicado a la extracción de los recursos de raíces de los árboles para luego poder elaborar complejas pociones de un grado superior a las que podremos encontrar en el comerciante con el arte de la Alquimia.',
          descripcion2: 'La extracción de raíces es un arte pura y exclusivamente de la clase DRUIDA mientras que con el resto de las clases sólo podrá obtener una a la vez.',
          bonificacion: 'BONIFICACIÓN: A partir de Nivel 45 empezaremos a extraer más recursos por nivel.',
          itemsTable: {
            title: 'Items de Botánica',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Tijeras', 'Item necesario para la creación de pociones, se vende en el NPC "Vendedor"'],
              ['Raíz', 'Recurso extraído desde un Árbol']
            ]
          },
          castilloNote: 'También si tienes un Clan nivel 3, puedes trabajar en las catacumbas de los castillos.',
          extraccion: {
            title: 'Extracción de Raíces',
            intro: 'Con nuestro Druida y su herramienta de trabajo Tijeras nos dirigiremos a zona insegura para empezar nuestra recolección:',
            calculoTitle: 'Cálculo de Extracción',
            formulas: [
              'Nivel 1 a 44: extraemos entre 2 a 4 Raíces sin importar tu nivel.',
              'Nivel 45 o Más: extraemos (Mínimo: TuNivel -42 / Máximo: TuNivel -38). Osea si somos Nivel 45 extraemos entre 3 y 7 Raíces.'
            ],
            rateNote: 'El cálculo expresado está realizado sobre el multiplicador x1 por lo cual para saber realmente cuanto extraeremos, utilizando la formula informada, deberemos de multiplicar el resultado por el rate de Extracción.',
            importantNote: 'IMPORTANTE: Mientras más nivel tenga nuestro Druida más recursos extraerá.'
          }
        },
        {
          id: 'alquimia',
          nombre: 'Alquimia',
          icon: alquimia,
          descripcion: 'El Alquimia es el Arte de las viejas brujas la cual sirve para la creación de poderosas pociones a base de raíces. Una vez que tengas una Olla deberás equiparlo con la tecla Equipar (E) y luego presionar tecla Usar (U o doble click). De esta forma se abrirá una ventana que mostrará el listado de objetos que el personaje podrá construir según la clase y puntos de habilidad en Alquimia.',
          descripcion2: 'El Druida con el oficio en Alquimia es quién podrá crear una gran variedad de objetos (todos los del listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).',
          itemsTable: {
            title: 'Items de Alquimia',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Olla', 'Item necesario para la construcción con raíces, se vende en el NPC "Vendedor"'],
              ['Raíz', 'Recurso extraído desde un Árbol para elaboración de pociones']
            ]
          },
          creacion: {
            title: 'Creación',
            steps: [
              'Utilizando la Olla abrimos el menú de creación.',
              'Seleccionamos el objeto a construir junto con su cantidad.'
            ]
          },
          craftingTable: {
            title: 'Lista de Objetos de Creación',
            headers: ['Item', 'Estado', 'Bonificación', 'Raíces', 'Skills'],
            rows: [
              ['Poción Violeta (Druida)', 'Cura el veneno', '-', '10', '10'],
              ['Poción Roja', 'Recupera Vida', '28-30', '14', '10'],
              ['Poción de Energía', 'Recupera energía', '25-50', '50', '30'],
              ['Poción de Energía (Druida)', 'Recupera más energía', '50-100', '100', '30'],
              ['Poción Azul (Druida)', 'Recupera más mana', '100-150', '200', '50'],
              ['Poción Azul', 'Recupera mana', '50-75', '14', '60'],
              ['Poción Amarilla', 'Aumenta la agilidad', '4-6', '14', '60'],
              ['Poción Verde', 'Aumenta la fuerza', '4-6', '14', '60'],
              ['Poción Roja (Druida)', 'Recupera más vida', '38-38', '100', '60'],
              ['Poción Amarilla (Druida)', 'Aumenta más la agilidad', '8-10', '250', '70'],
              ['Poción Verde (Druida)', 'Aumenta más la fuerza', '8-10', '300', '80'],
              ['Poción Anti Ceguera', 'Devuelve la visión', '-', '2.000', '100'],
              ['Poción Anti Estupidez', 'Vuelve a la normalidad al personaje', '-', '2.000', '100'],
              ['Poción Anti Parálisis', 'Remueve la parálisis', '-', '4.000', '100']
            ]
          }
        },
        {
          id: 'mineria',
          nombre: 'Minería',
          icon: mineria,
          descripcion: 'La minería es una de las profesiones mejor pagas de Argentum Online debido a su alto riesgo. La extracción de minerales implica salir de la ciudad y entrar a una peligrosa mina en busca de yacimientos y hasta poderosos Dungeons. Estos deben ser trabajados con un piquete de minero, deberás equiparlo con la tecla equipar (E), presionar la tecla Usar (U o doble click) y clickear sobre el yacimiento.',
          descripcion2: 'Con la minería obtendremos la extracción de minerales de hierro, plata y oro materia prima para la fundición de Lingotes y con ellos crear poderosos objetos con un Herrero. El Trabajador con el oficio de Minería puede extraer mas de un recurso a la vez dependiendo del nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez.',
          itemsTable: {
            title: 'Items de Minería',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Piquete de Minero', 'Item necesario para extraer materiales de los yacimientos, se vende en el NPC "Vendedor"'],
              ['Mineral de Hierro', 'Recurso extraído desde un Yacimiento de Hierro'],
              ['Mineral de Plata', 'Recurso extraído desde un Yacimiento de Plata'],
              ['Mineral de Oro', 'Recurso extraído desde un Yacimiento de Oro']
            ]
          },
          extraccion: {
            title: 'Extracción de Minerales',
            intro: 'Con nuestro Trabajador y su herramienta de trabajo Piquete de Minero nos dirigiremos a zona insegura para empezar nuestra extracción de minerales las cuales se hallan en lo profundo de las catacumbas o dungeons.',
            calculoTitle: 'Cálculo de Extracción',
            formulas: [
              'Nivel 1 a 12: extraemos entre 5 a 10 Minerales sin importar tu nivel.',
              'Nivel 13 o Más: extraemos (Mínimo: TuNivel-10 / Máximo: TuNivel-5). Osea si somos Nivel 20 extraemos entre 10 y 15 Minerales.'
            ],
            rateNote: 'El cálculo expresado está realizado sobre el multiplicador x1 por lo cual para saber realmente cuanto extraeremos, utilizando la formula informada, deberemos de multiplicar el resultado por el rate de Extracción.'
          },
          importantNotes: [
            'Mientras más nivel tenga nuestro trabajador más recursos extraerá.',
            'Un Trabajador podrá navegar a partir de Nivel 13 y tener 60 skills en navegación para usar la Barca, 68 skills en navegación para usar la Galera, 75 skills para usar el Galeón.'
          ],
          locationInfo: [
            'Las minas de hierro se encuentran cerca de la ciudad Blillinton.',
            'Las minas de plata se encuentran cerca de la ciudad Dahl.',
            'Las minas de Oro, se encuentran dentro del Dungeon Veril, donde tendrás que ser muy cuidadoso ya que es el dungeon más transcurrido de las tierras.'
          ],
          trabajoCastillo: 'La extracción de este recurso solo es posible siempre y cuando nuestro Clan sea Nivel 3 ya que nos permitirá realizar trabajos en las Catacumbas de los Castillos. Caso contrario de que no poseamos el nivel de clan no se nos permitirá trabajar. Las catacumbas se encuentran ubicadas en los Castillos Norte, Sur, Este y Oeste y no es necesario tenerlos conquistados para ingresar a las catacumbas.'
        },
        {
          id: 'lingotes',
          nombre: 'Creación de Lingotes',
          icon: lingotes,
          descripcion: 'La habilidad del Trabajador con el oficio en Minería es quién posee la habilidad de fundir los minerales extraídos de los yacimientos para poder convertirlos en Lingotes los cuales son un recurso muy bien pago dado a que con ellos podremos forjar poderosos objetos con nuestro Herrero. Para poder fundir los materiales nos acercaremos hasta la casa del comerciante Herrero las cuales están ubicadas en todas las ciudades de las Tierras. Nos acercaremos hasta la Fragua y, seleccionando de nuestro inventario los minerales, presionar tecla Usar (U o doble click) y clickear sobre la fragua.',
          descripcion2: 'La fundición la podremos realizar con nuestro Trabajador con el oficio en Minería ya que es él quién podrá fundir todos los tipos de materiales como el Hierro, la Plata o el Oro. El resto de las clases sólo podrá fundir minerales de hierro.',
          itemsTable: {
            title: 'Items para la Fundición',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Fragua', 'Lugar donde podremos fundir nuestros minerales.'],
              ['Mineral de Hierro', 'Recurso extraído desde un Yacimiento de Hierro'],
              ['Mineral de Plata', 'Recurso extraído desde un Yacimiento de Plata'],
              ['Mineral de Oro', 'Recurso extraído desde un Yacimiento de Oro']
            ]
          },
          fundicion: {
            title: 'Fundición de Minerales',
            intro: 'Con nuestro Trabajador nos acercaremos hasta la casa del Herrero para fundir los minerales en la fragua:',
            requisitos: [
              'Necesitaremos 25 skills en Minería para fundir Minerales de Hierro con un Trabajador y 75 skills para el resto de las clases.',
              'Necesitaremos 50 skills en Minería para fundir Minerales de Plata.',
              'Necesitaremos 100 skills en Minería para fundir Minerales de Oro.'
            ]
          },
          conversionTable: {
            title: 'Cantidad de Minerales por Lingote',
            headers: ['Minerales', 'Cantidad', 'Lingote'],
            rows: [
              ['Mineral de Hierro', '70', '5 Lingote de Hierro'],
              ['Mineral de Plata', '100', '5 Lingote de Plata'],
              ['Mineral de Oro', '175', '5 Lingote de Oro']
            ]
          }
        },
        {
          id: 'herreria',
          nombre: 'Herrería',
          icon: herreria,
          descripcion: 'El oficio de la Herrería sirve para la construcción de poderosas Armas, Armaduras, Cascos, Escudos e Items Mágico a base de Lingotes de Hierro, Plata y Oro. Una vez que tengas un Martillo de Herrero y nuestros Lingotes deberemos de dirigirnos hasta la casa del comerciante Herrero las cuales están ubicadas en todas las ciudades de las Tierras. Nos acercaremos hasta el Yunque y, equipando nuestro Martillo de Herrero con la tecla (E), presionaremos la tecla Usar (U o doble click) sobre el Yunque y se nos abrirá el menú de creación.',
          descripcion2: 'El Trabajador con el oficio en Herrería podrá crear una gran variedad de objetos (todos los del listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).',
          itemsTable: {
            title: 'Items de Herrería',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Martillo de Herrero', 'Item necesario para la creación con Lingotes, se vende en el NPC "Vendedor".'],
              ['Yunque', 'Lugar donde podremos crear nuestros objetos o fundirlos.'],
              ['Lingote de Hierro', 'Recurso fundido de los Minerales de Hierro'],
              ['Lingote de Plata', 'Recurso fundido de los Minerales de Plata'],
              ['Lingote de Oro', 'Recurso fundido de los Minerales de Oro']
            ]
          },
          creacion: {
            title: 'Creación',
            steps: [
              'Utilizando el Martillo de Herrero y haciendo click en el Yunque abrimos el menú de creación.',
              'Podremos seleccionar Armas o Armaduras (Armaduras/Cascos y Escudos).',
              'Seleccionamos el objeto a construir junto con su cantidad.'
            ]
          },
          /* links: {
            title: 'Lista de Objetos de Creación',
            intro: 'Para ver la lista completa de items que se pueden crear, visita la sección de Items:',
            items: [
              { text: '1 - Armaduras Altos (Hombre/Mujer)', target: 'items', subsection: '1.1' },
              { text: '2 - Armaduras Bajos (Enano/Gnomo)', target: 'items', subsection: '1.1' },
              { text: '3 - Armas', target: 'items', subsection: '2.1' },
              { text: '4 - Escudos y Cascos', target: 'items', subsection: '3.1' }
            ]
          }, */
          fundicion: {
            title: 'Fundir Objetos de Herrería',
            descripcion: 'El oficio de la fundición consiste en la fundición de minerales para convertirlos en lingotes (útiles para crear armas, armaduras, etc., en la herrería), una vez que tengas una cierta cantidad de objetos a fundir deberás buscar una fragua, seleccionar el objeto, presionar tecla Usar (U o doble click) y clickear sobre la fragua. La fundición depende de la clase y los puntos ya que los objetos a fundir son aquellos creados mediante la Herrería. Que requieran al menos 50 skills, se podrán desmantelar para obtener un porcentaje de los materiales utilizados para crearlos, la cantidad dependerá del azar y podrá ser entre 45% y 75% de los materiales utilizados en su construcción.',
            note: 'IMPORTANTE: SOLO podremos fundir los objetos del siguiente listado cuales SKILLS en HERRERÍA deberán de ser 50 o superiores.'
          }
        },
        {
          id: 'esquila',
          nombre: 'Esquila',
          icon: esquila,
          descripcion: 'Cypher vio que los lobos y osos que el tanto quería, estaban siendo masacrados solo por sus pieles y decidió prohibir la caza indiscriminada. Por esto, todos los sastres entraron en huelga, y por muchos días la gente anduvo desnuda en señal de protesta. En consecuencia, el Dios Cypher autorizó la esquila de animales y trajo unos pastores especializados en el tema, que llegaron desde lejos con sus tijeras y algunas simpáticas criaturas, así y de pronto, los sastres aprendieron a esquilar y a hilar la lana obtenida, y con esta pudieron crear las ropas que tan bien vestían.',
          descripcion2: 'Estos Trabajadores con unas Tijeras de Esquilar, deberás equiparlo con la tecla equipar (E), presionar la tecla Usar (U o doble click) y clickear sobre el animal. Con la Esquila obtendremos la extracción de Lanas de Oveja, Cabra y Llama materia prima la cual Hilaremos y con los ovillos creados podremos realizar poderosas Vestimentas y Túnicas con un Sastre. El Trabajador con el oficio en Esquilar puede extraer mas de un recurso a la vez dependiendo del nivel que sea, mientras que el resto de las clases sólo podrá obtener uno a la vez.',
          itemsTable: {
            title: 'Items de Esquila',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Tijeras de Esquila', 'Item necesario para extraer Lana de los animales, se vende en el NPC "Vendedor"'],
              ['Lana de Oveja', 'Recurso extraído de una Oveja'],
              ['Lana de Cabra', 'Recurso extraído de una Cabra'],
              ['Lana de Llama', 'Recurso extraído de una Llama']
            ]
          },
          extraccion: {
            title: 'Extracción de Lanas',
            intro: 'Con nuestro Trabajador y su herramienta de trabajo Tijeras de Esquilar nos dirigiremos a zona insegura para empezar nuestra extracción de lanas:',
            calculoTitle: 'Cálculo de Extracción',
            formulas: [
              'Nivel 1 a 12: extraemos entre 5 a 10 Lanas sin importar tu nivel.',
              'Nivel 13 o Más: extraemos (Mínimo: TuNivel-10 / Máximo: TuNivel-5). Osea si somos Nivel 20 extraemos entre 10 y 15 Lanas.'
            ],
            rateNote: 'El cálculo expresado está realizado sobre el multiplicador x1 por lo cual para saber realmente cuanto extraeremos, utilizando la formula informada, deberemos de multiplicar el resultado por el rate de Extracción.'
          },
          importantNotes: [
            'Mientras más nivel tenga nuestro trabajador más recursos extraerá.',
            'Un Trabajador podrá navegar a partir de Nivel 13 y tener 60 skills en navegación para usar la Barca, 68 skills en navegación para usar la Galera, 75 skills para usar el Galeón.'
          ],
          locationInfo: [
            'Las Ovejas se encuentran ubicadas en el Mapa 29.',
            'Las Cabras se encuentran ubicadas en el Mapa 4.',
            'Las Llamas se encuentran ubicadas en el Mapa 23.'
          ],
          trabajoCastillo: 'La extracción de este recurso solo es posible siempre y cuando nuestro Clan sea Nivel 3 ya que nos permitirá realizar trabajos en las Catacumbas de los Castillos. Caso contrario de que no poseamos el nivel de clan no se nos permitirá trabajar. Las catacumbas se encuentran ubicadas en los Castillos Norte, Sur, Este y Oeste y no es necesario tenerlos conquistados para ingresar a las catacumbas.'
        },
        {
          id: 'hilado',
          nombre: 'Hilado',
          icon: hilado,
          descripcion: 'La habilidad del Trabajador con el oficio en Esquilación es quién posee la habilidad de hilar las lanas extraídas de los animales para poder convertirlos en Ovillos los cuales son un recurso muy bien pago dado a que con ellos podremos forjar poderosos objetos con nuestro Sastre. Para poder hilar las lanas en ovillos nos acercaremos hasta la casa del comerciante Sastre los cuales están ubicadas en todas las ciudades de las Tierras. Nos acercaremos hasta el Telar y, seleccionando de nuestro inventario las lanas, presionar tecla Usar (U o doble click) y clickear sobre el telar.',
          descripcion2: 'La Hilación la podremos realizar con nuestro Trabajador con el oficio en Esquilación ya que es él quién podrá hilar todos los tipos de Lanas como Oveja, Cabra y Llama. El resto de las clases sólo podrá hilar Lanas de Oveja.',
          itemsTable: {
            title: 'Items para Hilar',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Telar', 'Lugar donde podremos hilar nuestras lanas'],
              ['Lana de Oveja', 'Recurso extraído de una Oveja'],
              ['Lana de Cabra', 'Recurso extraído de una Cabra'],
              ['Lana de Llama', 'Recurso extraído de una Llama']
            ]
          },
          hilado: {
            title: 'Convirtiendo en Ovillos',
            intro: 'Con nuestro Trabajador nos acercaremos hasta la casa del Sastre para hilar con el telar:',
            requisitos: [
              'Necesitaremos 25 skills en Esquilación para hilar Ovillos de Oveja con un Trabajador y 75 skills para el resto de las clases.',
              'Necesitaremos 50 skills en Esquilación para hilar Ovillos de Cabra.',
              'Necesitaremos 100 skills en Esquilación para hilar Ovillos de Llama.'
            ]
          },
          conversionTable: {
            title: 'Cantidad de Lanas por Ovillo',
            headers: ['Lanas', 'Cantidad', 'Ovillos'],
            rows: [
              ['Lana de Oveja', '70', '5 Ovillo de Oveja'],
              ['Lana de Cabra', '100', '5 Ovillo de Cabra'],
              ['Lana de Llama', '175', '5 Ovillo de Llama']
            ]
          }
        },
        {
          id: 'sastreria',
          nombre: 'Sastrería',
          icon: sastreria,
          descripcion: 'El oficio de la Sastrería sirve para construir Vestimentas y Túnicas a base de Ovillos. Una vez que tengas un Costurero deberás equiparlo con la tecla Equipar (E) y luego presionar tecla Usar (U o doble click). De esta forma se abrirá una ventana que mostrará el listado de objetos que el personaje podrá construir según la clase y puntos de habilidad en Sastrería.',
          descripcion2: 'El Trabajador con el oficio en Sastrería podrá crear una gran variedad de objetos (todos los del listado) mientras que el resto de las clases sólo podrá crear una menor cantidad (limitados).',
          itemsTable: {
            title: 'Items de Sastrería',
            headers: ['Item', 'Descripción'],
            rows: [
              ['Costurero', 'Item necesario para la creación con Ovillos, se vende en el NPC "Vendedor".'],
              ['Ovillo de Oveja', 'Recurso hilado de Lana de Oveja'],
              ['Ovillo de Cabra', 'Recurso hilado de Lana de Cabra'],
              ['Ovillo de Llama', 'Recurso hilado de Lana de Llama']
            ]
          },
          creacion: {
            title: 'Creación',
            steps: [
              'Utilizando nuestro Costurero abrimos el menú de creación.',
              'Seleccionamos el objeto a construir junto con su cantidad.'
            ]
          },
          /*  links: {
             title: 'Lista de Objetos de Creación',
             intro: 'Para ver la lista completa de items que se pueden crear, visita la sección de Items:',
             items: [
               { text: '1 - Items de Sastre (Vestimentas y Túnicas)', target: 'items', subsection: '4.1' }
             ]
           }, */
          deshilachado: {
            title: 'Deshilachado de Objetos de Sastrería',
            descripcion: 'El oficio deshilachar consiste en la recuperación de ovillos de prendas que no utilizaremos o para poder crear unas mejores, una vez que tengas una cierta cantidad de objetos a deshilachar deberás buscar un telar ubicado en la casa del sastre de cada ciudad, seleccionar el objeto, presionar tecla Usar (U o doble click) y clickear sobre el telar. La deshilachación depende de la clase y los puntos ya que los objetos a deshilachar son aquellos creados mediante la Sastrería. Que requieran al menos 50 skills, se podrán deshilachar para obtener un porcentaje de los materiales utilizados para crearlos, la cantidad dependerá del azar y podrá ser entre 45% y 75% de los materiales utilizados en su construcción.',
            note: 'IMPORTANTE: SOLO podremos deshilachar los objetos del siguiente listado cuales SKILLS en SASTRERÍA deberán de ser 50 o superiores:',
            table: {
              headers: ['Item', 'Defensa Corporal', 'Defensa Mágica', 'Clases Permitidas', 'Ovillos Oveja', 'Ovillos Cabra', 'Ovillos Llama', 'Skills'],
              rows: [
                ['Túnica Tamuzz [DefCorp]', '11/13', '0/0', 'Mago/Bardo/Druida', '350', '150', '-', '50'],
                ['Túnica Roja (E/G) [DefCorp]', '11/13', '0/0', 'Mago/Bardo/Druida', '350', '150', '-', '50'],
                ['Túnica Legendaria [DefCorp]', '10/15', '0/0', 'Mago/Bardo/Druida', '400', '200', '-', '50'],
                ['Túnica Infernal [DefCorp]', '10/18', '0/0', 'Mago/Bardo/Druida', '400', '250', '-', '60'],
                ['Túnica Infernal (G/E) [DefCorp]', '10/18', '0/0', 'Mago/Bardo/Druida', '400', '250', '-', '60'],
                ['Túnica Gaia [DefCorp]', '13/14', '0/0', 'Mago/Bardo/Druida', '600', '450', '-', '75'],
                ['Túnica Negra (E/G) [DefMag]', '1/1', '6/12', 'Mago/Bardo/Druida', '450', '250', '30', '75'],
                ['Vestido de Bruja (M)', '14/16', '0/0', 'Mago/Bardo/Druida', '700', '500', '-', '80'],
                ['Túnica de Druida [DefCorp]', '14/16', '0/0', 'Mago/Bardo/Druida', '700', '500', '-', '80'],
                ['Túnica Roja (E/G) [DefMag]', '1/2', '10/18', 'Mago/Bardo/Druida', '800', '300', '50', '80'],
                ['Túnica Tamuzz [DefMag]', '1/2', '10/18', 'Mago/Bardo/Druida', '800', '300', '50', '80'],
                ['Túnica de Druida [DefMag]', '1/11', '4/17', 'Mago/Bardo/Druida', '700', '500', '60', '85'],
                ['Túnica Maléfica [DefCorp]', '15/16', '0/0', 'Mago/Bardo/Druida', '900', '750', '-', '90'],
                ['Túnica Maléfica (G/E) [DefCorp]', '15/16', '0/0', 'Mago/Bardo/Druida', '900', '750', '-', '90'],
                ['Túnica Gaia [DefMag]', '2/3', '15/20', 'Mago/Bardo/Druida', '950', '600', '70', '95'],
                ['Túnica Marrón Combinada (E/G) [DefMag]', '2/3', '15/20', 'Mago/Bardo/Druida', '950', '600', '70', '95'],
                ['Túnica Verde Combinada (E/G-M) [DefMag]', '2/3', '15/20', 'Mago/Bardo/Druida', '950', '600', '70', '95'],
                ['Túnica Maléfica [DefMag]', '3/3', '20/25', 'Mago/Bardo/Druida', '1300', '700', '100', '100'],
                ['Túnica Maléfica (G/E) [DefMag]', '3/3', '20/25', 'Mago/Bardo/Druida', '1300', '700', '100', '100'],
                ['Vestimenta de la Oscuridad (1)', '1/1', '0/0', 'Guerrero/Cazador', '300', '200', '100', '100'],
                ['Vestimenta de la Oscuridad (G/E) (1)', '1/1', '0/0', 'Guerrero/Cazador', '300', '200', '100', '100'],
                ['Túnica Invernal', '10/10', '0/0', 'Todas las clases altas de hombres', '200', '50', '0', '100'],
                ['Túnica Invernal (Mujer)', '10/10', '0/0', 'Todas las clases altas de mujer', '200', '50', '0', '100'],
                ['Túnica Invernal (E/G)', '10/10', '0/0', 'Todas las clases enano o gnomo', '200', '50', '0', '100']
              ]
            }
          }
        },
        {
          id: 'reutilizacion',
          nombre: 'Reutilización de Recursos',
          icon: recursos,
          descripcion: 'La reutilización de recursos consiste en recuperar materiales de objetos que ya no utilizamos. Esto incluye Fundir objetos de Herrería, Desmantelar objetos de Carpintería, y Deshilachar objetos de Sastrería.',
          descripcion2: 'Cada proceso permite recuperar entre el 45% y 75% de los materiales originales, dependiendo del azar. Solo se pueden reutilizar objetos que requieran al menos 50 skills para su creación.',
          sections: [
            {
              title: 'Fundir (Herrería)',
              descripcion: 'Busca una fragua, selecciona el objeto, presiona U y clickea sobre la fragua.',
              requirement: 'Requiere 50+ skills en Herrería.'
            },
            {
              title: 'Desmantelar (Carpintería)',
              descripcion: 'Busca un serrucho en la casa del carpintero, selecciona el objeto, presiona U y clickea sobre el serrucho.',
              requirement: 'Requiere 50+ skills en Carpintería.'
            },
            {
              title: 'Deshilachar (Sastrería)',
              descripcion: 'Busca un telar en la casa del sastre, selecciona el objeto, presiona U y clickea sobre el telar.',
              requirement: 'Requiere 50+ skills en Sastrería.'
            }
          ]
        },
        /* {
          id: 'compra',
          nombre: 'Compra de Recursos',
          icon: 'shopping-cart',
          descripcion: 'La compra de recursos es una alternativa para aquellos que no desean extraer los materiales por sí mismos. Puedes adquirir diversos recursos directamente de otros jugadores o NPCs comerciantes.',
          descripcion2: 'Los precios varían según la oferta y demanda del servidor. Es una buena opción si necesitas grandes cantidades de materiales rápidamente para craftear objetos.',
          tips: [
            'Revisa el comercio global para encontrar las mejores ofertas.',
            'Los precios suelen ser más bajos cuando hay muchos jugadores trabajando.',
            'Considera comprar en grandes cantidades para obtener mejores precios.',
            'Algunos NPCs venden recursos básicos a precios fijos.'
          ]
        } */
      ]
    }
  },
  /* {
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
  }, */
  {
    id: 'mapa',
    title: 'Mapa',
    icon: 'map',
    content: {
      description: 'Explora el vasto mundo de CucsiAO y sus territorios.',
      mapImagePlaceholder: true,
      sections: [
        {
          title: 'Ciudades',
          icon: 'building',
          locations: [
            { mapa: 1, nombre: 'Ullathorpe', nivel: null },
            { mapa: 13, nombre: 'Nix', nivel: null },
            { mapa: 30, nombre: 'Banderbill', nivel: null },
            { mapa: 54, nombre: 'Lindos', nivel: null },
            { mapa: 58, nombre: 'Nueva Esperanza', nivel: null },
            { mapa: 35, nombre: 'Arghal', nivel: null },
            { mapa: 22, nombre: 'Terminus', nivel: null },
            { mapa: 10, nombre: 'Tyrann', nivel: null },
            { mapa: 15, nombre: 'Noxon', nivel: null },
            { mapa: 96, nombre: 'Dhall', nivel: null },
            { mapa: 95, nombre: 'Blillinton', nivel: null },
            { mapa: 97, nombre: 'Kodell', nivel: null }
          ]
        },
        {
          title: 'Dungeons',
          icon: 'skull',
          locations: [
            { mapa: 79, nombre: 'Cementerio: Mausoleo', nivel: 15 },
            { mapa: 28, nombre: 'Dungeon Marabel', nivel: 20 },
            { mapa: 62, nombre: 'Dungeon Castillo', nivel: 25 },
            { mapa: 66, nombre: 'Dungeon Inframundo', nivel: 30, nota: 'Magia Prohibida: No se permite lanzar hechizos' },
            { mapa: 103, nombre: 'Dungeon Agua', nivel: 30 },
            { mapa: 39, nombre: 'Dungeon Verill', nivel: 30 },
            { mapa: 47, nombre: 'Dungeon Dragón', nivel: 40 }
          ]
        },
        {
          title: 'Catacumbas',
          icon: 'door-open',
          locations: [
            { mapa: '1 y 34', nombre: 'Entrada a Catacumbas Ullathorpe & Nix', nivel: null },
            { mapa: '21, 42, 45, 50, 56, 59', nombre: 'Entrada a Catacumbas del Inframundo', nivel: null, nota: 'Magia Prohibida: No se permite lanzar hechizos' },
            { mapa: '29, 32 y 66', nombre: 'Entrada a Ciudad Canal del Inframundo', nivel: null }
          ]
        },
        {
          title: 'Polo',
          icon: 'snowflake',
          locations: [
            { mapa: 78, nombre: 'Polo', nivel: 25 },
            { mapa: 138, nombre: 'Laberinto Congelado', nivel: 30 }
          ]
        },
        {
          title: 'Minas de Yacimientos',
          icon: 'pickaxe',
          locations: [
            { mapa: 9, nombre: 'Minas de Hierro', nivel: null },
            { mapa: 39, nombre: 'Minas de Plata', nivel: null },
            { mapa: 75, nombre: 'Minas de Oro', nivel: 30 }
          ]
        },
        {
          title: 'Esquila de Lanas',
          icon: 'scissors',
          locations: [
            { mapa: 29, nombre: 'Ovejas', nivel: null },
            { mapa: 4, nombre: 'Cabras', nivel: null },
            { mapa: 23, nombre: 'Llamas', nivel: null, nota: 'Necesitarás navegar para acceder a ellas' }
          ]
        },
        {
          title: 'Lugares Secundarios',
          icon: 'compass',
          locations: [
            { mapa: 33, nombre: 'Barco Pirata', nivel: 30 },
            { mapa: 49, nombre: 'Barco Abandonado', nivel: 30 },
            { mapa: 79, nombre: 'Cementerio', nivel: null },
            { mapa: 59, nombre: 'Sur Nueva Esperanza', nivel: 20 },
            { mapa: 89, nombre: 'Dungeon Dragón Escondido', nivel: 20 },
            { mapa: 145, nombre: 'Bosque Élfico Saqueado', nivel: 20 },
            { mapa: 150, nombre: 'Pirámide Abandonada', nivel: null }
          ]
        },
        {
          title: 'Castillos y Fortaleza',
          icon: 'castle',
          locations: [
            { mapa: 110, nombre: 'Castillo Norte', nivel: null },
            { mapa: 80, nombre: 'Castillo Oeste', nivel: null },
            { mapa: 100, nombre: 'Castillo Este', nivel: null },
            { mapa: 90, nombre: 'Castillo Sur', nivel: null },
            { mapa: 131, nombre: 'Minas de Castillo', nivel: null },
            { mapa: 118, nombre: 'Fortaleza', nivel: null },
            { mapa: 132, nombre: 'Minas de Fortaleza', nivel: null }
          ]
        },
        {
          title: 'Otros Lugares',
          icon: 'landmark',
          locations: [
            { mapa: 148, nombre: 'Museo', nivel: null }
          ]
        }
      ]
    }
  },
  {
    id: 'party',
    title: 'Party',
    icon: 'users',
    content: {
      description: 'En CucsiAO, se llama "Party" a un grupo de viajeros que se juntan para entrenar y mejorar sus habilidades juntos.',
      intro: 'Un personaje podrá crear una de estas e invitar a sus amigos. La experiencia ganada se repartirá equitativamente entre todos los miembros.',
      howTo: {
        title: 'Cómo crear una Party',
        steps: [
          'Para crear una party deberás tipear el comando /CREARPARTY',
          'Una vez que la hayas creado, el personaje que desee ingresar deberá hacer click en tu personaje y tipear el comando /PARTY para solicitar el ingreso',
          'Para aceptarlo deberás tipear /ACCEPTPARTY Nombre'
        ]
      },
      requisitos: {
        title: 'Requisitos',
        description: 'Para crear una party, necesitas que tu atributo carisma multiplicado por tus skills en liderazgo den un número mayor o igual a 100.',
        examples: [
          'Si tu carisma es 20, necesitarás 5 skills en liderazgo',
          'Si tu carisma es 15, necesitarás 7 skills en liderazgo'
        ],
        note: 'Para ver más sobre esto tienes toda la información en Atributos.'
      },
      consideraciones: {
        title: 'Consideraciones',
        items: [
          'Puedes crear una party en cualquier nivel',
          'Los miembros de la party no pueden tener una diferencia de nivel de más de 7',
          'La experiencia se reparte instantáneamente hasta una distancia de 20 tiles (una pantalla)',
          'El oro ganado también se reparte equitativamente al morir la criatura',
          'Si están realizando QUEST solo el personaje que mate a la criatura, se lo sumará a la quest que esté realizando'
        ]
      },
      bonus: {
        title: 'Bonus por Miembros',
        description: 'Si tu party posee cierta cantidad de miembros, la experiencia ganada se verá multiplicada de la siguiente manera:',
        table: [
          { miembros: 1, multiplicador: '1.00', bonificacion: 'Experiencia normal' },
          { miembros: 2, multiplicador: '1.03', bonificacion: '3% BONIFICACIÓN' },
          { miembros: 3, multiplicador: '1.05', bonificacion: '5% BONIFICACIÓN' },
          { miembros: 4, multiplicador: '1.10', bonificacion: '10% BONIFICACIÓN' },
          { miembros: 5, multiplicador: '1.15', bonificacion: '15% BONIFICACIÓN' }
        ],
        note: 'Dicho esto, si tu party posee 5 miembros, la experiencia total será incrementada un 30%.'
      },
      comandos: {
        title: 'Comandos de Party',
        list: [
          { comando: '/PMSG', descripcion: 'Mensaje privado entre miembros de la party' },
          { comando: '/ONLINEPARTY', descripcion: 'Aparece quienes integran la party, experiencia lograda por cada miembro y el total de exp acumulada' },
          { comando: '/SALIRPARTY', descripcion: 'Abandona la party' },
          { comando: '/PARTYLIDER Nombre', descripcion: 'Pasa el liderazgo a otro personaje que esté dentro de la party' },
          { comando: '/ECHARPARTY Nombre', descripcion: 'Echa un personaje de la party' }
        ]
      }
    }
  },
  {
    id: 'criaturas',
    title: 'Criaturas',
    icon: 'bug',
    content: {
      description: 'Bestiario completo de las criaturas de CucsiAO.',
      creatures: [
        { name: 'Gallo Salvaje', vida: 15, danoFisico: '1/1', defensa: '-', defMagica: '-', podAtaque: 5, evasion: 5, magia: '-', exp: 15, oro: 1, drop: '90% - Pollo', ubicacion: '8 - 9 - 14 - 16' },
        { name: 'Rata Salvaje', vida: 15, danoFisico: '2/4', defensa: '-', defMagica: '-', podAtaque: 10, evasion: 20, magia: '-', exp: 15, oro: 0, drop: '-', ubicacion: '2 - 9' },
        { name: 'Murciélago', vida: 15, danoFisico: '1/4', defensa: '-', defMagica: '3', podAtaque: 30, evasion: 10, magia: '-', exp: 15, oro: 1, drop: '-', ubicacion: '2 - 5 - 14 - 16 - 17' },
        { name: 'Serpiente', vida: 22, danoFisico: '1/1', defensa: '-', defMagica: '-', podAtaque: 10, evasion: 0, magia: '-', exp: 22, oro: 2, drop: '-', ubicacion: '2 - 3 - 5 - 8 - 14 - 16 - 17 - 20 - 21 - 23 - 24' },
        { name: 'Escorpión', vida: 32, danoFisico: '1/3', defensa: '-', defMagica: '3', podAtaque: 30, evasion: 10, magia: '-', exp: 32, oro: 1, drop: '-', ubicacion: '20 - 21' },
        { name: 'Esqueleto', vida: 50, danoFisico: '1/8', defensa: '10', defMagica: '-', podAtaque: 30, evasion: 30, magia: '-', exp: 70, oro: 5, drop: '-', ubicacion: '3 - 4 -18' },
        { name: 'Pequeña Araña', vida: 125, danoFisico: '3/8', defensa: '4', defMagica: '5', podAtaque: 20, evasion: 20, magia: '-', exp: 175, oro: 1, drop: '-', ubicacion: '12' },
        { name: 'Goblin', vida: 110, danoFisico: '2/12', defensa: '15', defMagica: '-', podAtaque: 60, evasion: 40, magia: '-', exp: 165, oro: 11, drop: '-', ubicacion: '3 - 25' },
        { name: 'Lobo', vida: 75, danoFisico: '1/18', defensa: '8', defMagica: '-', podAtaque: 80, evasion: 25, magia: '-', exp: 150, oro: 79, drop: '100% - Piel de Lobo, 5% - Chuleta, 5% - Casco de Lobo', ubicacion: '2 - 3 - 7 - 17' },
        { name: 'Zombie', vida: 250, danoFisico: '4/12', defensa: '20', defMagica: '-', podAtaque: 100, evasion: 20, magia: '-', exp: 300, oro: 90, drop: '10% - Ropa de Clan', ubicacion: '4 - 18' },
        { name: 'Orco', vida: 350, danoFisico: '5/35', defensa: '10', defMagica: '-', podAtaque: 60, evasion: 45, magia: '-', exp: 700, oro: 45, drop: '70% - Hacha', ubicacion: '9 - 28' },
        { name: 'Tortuga Gigante', vida: 315, danoFisico: '35/55', defensa: '-', defMagica: '-', podAtaque: 100, evasion: 45, magia: '-', exp: 504, oro: 150, drop: '100% - Escudo de Tortuga', ubicacion: '6 - 16 - 31' },
        { name: 'Bandido', vida: 200, danoFisico: '15/39', defensa: '-', defMagica: '-', podAtaque: 70, evasion: 50, magia: '-', exp: 360, oro: 100, drop: '40% - Ropa de Pordiosero', ubicacion: '3' },
        { name: 'Araña de Los Rincones', vida: 650, danoFisico: '15/55', defensa: '-', defMagica: '-', podAtaque: 30, evasion: 40, magia: '-', exp: 700, oro: 5, drop: '-', ubicacion: '12' },
        { name: 'Oso Pardo', vida: 625, danoFisico: '65/100', defensa: '-', defMagica: '-', podAtaque: 120, evasion: 65, magia: '-', exp: 1250, oro: 175, drop: '100% - Piel de Oso Pardo', ubicacion: '6 - 12' },
        { name: 'Oso Polar', vida: 1700, danoFisico: '65/100', defensa: '-', defMagica: '-', podAtaque: 120, evasion: 65, magia: '-', exp: 1400, oro: 480, drop: '100% - Piel de Oso Polar', ubicacion: '59 - 78' },
        { name: 'Araña', vida: 1000, danoFisico: '40/65', defensa: '-', defMagica: '-', podAtaque: 50, evasion: 20, magia: '-', exp: 2500, oro: 250, drop: '20% - 5 Pociones Violeta', ubicacion: '12' },
        { name: 'Araña Gigante', vida: 1100, danoFisico: '30/90', defensa: '-', defMagica: '-', podAtaque: 80, evasion: 60, magia: '-', exp: 2373, oro: 220, drop: '5% - Martillo de Guerra, 5% - Armadura de Cuero, 5% - Armadura de Cuero (E/G)', ubicacion: '8 - 9 - 20 - 21 - 23 - 24' },
        { name: 'Asesino', vida: 1100, danoFisico: '10/100', defensa: '-', defMagica: '-', podAtaque: 100, evasion: 100, magia: '-', exp: 2900, oro: 275, drop: '5% - Armadura de las Sombras, 5% - Armadura de las Sombras (E/G)', ubicacion: '26' },
        { name: 'Mago Malvado', vida: 1400, danoFisico: '40/80', defensa: '30', defMagica: '-', podAtaque: 100, evasion: 70, magia: 'Lanza Paralizar, Núcleo Plasma y Tormenta de Fuego', exp: 3000, oro: 700, drop: '15% - Gema Azul (1 Pto de User), 5% - Bastón Nudoso, 5% - Túnica de Mago, 5% - Túnica de Mago (E/G), 1% - Espada Helada +1, 1% - Arco de Oro', ubicacion: '59 - 69 - 71 - 89 - 125 - 126' },
        { name: 'Lord Orco', vida: 1500, danoFisico: '110/170', defensa: '10', defMagica: '10', podAtaque: 120, evasion: 100, magia: '-', exp: 3200, oro: 600, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '59 - 69 - 71' },
        { name: 'Liche', vida: 1300, danoFisico: '50/140', defensa: '10', defMagica: '10', podAtaque: 120, evasion: 90, magia: '-', exp: 3760, oro: 640, drop: '15% - Gema Azul (1 Pto de User), 1% - Espada Vikinga +1, 1% - Daga +3', ubicacion: '59 - 68 - 70 - 71 - 72' },
        { name: 'Orco Brujo', vida: 1500, danoFisico: '70/115', defensa: '10', defMagica: '10', podAtaque: 120, evasion: 100, magia: 'Lanza Núcleo Plasma', exp: 3900, oro: 800, drop: '-', ubicacion: '59 - 68 - 69 - 71 - 72' },
        { name: 'Ogro', vida: 1800, danoFisico: '55/140', defensa: '10', defMagica: '10', podAtaque: 100, evasion: 60, magia: '-', exp: 4561, oro: 720, drop: '100% - Garrote, 15% - Gema Azul (1 Pto de User)', ubicacion: '28' },
        { name: 'Beholder', vida: 1250, danoFisico: '25/135', defensa: '-', defMagica: '10', podAtaque: 110, evasion: 60, magia: '-', exp: 3500, oro: 650, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '59 - 68 - 125' },
        { name: 'Serpiente de Anthares', vida: 1400, danoFisico: '10/45', defensa: '-', defMagica: '-', podAtaque: 30, evasion: 50, magia: '-', exp: 4010, oro: 510, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '126' },
        { name: 'Liche Infernal', vida: 4100, danoFisico: '60/160', defensa: '10', defMagica: '100', podAtaque: 100, evasion: 70, magia: 'Lanza Tormenta de Fuego', exp: 12700, oro: 1500, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 5% - Hechizo: Núcleo Plasma, 5% - Túnica de Monje, 5% - Túnica de Monje (E/G)', ubicacion: '59 - 68 - 125 - 126' },
        { name: 'Leviatan', vida: 7000, danoFisico: '90/200', defensa: '-', defMagica: '-', podAtaque: 140, evasion: 100, magia: '-', exp: 18200, oro: 1750, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 5% - Casco de Hierro Completo, 5% - Escudo Imperial', ubicacion: '59 - 37 - 60 - 61 - 62 - 102 - 126' },
        { name: 'Enano de las Profundidades', vida: 2300, danoFisico: '30/60', defensa: '-', defMagica: '-', podAtaque: 40, evasion: 60, magia: '-', exp: 5000, oro: 350, drop: '15% - Gema Azul (1 Pto de User), 5% - Cotas de Mallas, 5% - Cotas de Mallas (E/G)', ubicacion: '125' },
        { name: 'Dinosaurio', vida: 3000, danoFisico: '60/200', defensa: '-', defMagica: '10', podAtaque: 100, evasion: 80, magia: '-', exp: 9290, oro: 600, drop: '15% - Gema Azul (1 Pto de User), 5% - Casco de Hierro Completo, 5% - Escudo Imperial', ubicacion: '125 - 49 - 76' },
        { name: 'Dragón Rojo', vida: 3000, danoFisico: '100/150', defensa: '15', defMagica: '15', podAtaque: 120, evasion: 90, magia: '-', exp: 9900, oro: 200, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '125 - 77' },
        { name: 'Bruja', vida: 4000, danoFisico: '65/120', defensa: '10', defMagica: '10', podAtaque: 100, evasion: 80, magia: 'Lanza Núcleo Plasma y Tormenta de Fuego', exp: 12000, oro: 1200, drop: '20% - Gema Azul (1 Pto de User), 15% - Gema Naranja (3 Ptos de User), 10% - Sombrero de Mago', ubicacion: '125 - 70 - 71 - 76' },
        { name: 'Medusa', vida: 5000, danoFisico: '95/155', defensa: '10', defMagica: '10', podAtaque: 135, evasion: 95, magia: 'Lanza Paralizar, Tormenta de Fuego y Descarga Electrica', exp: 23000, oro: 1100, drop: '15% - Gema Azul (1 Pto de User), 5% - Gema Naranja (3 Ptos de User), 5% - Cota de Mallas, 5% - Cota de Mallas (Mujer), 5% - Cota de Mallas (E/G), 0.1% - Gema Verde (1)', ubicacion: '48 - 70 - 72 - 74 - 76 - 126' },
        { name: 'Demonio', vida: 8000, danoFisico: '100/250', defensa: '15', defMagica: '15', podAtaque: 160, evasion: 120, magia: '-', exp: 23000, oro: 3000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 5% - Armadura de Cazador, 5% - Armadura de Cazador (E/G), 0.5% - Gema Violeta', ubicacion: '125 - 102 - 72 - 69' },
        { name: 'Piraña', vida: 400, danoFisico: '15/60', defensa: '5', defMagica: '5', podAtaque: 80, evasion: 40, magia: '-', exp: 1150, oro: 100, drop: '-', ubicacion: '33 - 49 - 134 - 135 - 136' },
        { name: 'Sirena', vida: 1000, danoFisico: '40/90', defensa: '10', defMagica: '10', podAtaque: 50, evasion: 50, magia: 'Lanza Paralizar', exp: 2730, oro: 100, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '33 - 134 - 135 - 136' },
        { name: 'Lutra', vida: 1300, danoFisico: '60/115', defensa: '15', defMagica: '15', podAtaque: 70, evasion: 60, magia: '-', exp: 4410, oro: 125, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '33' },
        { name: 'Tiburón', vida: 1700, danoFisico: '70/135', defensa: '20', defMagica: '20', podAtaque: 100, evasion: 80, magia: '-', exp: 5500, oro: 150, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '33 - 49' },
        { name: 'Pirata', vida: 2250, danoFisico: '60/130', defensa: '20', defMagica: '20', podAtaque: 90, evasion: 70, magia: '-', exp: 6670, oro: 600, drop: '15% - Gema Azul (1 Pto de User)', ubicacion: '33' },
        { name: 'Capitán Pirata', vida: 2500, danoFisico: '90/170', defensa: '25', defMagica: '25', podAtaque: 110, evasion: 90, magia: '-', exp: 7790, oro: 800, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User)', ubicacion: '33' },
        { name: 'Golem de Piedra', vida: 30000, danoFisico: '130/265', defensa: '15', defMagica: '15', podAtaque: 130, evasion: 20, magia: '-', exp: 50000, oro: 12000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 5% - 200 Lingotes de Hierro', ubicacion: '102 - 69 - 72 - 70 - 74 - 76' },
        { name: 'Pingüino', vida: 600, danoFisico: '20/60', defensa: '-', defMagica: '-', podAtaque: 50, evasion: 25, magia: '-', exp: 300, oro: 1200, drop: '15% - Gema Azul (1 Pto de User), Piedra pinguino (600 monedas)', ubicacion: '78 - 138' },
        { name: 'Lobo Polar', vida: 800, danoFisico: '60/80', defensa: '-', defMagica: '-', podAtaque: 80, evasion: 35, magia: '-', exp: 500, oro: 1600, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), Piedra lobo polar (800 monedas)', ubicacion: '78 - 138' },
        { name: 'Hombre de las Nieves', vida: 1500, danoFisico: '80/120', defensa: '-', defMagica: '-', podAtaque: 100, evasion: 25, magia: '-', exp: 1000, oro: 3000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), Piedra hombre de las nieves (1500 monedas)', ubicacion: '138' },
        { name: 'Beholder Polar', vida: 2000, danoFisico: '65/140', defensa: '-', defMagica: '-', podAtaque: 100, evasion: 45, magia: '-', exp: 1250, oro: 4000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), Piedra beholder polar (2000 monedas)', ubicacion: '138' },
        { name: 'Gorila Polar', vida: 2500, danoFisico: '30/180', defensa: '-', defMagica: '-', podAtaque: 100, evasion: 55, magia: '-', exp: 1500, oro: 5000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), Piedra gorila polar (2500 monedas)', ubicacion: '138' },
        { name: 'Golem Junior de Hielo', vida: 3000, danoFisico: '90/150', defensa: '-', defMagica: '-', podAtaque: 90, evasion: 50, magia: '-', exp: 4000, oro: 6000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 0.5% - Gema Azul, Piedra Golem Jr (3000 monedas)', ubicacion: '78' },
        { name: 'Rey Golem de Polo', vida: 4500, danoFisico: '110/220', defensa: '-', defMagica: '-', podAtaque: 160, evasion: 50, magia: '-', exp: 5000, oro: 8500, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 3% - Túnica Invernal (Hombre), 3% - Túnica Invernal (Mujer), 3% - Túnica Invernal (Bajos), 0.5% - Gema Celeste, Piedra Rey golem (4500 monedas)', ubicacion: '78 - 138' },
        { name: 'Arquero del Castillo', vida: 1200, danoFisico: '25/50', defensa: '5', defMagica: '5', podAtaque: 40, evasion: 40, magia: 'Lanza Flechazos a Distancia', exp: 4600, oro: 600, drop: '15% - Gema Azul (1 Pto de User), 2% - Armadura De Piel de Golem Alado (G/E)', ubicacion: '81 - 84' },
        { name: 'Plebello del Castillo', vida: 1650, danoFisico: '40/60', defensa: '5', defMagica: '5', podAtaque: 50, evasion: 50, magia: '-', exp: 5550, oro: 720, drop: '15% - Gema Azul (1 Pto de User), 2% - Armadura De La Daga Sangrienta (G/E)', ubicacion: '81' },
        { name: 'Mago del Castillo', vida: 2060, danoFisico: '40/80', defensa: '10', defMagica: '10', podAtaque: 80, evasion: 50, magia: 'Lanza Núcleo de Plasma', exp: 7710, oro: 520, drop: '15% - Gema Azul (1 Pto de User), 2% - Túnica Del Dios Thaos (G/E)', ubicacion: '82 - 83' },
        { name: 'Guerrero Armado del Castillo', vida: 2450, danoFisico: '60/140', defensa: '15', defMagica: '15', podAtaque: 100, evasion: 70, magia: '-', exp: 8700, oro: 563, drop: '15% - Gema Azul (1 Pto de User), 2% - Armadura De Piel de Golem Alado', ubicacion: '82 - 83 - 84' },
        { name: 'Archimago del Castillo', vida: 3150, danoFisico: '55/100', defensa: '20', defMagica: '20', podAtaque: 80, evasion: 60, magia: 'Lanza Tormenta de Fuego', exp: 10200, oro: 1500, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 2% - Túnica Del Dios Thaos', ubicacion: '83 - 84' },
        { name: 'Paladin del Castillo', vida: 3630, danoFisico: '100/130', defensa: '20', defMagica: '20', podAtaque: 100, evasion: 80, magia: 'Lanza Descarga Electrica', exp: 12250, oro: 1650, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 2% - Armadura De La Daga Sangrienta', ubicacion: '83 - 84' },
        { name: 'Arcangel Armado del Castillo', vida: 4770, danoFisico: '120/180', defensa: '30', defMagica: '30', podAtaque: 120, evasion: 100, magia: 'Lanza Paralizar y Descarga Electrica', exp: 17500, oro: 1950, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 1% - Armadura De La Daga Sangrienta, 1% - Armadura De Piel de Golem Alado (G/E), 1% - Armadura De La Daga Sangrienta (G/E), 1% - Túnica Del Dios Thaos (G/E), 1% - Armadura De Piel de Golem Alado y 1% - Túnica Del Dios Thaos', ubicacion: '83 - 84' },
        { name: 'Balrog de fuego', vida: 30000, danoFisico: '100/260', defensa: '50', defMagica: '50', podAtaque: 180, evasion: 140, magia: 'Imparalizable - Lanza Drenar y Tormenta de Fuego', exp: 23000, oro: 2000, drop: '25% - Gema de Clan (2), 15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 5% - Armadura de Placas Completa, 5% - Armadura de Placas Completa (E/G), 5% - Armadura de Placas Rojas (Mujer), 5% - Hacha Guerrera de Dos Filos', ubicacion: '8' },
        { name: 'Galeón Pirata', vida: 4000, danoFisico: '250/200', defensa: '0', defMagica: '0', podAtaque: 200, evasion: 150, magia: '-', exp: 12000, oro: 2015, drop: '1% - Flecha +3, 1% - Cimitarra, 1% - Bastón Nudoso', ubicacion: '134 - 135 - 136' },
        { name: 'Galeón Fantasmal', vida: 7000, danoFisico: '350/150', defensa: '12', defMagica: '12', podAtaque: 300, evasion: 200, magia: '-', exp: 17000, oro: 250, drop: '1% - Laúd Mágico, 1% - Flauta Mágica', ubicacion: '134 - 135 - 136' },
        { name: 'Leviatan II', vida: 8000, danoFisico: '250/90', defensa: '-', defMagica: '-', podAtaque: 220, evasion: 180, magia: '-', exp: 26000, oro: 1750, drop: '1% - Casco Incompleto, 1% - Escudo Espada Helada', ubicacion: '134 - 135 - 136' },
        { name: 'Kraken', vida: 6250, danoFisico: '220/95', defensa: '15', defMagica: '15', podAtaque: 220, evasion: 170, magia: 'Lanza Paralizar', exp: 24000, oro: 1000, drop: '1% - Rompe Cascos, 1% - Casco de Plata, 1% - Armadura de Placas Azul (H/E/EO-M)', ubicacion: '134 - 135 - 136' },
        { name: 'Golem Dorado', vida: 15000, danoFisico: '145/275', defensa: '30', defMagica: '30', podAtaque: 140, evasion: 60, magia: '-', exp: 50000, oro: 5000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 3% - 1000 Minerales de Oro, 0.5% - Gema Lila (1)', ubicacion: '126 - 74 - 76' },
        { name: 'Golem Alado', vida: 25000, danoFisico: '155/290', defensa: '45', defMagica: '45', podAtaque: 150, evasion: 40, magia: '-', exp: 80000, oro: 8000, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 5% - Armadura de Placas Completa , 5% - Armadura de Placas Completa (E/G), 0.5% - Gema Lila (1)', ubicacion: '126 - 74 - 76' },
        { name: 'Gran Dragón Rojo', vida: 25000, danoFisico: '100/180', defensa: '50', defMagica: '50', podAtaque: 200, evasion: 190, magia: 'Paralizable - Lanza Tormenta de Fuego y Apocalipsis', exp: 71000, oro: 1900, drop: '15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User), 5% - Gema Verde (5 Ptos de User), 5% - Armadura de Placas Completa, 5% - Armadura de Placas Completa (Mujer), 5% - Armadura de Placas Completa (E/G)', ubicacion: '77' },
        { name: 'Golem de Bronce', vida: 1700, danoFisico: '40/100', defensa: '5', defMagica: '5', podAtaque: 60, evasion: 20, magia: '-', exp: 3000, oro: 50, drop: '100% - Yacimientos de Bronce (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '45' },
        { name: 'Golem de Plata', vida: 2100, danoFisico: '50/110', defensa: '10', defMagica: '10', podAtaque: 70, evasion: 30, magia: '-', exp: 4200, oro: 100, drop: '100% - Yacimientos de Plata (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '44' },
        { name: 'Golem de Oro', vida: 2500, danoFisico: '60/120', defensa: '15', defMagica: '15', podAtaque: 80, evasion: 40, magia: '-', exp: 5000, oro: 150, drop: '100% - Yacimientos de Oro (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '75' },
        { name: 'Momia de Lana de Oveja', vida: 1700, danoFisico: '40/100', defensa: '5', defMagica: '5', podAtaque: 60, evasion: 20, magia: '-', exp: 3000, oro: 75, drop: '100% - Lana de oveja (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '93' },
        { name: 'Momia de Lana de Cabra', vida: 2100, danoFisico: '50/110', defensa: '10', defMagica: '10', podAtaque: 70, evasion: 30, magia: '-', exp: 4200, oro: 100, drop: '100% - Lana de cabra (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '160' },
        { name: 'Momia de Lana de Llama', vida: 2500, danoFisico: '60/120', defensa: '15', defMagica: '15', podAtaque: 80, evasion: 40, magia: '-', exp: 5000, oro: 150, drop: '100% - Lana de llama (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '140' },
        { name: 'Ent', vida: 2500, danoFisico: '60/120', defensa: '15', defMagica: '15', podAtaque: 80, evasion: 40, magia: '-', exp: 5000, oro: 150, drop: '100% - Leña (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '79' },
        { name: 'Licántropo', vida: 1500, danoFisico: '15/35', defensa: '-', defMagica: '-', podAtaque: 25, evasion: 15, magia: '-', exp: 2000, oro: 50, drop: '35% - Leña (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '101' },
        { name: 'Ave de las Profundidades', vida: 2500, danoFisico: '30/60', defensa: '-', defMagica: '-', podAtaque: 30, evasion: 40, magia: '-', exp: 2000, oro: 50, drop: '35% - Yacimientos de Hierro (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '101' },
        { name: 'Arpia', vida: 1500, danoFisico: '20/40', defensa: '-', defMagica: '-', podAtaque: 30, evasion: 40, magia: '-', exp: 2000, oro: 50, drop: '35% - Lana de Oveja (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '101' },
        { name: 'Momia', vida: 1500, danoFisico: '30/50', defensa: '-', defMagica: '-', podAtaque: 40, evasion: 20, magia: '-', exp: 2000, oro: 50, drop: '35% - Yacimientos de Plata (250),15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User)', ubicacion: '101' },
        { name: 'Hada Oscura', vida: 1500, danoFisico: '40/60', defensa: '-', defMagica: '-', podAtaque: 45, evasion: 40, magia: '-', exp: 2000, oro: 50, drop: '35% - Lana de Cabra (250),15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User)', ubicacion: '101' },
        { name: 'Rey Scroll', vida: 1500, danoFisico: '55/80', defensa: '-', defMagica: '-', podAtaque: 55, evasion: 60, magia: '-', exp: 2000, oro: 50, drop: '35% - Raíz (250), 15% - Gema Azul (1 Pto de User), 10% - Gema Naranja (3 Ptos de User)', ubicacion: '101' },
        { name: 'Abominación Élfica', vida: 2500, danoFisico: '60/120', defensa: '15', defMagica: '15', podAtaque: 120, evasion: 40, magia: '-', exp: 5000, oro: 150, drop: '100% - Leña Elfica (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '145' },
        { name: 'Planta Carnivora', vida: 2500, danoFisico: '60/120', defensa: '15', defMagica: '15', podAtaque: 80, evasion: 40, magia: '-', exp: 5000, oro: 150, drop: '100% - Raíz (250), 15% - Gema Azul (1 Pto de User)', ubicacion: '89' },
        { name: 'Paria', vida: 1000, danoFisico: '10/50', defensa: '1', defMagica: '1', podAtaque: 15, evasion: 15, magia: '-', exp: 940, oro: 35, drop: '10% - Pocion Roja (250), 10% - Pocion Azul (100), 10% - Pocion Verde (30), 10% - Pocion Amarillas (30)', ubicacion: '-' },
        { name: 'Vampiresa', vida: 3700, danoFisico: '50/135', defensa: '5', defMagica: '5', podAtaque: 65, evasion: 65, magia: 'Lanza Paralizar', exp: 12400, oro: 100, drop: '5% - Túnica Maléfica [DefCorp], 5% - Túnica Maléfica [DefCorp] (E/G), 5% - Corona, 7% - Cimitarra, 5% - Vara de Mago, 5% - Laúd Élfico, 5% - Flauta Élfica, 5% - Sable de Pirata', ubicacion: '-' },
        { name: 'Ciclope', vida: 4100, danoFisico: '90/110', defensa: '7', defMagica: '7', podAtaque: 80, evasion: 95, magia: 'Tormenta de Fuego (+2)', exp: 13500, oro: 125, drop: '5% - Armadura De Placas De Gala Dorada [DefCorp], 5% - Armadura Mercenario [DefCorp], 7% - Hacha de Barbaro, 7% - Espada Helada, 7% - Espada de Plata, 5% - Escudo de Plata, 7% - Puñal, 5% - Casco de Plata', ubicacion: '-' },
        { name: 'Aparicion', vida: 4600, danoFisico: '70/130', defensa: '10', defMagica: '10', podAtaque: 110, evasion: 135, magia: 'Descarga Electrica (+1)', exp: 14900, oro: 150, drop: '5% - Túnica Maléfica [DefMag], 5% - Túnica Maléfica [DefMag] (E/G), 5% - Corona, 7% - Cimitarra, 5% - Vara de Mago, 5% - Laúd Élfico, 5% - Flauta Élfica, 5% - Sable de Pirata', ubicacion: '-' },
        { name: 'Djinn de Viento', vida: 5100, danoFisico: '150/150', defensa: '10', defMagica: '10', podAtaque: 100, evasion: 115, magia: 'Descarga Electrica (+1)', exp: 16400, oro: 170, drop: '5% - Vestimenta de la Oscuridad, 5% - Vestimenta de la Oscuridad (E/G), 5% - Ballesta, 7% - Flecha +3 (1.000), 5% - Escudo Rustico, 5% - Rodela de Madera Reforzada, 5% - Casco del Gran Maestre, 5% - Casco de Gran Maestre Oscuro', ubicacion: '-' },
        { name: 'Bestia Guerrera', vida: 5400, danoFisico: '100/180', defensa: '10', defMagica: '10', podAtaque: 135, evasion: 135, magia: '-', exp: 18200, oro: 180, drop: '5% - Vestimenta de la Oscuridad, 5% - Vestimenta de la Oscuridad (E/G), 5% - Ballesta, 7% - Flecha +3 (1.000), 5% - Escudo Rustico, 5% - Rodela de Madera Reforzada, 5% - Casco del Gran Maestre, 5% - Casco de Gran Maestre Oscuro', ubicacion: '-' },
        { name: 'Elemental de Tierra Errante', vida: 5950, danoFisico: '100/180', defensa: '10', defMagica: '10', podAtaque: 150, evasion: 100, magia: 'Inmovilizar', exp: 20400, oro: 200, drop: '5% - Armadura De Placas De Gala Dorada [DefCorp], 5% - Armadura Mercenario [DefCorp], 7% - Hacha de Barbaro, 7% - Espada Helada, 7% - Espada de Plata, 5% - Escudo de Plata, 7% - Puñal, 5% - Casco de Plata', ubicacion: '-' },
        { name: 'Elemental de Agua Errante', vida: 5950, danoFisico: '100/180', defensa: '10', defMagica: '10', podAtaque: 150, evasion: 100, magia: 'Descarga Electrica (+1)', exp: 20400, oro: 200, drop: '5% - Túnica Maléfica [DefMag], 5% - Túnica Maléfica [DefMag] (E/G), 5% - Túnica Maléfica [DefCorp], 5% - Túnica Maléfica [DefCorp] (E/G), 5% - Corona, 7% - Cimitarra, 5% - Vara de Mago, 5% - Laúd Élfico, 5% - Flauta Élfica, 5% - Sable de Pirata', ubicacion: '-' },
        { name: 'Elemental de Fuego Errante', vida: 5950, danoFisico: '100/180', defensa: '10', defMagica: '10', podAtaque: 150, evasion: 100, magia: 'Tormenta de Fuego (+2)', exp: 20400, oro: 200, drop: '5% - Vestimenta de la Oscuridad, 5% - Vestimenta de la Oscuridad (E/G), 5% - Ballesta, 7% - Flecha +3 (1.000), 5% - Escudo Rustico, 5% - Rodela de Madera Reforzada, 5% - Casco del Gran Maestre, 5% - Casco de Gran Maestre Oscuro', ubicacion: '-' },
        { name: 'Inferno', vida: 6475, danoFisico: '70/150', defensa: '15', defMagica: '15', podAtaque: 115, evasion: 100, magia: 'Tormenta de Fuego (+2)', exp: 24000, oro: 225, drop: '5% - Armadura de Omega [DefCorp], 5% - Armadura de Caballero [DefCorp], 5% - Armadura de Epsilon [DefCorp], 5% - Armadura de Omega (G/E) [DefCorp], 5% - Armadura de Tawnos (G/E) [DefCorp], 5% - Armadura de Tawnos Dorada (G/E) [DefCorp], 5% - Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe Cascos Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7% - Casco Incompleto', ubicacion: '-' },
        { name: 'Devastador', vida: 6950, danoFisico: '100/200', defensa: '20', defMagica: '20', podAtaque: 110, evasion: 125, magia: 'Descarga Electrica (+1)', exp: 29400, oro: 250, drop: '5% - Armadura de Omega [DefMag], 5% - Armadura de Caballero [DefMag], 5% - Armadura de Epsilon [DefMag], 5% - Armadura de Omega (G/E) [DefMag], 5% - Armadura de Tawnos (G/E) [DefMag], 5% - Armadura de Tawnos Dorada (G/E) [DefMag], 5% - Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe Cascos Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7% - Casco Incompleto', ubicacion: '-' },
        { name: 'Lord Belithuz', vida: 17345, danoFisico: '250/350', defensa: '40', defMagica: '40', podAtaque: 230, evasion: 175, magia: 'Imparalizable - Maldecir, Sombra de la Muerte', exp: 80000, oro: 500, drop: '5% - Armadura de Dragón (Hombre) [DefCorp], 5% - Armadura de Dragón (Mujer) [DefCorp], 5% - Armadura de Dragón (G/E) [DefCorp], 5% - Daga De la Oscuridad, 5% - Maza Oscura, 5% - Martillo Sagrado, 5% - Espada Argentum, 5% - Excalibur II, 5% - Casco de Guerrero Completo, 5% - Casco MAESTRE Dorado, 5% - Casco Oscuro, 5% - Escudo de Tres Puntas, 5% - Escudo del Gran Imperio +1, 5% - Escudo de Caballero, 5% - Casco de Caballero, 7% - Casco Incompleto, 5% - Corona, 5% - Vara de Mago, 5% - Laúd Élfico, 5% - Flauta Élfica, 5% - Sable de Pirata', ubicacion: '-' },
        { name: 'Gran Dragón Negro', vida: 25000, danoFisico: '130/210', defensa: '25', defMagica: '25', podAtaque: 150, evasion: 150, magia: 'Imparalizable - Llamarada, Apocalipsis', exp: 100000, oro: 3000, drop: '5% - Armadura de Dragón (Hombre) [DefCorp], 5% - Armadura de Dragón (Mujer) [DefCorp], 5% - Armadura de Dragón (G/E) [DefCorp], 5% -Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe Cascos Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7% - Casco Incompleto', ubicacion: '-' },
        { name: 'Gran Dragón Plateado', vida: 25000, danoFisico: '200/250', defensa: '30', defMagica: '30', podAtaque: 200, evasion: 180, magia: 'Imparalizable - Rafaga Ardiente, Apocalipsis', exp: 100000, oro: 3000, drop: '5% - Armadura de Dragón (Hombre) [DefCorp], 5% - Armadura de Dragón (Mujer) [DefCorp], 5% - Armadura de Dragón (G/E) [DefCorp], 5% -Ballesta, 7% - Flecha +3 (1.000), 5% - Escudo Rustico, 5% - Rodela de Madera Reforzada, 5% - Casco del Gran Maestre, 5% - Casco de Gran Maestre Oscuro, 5% - Daga Dhanab, 7% - Rompe Cascos, 5% - Rompe Cascos Superior, 5% - Escudo del Gran Imperio, 5% - Escudo Oscuro, 5% - Casco de Caballero, 7% - Casco Incompleto', ubicacion: '-' }
      ]
    }
  },
  {
    id: 'quests',
    title: 'Quests & Modo Historia',
    icon: 'book-open',
    content: {
      description: '¡Nuestro sistema de entrenamiento! Que tal forastero, si llegaste a este parte es porque necesitas entrenar. Al nacer en las tierras del Cucsi tendrás un teleport, en tu ciudad de origen, por el cual podrás ingresar al Dungeon Newbie (D-NW).',
      intro: 'El nivel Máximo informado indica que hasta ese nivel inclusive podremos pedir la misión para realizarla. Los Puntos de Usuario sirven para subir el Nivel de Clan, items de Torneo o para uno de los requisitos de la Nobleza.',
      categories: [
        {
          id: 'newbie',
          name: 'Quest Newbie Dungeon',
          icon: '🗡️',
          description: 'Quests para niveles 1-13',
          quests: [
            {
              npc: 'Randall',
              repetible: false,
              ubicacion: 'Newbie Dungeon | Mapa:19 X:72 Y:80',
              nombre: 'Obteniendo Equipo Guerrero',
              nivelMin: 1,
              nivelMax: 13,
              necesidad: 'Matar 5 Gallo Salvaje, 5 Serpiente y 5 Lobo.',
              criaturas: ['Gallo Salvaje', 'Serpiente', 'Lobo'],
              recompensa: '460 de experiencia, 40 monedas de oro y Equipo de Entrenamiento para Paladín, Clérigo, Asesino, Bandido, Ladrón, Cazador y Guerrero.'
            },
            {
              npc: 'Agnes',
              repetible: false,
              ubicacion: 'Newbie Dungeon | Mapa:79 X:81 Y:77',
              nombre: 'Obteniendo Equipo Mágico',
              nivelMin: 1,
              nivelMax: 13,
              necesidad: 'Matar 5 Gallo Salvaje, 5 Serpiente y 5 Lobo.',
              criaturas: ['Gallo Salvaje', 'Serpiente', 'Lobo'],
              recompensa: '460 de experiencia, 40 monedas de oro y Equipo de Entrenamiento para Mago, Druida y Bardo.'
            }
          ]
        },
        {
          id: 'historia',
          name: 'Quest 13 - 54',
          icon: '📖',
          description: 'Quest Modo Historia - Misiones 1-42',
          quests: [
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 1/42', nivelMin: 13, nivelMax: 54, necesidad: 'Matar 20 Esqueleto.', criaturas: ['Esqueleto'], recompensa: '700 de experiencia, 400 monedas de oro y Mascota de Entrenamiento.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 2/42', nivelMin: 14, nivelMax: 54, necesidad: 'Matar 15 Lobo.', criaturas: ['Lobo'], recompensa: '1.125 de experiencia, 525 monedas de oro y Hechizos de Entrenamiento para clases mágicas y equipo de entrenamiento para no mágicas.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 3/42', nivelMin: 15, nivelMax: 54, necesidad: 'Matar 10 Zombie.', criaturas: ['Zombie'], recompensa: '1.500 de experiencia, 450 monedas de oro y 1 Cofre de Entrenamiento I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 4/42', nivelMin: 16, nivelMax: 54, necesidad: 'Matar 15 Tortuga Gigante.', criaturas: ['Tortuga Gigante'], recompensa: '3.780 de experiencia, 1.125 monedas de oro y 1 Cofre de Quest I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 5/42', nivelMin: 17, nivelMax: 54, necesidad: 'Matar 8 Oso Pardo.', criaturas: ['Oso Pardo'], recompensa: '5.000 de experiencia, 700 monedas de oro y 1 Cofre de Quest I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 6/42', nivelMin: 18, nivelMax: 54, necesidad: 'Matar 20 Orco.', criaturas: ['Orco'], recompensa: '7.000 de experiencia, 1.200 monedas de oro y 1 Cofre de Quest I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 7/42', nivelMin: 19, nivelMax: 54, necesidad: 'Matar 8 Araña Gigante.', criaturas: ['Araña Gigante'], recompensa: '10.000 de experiencia, 1.000 monedas de oro y 1 Cofre de Entrenamiento II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 8/42', nivelMin: 20, nivelMax: 54, necesidad: 'Matar 8 Asesino.', criaturas: ['Asesino'], recompensa: '11.600 de experiencia, 1.100 monedas de oro y 1 Cofre de Quest I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 9/42', nivelMin: 21, nivelMax: 54, necesidad: 'Matar 6 Ogro.', criaturas: ['Ogro'], recompensa: '13.686 de experiencia, 2.160 monedas de oro y 1 Cofre de Materiales I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 10/42', nivelMin: 22, nivelMax: 54, necesidad: 'Matar 10 Beholder.', criaturas: ['Beholder'], recompensa: '17.500 de experiencia, 3.250 monedas de oro y 1 Cofre de Materiales I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 11/42', nivelMin: 23, nivelMax: 54, necesidad: 'Matar 10 Orco Brujo.', criaturas: ['Orco Brujo'], recompensa: '19.500 de experiencia, 4.000 monedas de oro y 1 Cofre de Quest I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 12/42', nivelMin: 24, nivelMax: 54, necesidad: 'Matar 10 Liche.', criaturas: ['Liche'], recompensa: '18.800 de experiencia, 3.200 monedas de oro y 1 Barca.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 13/42', nivelMin: 25, nivelMax: 54, necesidad: 'Matar 10 Lord Orco.', criaturas: ['Lord Orco'], recompensa: '16.000 de experiencia, 3.000 monedas de oro y 1 Relampago para mágicos y Conjuro del estupor para no mágicas.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 14/42', nivelMin: 26, nivelMax: 54, necesidad: 'Matar 10 Mago Malvado.', criaturas: ['Mago Malvado'], recompensa: '15.000 de experiencia, 3.500 monedas de oro y 1 Cofre de Clase I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 15/42', nivelMin: 27, nivelMax: 54, necesidad: 'Matar 5 Liche Infernal.', criaturas: ['Liche Infernal'], recompensa: '31.750 de experiencia, 2.500 monedas de oro y 1 Cofre de Quest II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 16/42', nivelMin: 28, nivelMax: 54, necesidad: 'Matar 5 Demonio.', criaturas: ['Demonio'], recompensa: '57.500 de experiencia, 5.000 monedas de oro y 1 Cofre de Materiales II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 17/42', nivelMin: 29, nivelMax: 54, necesidad: 'Matar 2 Golem de Piedra.', criaturas: ['Golem de Piedra'], recompensa: '50.000 de experiencia, 1.500 monedas de oro y 1 Cofre Winterfell I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 18/42', nivelMin: 30, nivelMax: 54, necesidad: 'Matar 15 Leviatan.', criaturas: ['Leviatan'], recompensa: '65.000 de experiencia, 13.125 monedas de oro y 1 Scroll exp (30 min).' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 19/42', nivelMin: 31, nivelMax: 54, necesidad: 'Matar 20 Dinosaurio.', criaturas: ['Dinosaurio'], recompensa: '75.000 de experiencia, 8.000 monedas de oro y 1 Cofre de Entrenamiento III.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 20/42', nivelMin: 32, nivelMax: 54, necesidad: 'Matar 10 Pirata.', criaturas: ['Pirata'], recompensa: '85.000 de experiencia, 10.000 monedas de oro y 1 Cofre de Entrenamiento II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 21/42', nivelMin: 33, nivelMax: 54, necesidad: 'Matar 10 Capitán Pirata.', criaturas: ['Capitán Pirata'], recompensa: '95.000 de experiencia, 12.000 monedas de oro y 1 Cofre de Quest II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 22/42', nivelMin: 34, nivelMax: 54, necesidad: 'Matar 15 Arquero del Castillo.', criaturas: ['Arquero del Castillo'], recompensa: '105.000 de experiencia, 12.375 monedas de oro y 1 Cofre de Clase I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 23/42', nivelMin: 35, nivelMax: 54, necesidad: 'Matar 15 Plebello del Castillo.', criaturas: ['Plebello del Castillo'], recompensa: '111.250 de experiencia, 14.625 monedas de oro y 1 Cofre de Quest II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 24/42', nivelMin: 36, nivelMax: 54, necesidad: 'Matar 10 Mago del Castillo.', criaturas: ['Mago del Castillo'], recompensa: '127.500 de experiencia, 18.750 monedas de oro y 1 Cofre de Materiales II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 25/42', nivelMin: 37, nivelMax: 54, necesidad: 'Matar 10 Guerrero Armado del Castillo.', criaturas: ['Guerrero Armado del Castillo'], recompensa: '135.000 de experiencia, 10.500 monedas de oro y 1 Cofre de Quest II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 26/42', nivelMin: 38, nivelMax: 54, necesidad: 'Matar 10 Archimago del Castillo.', criaturas: ['Archimago del Castillo'], recompensa: '240.000 de experiencia, 10.000 monedas de oro y 1 Cofre de Materiales II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 27/42', nivelMin: 39, nivelMax: 54, necesidad: 'Matar 10 Paladin del Castillo.', criaturas: ['Paladin del Castillo'], recompensa: '280.000 de experiencia, 12.375 monedas de oro y 1 Scroll exp (30 min).' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 28/42', nivelMin: 40, nivelMax: 54, necesidad: 'Matar 5 Arcangel Armado del Castillo.', criaturas: ['Arcangel Armado del Castillo'], recompensa: '280.000 de experiencia, 14.625 monedas de oro y 1 Cofre de Quest II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 29/42', nivelMin: 41, nivelMax: 54, necesidad: 'Matar 2 Rey Golem de Polo.', criaturas: ['Rey Golem de Polo'], recompensa: '25.000 de experiencia, 22.500 monedas de oro y 1 Cofre de Materiales II.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 30/42', nivelMin: 42, nivelMax: 54, necesidad: 'Matar 2 Golem Junior de Hielo.', criaturas: ['Golem Junior de Hielo'], recompensa: '30.000 de experiencia, 22.500 monedas de oro y 1 Cofre Winterfell I.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 31/42', nivelMin: 43, nivelMax: 54, necesidad: 'Matar 10 Sirena.', criaturas: ['Sirena'], recompensa: '500.000 de experiencia, 1.500 monedas de oro y 1 Cofre de Runas Inferiores.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 32/42', nivelMin: 44, nivelMax: 54, necesidad: 'Matar 1 Galeón Pirata.', criaturas: ['Galeón Pirata'], recompensa: '640.000 de experiencia, 8.000 monedas de oro y 1 Cofre de Runas Inferiores.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 33/42', nivelMin: 45, nivelMax: 54, necesidad: 'Matar 10 Galeón Fantasmal.', criaturas: ['Galeón Fantasmal'], recompensa: '700.000 de experiencia, 2.500 monedas de oro y 1 Cofre de Materiales III.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 34/42', nivelMin: 46, nivelMax: 54, necesidad: 'Matar 10 Leviatan II.', criaturas: ['Leviatan II'], recompensa: '880.000 de experiencia, 1.875 monedas de oro y 1 Scroll exp (30 min).' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 37/42', nivelMin: 47, nivelMax: 54, necesidad: 'Matar 10 Kraken.', criaturas: ['Kraken'], recompensa: '1.060.000 de experiencia, 1.250 monedas de oro y 1 Cofre de Quest III.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 38/42', nivelMin: 48, nivelMax: 54, necesidad: 'Matar 5 Golem Dorado.', criaturas: ['Golem Dorado'], recompensa: '1.260.000 de experiencia, 1.250 monedas de oro y 1 Cofre de Materiales III.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 39/42', nivelMin: 49, nivelMax: 54, necesidad: 'Matar 3 Golem Alado.', criaturas: ['Golem Alado'], recompensa: '1.500.000 de experiencia, 1.250 monedas de oro y 1 Cofre de Clase III.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 40/42', nivelMin: 50, nivelMax: 54, necesidad: 'Matar 35 Medusa.', criaturas: ['Medusa'], recompensa: '2.000.000 de experiencia, 1.875 monedas de oro y 1 Cofre de Dragón.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 41/42', nivelMin: 51, nivelMax: 54, necesidad: 'Matar 10 Gran Dragón Rojo.', criaturas: ['Gran Dragón Rojo'], recompensa: '2.800.000 de experiencia, 19.000 monedas de oro y 1 Cofre de Quest III.' },
            { npc: 'Manrique', repetible: false, ubicacion: 'Todas las ciudades', nombre: 'Modo historia - Misión 42/42', nivelMin: 52, nivelMax: 54, necesidad: 'Matar 15 Gran Dragon Rojo, 15 Dragon Rojo, 15 Golem Alado y 15 Medusa.', criaturas: ['Gran Dragon Rojo', 'Dragon Rojo', 'Golem Alado', 'Medusa'], recompensa: '6.800.000 de experiencia, 28.500 monedas de oro, 1 Scroll exp (30 min), y 1 Cofre de Clase III.' }
          ]
        },
        {
          id: 'repetibles',
          name: 'Quest Repetibles',
          icon: '🔄',
          description: 'Quests que puedes repetir múltiples veces',
          quests: [
            { npc: 'Gael', repetible: true, ubicacion: 'Dungeon Marabel | Mapa:69 X:51 Y:87', nombre: 'Identificando a los Revoltosos', nivelMin: 25, nivelMax: 40, necesidad: 'Matar 10 Orco Brujo, 10 Lord Orco, 10 Mago Malvado, 1 Demonio.', criaturas: ['Orco Brujo', 'Lord Orco', 'Mago Malvado', 'Demonio'], recompensa: '62.000 de experiencia, 4.360 monedas de oro, 10 puntos de usuario, 100 Pociones rojas, 60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas y 5 chuletas.' },
            { npc: 'Dylan', repetible: true, ubicacion: 'Castillo de Lindos | Mapa:62 X:40 Y:51', nombre: 'Rebeldes en el Castillo', nivelMin: 30, nivelMax: 45, necesidad: 'Matar 5 Arquero del Castillo, 5 Plebello del Castillo, 5 Mago del Castillo, 5 Guerrero Armado del Castillo, 5 Archimago del Castillo, 5 Paladin del Castillo, 1 Arcangel Armado del Castillo.', criaturas: ['Arquero del Castillo', 'Plebello del Castillo', 'Mago del Castillo', 'Guerrero Armado del Castillo', 'Archimago del Castillo', 'Paladin del Castillo', 'Arcangel Armado del Castillo'], recompensa: '133.275 de experiencia, 7.341 monedas de oro, 10 puntos de usuario, 100 Pociones rojas, 60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas y 5 chuletas.' },
            { npc: 'Lotaria', repetible: true, ubicacion: 'Nueva Esperanza | Mapa:59 X:34 Y:15', nombre: 'Reclutando a Guerreros II', nivelMin: 25, nivelMax: 40, necesidad: 'Matar 10 Liche Infernal, 10 Leviatan.', criaturas: ['Liche Infernal', 'Leviatan'], recompensa: '154.500 de experiencia, 6.500 monedas de oro, 10 puntos de usuario, 50 Pociones rojas,30 Pociones azules, 10 Pociones amarillas, 5 pociones verdes, 5 jugo de frutas y 5 chuletas.' },
            { npc: 'Jurian', repetible: true, ubicacion: 'Dungeon Barco Pirata | Mapa:33 X:48 Y:74', nombre: 'Lo\' Pirata VO\'', nivelMin: 25, nivelMax: 40, necesidad: 'Matar 15 Pirata, 10 Capitán Pirata.', criaturas: ['Pirata', 'Capitán Pirata'], recompensa: '88.975 de experiencia, 2.350 monedas de oro, 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas y 5 chuletas.' },
            { npc: 'Law', repetible: true, ubicacion: 'Dungeon Barco Dinosaurio | Mapa:49 X:34 Y:16', nombre: 'La Prehistoria', nivelMin: 30, nivelMax: 40, necesidad: 'Matar 25 Dinosaurio.', criaturas: ['Dinosaurio'], recompensa: '116.125 de experiencia, 3.100 monedas de oro, 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas y 5 chuletas.' },
            { npc: 'Jehanne', repetible: true, ubicacion: 'Ciudad de Lindos | Mapa:54 X:68 Y:41', nombre: 'Protege a Lindos', nivelMin: 30, nivelMax: 45, necesidad: 'Matar 15 Leviatan.', criaturas: ['Leviatan'], recompensa: '136.500 de experiencia, 5.250 monedas de oro, 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas y 5 chuletas.' },
            { npc: 'Nahia', repetible: true, ubicacion: 'Entrada Inframundo | Mapa:66 X:48 Y:34', nombre: 'Welcome To Pain ZONE', nivelMin: 35, nivelMax: 45, necesidad: 'Matar 15 Serpiente de Anthares, 5 Leviatan, 5 Medusa, 5 Demonio, 2 Golem Dorado y 2 Golem Alado.', criaturas: ['Serpiente de Anthares', 'Leviatan', 'Medusa', 'Demonio', 'Golem Dorado', 'Golem Alado'], recompensa: '255.575 de experiencia, 5.850 monedas de oro, 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas, 5 chuletas y 1 Cofre Quest III.' },
            { npc: 'Milo', repetible: true, ubicacion: 'Entrada Dungeon Marabel | Mapa:28 X:42 Y:48', nombre: 'Venganza', nivelMin: 35, nivelMax: 45, necesidad: 'Matar 10 Demonio, 5 Golem de Piedra.', criaturas: ['Demonio', 'Golem de Piedra'], recompensa: '240.000 de experiencia, 5.500 monedas de oro, 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas, 5 chuletas.' },
            { npc: 'Alonso', repetible: true, ubicacion: 'Adentro del Dungeon Veril | Mapa:71 X:38 Y:27', nombre: 'Medukila', nivelMin: 35, nivelMax: 54, necesidad: 'Matar 30 Medusa.', criaturas: ['Medusa'], recompensa: '345.000 de experiencia, 9.000 monedas de oro, 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas, 5 chuletas y 1 Cofre Quest III.' },
            { npc: 'Braulio', repetible: true, ubicacion: 'Adentro del Dungeon Veril | Mapa:72 X:48 Y:41', nombre: 'Duro como Ferrocarril', nivelMin: 35, nivelMax: 54, necesidad: 'Matar 5 Golem de Piedra, 5 Golem Dorado y 5 Golem Alado.', criaturas: ['Golem de Piedra', 'Golem Dorado', 'Golem Alado'], recompensa: '450.000 de experiencia, 4.500 monedas de oro y 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas, 5 chuletas y 1 Cofre Quest III.' },
            { npc: 'Rick', repetible: true, ubicacion: 'Entrada Dungeon Dragon | Mapa:72 X:48 Y:41', nombre: 'Ala de Pollo', nivelMin: 43, nivelMax: 45, necesidad: 'Matar 15 Gran Dragon Rojo.', criaturas: ['Gran Dragon Rojo'], recompensa: '750.000 de experiencia, 7.500 monedas de oro y 10 puntos de usuario, 100 Pociones rojas,60 Pociones azules, 20 Pociones amarillas, 10 pociones verdes, 5 jugo de frutas, 5 chuletas.' },
            { npc: 'Zdenko', repetible: true, ubicacion: 'Polo | Mapa:78 X:62 Y:22', nombre: 'Caza Golemica', nivelMin: 27, nivelMax: 54, necesidad: 'Matar 10 Golem Junior de Hielo y 5 Rey Golem de Polo.', criaturas: ['Golem Junior de Hielo', 'Rey Golem de Polo'], recompensa: '13.000 de experiencia, 25.625 monedas de oro, 10 puntos de usuario y una provisión de pociones y Piedra Caza Golemica (se vende por oro).' },
            { npc: 'Emma', repetible: true, ubicacion: 'Laberinto Congelado Mapa:138 X:77 Y:86 | Entrada Mapa 78', nombre: 'Guardianes del Laberinto', nivelMin: 33, nivelMax: 54, necesidad: 'Matar 10 Hombre de las Nieves, 10 Beholder Polar y 10 Gorila Polar.', criaturas: ['Hombre de las Nieves', 'Beholder Polar', 'Gorila Polar'], recompensa: '7.500 de experiencia, 30.000 monedas de oro, 10 puntos de usuario, una gran provisión de pociones y Piedra Guardianes del Laberinto (se vende por oro).' },
            { npc: 'Dorotyh', repetible: true, ubicacion: 'Dungeon Agua Mapa:135 X:47 Y:20 | Entrada Mapa 103', nombre: 'Derrotando a las Criaturas Míticas', nivelMin: 35, nivelMax: 50, necesidad: 'Matar 10 Kraken y 10 Leviatan II.', criaturas: ['Kraken', 'Leviatan II'], recompensa: '250.000 de experiencia, 8.200 monedas de oro y 10 puntos de usuario, 500 Pociones rojas, 250 Pociones azules, 60 Pociones amarillas, 40 pociones verdes, 5 jugo de frutas, 5 chuletas y Cofre de Quest III.' },
            { npc: 'Eleuterio', repetible: true, ubicacion: 'Dungeon Agua Mapa:135 X:48 Y:83 | Entrada Mapa 103', nombre: 'Barckiller', nivelMin: 35, nivelMax: 50, necesidad: 'Matar 10 Galeón Pirata y 10 Galeón Fantasmal.', criaturas: ['Galeón Pirata', 'Galeón Fantasmal'], recompensa: '140.000 de experiencia, 6.860 monedas de oro y 10 puntos de usuario, 500 Pociones rojas, 250 Pociones azules, 60 Pociones amarillas, 40 pociones verdes, 5 jugo de frutas, 5 chuletas y Cofre de Quest II.' }
          ]
        },
        {
          id: 'recursos',
          name: 'Quest de Recursos',
          icon: '⛏️',
          description: 'Quests relacionadas con recursos y materiales',
          quests: [
            { npc: 'Brigham', repetible: true, ubicacion: 'Ciudad de Blillinton | Mapa:95 X:47 Y:52', nombre: 'Mercado Negro de Minerales I', nivelMin: 30, nivelMax: 54, necesidad: 'Llevarle 10.000 Minerales de Hierro.', criaturas: [], recompensa: 'Te entregara 714 Lingotes de Hierro (Brinda 5% extra de lingotes ya fraguados).' },
            { npc: 'Brishen', repetible: true, ubicacion: 'Ciudad de Dahl | Mapa:96 X:52 Y:28', nombre: 'Mercado Negro de Minerales II', nivelMin: 30, nivelMax: 54, necesidad: 'Llevarle 10.000 Minerales de Plata.', criaturas: [], recompensa: 'Te entregara 504 Lingotes de Plata (Brinda 5% extra de lingotes ya fraguados).' },
            { npc: 'Alodia', repetible: true, ubicacion: 'Ciudad de Banderbill | Mapa:30 X:35 Y:46', nombre: 'Mercado Negro de Lanas I', nivelMin: 30, nivelMax: 54, necesidad: 'Llevarle 10.000 Lana de Oveja.', criaturas: [], recompensa: 'Te entregara 714 Ovillos de Oveja (Brinda 5% extra de ovillos ya trabajados).' },
            { npc: 'Ilduara', repetible: true, ubicacion: 'Ciudad de Nexon | Mapa:15 X:54 Y:50', nombre: 'Mercado Negro de Lanas II', nivelMin: 30, nivelMax: 54, necesidad: 'Llevarle 10.000 Lana de Cabra.', criaturas: [], recompensa: 'Te entregara 504 Ovillos de Cabra (Brinda 5% extra de ovillos ya trabajados).' }
          ]
        }
      ]
    }
  },
  {
    id: 'domar',
    title: 'Domar Animales',
    icon: 'paw-print',
    content: {
      description: 'La doma de criaturas puede ser utilizada por cualquier clase o raza, la misma consiste en domesticar animales salvajes para hacerlos mascotas.',
      intro: 'Estas bestias una vez domadas son fieles compañeras de aventuras ya que los defenderán en caso de que alguien o algo los ataque. Para domar a una criatura simplemente presionen la tecla "D" + click (por defecto) sobre la criatura para intentar domarla. Hay criaturas que se dejan domar fácilmente y otras que no.',
      druidInfo: 'Existe una clase en CucsiAO con la habilidad superiora de poder comunicarse con los animales y convencerlos para pedir por su ayuda, amistad o compañía en nuestro recorrido por el mundo. Esta clase es el Druida.',
      commands: {
        title: 'Comandos para Mascotas',
        description: 'Nuestras mascotas obedecerán órdenes para lo cuál pueden clickearlas y utilizar los siguientes comandos:',
        list: [
          { command: '/QUIETO', description: 'La mascota se quedará en el lugar' },
          { command: '/ACOMPAÑAR', description: 'La mascota continuará siguiéndote' },
          { command: '/LIBERAR', description: 'Deja libre a tu mascota (también doble click sobre ella)' }
        ]
      },
      carismaInfo: 'La Carisma es fundamental para la hora de Domar junto con los skilles en "Domar animales" serás capaz de domar todo tipos de criaturas las cuales te ayudaran en tu recorrido.',
      powerSection: {
        title: 'Poder de Domación',
        description: 'Para poder determinar cuanto poder de domación posee el usuario deberemos de calcularlo de la siguiente manera:',
        formula: 'Poder = Skilles en Domar Animales × Atributos en Carisma',
        examples: [
          { skills: 60, carisma: 22, result: 1320, text: 'Si nuestro personaje tiene 60 skilles en Domar Animales y el atributo de Carisma en 22, su poder será de 1.320 (60×22=1.320)' },
          { skills: 100, carisma: 19, result: 1900, text: 'Si nuestro personaje tiene 100 skilles en Domar Animales y el atributo de Carisma en 19, su poder será de 1.900 (100×19=1.900)' }
        ],
        chance: 'Si el poder de domación es mayor al necesario para poder poseer a la criatura tendrás un 20% de chances de domarla por cada intento.',
        druidBonus: 'La particularidad de la clase Druida es que si utiliza el objeto Flauta Mágica tendrá 20% extra de chances para domar a la criatura y su poder máximo de domación es de 2.200 o 2.640 con Flauta (con 22 en carisma).'
      },
      creaturesSection: {
        title: 'Criaturas Domables',
        description: 'A continuación te dejamos la lista de las criaturas que podrás domar, ordenadas por el poder de doma necesario para hacerlo'
      },
      creatures: [
        { name: 'Rata salvaje', poderDoma: 200, vida: 15, danoFisico: '2/4', defensa: '-', defMagica: '-', podAtaque: 10, evasion: 20, magia: '-' },
        { name: 'Serpiente', poderDoma: 250, vida: 22, danoFisico: '1/1', defensa: '-', defMagica: '-', podAtaque: 10, evasion: 0, magia: '-' },
        { name: 'Goblin', poderDoma: 400, vida: 110, danoFisico: '2/12', defensa: 15, defMagica: '-', podAtaque: 60, evasion: 40, magia: '-' },
        { name: 'Lobo', poderDoma: 800, vida: 75, danoFisico: '1/18', defensa: 8, defMagica: '-', podAtaque: 80, evasion: 25, magia: '-' },
        { name: 'Orco', poderDoma: 1000, vida: 350, danoFisico: '5/35', defensa: 10, defMagica: '-', podAtaque: 60, evasion: 45, magia: '-' },
        { name: 'Tortuga', poderDoma: 1250, vida: 315, danoFisico: '35/55', defensa: '-', defMagica: '-', podAtaque: 100, evasion: 45, magia: '-' },
        { name: 'Oso Pardo', poderDoma: 400, vida: 625, danoFisico: '65/100', defensa: '-', defMagica: '-', podAtaque: 120, evasion: 65, magia: '-' },
        { name: 'Lobo Polar', poderDoma: 1500, vida: 2600, danoFisico: '60/80', defensa: 8, defMagica: '-', podAtaque: 80, evasion: 35, magia: '-' },
        { name: 'Oso polar', poderDoma: 1750, vida: 1700, danoFisico: '65/100', defensa: '-', defMagica: '-', podAtaque: 120, evasion: 65, magia: '-' },
        { name: 'Araña Gigante', poderDoma: 1900, vida: 1100, danoFisico: '30/90', defensa: '-', defMagica: '-', podAtaque: 80, evasion: 60, magia: '-' },
        { name: 'Ogro', poderDoma: 2250, vida: 1800, danoFisico: '55/140', defensa: 10, defMagica: 10, podAtaque: 100, evasion: 60, magia: '-' },
        { name: 'Lord Orco', poderDoma: 2500, vida: 1500, danoFisico: '110/170', defensa: 10, defMagica: 10, podAtaque: 120, evasion: 100, magia: '-' },
        { name: 'Orco Brujo', poderDoma: 2500, vida: 1500, danoFisico: '70/115', defensa: 10, defMagica: 10, podAtaque: 120, evasion: 100, magia: 'Lanza Núcleo Plasma' }
      ]
    }
  },
  {
    id: 'hechizos',
    title: 'Hechizos',
    icon: 'sparkles',
    content: {
      description: 'Compendio de todos los hechizos disponibles en CucsiAO. Cada hechizo tiene requisitos de skills, costos de maná y stamina.',
      spells: [
        { nombre: 'Curar Veneno', precio: 100, skills: 10, mana: 10, stamina: 1, descripcion: 'Cura el veneno' },
        { nombre: 'Destello Arcano', precio: 250, skills: 6, mana: 4, stamina: 1, descripcion: 'Inflinge entre 4 a 7 de Daño Magico al Objetivo' },
        { nombre: 'Impulso Arcano', precio: 1150, skills: 12, mana: 10, stamina: 5, descripcion: 'Inflinge entre 6 a 12 de Daño Magico al Objetivo' },
        { nombre: 'Curar Heridas Leves', precio: 250, skills: 15, mana: 10, stamina: 1, descripcion: 'Restaura la Salud del Objetivo entre 1 y 5' },
        { nombre: 'Envenenar', precio: 475000, skills: 90, mana: 500, stamina: 100, descripcion: 'Envenena al objetivo' },
        { nombre: 'Curar Heridas Graves', precio: 10000, skills: 50, mana: 40, stamina: 20, descripcion: 'Restaura la Salud del Objetivo entre 12 y 35' },
        { nombre: 'Bola de Fuego', precio: 2250, skills: 22, mana: 20, stamina: 5, descripcion: 'Inflinge entre 12 a 20 de Daño Magico al Objetivo' },
        { nombre: 'Nucleo Plasma', precio: 6000, skills: 38, mana: 50, stamina: 15, descripcion: 'Inflinge entre 30 a 35 de Daño Magico al Objetivo' },
        { nombre: 'Paralizar', precio: 50000, skills: 60, mana: 400, stamina: 65, descripcion: 'Paraliza al Objetivo por unos segundos' },
        { nombre: 'Paralizar (A/BAND/P)', precio: 50000, skills: 60, mana: 300, stamina: 65, descripcion: 'Paraliza al Objetivo por unos segundos' },
        { nombre: 'Remover Paralisis', precio: 5000, skills: 45, mana: 300, stamina: 60, descripcion: 'Remueve la Paralisis al Objetivo' },
        { nombre: 'Resucitar (Mago/Druida/Bardo) NIVEL 40', precio: 625000, skills: 100, mana: 1700, stamina: 450, descripcion: 'Resucita al Objetivo, Solo funciona en Usuarios. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago, Baculo Luminozo, Flauta Mágica, Flauta Elfica, Laud Magico o Laud Elfico. CD de 20 segundos' },
        { nombre: 'Curacion Divina (Clerigo)', precio: 275000, skills: 80, mana: 500, stamina: 650, descripcion: 'Restaura la Salud del Objetivo entre 90 y 180' },
        { nombre: 'Curar Heridas Mortales (Paladin)', precio: 50000, skills: 100, mana: 300, stamina: 100, descripcion: 'Restaura la Salud del Objetivo entre 50 y 75' },
        { nombre: 'Invisibilidad (Mago)', precio: 100000, skills: 87, mana: 600, stamina: 75, descripcion: 'Vuelve invisible al Objetivo, solo funciona en Usuarios' },
        { nombre: 'Relampago (Solo Criaturas)', precio: 50000, skills: 60, mana: 100, stamina: 20, descripcion: 'Inflinge entre 37 a 47 de Daño Magico al Objetivo, solo funciona en Criaturas' },
        { nombre: 'Llamarada (Mago)', precio: 625000, skills: 98, mana: 750, stamina: 100, descripcion: 'Inflinge entre 63 a 73 de Daño Magico al Objetivo' },
        { nombre: 'Rafaga Ardiente (Bardo/Clerigo)', precio: 1000000, skills: 98, mana: 1150, stamina: 125, descripcion: 'Inflinge entre 93 a 98 de Daño Magico al Objetivo' },
        { nombre: 'Rafaga Ardiente (Asesino/Paladin)', precio: 1000000, skills: 98, mana: 1150, stamina: 125, descripcion: 'Inflinge entre 93 a 98 de Daño Magico al Objetivo' },
        { nombre: 'Apocalipsis (Bardo/Clerigo) NIVEL 30', precio: 1250000, skills: 100, mana: 1350, stamina: 150, descripcion: 'Inflinge entre 97 a 102 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Laud Magico o Laud Elfico Solo Clase Bardo' },
        { nombre: 'Apocalipsis (Druida)', precio: 1250000, skills: 100, mana: 1350, stamina: 150, descripcion: 'Inflinge entre 98 a 103 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Flauta Mágica o Flauta Elfica' },
        { nombre: 'Rafaga Ardiente (Druida)', precio: 1000000, skills: 98, mana: 1150, stamina: 125, descripcion: 'Inflinge entre 94 a 98 de Daño Magico al Objetivo' },
        { nombre: 'Tormenta de Fuego', precio: 12500, skills: 75, mana: 150, stamina: 29, descripcion: 'Inflinge entre 37 a 47 de Daño Magico al Objetivo' },
        { nombre: 'Mimetismo SOLO DRUIDA', precio: 400000, skills: 75, mana: 800, stamina: 44, descripcion: 'Copia temporalmente la apariencia del Objetivo' },
        { nombre: 'Provocar Hambre', precio: 100, skills: 5, mana: 20, stamina: 2, descripcion: 'Provoca la perdida de Hambre entre 20 a 50 puntos' },
        { nombre: 'Manada Hambrienta', precio: 10000, skills: 40, mana: 120, stamina: 16, descripcion: 'Invoca 3 Lobos Salvajes que acudiran en tu ayuda' },
        { nombre: 'Nigromancia', precio: 20000, skills: 51, mana: 400, stamina: 31, descripcion: 'Invoca 3 Zombies que acudiran en tu ayuda' },
        { nombre: 'Torpeza', precio: 135000, skills: 20, mana: 20, stamina: 2, descripcion: 'Reduce el Atributo de Celeridad del Objetivo entre 2 a 5, solo funciona en Usuarios' },
        { nombre: 'Celeridad Total (Clerigo)', precio: 25000, skills: 60, mana: 150, stamina: 75, descripcion: 'Aumenta el Atributo de Celeridad a 40 en si mismo. Lanzado sobre otras clases, eleva sus puntos de celeridad al maximo posible equivalente a utilizar pociones druidas amarillas segun raza, solo funciona en Usuarios' },
        { nombre: 'Fuerza Total (Clerigo)', precio: 25000, skills: 60, mana: 150, stamina: 75, descripcion: 'Aumenta el Atributo de Fuerza a 40 en si mismo. Lanzado sobre otras clases, eleva sus puntos de Fuerza al maximo posible equivalente a utilizar pociones druidas verdes segun raza, solo funciona en Usuarios' },
        { nombre: 'Celeridad', precio: 7500, skills: 20, mana: 40, stamina: 5, descripcion: 'Aumenta el Atributo de Celeridad del Objetivo entre 2 a 5, solo funciona en Usuarios' },
        { nombre: 'Fuerza', precio: 7500, skills: 35, mana: 50, stamina: 6, descripcion: 'Aumenta el Atributo de Fuerza del Objetivo entre 2 a 5, solo funciona en Usuarios' },
        { nombre: 'Vitalidad (Clerigo/Paladin)', precio: 250000, skills: 60, mana: 150, stamina: 50, descripcion: 'Recupera Estamina, Comida y Bebida sobre el Objetivo, Solo funciona en Usuarios' },
        { nombre: 'Curar Heridas Mortales (Druida/Bardo)', precio: 50000, skills: 100, mana: 500, stamina: 100, descripcion: 'Restaura la Salud del Objetivo entre 50 y 70' },
        { nombre: 'Debilidad', precio: 70000, skills: 35, mana: 45, stamina: 6, descripcion: 'Reduce el Atributo de Fuerza del Objetivo entre 2 a 5, solo funciona en Usuarios' },
        { nombre: 'Inmovilizar (Solo Criaturas)', precio: 10000, skills: 40, mana: 250, stamina: 25, descripcion: 'Inmoviliza al Objetivo por unos segundos, Solo funciona en Criaturas' },
        { nombre: 'Resurrección Divina (Clerigo)', precio: 625000, skills: 99, mana: 1000, stamina: 400, descripcion: 'Resucita al Objetivo y lo Cura por 100 puntos de vida, además le deja el hambre y la sed en 20 puntos, solo funciona en Usuarios. CD de 10 segundos' },
        { nombre: 'Invisibilidad (Bardo/Clerigo/Druida)', precio: 100000, skills: 87, mana: 500, stamina: 75, descripcion: 'Vuelve invisible al Objetivo, solo funciona en Usuarios' },
        { nombre: 'Curar Heridas Mortales (Clerigo)', precio: 50000, skills: 80, mana: 200, stamina: 100, descripcion: 'Restaura la Salud del Objetivo entre 50 y 70' },
        { nombre: 'Llamarada', precio: 575000, skills: 98, mana: 750, stamina: 100, descripcion: 'Inflinge entre 70 a 80 de Daño Magico al Objetivo' },
        { nombre: 'Sombra de la Muerte (Mago) NIVEL 40', precio: 2500000, skills: 99, mana: 2800, stamina: 250, descripcion: 'Inflinge entre 115 a 120 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo' },
        { nombre: 'Rafaga Ardiente (Mago)', precio: 1000000, skills: 98, mana: 1150, stamina: 125, descripcion: 'Inflinge entre 83 a 88 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Vara de Fresno, Baston Nudoso, Baculo Engarzado, Vara de Mago o Baculo Luminozo' },
        { nombre: 'Ceguera (Mago) NIVEL 40', precio: 1500000, skills: 100, mana: 2500, stamina: 300, descripcion: 'Embrujo que quita la vision al Usuario. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo' },
        { nombre: 'Maldecir (Mago)', precio: 1500000, skills: 70, mana: 500, stamina: 300, descripcion: 'Maldice al Usuario haciendo que camine erraticamente. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo' },
        { nombre: 'Apocalipsis (Mago) NIVEL 30', precio: 1250000, skills: 99, mana: 1350, stamina: 150, descripcion: 'Inflinge entre 90 a 95 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo' },
        { nombre: 'Descarga Electrica', precio: 175000, skills: 75, mana: 400, stamina: 85, descripcion: 'Inflinge entre 55 a 65 de Daño Magico al Objetivo' },
        { nombre: 'Elemental de Fuego (Mago/Bardo/Clerigo)', precio: 450000, skills: 100, mana: 1000, stamina: 145, descripcion: 'Invoca un Elemental de Fuego que acudira en tu ayuda, Lanza Tormenta de Fuego a los Usuarios Objetivos. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago, Baculo Luminozo, Laud Magico o Laud Elfico Solo las Clases Mago y Bardo' },
        { nombre: 'Elemental de Fuego (Druida)', precio: 450000, skills: 100, mana: 750, stamina: 105, descripcion: 'Invoca un Elemental de Fuego que acudira en tu ayuda, Lanza Tormenta de Fuego a los Usuarios Objetivos. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Flauta Mágica o Flauta Elfica' },
        { nombre: 'Elemental de Agua (Mago/Bardo/Clerigo)', precio: 200000, skills: 100, mana: 1000, stamina: 130, descripcion: 'Invoca un Elemental de Agua que acudira en tu ayuda' },
        { nombre: 'Elemental de Agua (Druida)', precio: 200000, skills: 100, mana: 750, stamina: 90, descripcion: 'Invoca un Elemental de Agua que acudira en tu ayuda' },
        { nombre: 'Elemental de Tierra (Bardo/Clerigo)', precio: 300000, skills: 90, mana: 1000, stamina: 131, descripcion: 'Invoca un Elemental de Tierra que acudira en tu ayuda, Lanza Paralizar a los Usuarios Objetivos. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Laud Magico o Laud Elfico Solo la Clase Bardo' },
        { nombre: 'Elemental de Tierra (Druida)', precio: 300000, skills: 97, mana: 750, stamina: 120, descripcion: 'Invoca un Elemental de Tierra que acudira en tu ayuda, Lanza Paralizar a los Usuarios Objetivos. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Flauta Mágica o Flauta Elfica' },
        { nombre: 'Invisibilidad (Paladin/Asesino)', precio: 100000, skills: 87, mana: 400, stamina: 75, descripcion: 'Vuelve invisble al Objetivo, solo funciona en Usuarios' },
        { nombre: 'Explosion Faustica (Mago)', precio: 2000000, skills: 99, mana: 1700, stamina: 175, descripcion: 'Inflinge entre 97 a 103 de Daño Magico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Baculo Engarzado, Vara de Mago o Baculo Luminozo' },
        { nombre: 'Explosion Faustica (Bardo)', precio: 2000000, skills: 99, mana: 1700, stamina: 175, descripcion: 'Inflinge entre 110 a 115 de Daño Mágico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Laúd Mágico o Laúd Élfico' },
        { nombre: 'Explosión Fáustica (Druida)', precio: 2000000, skills: 99, mana: 1700, stamina: 175, descripcion: 'Inflinge entre 103 a 107 de Daño Mágico al Objetivo. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Flauta Mágica o Flauta Élfica' },
        { nombre: 'Implorar Ayuda (Druida)', precio: 600000, skills: 100, mana: 1500, stamina: 150, descripcion: 'Invoca un Fuego Fatuo que acudirá en tu ayuda, Lanza Paralizar y Descarga Eléctrica a los Usuarios Objetivos. Para poder lanzar esta magia necesitas tener equipado alguno de los siguientes objetos: Flauta Mágica o Flauta Elfica' },
        { nombre: 'Invocar Tigre (Asesino/Paladin)', precio: 125000, skills: 100, mana: 600, stamina: 50, descripcion: 'Invoca 3 Tigres que acudirá en tu ayuda.' }
      ]
    }
  },
  {
    id: 'items',
    title: 'Items',
    icon: 'package',
    content: {
      description: 'Catálogo completo de items, armas y armaduras de CucsiAO.',
      categories: [
        {
          id: 'herreria',
          title: '1 - Herrería | Comerciante y Creación',
          icon: 'hammer',
          subcategories: [
            { id: '1.1', title: 'Armas de Comerciante' },
            { id: '1.2', title: 'Armaduras, Escudos y Cascos de Comerciante' },
            { id: '1.3', title: 'Armaduras de Herrero' },
            { id: '1.4', title: 'Armas de Herrero' },
            { id: '1.5', title: 'Escudos y Cascos de Herrero' }
          ]
        },
        {
          id: 'carpinteria',
          title: '2 - Carpintería | Comerciante y Creación',
          icon: 'axe',
          subcategories: [
            { id: '2.1', title: 'Carpintería de Comerciante' },
            { id: '2.2', title: 'Carpintería de Creación (Trabajador)' }
          ]
        },
        {
          id: 'sastreria',
          title: '3 - Sastrería | Comerciante y Creación',
          icon: 'shirt',
          subcategories: [
            { id: '3.1', title: 'Vestimentas y Túnicas de Comerciante' },
            { id: '3.2', title: 'Vestimentas y Túnicas de Sastrería (Trabajador)' }
          ]
        },
        {
          id: 'otros',
          title: '4 - Otros',
          icon: 'box',
          subcategories: [
            { id: '4.1', title: 'Items de Entrenamiento' },
            { id: '4.2', title: 'Sombreros y Báculos' },
            { id: '4.3', title: 'Items de Alquimia' },
            { id: '4.4', title: 'Items Únicos' },
            { id: '4.5', title: 'Items de Torneo/Canje' },
            { id: '4.6', title: 'Sets de Nobleza' },
            { id: '4.7', title: 'Reutilización de Recursos' }
          ]
        }
      ],
      subsections: {
        '1.1': {
          title: 'Armas de Comerciante',
          intro: 'Las armas permiten a los personajes infligir más daño son sus ataques y pueden alterar la modalidad con la que estos combaten variando los modificadores a contemplar ya sean de combate sin armas, combate cuerpo a cuerpo o combate a distancia. Algunas armas poseen funciones especiales como brindar la posibilidad de apuñalar, daño mágico entre otras características.',
          note: 'Las armas de comerciantes son aquellos items que podrán adquirir en cualquiera de los comerciantes (NPCs) de las Tierras Cucsi y dado a que son items que se comercializan NO podrán ser forjados por la clase HERRERO.',
          tables: [
            {
              title: 'Armas Cuerpo a Cuerpo',
              description: 'Las armas cuerpo a cuerpo requieren que nuestro personaje este al lado de su objetivo. Para atacar con armas de este tipo deberemos de tenerla equipada y utilizar la tecla Control por defecto.',
              headers: ['Item', 'Daño', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Espada Larga', '10/18', 'Asesino, Guerrero, Bandido, Paladin, Cazador, Clerigo y Trabajador', '2.000'],
                ['Martillo de Guerra', '22/30', 'Todos menos MAGO, DRUIDA, LADRON y BARDO', '20.000'],
                ['Hacha de Guerra Dos Filos', '34/42', 'Guerrero, Bandido, Paladin y Clerigo', '40.000']
              ]
            },
            {
              title: 'Dagas',
              description: 'Estas armas poseen la posibilidad de apuñalar a su objetivo al acertar el golpe inicial a la víctima (cuerpo a cuerpo). El daño producido con apuñalar es superior a cualquier otro daño provocado con un arma simple.',
              headers: ['Item', 'Daño', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Daga', '1/3', 'Todas', '100'],
                ['Daga +1', '2/4', 'Todas menos MAGO', '490'],
                ['Daga +2', '5/11', 'Todas menos MAGO', '2.000'],
                ['Daga +3', '14/18', 'Todas menos MAGO', '20.000'],
                ['Daga +4', '21/25', 'Todas menos MAGO', '40.000']
              ]
            },
            {
              title: 'Báculo Mago',
              description: 'Son objetos exclusivos para la Clase Mago las cuales le aumentan el daño a las magias.',
              headers: ['Item', 'Daño', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Vara de Fresno', '1/1', 'Mago', '2.000'],
                ['Bastón Nudoso', '1/1', 'Mago', '20.000'],
                ['Báculo Rúnico', '1/1', 'Mago', '40.000']
              ]
            },
            {
              title: 'Items Específicos',
              description: 'Son objetos exclusivos para las Clases Druida, Bardo y Clérigo las cuales le aumentan el daño a las magias y al clérigo le deja tirar hechizos mas potentes.',
              headers: ['Item', 'Daño', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Flauta Mágica Gastada', '1/1', 'Druida', '20.000'],
                ['Laúd Mágico Gastado', '1/1', 'Bardo', '20.000'],
                ['Crucifijo', '1/1', 'Clerigo', '20.000']
              ]
            },
            {
              title: 'Arcos y Cuchillas',
              description: 'Son armas para combate a distancia permitiendo atacar a cualquier objetivo dentro del campo visual (pantalla del juego). Los arcos son caracterizados por ser armas de DOS manos y utilizar munición.',
              headers: ['Item', 'Daño', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Arco Simple (Dos Manos)', '10/18', 'Todas menos MAGO y DRUIDA', '2.000'],
                ['Arco Compuesto (Dos Manos)', '22/30', 'Todas menos MAGO, DRUIDA y PIRATA', '20.000'],
                ['Arco de Oro (Dos Manos)', '34/42', 'Todas menos MAGO, DRUIDA y PIRATA', '40.000'],
                ['Flecha', '1/3', 'Todas menos MAGO y DRUIDA', '6'],
                ['Flecha +1', '2/4', 'Todas menos MAGO y DRUIDA', '10'],
                ['Cuchillas', '7/16', 'Ladron', '50']
              ]
            },
            {
              title: 'Guantes',
              description: 'Son objetos exclusivos para las Clases Bandido y Ladrón las cuales habilitan habilidades especiales o aumentan el daño producido en combate sin armas.',
              headers: ['Item', 'Daño', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Guantes de Hurto', '1/2', 'Ladron y Bandido', '5.000'],
                ['Guantes de Lucha', '2/5', 'Ladron y Bandido', '10.000']
              ]
            }
          ]
        },
        '1.2': {
          title: 'Armaduras, Escudos y Cascos de Comerciante',
          intro: 'Las armaduras son objetos que al equiparse en un personaje nos proporcionaran defensa física y/o defensa mágica contra los ataques recibidos. Las armaduras que un personaje puede utilizar dependerán según su clase, raza o género.',
          note: 'Las armaduras de comerciantes son aquellos items que podrán adquirir en cualquiera de los comerciantes (NPCs) de las Tierras Cucsi y dado a que son items que se comercializan NO podrán ser forjados por la clase HERRERO.',
          references: ['(M) - Estos items solo podrán utilizarlos el Género MUJER.', '(E/G) - Estos items solo podrán utilizarlos la Raza Enano o Gnomo.'],
          tables: [
            {
              title: 'Armaduras',
              headers: ['Item', 'Defensa', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Armadura de Cuero', '6/9', 'Todas menos MAGO', '2.000'],
                ['Armadura de Cuero (G/E)', '6/9', 'Todas menos MAGO', '2.000'],
                ['Cotas de Malla', '9/14', 'Todas menos MAGO y DRUIDA', '7.000'],
                ['Cotas de Malla (E/G)', '9/14', 'Todas menos MAGO y DRUIDA', '7.000'],
                ['Armadura de las Sombras', '13/17', 'Asesino', '15.000'],
                ['Armadura de las Sombras (E/G)', '13/17', 'Asesino', '15.000'],
                ['Armadura de Cazador', '13/17', 'Cazador', '15.000'],
                ['Armadura de Cazador (E/G)', '13/17', 'Cazador', '15.000'],
                ['Armadura de Placas Completa', '14/18', 'Guerrero, Paladin, Cazador y Clerigo', '15.000'],
                ['Armadura de Placas Completa (E/G)', '14/18', 'Guerrero, Paladin, Cazador y Clerigo', '15.000']
              ]
            },
            {
              title: 'Escudos',
              description: 'Los escudos son objetos que al equiparse en un personaje nos proporcionan la chance de bloquear los ataques físicos y también reducen el daño infligido por los golpes recibidos.',
              headers: ['Item', 'Defensa', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Escudo de Tortuga', '1/3', 'Todas menos MAGO, LADRON y PIRATA', '2.000'],
                ['Escudo de Hierro', '4/6', 'Druida, Guerrero, Bandido, Paladin, Clerigo', '4.000'],
                ['Escudo Imperial', '4/7', 'Todas menos MAGO, DRUIDA, LADRON y PIRATA', '5.000']
              ]
            },
            {
              title: 'Cascos',
              description: 'Los cascos son objetos que al equiparse en un personaje nos proporcionaran defensa contra los ataques físicos recibidos en la cabeza y en algunos casos defensa contra los ataques mágicos.',
              headers: ['Item', 'Defensa', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Casco de Hierro', '2/4', 'Todas menos MAGO, DRUIDA y PIRATA', '2.000'],
                ['Casco de Hierro Completo', '5/8', 'Todas menos MAGO, DRUIDA, LADRON, BARDO y PIRATA', '5.000'],
                ['Casco de lobo', '4/6 y 2/4 rm', 'DRUIDA y BARDO', '5.000']
              ]
            }
          ]
        },
        '1.3': {
          title: 'Armaduras de Herrero',
          intro: 'Las armaduras de herrero son los items que podrás adquirir forjándolos a través de una clase Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles necesarios en herrería como así también los recursos que se informan a continuación para crearlos:',
          tables: [
            {
              title: 'Armaduras Forjables',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases', 'L. Hierro', 'L. Plata', 'L. Oro', 'Skills'],
              rows: [
                ['Armadura de Placas de Gala Dorada', '17/21', '5/8', 'Asesino, Cazador y Clerigo', '343', '160', '0', '98'],
                ['Armadura de Epsilon', '20/24', '3/5', 'Guerrero y Paladin', '343', '160', '0', '100'],
                ['Armadura de Caballero', '21/26', '9/14', 'Asesino, Cazador y Clerigo', '514', '270', '154', '97'],
                ['Armadura de Omega', '23/27', '5/11', 'Paladin', '514', '270', '154', '100'],
                ['Armadura de Dragón', '25/29', '4/6', 'Guerrero', '514', '270', '154', '100']
              ]
            }
          ]
        },
        '1.4': {
          title: 'Armas de Herrero',
          intro: 'Las armas de herrero son los items que podrás adquirir forjándolos a través de una clase Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles necesarios en herrería como así también los recursos que se informan a continuación para crearlos:',
          tables: [
            {
              title: 'Armas de Una Mano',
              description: 'Las armas de Una Mano nos brindan la posibilidad de equiparnos un Escudo para así aumentar nuestra defensa física.',
              headers: ['Item', 'Daño', 'Clases', 'L. Hierro', 'L. Plata', 'L. Oro', 'Skills', 'Nivel'],
              rows: [
                ['Espada Helada', '46/54', 'Guerrero, Paladin y Clerigo', '343', '160', '0', '85', '-'],
                ['Rompe Cascos Superior', '58/66', 'Clerigo', '514', '270', '154', '100', '40'],
                ['Excalibur II', '58/66', 'Paladin', '514', '270', '154', '100', '40'],
                ['Espada Argentum', '58/66', 'Guerrero', '514', '270', '154', '100', '40']
              ]
            },
            {
              title: 'Armas de Dos Manos',
              description: 'Al contrario de las armas de una mano no podremos equiparnos Escudos pero obtendremos el beneficio de infligir un mayor daño a la víctima.',
              headers: ['Item', 'Daño', 'Clases', 'L. Hierro', 'L. Plata', 'L. Oro', 'Skills', 'Nivel'],
              rows: [
                ['Maza Oscura (Dos Manos) (1)', '2/5', 'Guerrero', '514', '270', '154', '100', '40'],
                ['Martillo Sagrado (Dos Manos) (1)', '3/6', 'Paladin', '514', '270', '154', '100', '40'],
                ['Espada Mata Dragones (Dos Manos) (2)', '1000/1000', 'Todos menos MAGO, DRUIDA, LADRON Y BARDO. Nivel 40+', '750', '500', '250', '100', '40'],
                ['Espada Extermina Dragones (Dos Manos) (2)', '1000/1000', 'GUERRERO Y CAZADOR (No se quema). Nivel 45+', '2500', '1400', '750', '100', '45'],
                ['Báculo Mata Dragones (Dos Manos) (3)', '1000/1000', 'MAGO, DRUIDA Y BARDO. Nivel 40+', '750', '500', '250', '100', '40']
              ],
              notes: [
                '(1) - Poderosas armas con la habilidad especial de realizar un DOBLE GOLPE, de acertar el primer golpe infligiremos instantáneamente un segundo golpe (75% de chance) a la víctima.',
                '(2) - Con esta arma podremos infligir un daño letal por golpe a las criaturas DRAGONES la cual de acertar el último golpe matando a la criatura instantáneamente la espada se romperá desapareciéndola de tu inventario (Quemar).',
                '(3) - Con esta arma podremos infligir un daño letal por golpe a las criaturas DRAGONES la cual de acertar el último hechizo matando a la criatura instantáneamente el báculo se romperá (Quemar).'
              ]
            },
            {
              title: 'Dagas',
              description: 'Estas armas poseen la posibilidad de apuñalar a su objetivo al acertar el golpe inicial a la víctima (cuerpo a cuerpo).',
              headers: ['Item', 'Daño', 'Clases', 'L. Hierro', 'L. Plata', 'L. Oro', 'Skills', 'Nivel'],
              rows: [
                ['Daga', '1/3', 'Todas', '10', '-', '-', '10', '-'],
                ['Daga Gris', '27/30', 'Asesino, Bardo y Druida', '343', '160', '0', '85', '-'],
                ['Daga De la Oscuridad', '31/34', 'Asesino (No usa raza orco, enano)', '514', '270', '154', '100', '40']
              ]
            }
          ]
        },
        '1.5': {
          title: 'Escudos y Cascos de Herrero',
          intro: 'Los Escudos y Cascos de herrero son los items que podrás adquirir forjándolos a través de una clase Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles necesarios en herrería como así también los recursos que se informan a continuación para crearlos:',
          tables: [
            {
              title: 'Escudos',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases', 'L. Hierro', 'L. Plata', 'L. Oro', 'Skills'],
              rows: [
                ['Escudo de Plata', '9/12', '-', 'Guerrero, Paladin y Clerigo', '171', '80', '0', '98'],
                ['Escudo de Leon', '8/11', '-', 'Clerigo, Asesino, Bardo y Druida', '171', '80', '0', '98'],
                ['Rodela de Madera Reforzada', '11/13', '-', 'Druida', '257', '135', '77', '73'],
                ['Escudo Rustico', '12/14', '-', 'Bardo', '257', '135', '77', '80'],
                ['Escudo Oscuro', '12/14', '-', 'Asesino', '257', '135', '77', '97'],
                ['Escudo del Gran Imperio', '12/14', '-', 'Clerigo', '257', '135', '77', '99'],
                ['Escudo del Gran Imperio +1', '13/16', '-', 'Guerrero y Cazador', '257', '135', '77', '100'],
                ['Escudo de Caballero', '12/15', '-', 'Paladin', '257', '135', '77', '100']
              ]
            },
            {
              title: 'Cascos',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases', 'L. Hierro', 'L. Plata', 'L. Oro', 'Skills'],
              rows: [
                ['Casco de Gran Maestre', '12/15', '-', 'Paladin y Cazador', '171', '80', '0', '99'],
                ['Casco Oscuro', '10/13', '-', 'Asesino, Cazador y Clerigo', '171', '80', '0', '97'],
                ['Corona de baja calidad', '7/10', '4/5', 'Bardo', '171', '80', '0', '100'],
                ['Corona de bardo', '11/14', '5/7', 'Bardo', '257', '135', '77', '100'],
                ['Casco de Caballero', '13/15', '-', 'Cazador y Clerigo', '257', '135', '77', '97'],
                ['Casco de Gran Maestre Oscuro', '13/15', '-', 'Asesino', '257', '135', '77', '97'],
                ['Casco de Guerrero Completo', '18/22', '-', 'Guerrero', '257', '135', '77', '98'],
                ['Casco MAESTRE Dorado', '16/18', '-', 'Paladin', '257', '135', '77', '100'],
                ['Corona', '9/12', '10/12', 'Mago', '257', '135', '77', '100']
              ]
            }
          ]
        },
        '2.1': {
          title: 'Carpintería de Comerciante',
          intro: 'Las objetos de Carpintería de comerciantes son aquellos items que podrán adquirir en cualquiera de los comerciantes (NPCs) de las Tierras Cucsi y dado a que son items que se comercializan NO podrán ser forjados por la clase CARPINTERO.',
          tables: [
            {
              title: 'Items de Comerciante',
              headers: ['Item', 'Observación', 'Precio'],
              rows: [
                ['Cuchara', 'Adorno', '6'],
                ['Mueble Rustico', 'Adorno', '6'],
                ['Silla', 'Adorno', '6'],
                ['Flecha', 'Munición', '6']
              ]
            }
          ]
        },
        '2.2': {
          title: 'Carpintería de Creación (Trabajador)',
          intro: 'Los objetos de Carpintero son los items que podrás adquirir creándolos a través de una clase Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles necesarios en carpintería como así también los recursos que se informan a continuación para crearlos:',
          tables: [
            {
              title: 'Items de Carpintería',
              headers: ['Item', 'Leña', 'Leña Élfica', 'Skills', 'Clases / Observación'],
              rows: [
                ['Cuchara', '3', '-', '5', 'Adorno'],
                ['Tambor', '800', '-', '75', 'Adorno'],
                ['Flauta', '800', '-', '75', 'Adorno'],
                ['Caña de Pescar', '70', '-', '12', 'Todas'],
                ['Flecha', '1', '-', '20', 'Todas menos MAGO y DRUIDA'],
                ['Flecha +1', '3', '-', '40', 'Guerrero y Cazador'],
                ['Flecha +2', '5', '-', '60', 'Guerrero y Cazador'],
                ['Flecha +3', '7', '-', '90', 'Guerrero y Cazador'],
                ['Barca', '10.000', '-', '30', 'Todas / +5% de Velocidad Navegando'],
                ['Galera', '45.000', '25.000', '60', 'Todas / +10% de Velocidad Navegando'],
                ['Galeón', '90.000', '50.000', '100', 'Todas / +15% de Velocidad Navegando'],
                ['Arco de Perla Azul (46/52)', '8.000', '0', '90', 'Guerrero y Cazador'],
                ['Ballesta (54/60)', '12.000', '6.000', '100', 'Requiere Nivel 40 / Cazador'],
                ['Báculo Engarzado', '8.000', '-', '100', 'Mago - Bonificación de Daño Mágico en 7%'],
                ['Vara de Mago', '12.000', '6.000', '100', 'Mago - Bonificación de Daño Mágico en 10%'],
                ['Flauta Mágica', '4.000', '0', '100', 'Druida - Bonificación Daño Mágico 3% y 20% más chances en Domar'],
                ['Laúd Mágico', '4.000', '0', '100', 'Bardo - Bonificación Daño Mágico en 3%'],
                ['Flauta Élfico', '6.000', '3.000', '100', 'Druida - Bonificación Daño Mágico 5%, Ahorro Mana 40% en Mimetismo'],
                ['Laúd Élfico', '6.000', '3.000', '100', 'Bardo - Bonificación de Daño Mágico en 5%']
              ]
            }
          ]
        },
        '3.1': {
          title: 'Vestimentas y Túnicas de Comerciante',
          intro: 'Las Vestimentas y Túnicas son objetos que al equiparse en un personaje nos proporcionaran defensa física y/o defensa mágica contra los ataques recibidos. Las Vestimentas y Túnicas que un personaje puede utilizar dependerán según su clase, raza o género.',
          note: 'Las Vestimentas y Túnicas de comerciantes son aquellos items que podrán adquirir en cualquiera de los comerciantes (NPCs) de las Tierras Cucsi y dado a que son items que se comercializan NO podrán ser forjados por la clase SASTRERIA. Las túnicas invernales solo pueden ser adquiridas en el comerciante de vestimentas de Lindos (Mapa 54).',
          tables: [
            {
              title: 'Altos',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Vestimentas Comunes', '0/0', '-', 'Todas', '50'],
                ['Túnica Roja', '5/8', '-', 'Bardo, Druida y Mago', '2.000'],
                ['Túnica de Monje', '8/12', '2/5', 'Bardo, Druida y Mago', '7.000'],
                ['Túnica infernal', '12/15', '5/7', 'Bardo, Druida y Mago', '15.000'],
                ['Túnica Invernal', '10/10', '-', 'Todas', '80.000']
              ]
            },
            {
              title: 'Bajos',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases Permitidas', 'Precio'],
              rows: [
                ['Vestimentas Comunes', '0/0', '-', 'Todas', '50'],
                ['Túnica Roja', '5/8', '-', 'Bardo, Druida y Mago', '2.000'],
                ['Túnica de Monje', '8/12', '2/5', 'Bardo, Druida y Mago', '7.000'],
                ['Túnica infernal', '12/15', '5/7', 'Bardo, Druida y Mago', '15.000'],
                ['Túnica Invernal', '10/10', '-', 'Todas', '80.000']
              ]
            }
          ]
        },
        '3.2': {
          title: 'Vestimentas y Túnicas de Sastrería (Trabajador)',
          intro: 'Las Vestimentas y Túnicas de Trabajador son los items que podrás adquirir forjándolos a través de una clase Trabajadora (Trabajador) pero para poder realizar los mismos deberán de poseer los skiles necesarios en sastrería como así también los recursos que se informan a continuación para crearlos:',
          references: ['(M) - Estos items solo podrán utilizarlos el Género MUJER.', '(E/G) - Estos items solo podrán utilizarlos la Raza Enano o Gnomo.', '(E/G-M) - Estos items solo podrán utilizarlos el Género MUJER y la Raza Enano o Gnomo.'],
          tables: [
            {
              title: 'Vestimentas y Túnicas',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases', 'O. Oveja', 'O. Cabra', 'O. Llama', 'Skills'],
              rows: [
                ['Vestimentas Comunes', '0/0', '0/0', 'Todas', '10', '-', '-', '10'],
                ['Ropa de Enano (E/G)', '0/0', '0/0', 'Todas', '10', '-', '-', '10'],
                ['Túnica Invernal', '10/10', '0/0', 'Todas', '200', '50', '-', '30'],
                ['Túnica Invernal (M)', '10/10', '0/0', 'Todas', '200', '50', '-', '30'],
                ['Túnica Invernal (E/G)', '10/10', '0/0', 'Todas', '200', '50', '-', '30'],
                ['Túnica Legendaria', '15/19', '7/12', 'Mago/Bardo/Druida', '343', '160', '0', '50'],
                ['Túnica de Dragon', '20/24', '12/18', 'Bardo', '514', '270', '154', '80'],
                ['Túnica de Druida', '19/23', '14/20', 'Druida', '514', '270', '154', '80'],
                ['Túnica Maléfica', '19/21', '16/22', 'Mago', '514', '270', '154', '90'],
                ['Vestimenta de la Oscuridad (1)', '1/1', '0/0', 'Guerrero/Cazador', '343', '160', '0', '100'],
                ['Vestimenta de la Oscuridad (G/E) (1)', '1/1', '0/0', 'Guerrero/Cazador', '343', '160', '0', '100'],
                ['Sombrero mágico azul', '6/8', '6/8', 'Mago', '171', '90', '0', '90'],
                ['Casco de oso', '6/8', '4/6', 'Druida', '171', '90', '0', '90'],
                ['Casco de tigre', '9/12', '8/10', 'Druida', '257', '135', '77', '90']
              ],
              notes: ['(1) - Solo las Clases Guerrero y Cazador caminarán ocultos con esta vestimenta.']
            }
          ]
        },
        '4.1': {
          title: 'Items de Entrenamiento',
          intro: 'Los Items de Entrenamiento son aquellos que recibiremos únicamente como recompensas a través de nuestro Sistema de Quest. La particularidad de estos objetos es que NO SE CAERÁN al morir pero DESAPARECERÁN en Nivel 26 incluyendo de las Mágias.',
          tables: [
            {
              title: 'Equipo',
              headers: ['Item', 'Daño', 'Def. Corporal', 'Def. Mágica', 'Clases Permitidas'],
              rows: [
                ['Espada de Entrenamiento', '3/7', '-', '-', 'Todas MENOS Mago, Bardo, Druida, Pirata y Trabajador'],
                ['Espada Corta de Entrenamiento', '1/5', '-', '-', 'Todas'],
                ['Vara de Entrenamiento', '16%', '-', '-', 'Mago'],
                ['Arco de Entrenamiento (Dos Manos)', '1/3', '-', '-', 'Todas MENOS Mago, Bardo, Druida, Pirata y Trabajador'],
                ['Flecha de Entrenamiento', '1/2', '-', '-', 'Todas MENOS Mago, Bardo, Druida, Pirata y Trabajador'],
                ['Cota de Entrenamiento', '-', '4/7', '-', 'Todas MENOS Mago, Bardo, Druida, Pirata y Trabajador'],
                ['Cota de Entrenamiento (E/G)', '-', '4/7', '-', 'Todas MENOS Mago, Bardo, Druida, Pirata y Trabajador'],
                ['Túnica de Entrenamiento', '-', '3/5', '-', 'Mago, Bardo y Druida'],
                ['Túnica de Entrenamiento (E/G)', '-', '3/5', '-', 'Mago, Bardo y Druida'],
                ['Escudo de Entrenamiento', '-', '1/3', '-', 'Todas MENOS Mago, Bardo, Druida, Pirata y Trabajador'],
                ['Escudo de Entrenamiento', '-', '1/2', '-', 'Bardo y Druida'],
                ['Casco de Entrenamiento', '-', '1/3', '-', 'Todas MENOS Mago, Bardo, Druida, Pirata y Trabajador'],
                ['Sombrero de Entrenamiento', '-', '1/1', '1/1', 'Mago, Bardo y Druida']
              ]
            },
            {
              title: 'Pociones',
              headers: ['Item', 'Bonificación', 'Modificación'],
              rows: [
                ['Poción Roja de Entrenamiento', 'Recupera Vida', '10-25'],
                ['Poción de Energía de Entrenamiento', 'Recupera Energía', '15-35'],
                ['Poción Azul de Entrenamiento', 'Recupera Mana', '20-40'],
                ['Poción Amarilla de Entrenamiento', 'Aumenta la Agilidad', '2-4'],
                ['Poción Verde de Entrenamiento', 'Aumenta la Fuerza', '2-4']
              ]
            },
            {
              title: 'Magias',
              headers: ['Hechizo', 'Skill', 'Mana', 'Energía', 'Clases', 'Descripción'],
              rows: [
                ['Mascota de Entrenamiento', '38', '220', '50', 'Paladín, Clérigo, Asesino, Bandido, Bardo, Druida y Mago', 'Invoca Tortugas de Entrenamiento. Requiere Nivel 13+'],
                ['Mascota de Entrenamiento', '-', '-', '200', 'Pirata, Cazador, Guerrero, Trabajador y Ladron', 'Invoca Osos de Entrenamiento. Requiere Nivel 13+'],
                ['Meteoro', '38', '50', '15', 'Paladín, Clérigo, Asesino, Bandido, Bardo, Druida y Mago', 'Causa 35-55 daño a criaturas. Solo NPCs. Nivel 13+'],
                ['Primeros Auxilios', '38', '40', '20', 'Paladín, Clérigo, Asesino, Bandido, Bardo, Druida y Mago', 'Cura entre 10-20 de salud. Nivel 13+'],
                ['Conjuro del estupor', '90*', '0', '475', 'Cazador y Guerrero', 'Encanta el arma para inmovilizar criaturas con el siguiente golpe']
              ],
              notes: ['*Te recomendamos subir los skills naturalmente utilizando "Mascota de entrenamiento" para no tener que asignarlos en "Magia".']
            }
          ]
        },
        '4.2': {
          title: 'Sombreros y Báculos',
          intro: 'Los siguientes artículos podrán ser adquiridos a través del comerciante de Magia (NPCs) de las Tierras Cucsi. Los báculos son poderosas armas de los magos que brindan una bonificación mágica y los Sombreros son ítems cuales nos proporcionarán tanto defensa física como defensa mágica:',
          note: 'El Sombrero de Mago solo podrá ser adquirido en el comerciante Mago de Nueva Esperanza (Mapa 58).',
          tables: [
            {
              title: 'Sombreros y Báculos',
              headers: ['Item', 'Daño', 'Def. Corporal', 'Def. Mágica', 'Clases', 'Precio'],
              rows: [
                ['Sombrero de Aprendiz', '-', '2/4', '2/3', 'Mago y Druida', '6.000'],
                ['Sombrero de Mago', '-', '4/6', '3/6', 'Mago', '12.000'],
                ['Vara de Fresno', '0%', '-', '-', 'Mago', '2.000'],
                ['Bastón Nudoso', '2%', '-', '-', 'Mago', '7.000'],
                ['Báculo Rúnico', '4%', '-', '-', 'Mago', '15.000'],
                ['Flauta mágica gastada', '2%', '-', '-', 'Druida', '7.000'],
                ['Laud mágico gastado', '2%', '-', '-', 'Bardo', '7.000'],
                ['Crucifijo', '0%', '-', '-', 'Clerigo', '7.000']
              ]
            }
          ]
        },
        '4.3': {
          title: 'Items de Alquimia',
          intro: 'La alquimia es el arte para elaborar pociones las cuales surgirán efecto en nuestro personaje. Para poder elaborarlas deberemos de poseer una clase Druida ya que este arte es exclusivo de la misma y contar con los skiles necesarios en botánica como así también los recursos que se informan a continuación para crearlos:',
          tables: [
            {
              title: 'Pociones de Alquimia',
              headers: ['Item', 'Estado', 'Bonificación', 'Raíces', 'Skills'],
              rows: [
                ['Poción Violeta (Druida)', 'Cura el veneno', '-', '10', '10'],
                ['Poción Roja', 'Recupera Vida', '25-29', '14', '10'],
                ['Poción de Energía', 'Recupera energía', '25-50', '50', '30'],
                ['Poción de Energía (Druida)', 'Recupera más energía', '50-100', '100', '30'],
                ['Poción Azul (Druida)', 'Recupera más mana', '100-150', '200', '50'],
                ['Poción Azul', 'Recupera mana', '50-75', '14', '60'],
                ['Poción Amarilla', 'Aumenta la agilidad', '4-6', '14', '60'],
                ['Poción Verde', 'Aumenta la fuerza', '4-6', '14', '60'],
                ['Poción Roja (Druida)', 'Recupera más vida', '29-33', '100', '60'],
                ['Poción Amarilla (Druida)', 'Aumenta más la agilidad', '8-10', '250', '70'],
                ['Poción Verde (Druida)', 'Aumenta más la fuerza', '8-10', '300', '80'],
                ['Poción Anti Ceguera', 'Devuelve la visión', '-', '2.000', '100'],
                ['Poción Anti Estupidez', 'Vuelve a la normalidad', '-', '2.000', '100'],
                ['Poción Anti Parálisis', 'Remueve la parálisis', '-', '4.000', '100']
              ]
            }
          ]
        },
        '4.4': {
          title: 'Items Únicos',
          intro: 'Los items Únicos son items exclusivos por DROP lo que significa que para poder adquirirlos solamente lo podremos realizar con la matanza de criaturas. La particularidad de estos items es que al morir no los perderemos (No se caen). Para poder hacernos de ellos deberemos de dirigirnos a Dungeon Castillo:',
          references: ['(G/E) - Estos items solo podrán utilizarlos la Raza Gnomo o Enano.'],
          tables: [
            {
              title: 'Items Únicos por Drop',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases', '¿Cómo se Consigue?'],
              rows: [
                ['Túnica del Dios de Thaos', '2/4', '-', 'Mago, Druida y Bardo', 'Archimago del Castillo (2%) - Arcangel Armado (1%)'],
                ['Túnica Del Dios Thaos (G/E)', '2/4', '-', 'Mago, Druida y Bardo', 'Mago del Castillo (2%) - Arcangel Armado (1%)'],
                ['Armadura De Piel de Golem Alado', '2/4', '-', 'Paladín, Guerrero y Cazador', 'Guerrero Armado del Castillo (2%) - Arcangel Armado (1%)'],
                ['Armadura De Piel de Golem Alado (G/E)', '2/4', '-', 'Paladín, Guerrero y Cazador', 'Arquero del Castillo (2%) - Arcangel Armado (1%)'],
                ['Armadura De La Daga Sangrienta', '2/4', '-', 'Clérigo y Asesino', 'Paladin del Castillo (2%) - Arcangel Armado (1%)'],
                ['Armadura De La Daga Sangrienta (G/E)', '2/4', '-', 'Clérigo y Asesino', 'Plebello del Castillo (2%) - Arcangel Armado (1%)']
              ]
            }
          ]
        },
        '4.5': {
          title: 'Items de Torneo/Canje',
          intro: 'Los items de Canje o Torneo son los Segundos objetos más poderosos de toda la tierra Cucsi, los Primeros son los items de Nobleza. Los objetos de Canje NO podrán ser forjados por un herrero o ser conseguidos a través de drop. Para poder hacerse con ellos deberán de ser canjeados a través de nuestro sistema de canje.',
          note: 'IMPORTANTE: Todos los items que se informan a continuación SE CAEN a excepción de las Medallas, los Trofeos y los Espíritus. ACCESO: MENU > CANJE',
          tables: [
            {
              title: 'Trofeos',
              headers: ['Item', 'T. Bronce', 'T. Plata', 'T. Oro', 'M. Oro', 'M. Plata', 'Ptos Usuario', 'Beneficio'],
              rows: [
                ['Trofeo de Oro', '-', '3', '-', '-', '-', '-', 'Objeto de Canje'],
                ['Trofeo de Plata', '3', '-', '-', '-', '-', '-', 'Objeto de Canje'],
                ['Trofeo de Oro', '-', '-', '-', '3', '-', '-', 'Objeto de Canje'],
                ['Trofeo de Plata', '-', '-', '-', '-', '3', '-', 'Objeto de Canje'],
                ['Trofeo de Bronce', '-', '-', '-', '-', '-', '100', 'Objeto de Canje']
              ]
            },
            {
              title: 'Armaduras de Canje',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases', 'T. Oro', 'Ptos Usuario'],
              rows: [
                ['Armadura Clerigal', '24/28', '12/19', 'Clerigo', '10', '2500'],
                ['Túnica Bardal', '22/27', '17/25', 'Bardo', '10', '2500'],
                ['Armadura de las Tinieblas', '24/29', '12/19', 'Asesino', '10', '2500'],
                ['Armadura Sagrada', '27/32', '9/15', 'Paladin', '10', '2500'],
                ['Armadura del Rey', '28/33', '6/9', 'Guerrero y Cazador', '10', '2500'],
                ['Túnica Archimago', '20/24', '19/27', 'Mago y Druida', '10', '2500']
              ]
            },
            {
              title: 'Escudos de Canje',
              headers: ['Item', 'Def. Corporal', 'Clases', 'T. Oro', 'Ptos Usuario'],
              rows: [
                ['Escudo Maldito', '15/19', 'Guerrero, Paladin y Cazador', '5', '2000'],
                ['Escudo de la Oscuridad', '14/16', 'Asesino y Clerigo', '5', '2000'],
                ['Escudo Sagrado', '13/15', 'Bardo y Druida', '5', '2000']
              ]
            },
            {
              title: 'Cascos de Canje',
              headers: ['Item', 'Def. Corporal', 'Def. Mágica', 'Clases', 'T. Oro', 'Ptos Usuario'],
              rows: [
                ['Corona Oscura', '13/17', '10/12', 'Bardo y Druida', '5', '2000'],
                ['Corona Sagrada', '11/14', '13/15', 'Mago', '5', '2000'],
                ['Casco Sagrado', '21/24', '-', 'Guerrero, Paladin y Cazador', '5', '2000'],
                ['Gran Maestre de las Tinieblas', '16/19', '-', 'Asesino y Clerigo', '5', '2000']
              ]
            },
            {
              title: 'Armas de Canje',
              headers: ['Item', 'Daño', 'Clases', 'T. Oro', 'Ptos Usuario'],
              rows: [
                ['Arco Argentum (Dos Manos)', '58/64', 'Cazador', '5', '2000'],
                ['Báculo Luminozo (12% Bonif.)', '10/10', 'Mago', '5', '2000'],
                ['Espada de la Luz', '64/72', 'Guerrero', '5', '2000'],
                ['Daga Sangrienta', '33/36', 'Asesino', '5', '2000'],
                ['Hacha Sombria', '64/72', 'Clerigo', '5', '2000'],
                ['Daga Bardal', '29/32', 'Bardo y Druida', '5', '2000'],
                ['Excalibur de Oro', '64/72', 'Paladin', '5', '2000']
              ]
            },
            {
              title: 'Espíritus (Teletransporte)',
              headers: ['Item', 'Efecto', 'Ptos Usuario'],
              rows: [
                ['Espíritu Cementerio', 'Te teletransporta a Cementerio/Mausoleo (Mapa 79)', '2500'],
                ['Espíritu Marabel', 'Te teletransporta a Dungeon Marabel (Mapa 28)', '2500'],
                ['Espíritu Castillo', 'Te teletransporta a Dungeon Castillo (Mapa 62)', '2500'],
                ['Espíritu Verill', 'Te teletransporta a Dungeon Verill (Mapa 39)', '3500'],
                ['Espíritu Dragón', 'Te teletransporta a Dungeon Dragón (Mapa 47)', '4500']
              ]
            }
          ]
        },
        '4.6': {
          title: 'Sets de Nobleza',
          intro: 'Los equipos que mencionaremos a continuación son los mejores de las Tierras Cucsi con su beneficio exclusivo de que NO SE CAEN al morir.',
          classes: [
            {
              className: 'Mago',
              items: [
                { item: 'Baculo Noble de Mago', dano: '33% Bonificación Mágica', defFisica: '-', defMagica: '-' },
                { item: 'Corona Noble de Mago', dano: '-', defFisica: '15/19', defMagica: '3/5' },
                { item: 'Tunica Noble de Mago (Alto)', dano: '-', defFisica: '8/10', defMagica: '19/24' },
                { item: 'Tunica Noble de Mago (Bajos)', dano: '-', defFisica: '8/10', defMagica: '19/24' }
              ]
            },
            {
              className: 'Druida',
              items: [
                { item: 'Espada Noble de Druida', dano: '8/13', defFisica: '-', defMagica: '-' },
                { item: 'Casco Noble de Druida', dano: '-', defFisica: '17/21', defMagica: '4/6' },
                { item: 'Escudo Noble de Druida', dano: '-', defFisica: '8/13', defMagica: '-' },
                { item: 'Tunica Noble de Druida (Alto)', dano: '-', defFisica: '8/10', defMagica: '19/24' },
                { item: 'Tunica Noble de Druida (Bajos)', dano: '-', defFisica: '8/10', defMagica: '19/24' }
              ]
            },
            {
              className: 'Bardo',
              items: [
                { item: 'Espada Noble de Bardo', dano: '7/13', defFisica: '-', defMagica: '-' },
                { item: 'Corona Noble de Bardo', dano: '-', defFisica: '17/21', defMagica: '4/6' },
                { item: 'Escudo Noble de Bardo', dano: '-', defFisica: '10/15', defMagica: '-' },
                { item: 'Tunica Noble de Bardo (Alto)', dano: '-', defFisica: '8/10', defMagica: '19/24' },
                { item: 'Tunica Noble de Bardo (Bajos)', dano: '-', defFisica: '8/10', defMagica: '19/24' }
              ]
            },
            {
              className: 'Asesino',
              items: [
                { item: 'Daga Noble de Asesino', dano: '8/9', defFisica: '-', defMagica: '-' },
                { item: 'Casco Noble de Asesino', dano: '-', defFisica: '25/30', defMagica: '-' },
                { item: 'Escudo Noble de Asesino', dano: '-', defFisica: '13/16', defMagica: '-' },
                { item: 'Tunica Noble de Asesino (Alto)', dano: '-', defFisica: '12/15', defMagica: '6/13' },
                { item: 'Tunica Noble de Asesino (Bajos)', dano: '-', defFisica: '12/15', defMagica: '6/13' }
              ]
            },
            {
              className: 'Clerigo',
              items: [
                { item: 'Hacha Noble de Clerigo', dano: '14/18', defFisica: '-', defMagica: '-' },
                { item: 'Casco Noble de Clerigo', dano: '-', defFisica: '16/24', defMagica: '-' },
                { item: 'Escudo Noble de Clerigo', dano: '-', defFisica: '13/16', defMagica: '-' },
                { item: 'Tunica Noble de Clerigo (Alto)', dano: '-', defFisica: '12/15', defMagica: '6/13' },
                { item: 'Tunica Noble de Clerigo (Bajos)', dano: '-', defFisica: '12/15', defMagica: '6/13' }
              ]
            },
            {
              className: 'Paladin',
              items: [
                { item: 'Espada Noble de Paladin', dano: '15/22', defFisica: '-', defMagica: '-' },
                { item: 'Casco Noble de Paladin', dano: '-', defFisica: '30/45', defMagica: '-' },
                { item: 'Escudo Noble de Paladin', dano: '-', defFisica: '14/19', defMagica: '-' },
                { item: 'Tunica Noble de Paladin (Alto)', dano: '-', defFisica: '15/20', defMagica: '7/15' },
                { item: 'Tunica Noble de Paladin (Bajos)', dano: '-', defFisica: '15/20', defMagica: '7/15' }
              ]
            },
            {
              className: 'Guerrero',
              items: [
                { item: 'Espada Noble de Guerrero', dano: '21/35', defFisica: '-', defMagica: '-' },
                { item: 'Casco Noble de Guerrero', dano: '-', defFisica: '30/45', defMagica: '-' },
                { item: 'Escudo Noble de Guerrero', dano: '-', defFisica: '14/19', defMagica: '-' },
                { item: 'Tunica Noble de Guerrero (Alto)', dano: '-', defFisica: '25/29', defMagica: '5/10' },
                { item: 'Tunica Noble de Guerrero (Bajos)', dano: '-', defFisica: '25/29', defMagica: '5/10' }
              ]
            },
            {
              className: 'Cazador',
              items: [
                { item: 'Arco Noble de Cazador', dano: '6/11', defFisica: '-', defMagica: '-' },
                { item: 'Casco Noble de Cazador', dano: '-', defFisica: '30/45', defMagica: '-' },
                { item: 'Escudo Noble de Cazador', dano: '-', defFisica: '14/19', defMagica: '-' },
                { item: 'Tunica Noble de Cazador (Alto)', dano: '-', defFisica: '21/25', defMagica: '6/12' },
                { item: 'Tunica Noble de Cazador (Bajos)', dano: '-', defFisica: '21/25', defMagica: '6/12' }
              ]
            }
          ]
        },
        '4.7': {
          title: 'Reutilización de Recursos',
          intro: 'Sistema de reciclaje de items para recuperar recursos.',
          placeholder: 'Información sobre Fundir - Desmantelar - Deshilachar objetos próximamente...'
        }
      }
    }
  },
  {
    id: 'clanes',
    title: 'Clanes',
    icon: 'flag',
    content: {
      description: 'En las tierras de CucsiAO, los clanes juegan un rol muy importante.',
      intro: 'El objetivo de los mismos, es fomentar el juego en equipo y la confianza entre los diferentes personajes y amigos, así como también generar un sentido de pertenencia a un grupo con un objetivo común.',
      fundacion: 'Para poder fundar un clan deberemos de tipear /fundarclan y, en CucsiAO, existen 3 tipos de clanes:',
      tiposClan: {
        title: 'Tipos de Clan',
        headers: ['Tipo de Clan', 'Descripción'],
        rows: [
          { tipo: 'Neutral', descripcion: 'Se permiten ciudadanos y criminales, pero no miembros de la Armada Real ni la Legión Oscura' },
          { tipo: 'Ciudadano', descripcion: 'Se permiten ciudadanos y miembros de la Armada Real' },
          { tipo: 'Criminal', descripcion: 'Se permiten criminales y miembros de la Legión Oscura' }
        ]
      },
      nivelesClanIntro: 'Además, existe un sistema de Niveles de clan, en el que aumentar uno de ellos dependerá del esfuerzo colectivo de todos los miembros, y cada nivel dará una ventaja significativa respecto al anterior que hará que todos luchen para lograrlo. A continuación detallamos los diferentes niveles que existen y las ventajas de cada uno:',
      nivelesClan: {
        title: 'Niveles de Clan',
        levels: [
          {
            nivel: 1,
            requisitos: 'Ser nivel 25, 100 skills en Liderazgo, 500.000 monedas de oro',
            ventajas: [
              'Poder tener hasta 6 (Seis) miembros en un clan',
              'Poder ver invisible a los miembros de tu clan',
              'Poder hablar por consola con los miembros de tu clan',
              'Poder ingresar a los castillos',
              'Tu clan ganará 20 puntos de usuario (que serán repartidos entre los miembros conectados) cada 30 minutos por castillo conquistado'
            ]
          },
          {
            nivel: 2,
            requisitos: '500 puntos de usuario, 1 Gema de Clan, 1.000.000 de monedas de oro',
            ventajas: [
              'Poder tener hasta 8 (Ocho) miembros en un clan',
              'Poder enviar señales de tu posición actual en el mini-mapa a los miembros de tu clan',
              'Poder jugar guerras de clanes',
              'Poder teletransportarte automáticamente a los castillos usando el comando /IRCASTILLO'
            ]
          },
          {
            nivel: 3,
            requisitos: '600 puntos de usuario, 3 Gemas de Clan, 2.000.000 de monedas de oro',
            ventajas: [
              'Poder tener hasta 11 (Once) miembros en un clan',
              'Poder trabajar en las catacumbas del castillo',
              'El rey de tu castillo invocará un clérigo defensor para que lo cure cuando esté por morir'
            ]
          },
          {
            nivel: 4,
            requisitos: '720 puntos de usuario, 5 Gemas de Clan, 3.500.000 de monedas de oro',
            ventajas: [
              'Poder tener hasta 13 (Trece) miembros en un clan',
              'Poder teletransportarte automáticamente a la fortaleza de clan teniendo los 4 castillos y tipeando /FORTALEZA',
              'El rey de tu castillo invocará unos Magos defensores cuando se sienta atacado'
            ]
          },
          {
            nivel: 5,
            requisitos: '900 puntos de usuario, 10 Gemas de Clan, 1 Gema de BliBla, 5.000.000 de monedas de oro',
            ventajas: [
              'Poder tener hasta 16 (Dieciséis) miembros en un clan',
              'Mantener un castillo reparte 30 puntos de usuario',
              'El rey de tu castillo invocará unos arqueros defensores cuando se sienta atacado'
            ]
          },
          {
            nivel: 6,
            requisitos: '1.700 puntos de usuario, 10 Gemas de Clan, 3 Gemas de BliBla, 10.000 lingotes de hierro, 10.000 lingotes de plata, 10.000 lingotes de oro, 10.000 ovillos de Lana de Oveja, 10.000 ovillos de lana de cabra, 10.000 ovillos de lana de llama, 10.000 maderas, 10.000 chalas, Sacrificio al Dios Cypher en el cementerio',
            ventajas: [
              'Poder tener hasta 20 (Veinte) miembros en un clan',
              'Poder elegir una meditación especial para los miembros del clan de nivel mayor a 50',
              'La experiencia y extracción de recursos (leña, minerales, peces, etc) se multiplica para todos los miembros del clan dependiendo la cantidad de castillos que posean: 1 Castillo: exp y recursos x1.1, 2 Castillos: exp y recursos x1.2, 3 Castillos: exp y recursos x1.3, 4 Castillos: exp y recursos x1.5'
            ]
          }
        ]
      },
      notaFinal: 'No es necesario tener conquistados él/los castillos para trabajar en sus minas, solamente él clan deberá ser nivel 3 o superior para poder trabajar en ellas.'
    }
  },
  {
    id: 'atributos',
    title: 'Atributos',
    icon: 'trending-up',
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
  /* {
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
  } */
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