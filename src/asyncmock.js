const productList = [
  {
    id: 1,
    name: "Campera Adidas",
    price: 9999,
    category: "Hombre",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/692292558b6b475eabf6adc60082f322_9366/Campera_deportiva_adidas_Tiro_x_LEGO(r)_Negro_HC9803_01_laydown.jpg",
    stock: 15,
    description: "Campera deportiva Adidas Tiro X Lego",
  },
  {
    id: 2,
    name: "Zapatillas Forum",
    price: 25999,
    category: "Mujer",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f6788435b9a4a9898c7adfe012f27d2_9366/Zapatillas_Forum_Bold_Blanco_GW0590_01_standard.jpg",
    stock: 10,
    description: "Zapatillas Forum Bold",
  },
  {
    id: 3,
    name: "Conjunto Buzo Niño",
    price: 9999,
    category: "Niños",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9bd8e6496e204051aa67addc013e8154_9366/Conjunto_Buzo_Adicolor_Cuello_Redondo_Negro_HB9521_01_laydown.jpg",
    stock: 20,
    description: "Conjunto Buzo Adicolor Cuello Redondo",
  },
  {
    id: 4,
    name: "Buzo River",
    price: 13999,
    category: "Hombre",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/820b527b7ed047eeab95ad7f00ff2b5a_9366/Buzo_con_Capucha_River_Plate_3_Tiras_Cierre_Frontal_Negro_GU9664_21_model.jpg",
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
