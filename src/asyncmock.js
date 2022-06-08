const productList = [
  {
    id: "1",
    name: "Campera Adidas",
    price: 9999,
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
    price: 25999,
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
    price: 9999,
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
    price: 13999,
    category: "hombre",
    img: "/images/buzo_River.png",
    stock: 38,
    description: "Buzo de River Plate con capucha",
    description2:
      "El estilo de fútbol de River Plate recibe el tratamiento de las 3 Tiras. adidas creó este buzo con capucha para los hinchas leales que nunca dejan de pensar en el club. El tejido de felpa francesa suave y la capucha forrada se encargan de brindar comodidad en todo momento. Un escudo clásico del club bordado en el pecho le pone un toque único.Este producto incorpora material reciclado como parte de nuestro anhelo de ponerle fin a la contaminación por plástico. Al comprar nuestros productos de algodón apoyás un cultivo de algodón más sostenible.",
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
