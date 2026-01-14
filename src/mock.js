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