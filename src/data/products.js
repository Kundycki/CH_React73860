const products = [
  {
    id:1,
    name:"Nike Air Max 270",
    description:"zapatillas deportivas con tecnología de amortiguación.",
    price:150,
    image:"/img/airm27.jpeg",
    category:"Zapatillas"
  },
  {
    id:2,
    name:"Adidas Ultraboost 22",
    description:"Zapatillas de running con gran comodidad y soporte.",
    price:147,
    image:"/img/ultrabo.avif",
    category:"Zapatillas"
  },
  {
    id:3,
    name:"Yeezy Boost 700 V2",
    description:"Zapatillas de diseño exclusivo con suela de gran tracción.",
    price:250,
    image:"/img/yeezy7v2.jpeg",
    category:"Zapatillas"
  },
  {
    id: 4,
    name: "Remera Oversize Blanca",
    description: "Remera de algodón orgánico, corte oversize unisex.",
    price: 30,
    image: "/img/remeraoversizeblanca.webp",
    category: "Remeras"
  },
  {
    id: 5,
    name: "Remera Negra Básica",
    description: "Remera básica negra, cómoda y resistente al uso diario.",
    price: 25,
    image: "/img/remeranegrabasica.webp",
    category: "remeras"
  },
  {
    id: 6,
    name: "Pantalón Cargo Verde",
    description: "Pantalón con múltiples bolsillos y ajuste elástico.",
    price: 60,
    image: "/img/cargoverde.webp",
    category: "Pantalones"
  },
  {
    id: 7,
    name: "Jogger Deportivo Gris",
    description: "Pantalón jogger con tela suave y elástica.",
    price: 55,
    image: "/img/jogger.webp",
    category: "Pantalones"
  },
  {
    id: 8,
    name: "Gorra Negra Bordada",
    description: "Gorra de algodón con logo bordado y ajuste trasero.",
    price: 20,
    image: "/img/gorranegra.webp",
    category: "Accesorios"
  },
  {
    id: 9,
    name: "Anteojos retro",
    description: "Anteojos con diseño retro, protección UV400.",
    price: 35,
    image: "/img/gafasretro.webp",
    category: "Accesorios"
  },
  {
    id: 10,
    name: "Riñonera Deportiva",
    description: "Riñonera compacta para uso urbano o deportivo.",
    price: 28,
    image: "/img/rinoneradep.webp",
    category: "Accesorios"
  }
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === Number(productId));
      resolve(product);
    }, 1500);
  });
};

export { getProducts, getProductById };