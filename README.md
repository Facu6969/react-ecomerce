# 🛒 Proyecto de E-Commerce con React y Firebase

🌎[E-Commerce](https://react-ecomerce-sigma.vercel.app)

## Descripción del Proyecto

Este proyecto es una aplicación web de comercio electrónico que permite a los usuarios explorar productos, añadirlos a un carrito de compras, ajustar las cantidades y realizar compras. La aplicación utiliza **React** para la interfaz de usuario y **Firebase Firestore** como base de datos para almacenar los productos y los pedidos.

## 🚀 Tecnologías Utilizadas

- [![My Skills](https://skillicons.dev/icons?i=react)]: Utilizado para construir la interfaz de usuario.
- **Firebase Firestore**: Utilizado como base de datos para almacenar productos y pedidos.
- **React Hook Form**: Utilizado para manejar formularios.
- **SweetAlert**: Utilizado para mostrar alertas al usuario.
- **Firebase**: Utilizado para la autenticación y la configuración de la base de datos.
- **Toastify-js**: Utilizado como alerta de producto agregado y producto eliminado.

## 🎯 Funcionalidades Principales

- **Visualización de productos**: Los usuarios pueden explorar una lista de productos disponibles.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ajustar las cantidades y ver el total del carrito.
- **Proceso de compra**: Los usuarios pueden completar una compra proporcionando sus datos y realizando el pedido.
- **Actualización de stock**: Al completar una compra, las cantidades de los productos se actualizan en la base de datos para reflejar el nuevo stock disponible.

## ⚙️ Configuración y Ejecución del Proyecto

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Facu6969/react-ecomerce.git
   cd react-ecomerce

2. Instalar dependencias
    ```bash
    npm install

3. Configurar Firebase

    1. Crear un proyecto en Firebase:

    - Ir a [Firebase Console.]
    - Hacer clic en "Add project" y seguir los pasos para crear un nuevo proyecto.

    2. Configurar Firestore y habilitar la autenticación:

    - En el panel de Firebase, ir a "Firestore Database" y hacer clic en "Create database".
    - Seguir las instrucciones para configurar Firestore.

    3. Obtener el archivo de configuración de Firebase:

    - En el panel de Firebase, ir a "Project settings".
    - En la sección "Your apps", seleccionar "Web" y seguir las instrucciones para registrar tu aplicación.
    - Copiar la configuración de Firebase proporcionada y pegarla en un archivo src/firebase/config.js.

    ```bash
    // src/firebase/config.js
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    export { db };

4. Ejecutar la aplicación

    ```bash
    npm start

📂 Estructura del Proyecto

- Estructura

    ```dash
    /src
        /components
            - Cart.jsx
            - ProductList.jsx
            - Checkout.jsx
            ...
        /context
            - CartContext.jsx
        /hooks
            - useSweetAlert.jsx
        /firebase
            - config.js
        - App.js
        - index.js
        ...
    

🤝 Contribuir

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Fork el repositorio.

2. Crea una nueva rama _(git checkout -b feature/nueva-funcionalidad)_.

3. Realiza tus cambios y commítelos _(git commit -am 'Añadir nueva funcionalidad')_.

4. Sube los cambios a tu repositorio _(git push origin feature/nueva-funcionalidad)_.

5. Abre un Pull Request en GitHub.

Para más detalles sobre cómo crear un pull request, puedes consultar [este artículo de GitHub.](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

🙏 Agradecimientos

Quiero agradecer a mi profesor [_CARPI_](https://github.com/carpicoder) y a los tutores por su ayuda y soporte durante el desarrollo de este proyecto.
También quiero agradecer a mis compañeros por su colaboración y por hacer del proceso de aprendizaje una experiencia Magnifica.

¡Gracias por visitar el proyecto! Espero que disfrutes explorándolo y te animes a contribuir.
