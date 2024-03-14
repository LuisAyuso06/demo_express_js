// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Iphone 14 Pro Max', descripcion: 'Dispositivo de 1TB', cantidad: 12, precio: 18000, imagen: 'iphone.jpg' },
    { id: 2, nombre: 'Laptop Mac', descripcion: '64gb ram intel i5 10th', cantidad: 8, precio: 25000, imagen: 'laptop.jpg' },
    { id: 3, nombre: 'Mochila Profesional', descripcion: 'Mochila Negra Material resistente', cantidad: 20, precio: 400, imagen: 'mochila.jpg' },
    { id: 4, nombre: 'Camara Nikon Reflex 4T', descripcion: 'Camara Nikon 30mm 4k Video', cantidad: 10, precio: 18500, imagen: 'camara.jpg' },
    { id: 5, nombre: 'Ipad Pro', descripcion: '1TB Pro', cantidad: 15, precio: 16800, imagen: 'ipad.jpg' },
    { id: 6, nombre: 'Mouse Logitech G Pro', descripcion: '40mil Dpi', cantidad: 20, precio: 1000, imagen: 'mouse.jpg' },
    { id: 7, nombre: 'Logitech G Superlight', descripcion: '40mil Dpi', cantidad: 11, precio: 1100, imagen: 'superlight.jpg' },
    { id: 8, nombre: 'Audiculares Logitech G Pro', descripcion: 'Audiculares Gamer Profesionales', cantidad: 6, precio: 2400, imagen: 'audifonos.jpg' },
    { id: 9, nombre: 'Gabinete Gamer Rojo', descripcion: 'Viene con 4 Ventiladores Rojos', cantidad: 40, precio: 900, imagen: 'gabinete.png' }
  ];
  
  function getProductos() {
    return productos;
  }
  
  function getProductoPorId(id) {
    return productos.find(producto => producto.id === parseInt(id));
  }
  
  module.exports = {
    getProductos,
    getProductoPorId
  };
  