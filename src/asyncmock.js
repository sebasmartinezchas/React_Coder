const productList = [
  {
    id: "1",
    name: "Campera Adidas",
    priceStr:'Precio:$ ',
    price: '9999',
    category: "hombre",
    img: "/images/campera_hombre_deportiva.png",
    stock: 15,
    description: "Campera deportiva Tiro X Lego",
    description2:
      "La emoción se vive dentro y fuera de la cancha. Esta divertida versión de la campera Tiro forma parte de la colección creada por LEGO® Group y adidas. Presenta un diseño con bloques de color en el pecho con la textura de los ladrillos de LEGO® y un escudo formado por la silueta de la cabeza de una figurita de la marca LEGO®. Sin importar el esfuerzo que ponés en el juego, el tejido transpirable AEROREADY absorbe el sudor y mantiene la piel cómoda y seca.",
  },
  {
    id: "2",
    name: "Zapatillas Forum",
    priceStr:'Precio:$ ',
    price: '25999',
    category: "mujer",
    img: "/images/zapatillas_forum_bold.jpg",
    stock: 10,
    description: "Zapatillas Forum Bold",
    description2:
      "Las adidas Forum se lanzaron por primera vez en 1984 y rápidamente dominaron el mundo del básquet. Su ADN ganador está de regreso con un nuevo estilo audaz para las calles de hoy. Conservan todos los elementos clásicos, como su diseño en forma de X, la correa ajustable y el exterior de cuero prémium. Pero ahora vienen con una plataforma en la suela que elevan tu look a otro nivel.",
  },
  {
    id: "3",
    name: "Conjunto de Buzo para Niño",
    priceStr:'Precio:$ ',
    price: '9999',
    category: "chicos",
    img: "/images/conjunto_buzo_niño.png",
    stock: 20,
    description: "Conjunto Buzo Cuello Redondo",
    description2:
      "No hay límites para lo que puedan descubrir. Así que vestí a tu peque con estilo con este conjunto adidas de cuello redondo y dejalos descubrir el mundo que les rodea. Su tejido de felpa francesa los mantiene abrigados mientras caminan, trepan y caminan. El círculo de Trifolios coloridos en el frente refleja su actitud divertida.Nuestros productos de algodón apoyan el cultivo de algodón sostenible.",
  },
  {
    id: "4",
    name: "Buzo con capucha River Plate",
    priceStr:'Precio:$ ',
    price: '13999',
    category: "hombre",
    img: "/images/buzo_River.png",
    stock: 38,
    description: "Buzo de River Plate con capucha",
    description2:
      "El estilo de fútbol de River Plate recibe el tratamiento de las 3 Tiras. adidas creó este buzo con capucha para los hinchas leales que nunca dejan de pensar en el club. El tejido de felpa francesa suave y la capucha forrada se encargan de brindar comodidad en todo momento. Un escudo clásico del club bordado en el pecho le pone un toque único.Este producto incorpora material reciclado como parte de nuestro anhelo de ponerle fin a la contaminación por plástico. Al comprar nuestros productos de algodón apoyás un cultivo de algodón más sostenible.",
  },
  {
    id: "5",
    name: "Remera Frozen 2",
    priceStr:'Precio:$ ',
    price: '4999',
    category: "chicos",
    img: "/images/remera_frozen.png",
    stock: 18,
    description: "Remera Frozen 2 Fans de Disney",
    description2:
      "Si tu pequeña es fan de Elsa, el personaje de Disney, esta remera adidas para niños se convertirá en una de sus favoritas. Confeccionada en tejido suave, presenta un diseño con cuello ancho y las 3 Tiras en las mangas que le imprimen un toque deportivo.",
  },
  {
    id: "6",
    name: "Botines Predator Edge.3",
    priceStr:'Precio:$ ',
    price: '18999',
    category: "hombre",
    img: "/images/botines_predator.png",
    stock: 8,
    description: "Botines Predator Edge.3",
    description2:
      "Amague. Fuerza. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Viví el deporte rey desde un nuevo ángulo con los adidas Predator. Estos botines te ayudan a dominar la pelota con el exterior Control Zone que incorpora zonas estratégicas con un estampado que mejora el agarre. En la parte inferior, una llamativa suela te mantiene en control durante el terreno firme. El cuello elástico de dos piezas en la parte superior ofrece un ajuste de gran sujeción.Hechos parcialmente con contenido reciclado generado a partir de desechos de producción, tales como, recortes de tela y los desechos domésticos postconsumo, para evitar un mayor impacto ambiental al producir contenido virgen",
  },
  {
    id: "7",
    name: "Calzas Running Essentials",
    priceStr:'Precio:$ ',
    price: '9499',
    category: "mujer",
    img: "/images/calzas_running.png",
    stock: 28,
    description: "Calzas Running Essentials 7/8",
    description2:
      "Alcanzá tu mejor marca personal con estas calzas adidas inspiradas en el tigre de agua. El diseño elástico se amolda a tus piernas para un look estilizado y favorecedor e incorpora tecnología de absorción AEROREADY para que puedas concentrarte en cumplir tus objetivos. El bolsillo en la cintura mantiene tus pertenencias seguras mientras completas el circuito en el gimnasio.Hecho con una serie de materiales reciclados y al menos 60% de contenido reciclado, este producto representa solo una de nuestras soluciones para acabar con los residuos plásticos.",
  },
  {
    id: "8",
    name: "Buzo con capucha Essentials",
    priceStr:'Precio:$ ',
    price: '12999',
    category: "mujer",
    img: "/images/buzo_mujer_essentials.png",
    stock: 11,
    description: "Buzo con capucha Essentials",
    description2:
      "Perfecto para después de entrenar. Este buzo con capucha adidas tiene un verdadero look deportivo con las 3 Tiras que van del hombro a la muñeca en ambas mangas. Los bolsillos canguro laterales y el tejido de felpa francesa ofrecen comodidad en todo momento.Este producto está hecho con material reciclado como parte de nuestro anhelo de ponerle fin a la contaminación por plástico.",
  },
];
export const getProductsAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 2000);
  });
};
export const getProductsAsyncByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList.filter((product) => product.category === categoryId));
    }, 2000);
  });
};
export const getProductsAsyncById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList.find((product) => product.id === id));
    }, 2000);
  });
};
