[🚀Ver el proyecto](https://doplax-random-michi-api.surge.sh)

# Michi Random API

Este proyecto es una aplicación web que muestra una selección de imágenes de gatos aleatorias y permite a los usuarios guardar sus imágenes favoritas. La aplicación consume la API pública The Cat API (https://thecatapi.com/) utilizando la función `fetch` de JavaScript para realizar solicitudes HTTP.

## Características

- Muestra una selección de imágenes de gatos aleatorias usando `fetch` para consumir la API
- Permite a los usuarios guardar sus imágenes favoritas
- Diseño adaptable y responsive

## Cómo ejecutar

1. Clonar el repositorio
2. Abrir el archivo `index.html` en el navegador
3. ¡Disfruta navegando y guardando tus imágenes favoritas de gatos!

## Estructura del código

### main.js

- `loadRandomMichis()`: Función que carga las imágenes aleatorias de gatos utilizando `fetch` para realizar una solicitud a la API de The Cat API.
- `loadFavoritesMichis()`: Función que carga las imágenes favoritas de gatos desde la API utilizando `fetch`.
- `saveFavouriteMichis(michi)`: Función que guarda una imagen de gato como favorita en la API utilizando `fetch`.
- `deleteMichis(michi)`: Función que elimina una imagen de gato de los favoritos en la API utilizando `fetch`.
- `loadMichis()`: Función que llama a las funciones `loadRandomMichis()` y `loadFavoritesMichis()`.
- `window.onload`: Evento que se dispara al cargar la ventana y ejecuta la función `loadMichis()`.

### index.html

Contiene la estructura básica del proyecto y enlaces a los archivos de estilos y JavaScript. Incluye dos secciones principales: una para las imágenes aleatorias y otra para las imágenes favoritas.

### style.css

Archivo con los estilos CSS para la aplicación.

