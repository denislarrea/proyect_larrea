Este proyecto fue creado usando Create React App.

Scripts Disponibles
Dentro del directorio del proyecto, puedes ejecutar:

npm install 
Ejecuta este comando para instalar las librerias necesarias de node_modules

npm start
Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verla en tu navegador.

La página se recargará cuando realices cambios.
También puedes ver cualquier error de lint en la consola.

Para crear la funcionalidad necesaria para un proyecto ecommerce con carrito se crearon varios componentes (en distintas carpetas con su stylo.css). NavBar, Footer, CartContext, CartWidget, Item, ItemList, ItemListContainer, ItemDetailContainer, ItemDetail, ItemCount, LoadingSpinner y CartView, CheckOut.

Navbar (dentro de la NavBar) = Componente que contiene los links para la navegación dentro de la app, el logo y el ícono del carrito.

CartWidget (dentro de la NavBar) = Componente del ícono del carrito de compras.

Footer (dentro de la Footer) = Componente con el diseño del footer.

CartContext (dentro de la carpeta contex) = Componente con toda la programación para mostrar el estado del contenido del carrito de compras.

Item (dentro de la carpeta ItemList) = Componente que se encarga de generar el diseño de los ítems que se muestran en la lista del catálogo.

ItemList (dentro de la carpeta ItemList) = Componente que se encarga de pasarle los parámetros a Item para generar cada unidad en la lista del catálogo

ItemListContainer (dentro de la carpeta ItemListContainer) = Componente con toda la lógica y programación para leer la base de datos y obtener los items.

ItemDetailContainer (dentro de la carpeta ItemDetailConteiner) = Componente con la funcionalidad necesaria para crear el ItemDetail, los detalles del producto.

ItemDetail (dentro de la carpeta ItemDetailConteiner) = Componente con los estilos necesarios para tomar la información que envía ItemDetailContainer.

ItemCount (dentro de la carpeta ItemCount) = Componente para agregar o quitar n productos al carrito desde la sección de detalles del producto.

Carrito (dentro de la carpeta Carrito) = Componente para generar el carrito de compras recibiendo la información que genera CartContext.

CheckOut (dentro de la carpeta CheckOut) = Componente para generar el paso final del proceso de compras, donde el cliente ingresa sus datos y realiza el pago.

Contacto (dentro de la carpeta Contacto)= Componente para realizar alguna consulta al proveedor.


Echo con
[HTML]
[CSS]
[JavaScript]
[ReactJS]
[Firebase]
