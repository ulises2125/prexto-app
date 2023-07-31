# Proyecto de Angular - Gatos e Imágenes Aleatorias

Este proyecto es una aplicación web desarrollada con Angular que utiliza Bootstrap, Material y TypeScript. Consiste en dos módulos principales: uno dedicado a los gatos y otro a mostrar imágenes aleatorias obtenidas de una API. Además, la aplicación permite seleccionar imágenes favoritas de la API para crear un gato utilizando una de las imágenes seleccionadas.

## Funcionalidades principales

- Módulo de Gatos:

  - Permite crear un nuevo gato utilizando una de las imágenes favoritas seleccionadas.
  - Visualización de gatos creados anteriormente.
  - Eliminar gato creado.
  - Editar un gato creado

- Módulo de Imágenes Aleatorias:
  - Muestra imágenes aleatorias obtenidas de la API.
  - Posibilidad de seleccionar imágenes favoritas para utilizar en la creación de gatos.

## Desafíos en el desarrollo del proyecto

Durante el desarrollo de este proyecto, se enfrentaron algunos desafíos interesantes que fueron superados con éxito. Algunos de ellos fueron:

1. Integración con la API de imágenes aleatorias:
   Implementar la comunicación con la API de imágenes aleatorias y gestionar la carga y visualización de las imágenes de manera eficiente.

2. Gestión de imágenes favoritas:
   Desarrollar un sistema para almacenar y administrar las imágenes favoritas seleccionadas por el usuario, asegurando que se mantengan disponibles incluso después de cerrar la aplicación.

3. Creación de gatos personalizados:
   Implementar la lógica necesaria para permitir a los usuarios combinar las imágenes seleccionadas y crear sus propios gatos personalizados.

## Instalación y ejecución

Para probar este proyecto en tu entorno local, sigue los siguientes pasos:

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Angular CLI y Node.js instalados.
3. Ejecuta `npm install` en la raíz del proyecto para instalar las dependencias.
4. Utiliza el comando `ng serve` para compilar y ejecutar la aplicación.
5. Abre tu navegador web en `http://localhost:4200` para ver la aplicación en funcionamiento.

## Variables de entorno

Crear una carpeta llamada environments dentro de la carpeta src, se debera crear un archivo llamado
environment.ts que contendra lo siguiente:
'''
export const environment = {
apiUrl: 'http://localhost:3000',
};
'''
