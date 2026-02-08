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
      races: [
        { name: 'Humano', image: 'https://fenixao.com.ar/manual/resources/media/Heads/9.png' },
        { name: 'Elfo', image: 'https://fenixao.com.ar/manual/resources/media/Heads/2.png' },
        { name: 'Elfo Oscuro', image: 'https://fenixao.com.ar/manual/resources/media/Heads/3.png' },
        { name: 'Gnomo', image: 'https://fenixao.com.ar/manual/resources/media/Heads/7.png' },
        { name: 'Enano', image: 'https://fenixao.com.ar/manual/resources/media/Heads/4.png' },
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
        },
        {
          name: 'Trabajador',
          description: 'Los trabajadores son fieles servidores capaces de elaborar artesanías con un poder extraordinario, son dedicados exclusivamente a la extracción de materia prima y creación de objetos de gran valor. Son expertos en actividades tales como la pesca, minería, tala, herrería y carpintería. No conocen la hechicería y son torpes en el uso de armas, por lo que harán un daño menor que una clase experta.',
          modifiers: {
            headers: ['Cuerpo a cuerpo', '', 'Proyectiles', '', 'Sin armas', '', 'Defensa', '', ''],
            subHeaders: ['Acierto', 'Daño', 'Acierto', 'Daño', 'Acierto', 'Daño', 'Evasión', 'Escudo', 'Defensa mágica'],
            values: ['0.8', '0.67', '0.7', '0.7', '0.5', '0.4', '0.5', '0.5', '2%']
          },
          pointsPerLevel: {
            headers: ['Punto/Raza', 'Gnomo', 'Elfo', 'Elfo Oscuro', 'Humano', 'Enano', 'Orco'],
            rows: [
              ['Vida', '6 a 7', '8 a 10', '9 a 10', '9 a 11', '9 a 11', '10 a 11'],
              ['Mana', '0', '0', '0', '0', '0', '0'],
              ['Golpe', '2', '2', '2', '2', '2', '2'],
              ['Stamina', '20', '20', '20', '20', '20', '20']
            ]
          },
          abilities: [
            {
              title: 'Tipos de Trabajos',
              description: 'Los trabajos que se pueden realizar son: Pesca, Tala, Botanica, Alquimia, Herreria, Mineria, Esquilación, Sastreria y Carpintería.\n\nPara más información ingrear a la sección de Trabajo.'
            }
          ]
        }
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