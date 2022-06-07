const productList = [
  {
    id: "1",
    name: "Campera Adidas",
    price: 9999,
    category: "hombre",
    img:'/images/campera_hombre_deportiva.png',
    stock: 15,
    description: "Campera deportiva Tiro X Lego",
  },
  {
    id: "2",
    name: "Zapatillas Forum",
    price: 25999,
    category: "mujer",
    img:'/images/zapatillas_forum_bold.jpg',
    stock: 10,
    description: "Zapatillas Forum Bold",
  },
  {
    id: "3",
    name: "Conjunto de Buzo para Niño",
    price: 9999,
    category: "niños",
    img:'/images/conjunto_buzo_niño.png',
    stock: 20,
    description: "Conjunto Buzo Cuello Redondo",
  },
  {
    id: "4",
    name: "Buzo con capucha River Plate",
    price: 13999,
    category: "hombre",
    img: '/images/buzo_River.png',
    stock: 38,
    description: "Buzo de River Plate con capucha",
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
      resolve(productList.filter(product=>product.category===categoryId));
    }, 2000);
  });
};
export const getProductsAsyncById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList.find(product=>product.id===id));
    }, 2000);
  });
};
