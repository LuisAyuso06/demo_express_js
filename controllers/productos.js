// controllers/productos.js
const productos = [
    { id: 1, nombre: 'Iphone 14 Pro Max', descripcion: 'Descripción del Producto 1', cantidad: 12, precio: 18000, imagen: 'iphone.jpg' },
    { id: 2, nombre: 'Laptop Mac', descripcion: 'Descripción del Producto 2', cantidad: 8, precio: 25000, imagen: 'laptop.jpg' },
    { id: 3, nombre: 'Mochila Profesional', descripcion: 'Descripción del Producto 3', cantidad: 20, precio: 400, imagen: 'mochila.jpg' },
    { id: 4, nombre: 'Camara Nikon Reflex 4T', descripcion: 'Descripción del Producto 4', cantidad: 10, precio: 18500, imagen: 'camara.jpg' },
    { id: 5, nombre: 'Ipad Pro', descripcion: 'Descripción del Producto 5', cantidad: 15, precio: 16800, imagen: 'ipad.jpg' },
    { id: 6, nombre: 'Mouse Logitech G Pro', descripcion: 'Descripción del Producto 6', cantidad: 20, precio: 1000, imagen: 'mouse.jpg' },
    { id: 7, nombre: 'Audiculares Logitech G Pro', descripcion: 'Descripción del Producto 7', cantidad: 6, precio: 2400, imagen: 'audifonos.jpg' },
    { id: 8, nombre: 'Audiculares Logitech G Pro', descripcion: 'Descripción del Producto 7', cantidad: 6, precio: 2400, imagen: 'audifonos.jpg' },
    { id: 9, nombre: 'Audiculares Logitech G Pro', descripcion: 'Descripción del Producto 7', cantidad: 6, precio: 2400, imagen: 'audifonos.jpg' },
    { id: 7, nombre: 'Audiculares Logitech G Pro', descripcion: 'Descripción del Producto 7', cantidad: 6, precio: 2400, imagen: 'audifonos.jpg' },
    { id: 7, nombre: 'Audiculares Logitech G Pro', descripcion: 'Descripción del Producto 7', cantidad: 6, precio: 2400, imagen: 'audifonos.jpg' },
    { id: 7, nombre: 'Audiculares Logitech G Pro', descripcion: 'Descripción del Producto 7', cantidad: 6, precio: 2400, imagen: 'audifonos.jpg' }
    
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
  